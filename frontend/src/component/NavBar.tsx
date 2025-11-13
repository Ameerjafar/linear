import linearLogo from "../assets/linearLogo.png";

export const NavBar = () => {
  const navElements: string[] = [
    "products",
    "Resources",
    "Pricing",
    "Customers",
    "Now",
    "Contact",
  ];
  return (
    <div className="px-72 pt-4 pb-4 bg-primary text-text-primary border-b border-b-gray-800">
      <div className="flex justify-between">
        <div className="flex space-x-3">
          <div className="text-text-primary size-6 mt-1">
            <img src={linearLogo}></img>
          </div>
          <p className="text-xl font-bold mb-2 text-text-primary">Linear</p>
        </div>
        <div className="flex space-x-3">
          {navElements.map((ele: string) => {
            return <button className="bg-primary text-text-secondary hover:bg-gray-900 hover:text-text-primary px-3 rounded-md text-sm font-medium transition-colors duration-200">{ele}</button>;
          })}
        </div>
        <div className="flex space-x-4">
          <button className="bg-black text-text-secondary hover:bg-gray-900 hover:text-text-primary
           px-3 rounded-md text-sm font-medium transition-colors duration-200">
            Login
          </button>
          <button className="bg-white/95 hover:bg-white text-center text-black px-2 rounded-md font-medium text-sm">
            Sign up
          </button>
        </div>
      </div>
      {/* <hr className = 'text-shadow-black' /> */}
    </div>
  );
};
