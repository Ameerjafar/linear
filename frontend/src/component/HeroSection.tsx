export const HeroSection = () => {
  return (
    <div className="px-72">
      <div className="pt-26">
        <div className="flex text-6xl font-semibold text-text-primary pb-2">
          Linear is a purpose-built tool for
        </div>
        <div className="flex text-6xl font-semibold text-text-primary">
          planning and building products
        </div>
      </div>
      <div className="text-text-secondary pt-6 text-lg pb-3">
        <div>Meet the system for modern software development.</div>
        <div>Streamline issues, projects, and product roadmaps.</div>
      </div>
      <div className="flex space-x-4 pb-6">
        <button className="px-4 text-black bg-white/95 hover:bg-white rounded-md font-medium p-2 ">
          Start Building
        </button>
        <button className="bg-primary text-text-secondary hover:bg-gray-900 hover:text-text-primary px-3 rounded-md font-medium transition-colors duration-200">
          New: Linear agent for Slack
        </button>
      </div>
      {/* <div className = 'border-b border-b-gray-400 '></div> */}
    </div>
  );
};
