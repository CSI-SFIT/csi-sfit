import React, { Suspense } from "react";
import data from "./data";
import "./Card.css";
const Card = React.lazy(() => import("./Card"));
import SkeletonCard from "./SkeletonCard";

const CardsSection = ({ department }: { department: string }) => {
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
        <div className="flex flex-wrap justify-center gap-10 max-w-screen-xl">
          {filteredData.map((profile, index) => (
            <Suspense key={index} fallback={<SkeletonCard />}>
              <div className="w-full sm:w-[calc(50%-20px)] lg:w-[calc(33.333%-27px)]">
                {" "}
                <Card
                  about="Lorem ipsum dolor sit amet consectetur..."
                  {...profile}
                />
              </div>
            </Suspense>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsSection;
