import Nav from "@/components/Nav";
import Widgets from "@/components/Widgets";

export default function Page() {
  return (
    <div className="flex w-full">
      <Widgets />
      <main className="flex-1 h-screen overflow-y-auto">
        <Nav />
      </main>
    </div>
  );
}
