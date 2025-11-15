import { Sidebar } from "@/components/sidebar";
import { MobileHeader } from "@/components/mobile-header";
import { Fragment } from "react";
import type { ReactNode } from "react";

type LayoutProps = {
  children?: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <Fragment>
      <MobileHeader />
      <Sidebar className="hidden lg:flex" />
      <main className="lg:pl-64 h-full pt-[50px] lg:pt-0">
        <div className="h-full max-w-[1056px] mx-auto pt-6">
          {children}
        </div>
      </main>
    </Fragment>
  );
}
