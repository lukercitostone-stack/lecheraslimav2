import { App } from "../../src/App";
import { getPageContent } from "../../src/data/pageContent";

const page = getPageContent("/cuidado-al-adulto-mayor/");

export default function CuidadoAlAdultoMayorPage() {
  return <App page={page} />;
}
