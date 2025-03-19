import { PageTemplate } from "../../components/page-template"
import PreviewCodeCard from "../../components/preview-code-card"
import PortfolioHero from "./portfolioHero"

const page = ()=> {
  return(
    <PageTemplate>
      <PreviewCodeCard path="src/app/(docs)/docs/herosections/portfolioHero.tsx">
        <PortfolioHero/>
      </PreviewCodeCard>
    </PageTemplate>
  )
}

export default page;

