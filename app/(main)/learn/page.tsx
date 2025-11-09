import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import { Header } from "./header";

export default function LearnPage() {
  return (
    <div className="flex gap-12 px-6">
      <FeedWrapper>
        <Header title="Spanish" />
      </FeedWrapper>
      <StickyWrapper>
        <UserProgress
          activeCourse={{
            title: "Spanish",
            imageSrc: "/es.svg",
          }}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
    </div>
  );
}
