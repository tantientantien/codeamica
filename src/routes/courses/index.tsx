import { createFileRoute } from "@tanstack/react-router";
import TrendingSection from "../../components/courses/TrendingSection";
import LookAround from "../../components/courses/LookAround";

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
