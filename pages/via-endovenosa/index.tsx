import { App } from "../../src/App";
import { getPageContent } from "../../src/data/pageContent";

const page = getPageContent("/via-endovenosa/");

export default function ViaEndovenosaPage() {
  return <App page={page} />;
}
