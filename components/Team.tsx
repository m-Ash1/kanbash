import { team } from "@/lib/data";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Image from "next/image";

export default function Team() {
  return (
    <div className="team-widget mb-10">
      <h2 className="font-bold text-xl">Team members</h2>
      <ul className="mt-4">
        {team.map((member, idx) => (
          <li
            className="px-2 py-3 mb-1 font-semibold hover:bg-accent/90 hover:text-white text-[#212541]  rounded-md border border-gray-200/50 shadow-sm flex justify-between items-center transition-all duration-200"
            key={idx}
          >
            <div className="flex items-center gap-2">
              <div className="rounded-full overflow-hidden">
                <Image
                  src={`/pfp/${idx + 1}.jpg`}
                  alt={member}
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <div className="text-sm">{member}</div>
                <div className="text-xs ">
                  <span className="text-green-500 text-sm">●</span> Online
                </div>
              </div>
            </div>
            <KeyboardArrowDownOutlinedIcon className="cursor-pointer" />
          </li>
        ))}
      </ul>
    </div>
  );
}
