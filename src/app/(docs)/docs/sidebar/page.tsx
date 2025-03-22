import { PageTemplate } from "../../components/page-template"
import PreviewCodeCard from "../../components/preview-code-card";
import ExpandSidebar from "./ExpandSidebar";

const page = ()=> {
  return(
    <div>
      <PageTemplate title="Sidebar">
        <PreviewCodeCard path="src/app/(docs)/docs/sidebar/ExpandSidebar.tsx">
          <ExpandSidebar/>
        </PreviewCodeCard>
      </PageTemplate>
    </div>
  )
}

export default page;