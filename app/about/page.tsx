import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <h1 className="font-bold text-xl">About page</h1>
      <Link href="/" className="text-m text-blue-400">
        Home page
      </Link>
    </div>
  );
}
