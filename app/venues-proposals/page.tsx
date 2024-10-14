"use client";
import { motion } from "framer-motion";
import Venue from "./Venue";

interface IVenuesProposals {}

const VenuesProposals = ({}: IVenuesProposals) => {
  return (
    <motion.div layout className="grid grid-cols-12">
      <div className="col-span-10">
        Venues
        <Venue />
      </div>
    </motion.div>
  );
};

export default VenuesProposals;
