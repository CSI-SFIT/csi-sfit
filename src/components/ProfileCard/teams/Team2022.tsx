import ChromaGrid from "../ChromaGrid";
import data from "../data/data2022";
import TeamRow from "../TeamRow";

const Team2022 = () => {
  return (
    <div className="flex flex-col gap-[4rem]">
      <TeamRow department="Core">
        <ChromaGrid
          items={data.filter((profile) => profile.category == "Core")}
        />
      </TeamRow>

      <TeamRow department="Faculty">
        <ChromaGrid
          items={data.filter((profile) => profile.category == "Faculty")}
        />
      </TeamRow>

      <TeamRow department="Tech Team">
        <ChromaGrid
          items={data.filter((profile) => profile.category == "Tech Team")}
        />
      </TeamRow>

      <TeamRow department="Creative Team">
        <ChromaGrid
          items={data.filter((profile) => profile.category == "Creative Team")}
        />
      </TeamRow>

      <TeamRow department="PR Team">
        <ChromaGrid
          items={data.filter((profile) => profile.category == "PR Team")}
        />
      </TeamRow>
    </div>
  );
};

export default Team2022;