import React, { Suspense } from "react";

const CardsSection = React.lazy(() => import("../CardsSection"));

const Team2026 = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-[5rem]">
      <Suspense
        fallback={
          <div className="text-white text-center">Loading members...</div>
        }
      >
        <CardsSection department="Faculty" />
      </Suspense>
      <Suspense
        fallback={
          <div className="text-white text-center">Loading members...</div>
        }
      >
        <CardsSection department="Core" />
      </Suspense>
      <Suspense
        fallback={
          <div className="text-white text-center">Loading members...</div>
        }
      >
        <CardsSection department="Tech Team" />
      </Suspense>
      <Suspense
        fallback={
          <div className="text-white text-center">Loading members...</div>
        }
      >
        <CardsSection department="Creative Team" />
      </Suspense>
      <Suspense
        fallback={
          <div className="text-white text-center">Loading members...</div>
        }
      >
        <CardsSection department="PR Team" />
      </Suspense>
      <Suspense
        fallback={
          <div className="text-white text-center">Loading members...</div>
        }
      >
        <CardsSection department="Marketing Team" />
      </Suspense>
      <Suspense
        fallback={
          <div className="text-white text-center">Loading members...</div>
        }
      >
        <CardsSection department="Multimedia Team" />
      </Suspense>
    </div>
  );
};

export default Team2026;