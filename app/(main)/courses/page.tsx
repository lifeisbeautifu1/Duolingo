import { List } from "./list";
import courses from "./courses.json";

export default function CoursesPage() {
  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <h1 className="text-2xl font-bold text-neutral-700">
        Language Courses
      </h1>
      <List courses={courses} activeCourseId={1} />
    </div>
  );
}
