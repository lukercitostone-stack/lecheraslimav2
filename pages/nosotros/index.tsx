import { App } from "../../src/App";
import { getPageContent } from "../../src/data/pageContent";

const page = getPageContent("/nosotros/");

export default function NosotrosPage() {
  return <App page={page} />;
}
