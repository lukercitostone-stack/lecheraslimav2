import { App } from "../../src/App";
import { getPageContent } from "../../src/data/pageContent";

const page = getPageContent("/enfermeras-por-horas-lima/");

export default function EnfermerasPorHorasLimaPage() {
  return <App page={page} />;
}
