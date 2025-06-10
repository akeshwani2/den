"use client";
import React, { useState } from "react";

export default function PillToggle() {
  const [activeTab, setActiveTab] = useState("forYou");

  return (
    <div className="justify-center flex items-center">
      <div className="fixed bottom-5 flex gap-2 bg-zinc-800 rounded-3xl ">
        <div
          className={`absolute top-0 h-full bg-white rounded-3xl transition-all duration-300 ${
            activeTab === "forYou"
              ? "left-0 w-[calc(50%)]"
              : "left-[calc(50%+4px)] w-[calc(50%)]"
          }`}
        />

        <div
          onClick={() => setActiveTab("forYou")}
          className={`px-4 py-2 rounded-3xl cursor-pointer transition-colors relative z-10 ${
            activeTab === "forYou" ? "text-zinc-800" : "text-zinc-300"
          }`}
        >
          <div className="text-base text-center">For You</div>
        </div>
        <div
          onClick={() => setActiveTab("inbox")}
          className={`px-4 py-2 rounded-3xl cursor-pointer transition-colors relative z-10 ${
            activeTab === "inbox" ? "text-zinc-800" : "text-zinc-300"
          }`}
        >
          <div className="text-center text-base">Inbox</div>
        </div>
      </div>
    </div>
  );
}
