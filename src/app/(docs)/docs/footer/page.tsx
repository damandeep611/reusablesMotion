import { PageTemplate } from "../../components/page-template"
import PreviewCodeCard from "../../components/preview-code-card";
import Footerportfolio from "./Footerportfolio";

const page = ()=> {
  return(
    <PageTemplate title="Footer designs">
      <PreviewCodeCard path="src/app/(docs)/docs/footer/Footerportfolio.tsx">
        <Footerportfolio/>
      </PreviewCodeCard>
    </PageTemplate>
  )
}

export default page;