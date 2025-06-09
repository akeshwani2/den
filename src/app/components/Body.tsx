import React from "react";
import Pill from "./ui/Pill";

function Body() {
  return (
    <>
      <div className="p-4 pb-24">
        <div className="text-xl md:text-2xl">Hello, X.</div>
        <div className="text-base md:text-base text-zinc-400 mb-8">
          Here's what needs your attention.
        </div>
        <div className="flex flex-col gap-2">
          <div className="bg-zinc-800/30 rounded-2xl p-4">
            <div className="text-base mb-1">
              You have 3 packages arriving today.
            </div>
            <div className="text-sm text-zinc-400">
              Packages from Amazon, Target, and Walmart are expected to arrive
              today.
            </div>
          </div>
          <div className="bg-zinc-800/30 rounded-2xl p-4">
            <div className="text-base mb-1">
              John is asking for a ride to the airport.
            </div>
            <div className="text-sm text-zinc-400">
              His flight is at 10:00 AM. Pick him up at 8:00 AM.
            </div>
          </div>
          <div className="bg-zinc-800/30 rounded-2xl p-4">
            <div className="text-base mb-1">
              You've been assigned to the "Onboarding" project.
            </div>
            <div className="text-sm text-zinc-400">
              Details of the project are enclosed. Please review and provide
              feedback.
            </div>
          </div>
          <div className="bg-zinc-800/30 rounded-2xl p-4">
            <div className="text-base mb-1">
              You've been assigned to the "Onboarding" project.
            </div>
            <div className="text-sm text-zinc-400">
              Details of the project are enclosed. Please review and provide
              feedback.
            </div>
          </div>
          
          <div className="bg-zinc-800/30 rounded-2xl p-4">
            <div className="text-base mb-1">
              You've been assigned to the "Onboarding" project.
            </div>
            <div className="text-sm text-zinc-400">
              Details of the project are enclosed. Please review and provide
              feedback.
            </div>
          </div>
          
        </div>
      </div>
      <Pill />
    </>
  );
}

export default Body;
