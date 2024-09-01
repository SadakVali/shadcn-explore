import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex gap-8 flex-col items-center justify-center h-full">
      <h1 className="text-7xl">Exploring the SHADCN Library</h1>
      <Button variant="secondary" size="default" className="active:bg-white">
        Hi World
      </Button>
      <button className="py-3 px-8 bg-gray-900 active:bg-black rounded-2xl">
        Button
      </button>
      <Button variant="sadiq" size="sadiq">
        Custom Button
      </Button>
    </div>
  );
}
