import ChromaGrid from "../ChromaGrid";
import data from "../data/data2021";
import TeamRow from "../TeamRow";

const Team2021 = () => {
  return (
    <div className="flex flex-col gap-[3rem]">
      <TeamRow department="Faculty">
        <ChromaGrid
          items={data.filter((profile) => profile.category == "Core")}
        />
      </TeamRow>

      <TeamRow department="Core">
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

      <TeamRow department="Photographer">
        <ChromaGrid
          items={data.filter((profile) => profile.category == "Photographer")}
        />
      </TeamRow>
    </div>
  );
};

export default Team2021;