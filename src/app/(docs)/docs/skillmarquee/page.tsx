import { PageTemplate } from "../../components/page-template";
import PreviewCodeCard from "../../components/preview-code-card";
import MarqueeEnhance from "./MarqueeEnhance";
import SkillsMarquee from "./SkillsMarquee";


const page = ()=> {
  return(
    <div>
      <PageTemplate title="Skills Marquee">
        <PreviewCodeCard path="src/app/(docs)/docs/skillmarquee/SkillsMarquee.tsx">
          <SkillsMarquee/>
        </PreviewCodeCard>
        <PreviewCodeCard path="src/app/(docs)/docs/skillmarquee/MarqueeEnhance.tsx">
          <MarqueeEnhance/>
        </PreviewCodeCard>
      </PageTemplate>

    </div>
  )
}

export default page;


