import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { DefaultSession, getServerSession, NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: User;
  }
}

export type User = {
  id: string;
} & DefaultSession["user"];

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  callbacks: {
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.sub,
          email: token.email,
          name: token.name,
          image: token.picture,
        },
      };
    },

    async jwt({ token, user, profile, account }) {
      if (user) {
        token.sub = user.id;
      }

      if (account && profile) {
        token.picture = profile?.image;
        token.name = profile?.name;
        token.email = profile?.email;
      }
      return token;
    },

    async signIn({ user, account, profile }) {
      try {
        if (account?.provider === "google") {
          const existingAccount = await prisma.account.findFirst({
            where: {
              provider: account.provider,
              providerAccountId: account.providerAccountId,
            },
          });

          if (!existingAccount) {
            const newUser = await prisma.user.create({
              data: {
                email: profile?.email as string,
                name: profile?.name as string,
                profileImage: profile?.image,
              },
            });
            await prisma.account.create({
              data: {
                provider: account.provider,
                type: account.type,
                providerAccountId: account.providerAccountId,
                access_token: account.access_token,
                expires_at: account.expires_at,
                scope: account.scope,
                token_type: account.token_type,
                id_token: account.id_token,
                userId: newUser.id,
              },
            });
          }
        }
        return true;
      } catch (error) {
        console.error("Erro ao criar/atualizar conta no Prisma:", error);
        return false;
      }
    },
  },

  adapter: PrismaAdapter(prisma),

  pages: {
    signIn: "/login",
  },

  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    Credentials({
      credentials: {
        email: { label: "Email" },
        password: { label: "Senha" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        const matchPass = await bcrypt.compare(
          credentials.password,
          user?.password as string,
        );

        if (user && matchPass) {
          return { id: user.id, email: user.email, name: user.name };
        }
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: { params: { scope: "openid profile email" } },
      name: "Google",
      id: "google",
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          profileImage: profile.picture,
        };
      },
    }),
  ],
};

export const getServerAuth = () => getServerSession(authOptions);
