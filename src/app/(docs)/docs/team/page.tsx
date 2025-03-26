import { PageTemplate } from "../../components/page-template";
import PreviewCodeCard from "../../components/preview-code-card";
import BasicTeamSection from "./basicTeam";
import TeamHover from "./TeamHover";
import TeamHoverTwo from "./TeamHoverTwo";

const page = ()=> {
  return(
   <>
    <div>
      <PageTemplate title="Team showcase">
        <PreviewCodeCard path="src/app/(docs)/docs/team/basicTeam.tsx">
          <BasicTeamSection/>
        </PreviewCodeCard>
      </PageTemplate>
    </div>
    <div>
      <PageTemplate title="Team Hover Info">
        <PreviewCodeCard path="src/app/(docs)/docs/team/TeamHover.tsx">
          <TeamHover/>
        </PreviewCodeCard>
      </PageTemplate>
    </div>
    <div>
      <PageTemplate title="Team Hover Info Version 2.0">
        <PreviewCodeCard path="src/app/(docs)/docs/team/TeamHoverTwo.tsx">
          <TeamHoverTwo/>
        </PreviewCodeCard>
      </PageTemplate>
    </div>
   </>
  )
}

export default page;