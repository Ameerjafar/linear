import { ArrowRight } from "lucide-react";

export const AiFeature = () => {
  return (
    <div className = 'pb-10'>
      <button className="flex relative group px-75 space-x-3 text-text-primary">
        <div className="bg-sky-400 rounded-lg w-4 h-2 mt-2"></div>
        <button className="flex space-x-5 font-medium text-gray-300">
          Artificial intelligence
          <ArrowRight className="pt-1 group-hover:scale-120" />
        </button>
      </button>
      <div className="px-73 text-5xl text-text-primary font-bold pb-9">
        AI-assisted product development
      </div>
      <div className="flex pl-73 text-medium">
        <p className="text-text-secondary w-90">
          <span className="text-text-primary">Linear for Agents.</span> Choose
          from a variety of AI agents and start delegating work, from code
          generation to other technical tasks.
        </p>
      </div>
      <button className = 'flex items-center space-x-5 p-2 border border-gray-900 text-text-primary rounded-md mx-73 mt-3 bg-[#121212] font-semibold hover:hover:bg-[#161618]'>
        Learn more
        <ArrowRight className = 'pt-1' />
      </button>

    </div>
  );
};
