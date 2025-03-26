import { PageTemplate } from "../../components/page-template";
import PreviewCodeCard from "../../components/preview-code-card";
import VideoBgCard from "./VideoBgCard";

const page = () => {
  return (
    <div>
      <PageTemplate title="Video Bg Card">
        <PreviewCodeCard path="src/app/(docs)/docs/cards/VideoBgCard.tsx">
          <VideoBgCard />
        </PreviewCodeCard>
      </PageTemplate>
    </div>
  );
};

export default page;
