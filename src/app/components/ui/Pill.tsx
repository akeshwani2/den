"use client";
import { Pen } from "lucide-react";
import React from "react";

interface PillToggleProps {
  activeTab: "forYou" | "inbox";
  onTabChange?: (tab: "forYou" | "inbox") => void;
}

export default function PillToggle({
  activeTab,
  onTabChange,
}: PillToggleProps) {
  const handleTabChange = (tab: "forYou" | "inbox") => {
    onTabChange?.(tab);
  };

  return (
    <div>
      <div className="justify-center px-4 flex items-center z-50 relative">
        <div className="fixed bottom-6 flex gap-2 bg-zinc-800 rounded-2xl py-1">
          <div
            className={`absolute top-0  h-full bg-white rounded-2xl transition-all duration-300 ${
              activeTab === "forYou"
                ? "left-0 w-[calc(50%)]"
                : "left-[calc(50%+4px)] w-[calc(50%)]"
            }`}
          />

          <div
            onClick={() => handleTabChange("forYou")}
            className={`px-4 py-2 rounded-2xl cursor-pointer transition-colors relative z-10 ${
              activeTab === "forYou" ? "text-zinc-800" : "text-zinc-300 "
            }`}
          >
            <div className="text-base text-center">For You</div>
          </div>
          <div
            onClick={() => handleTabChange("inbox")}
            className={`px-4 py-2 rounded-2xl cursor-pointer transition-colors relative z-10 ${
              activeTab === "inbox" ? "text-zinc-800" : "text-zinc-300"
            }`}
          >
            <div className="text-center text-base">Inbox</div>
          </div>
        </div>
      </div>
    </div>
  );
}
