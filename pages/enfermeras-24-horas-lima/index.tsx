import { App } from "../../src/App";
import { getPageContent } from "../../src/data/pageContent";

const page = getPageContent("/enfermeras-24-horas-lima/");

export default function Enfermeras24HorasLimaPage() {
  return <App page={page} />;
}
