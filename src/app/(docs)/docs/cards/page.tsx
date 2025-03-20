import { PageTemplate } from "../../components/page-template"
import PreviewCodeCard from "../../components/preview-code-card";
import HoverChange from "./HoverChange";

const page = ()=> {
  return(
    <div>
      <PageTemplate title="Cards" >
        <PreviewCodeCard path="src/app/(docs)/docs/cards/HoverChange.tsx">
          <HoverChange/>
        </PreviewCodeCard>
      </PageTemplate>
    </div>
  )
}

export default page;