import { PageTemplate } from "../../components/page-template";
import PreviewCodeCard from "../../components/preview-code-card";
import SwipeDock from "./SwipeDock";
import SwipeDockContact from "./SwipeDockContact";

const page = () => {
  return (
    <>
      <div>
        <PageTemplate title="Swipe Navigation Dock Menu" className="mt-1">
          <PreviewCodeCard path="src/app/(docs)/docs/dockmenus/SwipeDock.tsx">
            <SwipeDock />
          </PreviewCodeCard>
        </PageTemplate>
      </div>
      {/* swipe dock new improved version */}
      <div>
        <PageTemplate title="Motion Trigger Dock Navigation" className="mt-4">
          <PreviewCodeCard path="src/app/(docs)/docs/dockmenus/SwipeDockContact.tsx">
            <SwipeDockContact />
          </PreviewCodeCard>
        </PageTemplate>
      </div>
    </>
  );
};

export default page;
