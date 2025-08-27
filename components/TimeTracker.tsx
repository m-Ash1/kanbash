import MovingOutlinedIcon from "@mui/icons-material/MovingOutlined";
export default function TimeTracker() {
  return (
    <div className="mb-10 ">
      <h2 className="font-bold text-xl">Time Tracker</h2>
      <div className="mt-4 flex flex-col gap-3 shadow-sm border border-gray-200/50 rounded-md p-4">
        <div className="text-[10px] font-semibold  opacity-70 uppercase">
          total hours
        </div>
        <div className="text-xl  font-bold text-[#212541]">23.7 hours</div>
        <div className="flex items-center">
          <MovingOutlinedIcon className="text-green-600" />
          <span className="text-green-600 font-semibold text-sm mx-1">
            2.5%
          </span>
          <span className="text-sm font-semibold">from last week</span>
        </div>
      </div>
    </div>
  );
}
