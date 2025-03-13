import { PageSubTitle, PageTemplate } from "../../components/page-template";
import PreviewCodeCard from "../../components/preview-code-card";
import PricingcardReveal from "./PricingcardReveal";

const page = () => {
  return (
    <div>
      <PageTemplate title="Animated Feature Grid Section" className="mt-1">
        <PreviewCodeCard path="src/app/(docs)/docs/pricingreveal/PricingcardReveal.tsx">
          <PricingcardReveal />
        </PreviewCodeCard>

        <PageSubTitle>Installation</PageSubTitle>
      </PageTemplate>
    </div>
  );
};
export default page;
