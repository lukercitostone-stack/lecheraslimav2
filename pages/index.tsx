import { App } from "../src/App";
import { getPageContent } from "../src/data/pageContent";

const page = getPageContent("/");

export default function HomePage() {
  return <App page={page} />;
}
