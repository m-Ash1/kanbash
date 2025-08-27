import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import HomeMaxOutlinedIcon from "@mui/icons-material/HomeMaxOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Image from "next/image";
import Link from "next/link";
function Sidebar() {
  return (
    <div className="flex flex-col gap-4 h-screen w-20 border-r border-gray-200/50 shadow-sm/5 p-4">
      <div className="bg-accent p-1 rounded-2xl">
        <Image src="/logoVariation.png" alt="Logo" width={48} height={48} />
      </div>
      <ul className="flex flex-col gap-8 mt-10  justify-center items-center cursor-pointer">
        <li className="hover:scale-110 transition-all duration-200 ease-in-out">
          <Link href="/">
            <HomeMaxOutlinedIcon className="text-textColor" />
          </Link>
        </li>
        <li className="hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer">
          <Link href="/timer">
            <AccessTimeOutlinedIcon className="text-textColor" />
          </Link>
        </li>
        <li className="hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer">
          <Link href="/">
            <CalendarMonthOutlinedIcon className="text-textColor" />
          </Link>
        </li>
      </ul>
      <div className="hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer mt-auto flex justify-center items-center">
        <Link href="/">
          <LogoutOutlinedIcon className="text-textColor" />
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
