import ChromaGrid from "../ChromaGrid";
import data from "../data/data2025";
import OldTeamsRow from "../OldTeamsRow";

const Team2022 = () => {
  return (
    <div className="flex flex-col gap-[4rem]">
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

      <OldTeamsRow department="Marketing Team">
        <ChromaGrid
          items={data.filter((profile) => profile.category == "Marketing Team")}
        />
      </OldTeamsRow>

      <OldTeamsRow department="Multimedia Team">
        <ChromaGrid
          items={data.filter((profile) => profile.category == "Multimedia Team")}
        />
      </OldTeamsRow>
    </div>
  );
};

export default Team2022;