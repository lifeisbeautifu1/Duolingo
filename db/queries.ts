import { cache } from "react";
import { eq } from "drizzle-orm";
import { auth } from "@clerk/nextjs/server";
import { userProgress, courses, units } from "@/db/schema";
import { db } from "./index";

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

export const getUnits = cache(async () => {
  const userProgress = await getUserProgress();

  if (!userProgress?.activeCourseId) {
    return [];
  }

  const unitsData = await db.query.units.findMany({
    where: eq(units.courseId, userProgress.activeCourseId),
    with: {
      lessons: {
        with: {
          challenges: {
            with: {
              challengeOptions: true,
              challengeProgress: true,
            },
          },
        },
      },
    },
  });

  const normalizedData = unitsData.map((unit) => {
    const lessonsWithCompeletedStatus = unit.lessons.map(
      (lesson) => {
        const allCompletedChallenges =
          lesson.challenges.map((challenge) => {
            return (
              challenge.challengeProgress &&
              challenge.challengeProgress.length > 0 &&
              challenge.challengeProgress.every(
                (progress) => progress.completed
              )
            );
          });

        return {
          ...lesson,
          completed: allCompletedChallenges,
        };
      }
    );

    return {
      ...unit,
      lessons: lessonsWithCompeletedStatus,
    };
  });

  return normalizedData;
});
