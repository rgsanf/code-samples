"use client";
import { motion, Reorder } from "framer-motion";
import Venue from "./Venue";
import { useState } from "react";
import clsx from "clsx";
import { groupBy } from "lodash-es";
import Proposals from "./Proposals";

interface IVenuesProposals {}

const VenuesProposals = ({}: IVenuesProposals) => {
  const [venues, setVenues] = useState([
    {
      id: "1",
      name: "Venue 1",
    },
    {
      id: "2",
      name: "Venue 2",
    },
    {
      id: "3",
      name: "Venue 3",
    },
  ]);
  const [reordering, setReordering] = useState(true);
  const [proposals, setProposals] = useState([
    { name: "P 1", venueId: "1", order: 1 },
    { name: "P 2", venueId: "1", order: 2 },
    { name: "P 3", venueId: "1", order: 3 },
    { name: "P 4", venueId: "2", order: 4 },
    { name: "P 5", venueId: "2", order: 5 },
    { name: "P 6", venueId: "2", order: 6 },
    { name: "P 7", venueId: "3", order: 7 },
    { name: "P 8", venueId: "3", order: 8 },
    { name: "P 9", venueId: "3", order: 9 },
  ]);
  const f = groupBy(proposals, "venueId");
  console.log({ f: f[1] });
  return (
    <div className="border border-white p-4">
      <div className="text-slate-900">
        <button
          onClick={() => setReordering(!reordering)}
          className="bg-slate-200 p-2 rounded-md"
        >
          {reordering ? "Stop Reordering" : "Start Reordering"}
        </button>
      </div>
      <motion.div layout className="grid grid-cols-12 my-4 gap-4">
        <Reorder.Group
          values={venues}
          onReorder={setVenues}
          className={clsx(
            `space-y-4`,
            reordering ? "col-span-1" : "col-span-11"
          )}
        >
          {venues.map((venue) => (
            <Reorder.Item key={venue.id} value={venue}>
              <Venue
                reordering={reordering}
                proposals={groupBy(proposals, "venueId")[venue.id]}
              />
            </Reorder.Item>
          ))}
        </Reorder.Group>
        <div
          className={clsx(
            reordering ? "col-span-10 col-start-3" : "col-span-1"
          )}
        >
          <Proposals
            reordering={reordering}
            proposals={proposals}
            setProposals={setProposals}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default VenuesProposals;
