import { App } from "../../src/App";
import { getPageContent } from "../../src/data/pageContent";

const page = getPageContent("/inyectables-a-domicilio/");

export default function InyectablesADomicilioPage() {
  return <App page={page} />;
}
