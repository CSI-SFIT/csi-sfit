import React, { type ReactNode, Suspense } from "react";

interface OldTeamsRowProps {
  children: ReactNode;
  department: string;
}

const OldTeamsRow: React.FC<OldTeamsRowProps> = ({ children, department }) => {
  return (
    <div className="">
      <div className="flex items-center justify-center mb-8 gap-4">
        <div className="w-32 h-1 bg-gradient-to-r from-[#40E0D0] to-[#1A5AFF] animate-gradient-slow bg-[length:400%_100%] rounded-full" />

        <p className="text-3xl font-semibold bg-gradient-to-r from-[#40E0D0] to-[#1A5AFF] bg-clip-text text-transparent whitespace-nowrap">
          {department}
        </p>

        <div className="w-32 h-1 bg-gradient-to-r from-[#40E0D0] to-[#1A5AFF] animate-gradient-slow-reverse bg-[length:400%_100%] rounded-full" />
      </div>
      <Suspense
        fallback={
          <div className="text-white text-center">Loading members...</div>
        }
      >
        {children}
      </Suspense>
    </div>
  );
};

export default OldTeamsRow;
