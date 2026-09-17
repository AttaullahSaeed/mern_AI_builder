import { Loader2Icon } from "lucide-react";
const Loading = () => {
  return (
    <div
      role="status"
      area-label="Loading"
      className=" h-screen flex justify-center items-center bg-white"
    >
      <Loader2Icon size={26} className="animate-spin text-zinc-950" />
    </div>
  );
};

export default Loading;
