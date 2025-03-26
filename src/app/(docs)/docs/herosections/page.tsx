import { PageTemplate } from "../../components/page-template";
import PreviewCodeCard from "../../components/preview-code-card";
import HeroPortolio from "./Heroportfolio";
import PortfolioHero from "./portfolioHero";

const page = () => {
  return (
    <>
      <div>
        <PageTemplate>
          <PreviewCodeCard path="src/app/(docs)/docs/herosections/portfolioHero.tsx">
            <PortfolioHero />
          </PreviewCodeCard>
        </PageTemplate>
      </div>
      <div>
        <PageTemplate>
          <PreviewCodeCard path="src/app/(docs)/docs/herosections/Heroportfolio.tsx">
            <HeroPortolio />
          </PreviewCodeCard>
        </PageTemplate>
      </div>
    </>
  );
};

export default page;
