import { productTeamData } from "./data/ModernCardData";
import { ModernProductCard } from "./ui/ModernProductCard";
export const ModernProductTeams = () => {
  return (
    <div>
      <div className="flex justify-between px-75  pb-10">
        <div>
          <div className="text-text-primary text-5xl font-bold">
            Made for modern
          </div>
          <div className="text-5xl text-text-primary font-bold">
            product teams
          </div>
        </div>
        <div>
          <p className="text-text-secondary w-90 pt-3">
            Linear is shaped by the practices and principles that distinguish
            world-class product teams from the rest: relentless focus, fast
            execution, and a commitment to the quality of craft.
            <button className="pl-2 text-text-primary text-sm hover:scale-105 font-semibold">
              Make the switch
            </button>
          </p>
        </div>
      </div>
      <div className="flex justify-center pl-10 space-x-2 pb-10">
        {productTeamData.map((data) => {
          return (
            <ModernProductCard imgSrc={data.imgSrc} content={data.content} />
          );
        })}
      </div>
    </div>
  );
};
