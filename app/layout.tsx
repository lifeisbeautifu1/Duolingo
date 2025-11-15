import { ClerkProvider } from "@clerk/nextjs";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import { Nunito } from "next/font/google";
import "./globals.css";

const fontFamily = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lingo",
  description: "Duolingo clone build as an exercise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`antialiased ${fontFamily.className}`}
        >
          <Toaster />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
