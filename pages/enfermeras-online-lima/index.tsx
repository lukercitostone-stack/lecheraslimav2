import { App } from "../../src/App";
import { getPageContent } from "../../src/data/pageContent";

const page = getPageContent("/enfermeras-online-lima/");

export default function EnfermerasOnlineLimaPage() {
  return <App page={page} />;
}
