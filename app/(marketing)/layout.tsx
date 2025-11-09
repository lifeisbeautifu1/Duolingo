import type { ReactNode } from "react";
import { Header } from "./header";
import { Footer } from "./footer";

type LayoutProps = {
  children?: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>
  );
}
