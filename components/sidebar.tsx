import Link from "next/link";
import Image from "next/image";
import {
  ClerkLoading,
  ClerkLoaded,
  UserButton,
} from "@clerk/nextjs";
import { Loader } from "@/components/loader";
import { cn } from "@/lib/utils";
import { SidebarItem } from "@/components/sidebar-item";

type SidebarProps = {
  className?: string;
};

export const Sidebar = ({ className }: SidebarProps) => {
  return (
    <aside
      className={cn(
        "flex flex-col left-0 top-0 px-4 border-r-2 lg:w-64 h-full lg:fixed",
        className
      )}
    >
      <Link
        href="/learn"
        className="flex items-center pt-8 pl-4 pb-7 gap-x-3"
      >
        <Image
          alt="Lingo"
          src="/mascot.svg"
          height={40}
          width={40}
        />
        <span className="text-2xl font-extrabold text-green-600 tracking-wide">
          Lingo
        </span>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem
          label="Learn"
          href="/learn"
          iconSrc="/learn.svg"
        />
        <SidebarItem
          label="Leaderboard"
          href="/leaderboard"
          iconSrc="/leaderboard.svg"
        />
        <SidebarItem
          label="Quests"
          href="/quests"
          iconSrc="/quests.svg"
        />
        <SidebarItem
          label="Shop"
          href="/shop"
          iconSrc="/shop.svg"
        />
      </div>
      <div className="pt-4">
        <ClerkLoading>
          <Loader />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton />
        </ClerkLoaded>
      </div>
    </aside>
  );
};
