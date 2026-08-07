import { App } from "../../src/App";
import { getPageContent } from "../../src/data/pageContent";

const page = getPageContent("/cuidados-postoperatorios-a-domicilio/");

export default function CuidadosPostoperatoriosADomicilioPage() {
  return <App page={page} />;
}
