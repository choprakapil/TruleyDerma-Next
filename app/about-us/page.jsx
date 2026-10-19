import { pagesContent } from "../../data/siteContent";
import AboutUsClient from "../../components/about/AboutUsClient";

export const metadata = {
  title: pagesContent.about.meta.title,
  description: pagesContent.about.meta.description,
};

export default function AboutUsPage() {
  return <AboutUsClient />;
}
