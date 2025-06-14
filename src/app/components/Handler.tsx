"use client";
import React, { useState } from "react";
import Header from "./ui/Header";
import Pill from "./ui/Pill";
import ForYouPage from "./ForYouPage";
import InboxPage from "./InboxPage";
import { emails } from "./InboxPage";

function Body() {
  const [activeTab, setActiveTab] = useState<"forYou" | "inbox">("forYou");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isEmailOpen, setIsEmailOpen] = useState(false);

  const handleTabChange = (tab: "forYou" | "inbox") => {
    if (tab === activeTab) return;

    setIsTransitioning(true);

    setTimeout(() => {
      setActiveTab(tab);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 200);
  };

  const handleEmailStateChange = (emailOpen: boolean) => {
    setIsEmailOpen(emailOpen);
  };

  return (
    <>
      {!isEmailOpen && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black via-black/95 to-black/20 backdrop-blur-xs">
          <Header />
          {activeTab === "forYou" ? (
            <div className="px-4 pb-4">
              <div className="text-xl md:text-2xl transition-all duration-500 ease-out">
                Hello, Arhaan.
              </div>
              <div className="text-base md:text-base text-zinc-400 transition-all duration-500 ease-out">
                Here&apos;s what needs your attention.
              </div>
            </div>
          ) : (
            activeTab === "inbox" && (
              <div className="px-4 pb-4 flex items-center justify-between">
                <div className="text-xl md:text-2xl flex flex-col">
                  Inbox{" "}
                  <span className="text-zinc-400 text-sm">
                    arhaankeshwani200@gmail.com
                  </span>
                </div>
                <div className="text-sm text-zinc-300 w-fit bg-zinc-700/30 rounded-xl p-3 transition-all duration-500 ease-out">
                  {emails.length} unread
                </div>
              </div>
            )
          )}
        </div>
      )}

      {activeTab === "forYou" ? (
        <ForYouPage />
      ) : (
        <InboxPage
          isTransitioning={isTransitioning}
          onEmailStateChange={handleEmailStateChange}
        />
      )}

      {!isEmailOpen && (
        <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent pointer-events-none z-40" />
      )}

      {!isEmailOpen && (
        <Pill activeTab={activeTab} onTabChange={handleTabChange} />
      )}
    </>
  );
}

export default Body;
