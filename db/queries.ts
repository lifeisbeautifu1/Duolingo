import { cache } from "react";
import { eq } from "drizzle-orm";
import { auth } from "@clerk/nextjs/server";
import { db } from "./index";
import { userProgress, courses } from "@/db/schema";

export const getUserProgress = cache(async () => {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  const userProgressData =
    await db.query.userProgress.findFirst({
      where: eq(userProgress.userId, userId),
      with: {
        activeCourse: true,
      },
    });

  return userProgressData;
});

export const getCourses = cache(async () => {
  const courses = await db.query.courses.findMany();

  return courses;
});

export const getCourseById = cache(
  async (courseId: number) => {
    const course = await db.query.courses.findFirst({
      where: eq(courses.id, courseId),
    });

    return course;
  }
);
