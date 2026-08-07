import { App } from "../../src/App";
import { getPageContent } from "../../src/data/pageContent";

const page = getPageContent("/contacto/");

export default function ContactoPage() {
  return <App page={page} />;
}
