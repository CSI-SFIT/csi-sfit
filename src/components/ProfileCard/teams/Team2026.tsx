import React, { Suspense } from "react";
import ProfileCard from "../ProfileCard";
import SkeletonCard from "../SkeletonCard";
import Shahil from "/assets/team2026/Core/Shahil.webp";
import Sanika from "/assets/team2026/Core/Sanika.webp";
import Aryan from "/assets/team2026/Core/Aryan.webp";
import Kathleen from "/assets/team2026/Core/Kathleen.webp";

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
                    avatarUrl={Shahil}
                    name="Shahiil Shet"
                    title="Chairperson"
                    handle="Shahiil"
                    instagramLink="https://www.instagram.com/obscure_jonin/"
                    linkedinLink="https://www.linkedin.com/in/shahiil-shet-3ba9a7314/"
                    githubLink="https://github.com/shahiil"
                    email="shahiilshet@student.sfit.ac.in"
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
                    avatarUrl={Sanika}
                    name="Sanika Bane"
                    title="Vice Chairperson"
                    handle="Sanika"
                    instagramLink="https://www.instagram.com/sanika_303/"
                    email="sanikabane22@student.sfit.ac.in"
                  />
                </div>
              </Suspense>
              <div className="w-full h-0 m-0 p-0"></div>
              <Suspense fallback={<SkeletonCard />}>
                <div
                  className={
                    "w-full sm:w-[calc(50%-20px)] lg:w-[calc(33.333%-27px)]"
                  }
                >
                  <ProfileCard
                    avatarUrl={Aryan}
                    name="Aryan Brahmane"
                    title="Treasurer"
                    handle="Aryan"
                    instagramLink="https://www.instagram.com/_.aryan._.b._/"
                    linkedinLink="https://www.linkedin.com/in/aryanbrahmane/"
                    email="aryanbrahmane@student.sfit.ac.in"
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
                    avatarUrl={Kathleen}
                    name="Kathleen Monis"
                    title="General Secretary"
                    handle="Kathleen"
                    instagramLink="https://www.instagram.com/kathleen_monis/"
                    linkedinLink="https://www.linkedin.com/in/kathleen-monis-8490aa2b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    email="kathleenmonis28@student.sfit.ac.in"
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
