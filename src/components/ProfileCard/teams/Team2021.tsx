import ChromaGrid from "../ChromaGrid";
import data from "../data/data2021";
import OldTeamsRow from "../OldTeamsRow";

const Team2021 = () => {
  return (
    <div className="flex flex-col gap-[3rem]">
      <OldTeamsRow department="Faculty">
        <ChromaGrid
          items={data.filter((profile) => profile.category == "Faculty")}
        />
      </OldTeamsRow>

      <OldTeamsRow department="Core">
        <ChromaGrid
          items={data.filter((profile) => profile.category == "Core")}
        />
      </OldTeamsRow>

      <OldTeamsRow department="Tech Team">
        <ChromaGrid
          items={data.filter((profile) => profile.category == "Tech Team")}
        />
      </OldTeamsRow>

      <OldTeamsRow department="Creative Team">
        <ChromaGrid
          items={data.filter((profile) => profile.category == "Creative Team")}
        />
      </OldTeamsRow>

      <OldTeamsRow department="PR Team">
        <ChromaGrid
          items={data.filter((profile) => profile.category == "PR Team")}
        />
      </OldTeamsRow>

      <OldTeamsRow department="Photographer">
        <ChromaGrid
          items={data.filter((profile) => profile.category == "Photographer")}
        />
      </OldTeamsRow>
    </div>
  );
};

export default Team2021;
