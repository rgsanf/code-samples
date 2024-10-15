"use client";

import clsx from "clsx";
import { Reorder } from "framer-motion";
import { useState } from "react";

interface IVenue {
  reordering: boolean;
  proposals: IProposal[];
}
export interface IProposal {
  name: string;
  venueId: string;
  order: number;
}

const Venue = ({ reordering, proposals }: IVenue) => {
  return (
    <div
      className={clsx(
        `bg-slate-200 grid p-4 gap-4 rounded-lg`,
        reordering ? `grid-cols-3` : `grid-cols-12`,
        reordering ? `text-[10px]` : `text-base`
      )}
    >
      <div
        className={clsx(
          "space-y-2",
          reordering ? "col-span-full" : "col-span-3"
        )}
      >
        <div className="aspect-video w-full bg-slate-400 animate-pulse rounded-md" />
        <div className="bg-slate-400 animate-pulse h-6 max-w-40 rounded-md " />
      </div>
      {proposals && (
        <div
          className={clsx(
            "space-y-2",
            reordering ? "col-span-full" : "col-span-9"
          )}
        >
          {proposals.map((proposal) => (
            <div
              key={proposal.name + "" + proposal.venueId}
              className="bg-slate-300 text-slate-800 py-1 px-2 rounded-md"
            >
              {proposal.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Venue;
