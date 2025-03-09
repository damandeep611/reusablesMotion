import React from "react";
import { GridFeatureDemo } from "./gridfeaturedemo";
import { PageSubTitle, PageTemplate } from "../../components/page-template";
import PreviewCodeCard from "../../components/preview-code-card";

const page = () => {
  return (
    <div>
      <PageTemplate title="Animated Feature Grid Section" className="mt-5">
        <PreviewCodeCard path="src/app/(docs)/docs/gridfeature/gridfeaturedemo.tsx">
          <GridFeatureDemo />
        </PreviewCodeCard>

        <PageSubTitle>Installation</PageSubTitle>
      </PageTemplate>
    </div>
  );
};

export default page;