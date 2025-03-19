import { PageTemplate } from "../../components/page-template";
import PreviewCodeCard from "../../components/preview-code-card";
import AnalogClock from "./AnalogClock";

const page = ()=> {
  return(
    <div>
      <PageTemplate>
        <PreviewCodeCard path="src/app/(docs)/docs/mix/AnalogClock.tsx">
          <AnalogClock/>
        </PreviewCodeCard>
      </PageTemplate>
    </div>
  )
}

export default page;