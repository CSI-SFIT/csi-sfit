import React, { Suspense } from "react";
import data from "./data/data2026";
import man1 from "../../../assets/man1.webp";
const ProfileCard = React.lazy(() => import("./ProfileCard"));
import SkeletonCard from "./SkeletonCard";

const NewTeamsRow = ({ department }: { department: string }) => {
  const filteredData = data.filter((member) => member.category === department);

  return (
    <div>
      <div className="flex items-center justify-center mb-8 gap-4">
        <div className="w-32 h-1 bg-gradient-to-r from-[#40E0D0] to-[#1A5AFF] animate-gradient-slow bg-[length:400%_100%] rounded-full" />

        <p className="text-3xl font-semibold bg-gradient-to-r from-[#40E0D0] to-[#1A5AFF] bg-clip-text text-transparent whitespace-nowrap">
          {department}
        </p>

        <div className="w-32 h-1 bg-gradient-to-r from-[#40E0D0] to-[#1A5AFF] animate-gradient-slow-reverse bg-[length:400%_100%] rounded-full" />
      </div>

      <div className="flex justify-center w-full px-4">
        <div
          className={`flex flex-wrap justify-center gap-10 max-w-screen-xl ${
            filteredData.length === 1 ? "justify-center" : ""
          }`}
        >
          {filteredData.map((profile, index) => (
            <Suspense key={index} fallback={<SkeletonCard />}>
              <div
                className={`
                ${
                  filteredData.length === 2
                    ? "w-full max-w-sm mx-auto flex justify-center"
                    : "w-full sm:w-[calc(50%-20px)] lg:w-[calc(33.333%-27px)]"
                }
              `}
              >
                <ProfileCard
                  avatarUrl={man1}
                  name={profile.name}
                  enableTilt={false}
                  title={profile.title}
                  handle={profile.name.split(" ")[0]}
                  showUserInfo={true}
                  linkedinLink={profile.linkedinLink}
                  instagramLink={profile.instagramLink}
                />
              </div>
            </Suspense>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewTeamsRow;