import { App } from "../../../src/App";
import { getPageContent } from "../../../src/data/pageContent";

const page = getPageContent("/blog/cuidados-de-enfermeria-a-domicilio/");

export default function BlogCuidadosDeEnfermeriaADomicilioPage() {
  return <App page={page} />;
}
