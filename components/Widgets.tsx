import Projects from "./Projects";
import Team from "./Team";
import TimeTracker from "./TimeTracker";
export default function Widgets() {
  return (
    <div className="flex flex-col px-4 py-6 h-screen overflow-y-auto w-[270px] border-r border-gray-200/50 shadow-sm/5">
      <Projects />
      <Team />
      <TimeTracker />
    </div>
  );
}
