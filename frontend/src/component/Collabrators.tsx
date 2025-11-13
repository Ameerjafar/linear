import { ArrowBigRightDash } from "lucide-react";

export const Collabrators = () => {
  return (
    <div className="text-text-primary px-96 pb-32">
      <div className="flex justify-center">
        <div className="text-xl">
          <div className="text-text-primary font-semibold pl-6 ">
            Powering the world’s best product teams.
          </div>
          <div className="text-text-secondary font-semibold pb-10">
            From next-gen startups to established enterprises.
          </div>
        </div>
      </div>

      <div className="relative group">
        <div className="flex justify-center">
          <button className="invisible group-hover:visible absolute top-6 flex items-center space-x-2 rounded-full px-6 py-3 bg-black/30 text-white z-10">
            Meet our customers
            <ArrowBigRightDash className="w-5 h-5 pt-1 pl-1" />
          </button>
        </div>
        <div className="group-hover:blur-lg">
          <div className="flex justify-between font-bold text-2xl pb-10">
            <div>OpenAI</div>
            <div>Cash App</div>
            <div>Stripe</div>
            <div>Notion</div>
          </div>
          <div className="flex justify-between font-bold text-2xl">
            <div>OpenAI</div>
            <div>Cash App</div>
            <div>Linear</div>
            <div>Figma</div>
          </div>
        </div>
      </div>
    </div>
  );
};
