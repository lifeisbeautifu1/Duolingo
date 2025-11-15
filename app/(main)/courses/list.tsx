"use client";

import { redirect } from "next/navigation";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { courses, userProgress } from "@/db/schema";
import { toast } from "sonner";

import { Card } from "./card";
import { upsertUserProgress } from "@/actions/user-progress";

type ListProps = {
  courses: (typeof courses.$inferSelect)[];
  activeCourseId?: typeof userProgress.$inferSelect.activeCourseId;
};

export const List = ({
  courses,
  activeCourseId,
}: ListProps) => {
  const router = useRouter();

  const [pending, startTransition] = useTransition();

  const onClick = (id: number) => {
    if (pending) return;

    if (id === activeCourseId) {
      return router.push("/learn");
    }

    startTransition(async () => {
      let error = false;

      await upsertUserProgress(id).catch(() => {
        toast.error("Something went wrong");
        error = true;
      });

      if (!error) redirect("/learn");
    });
  };

  return (
    <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
      {courses.map((course) => (
        <Card
          key={course.id}
          id={course.id}
          title={course.title}
          imageSrc={course.imageSrc}
          onClick={onClick}
          disabled={pending}
          active={course.id === activeCourseId}
        />
      ))}
    </div>
  );
};
