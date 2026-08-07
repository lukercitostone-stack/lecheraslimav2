import { App } from "../../src/App";
import { getPageContent } from "../../src/data/pageContent";

const page = getPageContent("/servicios-2/");

export default function Servicios2Page() {
  return <App page={page} />;
}
