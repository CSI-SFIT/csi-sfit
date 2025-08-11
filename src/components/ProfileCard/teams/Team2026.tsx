import React, { Suspense } from "react";
import ProfileCard from "../ProfileCard";
import SkeletonCard from "../SkeletonCard";
import man1 from "../../../../assets/man1.webp";

const NewTeamsRow = React.lazy(() => import("../NewTeamsRow"));

const Team2026 = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-[5rem]">
      <Suspense
        fallback={
          <div className="text-white text-center">Loading members...</div>
        }
      >
        <NewTeamsRow department="Faculty" />
      </Suspense>

      {/* 2x2 Grid for CORE only */}
      <div>
        <div className="flex items-center justify-center mb-8 gap-4">
          <div className="w-32 h-1 bg-gradient-to-r from-[#40E0D0] to-[#1A5AFF] animate-gradient-slow bg-[length:400%_100%] rounded-full" />

          <p className="text-3xl font-semibold bg-gradient-to-r from-[#40E0D0] to-[#1A5AFF] bg-clip-text text-transparent whitespace-nowrap">
            Core
          </p>

          <div className="w-32 h-1 bg-gradient-to-r from-[#40E0D0] to-[#1A5AFF] animate-gradient-slow-reverse bg-[length:400%_100%] rounded-full" />
        </div>

        <Suspense
          fallback={
            <div className="text-white text-center">Loading members...</div>
          }
        >
          <div className="flex justify-center w-full px-4">
            <div
              className={`flex flex-wrap justify-center gap-8 max-w-screen-xl`}
            >
              <Suspense fallback={<SkeletonCard />}>
                <div
                  className={
                    "w-full sm:w-[calc(50%-20px)] lg:w-[calc(33.333%-27px)]"
                  }
                >
                  <ProfileCard
                    avatarUrl={man1}
                    name="Shahiil Shet"
                    title="Chairperson"
                    handle="Shahiil"
                  />
                </div>
              </Suspense>
              <Suspense fallback={<SkeletonCard />}>
                <div
                  className={
                    "w-full sm:w-[calc(50%-20px)] lg:w-[calc(33.333%-27px)]"
                  }
                >
                  <ProfileCard
                    avatarUrl={man1}
                    name="Sanika Bane"
                    title="Vice Chairperson"
                    handle="Sanika"
                  />
                </div>
              </Suspense>
              <div className="w-full h-0 m-0 p-0"></div>
              {/* <div className="basis-full"></div> */}
              {/* <br /> */}
              <Suspense fallback={<SkeletonCard />}>
                <div
                  className={
                    "w-full sm:w-[calc(50%-20px)] lg:w-[calc(33.333%-27px)]"
                  }
                >
                  <ProfileCard
                    avatarUrl={man1}
                    name="Aryan Brahmane"
                    title="Treasurer"
                    handle="Aryan"
                  />
                </div>
              </Suspense>
              <Suspense fallback={<SkeletonCard />}>
                <div
                  className={
                    "w-full sm:w-[calc(50%-20px)] lg:w-[calc(33.333%-27px)]"
                  }
                >
                  <ProfileCard
                    avatarUrl={man1}
                    name="Kathleen Monis"
                    title="General Secretary"
                    handle="Kathleen"
                  />
                </div>
              </Suspense>
            </div>
          </div>
        </Suspense>
      </div>

      <Suspense
        fallback={
          <div className="text-white text-center">Loading members...</div>
        }
      >
        <NewTeamsRow department="Tech Team" />
      </Suspense>
      <Suspense
        fallback={
          <div className="text-white text-center">Loading members...</div>
        }
      >
        <NewTeamsRow department="Creative Team" />
      </Suspense>
      <Suspense
        fallback={
          <div className="text-white text-center">Loading members...</div>
        }
      >
        <NewTeamsRow department="PR Team" />
      </Suspense>
      <Suspense
        fallback={
          <div className="text-white text-center">Loading members...</div>
        }
      >
        <NewTeamsRow department="Marketing Team" />
      </Suspense>
      <Suspense
        fallback={
          <div className="text-white text-center">Loading members...</div>
        }
      >
        <NewTeamsRow department="Multimedia Team" />
      </Suspense>
    </div>
  );
};

export default Team2026;
