import Link from "next/link";
import Image from "next/image";
import { courses } from "@/db/schema";
import { Button } from "@/components/ui/button";

type UserProgressProps = {
  activeCourse: typeof courses.$inferSelect;
  points: number;
  hearts: number;
};

export const UserProgress = ({
  activeCourse,
  hearts,
  points,
}: UserProgressProps) => {
  return (
    <div className="flex items-center justify-between gap-x-2 w-full">
      <Link href="/courses">
        <Button variant="ghost">
          <Image
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
            className="rounded-md border"
            width={32}
            height={32}
          />
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-orange-500">
          <Image
            src="/points.svg"
            alt="Points"
            width={28}
            height={28}
            className="mr-2"
          />
          {points}
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-rose-500">
          <Image
            src="/heart.svg"
            alt="Hearts"
            width={22}
            height={22}
            className="mr-2"
          />
          {hearts}
        </Button>
      </Link>
    </div>
  );
};
