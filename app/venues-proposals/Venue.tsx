"use client";
interface IVenue {}

const Venue = ({}: IVenue) => {
  return (
    <div className="bg-slate-200 grid grid-cols-12">
      <div className="col-span-3">
        <h2 className="text-xl font-bold">Venue A</h2>
        <div className="aspect-video w-full bg-slate-400 animate-pulse" />
      </div>
    </div>
  );
};

export default Venue;
