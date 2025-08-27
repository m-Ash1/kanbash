import { projects } from "@/lib/data";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

export default function Projects() {
  return (
    <div className="projects-widget mb-10">
      <h2 className="font-bold text-xl">Projects</h2>
      <ul className="mt-4">
        {projects.map((project, idx) => (
          <li
            className="px-3 py-3 text-sm mb-1 font-semibold hover:bg-accent/90 hover:text-white text-textColorLight rounded-md border border-gray-200/50 shadow-sm flex justify-between items-center transition-all duration-200"
            key={idx}
          >
            {project}
            <MoreVertOutlinedIcon className="cursor-pointer" />
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <button className="text-sm font-semibold text-textColorLight border-dashed border border-textColorLight w-full rounded-lg py-2 hover:bg-accent/90 hover:text-white transition-all duration-200 cursor-pointer">
          + Add Project
        </button>
      </div>
    </div>
  );
}
