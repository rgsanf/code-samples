import clsx from "clsx";
import { Reorder } from "framer-motion";
import { IProposal } from "./Venue";

interface IProposals {
  proposals: IProposal[];
  setProposals: (proposals: IProposal[]) => void;
  reordering: boolean;
}

const Proposals = ({ reordering, proposals, setProposals }: IProposals) => {
  return (
    <Reorder.Group
      values={proposals}
      onReorder={setProposals}
      className={clsx(
        "flex space-y-4 flex-col h-full",
        reordering ? `text-base` : `text-[10px]`
      )}
    >
      {proposals.map((proposal) => (
        <Reorder.Item key={proposal.name} value={proposal} className="h-full">
          <div className="bg-slate-300 text-slate-800 py-1 px-2 rounded-md h-full flex items-center">
            {proposal.venueId}
          </div>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
};

export default Proposals;
