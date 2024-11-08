import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { DefaultSession, getServerSession, NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

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
        },
      };
    },

    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
  },

  pages: {
    signIn: "/login",
  },

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
  ],
};

export const getServerAuth = () => getServerSession(authOptions);
