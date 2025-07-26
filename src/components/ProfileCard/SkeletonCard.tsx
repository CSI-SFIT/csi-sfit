const SkeletonCard = () => {
  return (
    <div className="w-full max-w-[300px] h-[400px] bg-white/10 rounded-2xl p-4 animate-pulse shadow-lg">
      <div className="w-24 h-24 rounded-full bg-white/20 mx-auto mb-4" />
      <div className="h-4 bg-white/20 rounded w-3/4 mx-auto mb-2" />
      <div className="h-3 bg-white/10 rounded w-1/2 mx-auto mb-4" />
      <div className="h-[150px] bg-white/5 rounded-lg mb-4" />
      <div className="flex justify-center gap-4">
        <div className="w-6 h-6 bg-white/20 rounded-full" />
        <div className="w-6 h-6 bg-white/20 rounded-full" />
      </div>
    </div>
  );
};

export default SkeletonCard;