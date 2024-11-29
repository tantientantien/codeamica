import { createFileRoute } from "@tanstack/react-router";
import TrendingSection from "../../components/TrendingSection";
import LookAround from "../../components/LookAround";

export const Route = createFileRoute("/courses/")({
  component: Courses,
});

function Courses() {
  return (
    <>
      <TrendingSection />
      <LookAround />
    </>
  );
}
