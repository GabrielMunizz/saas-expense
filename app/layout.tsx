import type { Metadata } from "next";
import { Mulish, Raleway } from "next/font/google";
import { Toaster } from "sonner";

import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
  display: "swap",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nummus - Controle Financeiro",
  description: "Plataforma para controle financeiro",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mulish.className} ${raleway.className} dark antialiased`}
      >
        {children}
        <Toaster richColors closeButton />
      </body>
    </html>
  );
}
