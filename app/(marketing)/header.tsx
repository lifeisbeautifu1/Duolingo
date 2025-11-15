import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { Loader } from "@/components/loader";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="lg:max-w-5xl mx-auto flex items-center justify-between h-full">
        <Link
          href="/learn"
          className="flex items-center gap-x-3"
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
        <ClerkLoading>
          <Loader />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <Button size="lg" variant="ghost">
                Login
              </Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </header>
  );
};
