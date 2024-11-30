import { CourseDetail } from "../../routes/courses/$courseId";

export default function CourseBanner({ course }: { course: CourseDetail }) {
  return (
    <div className="w-infoSection absolute bottom-0 flex translate-y-1/2 items-center justify-between border border-black bg-white px-8 py-6 text-black">
      <div className="flex gap-2">
        <img
          src="/assets/skill-level.svg"
          alt="skill-level-icon"
          width={50}
          height={50}
        />
        <div>
          <span className="leading-card">Skill level</span>
          <p className="text-2xl font-bold">{course.level}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <img
          src="/assets/complete-time.svg"
          alt="complete-time-icon"
          width={50}
          height={50}
        />
        <div>
          <span className="leading-card">Time to complete</span>
          <p className="text-2xl font-bold">{course.duration}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <img
          src="/assets/requirement.svg"
          alt="requirement-icon"
          width={50}
          height={50}
        />
        <div>
          <span className="leading-card">Prequisites</span>
          <p className="text-2xl font-bold">
            {course.hasPrequisites ? "Prequisites here" : "None"}
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <img
          src="/assets/requirement.svg"
          alt="requirement-icon"
          width={50}
          height={50}
        />
        <div>
          <span className="leading-card">Something else</span>
          <p className="text-2xl font-bold">I dunno</p>
        </div>
      </div>
    </div>
  );
}