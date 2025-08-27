import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Image from "next/image";
export default function Nav() {
  return (
    <div className="flex justify-between p-4 items-center">
      <div className="relative">
        <SearchOutlinedIcon className="absolute left-2 top-2 text-gray-400 opacity-70" />
        <input
          className="outline-none rounded-md p-2 bg-[#f2f2f2] pl-10 text-sm text-textColorLight "
          placeholder="Search"
          type="text"
        />
      </div>
      <div className="flex space-x-4 items-center gap-1">
        <SettingsOutlinedIcon className="text-[#7d8691]  hover:text-gray-800  cursor-pointer" />
        <div className="relative">
          <div className="absolute right-0 top-0 bg-[#ef4533] rounded-full w-2 h-2"></div>
          <NotificationsNoneOutlinedIcon className="text-[#7d8691] hover:text-gray-800  cursor-pointer" />
        </div>
        <div className="flex gap-3 items-center">
          <Image
            src="/pfp/1.jpg"
            className="rounded-full overflow-hidden"
            alt="profile picture"
            width={40}
            height={40}
          />
          <div className="font-bold text-textColorLight">Mahmoud Ashraf</div>
        </div>
      </div>
    </div>
  );
}
