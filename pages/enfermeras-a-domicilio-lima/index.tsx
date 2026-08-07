import { App } from "../../src/App";
import { getPageContent } from "../../src/data/pageContent";

const page = getPageContent("/enfermeras-a-domicilio-lima/");

export default function EnfermerasADomicilioLimaPage() {
  return <App page={page} />;
}
