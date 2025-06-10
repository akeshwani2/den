"use client";
import React, { useState } from "react";
import Pill from "./ui/Pill";

const notifications = [
  {
    id: 1,
    title: "You have 3 packages arriving today.",
    subtitle:
      "Packages from Amazon, Target, and Walmart are expected to arrive today.",
    expandedContent: {
      details: "Package Details:",
      items: [
        "Amazon - Gaming headset (Tracking: 1Z999AA1234567890)",
        "Target - Kitchen utensils set (Tracking: 1Z999BB1234567891)",
        "Walmart - Office chair (Tracking: 1Z999CC1234567892)",
      ],
      deliveryTime: "Expected delivery window: 10:00 AM - 6:00 PM",
      action: "You can track all packages in the Deliveries app.",
    },
  },
  {
    id: 2,
    title: "John is asking for a ride to the airport.",
    subtitle: "His flight is at 10:00 AM. Pick him up at 8:00 AM.",
    expandedContent: {
      details: "Trip Details:",
      items: [
        "Flight: UA 1234 to San Francisco",
        "Departure: 10:00 AM from Terminal 2",
        "Pick up time: 8:00 AM",
        "Pick up location: 123 Main St, Downtown",
      ],
      deliveryTime: "Estimated drive time: 45 minutes",
      action: "John will text you when he's ready. Safe travels!",
    },
  },
  {
    id: 3,
    title: 'You\'ve been assigned to the "Onboarding" project.',
    subtitle:
      "Details of the project are enclosed. Please review and provide feedback.",
    expandedContent: {
      details: "Project Information:",
      items: [
        "Team: Sarah, Mike, Jennifer, Alex",
        "Deadline: Next Friday (Dec 15th)",
        "Goal: Improve new employee experience",
        "Tasks: Review current process, propose improvements",
      ],
      deliveryTime: "Next meeting: Tomorrow at 2:00 PM",
      action: "Please review the attached documents before the meeting.",
    },
  },
  {
    id: 4,
    title: "System maintenance scheduled for tonight.",
    subtitle: "Our servers will be down for maintenance from 11 PM to 1 AM.",
    expandedContent: {
      details: "Maintenance Details:",
      items: [
        "Type: Database optimization and security updates",
        "Duration: 2 hours (11:00 PM - 1:00 AM EST)",
        "Affected services: Mobile app, web dashboard",
        "Data backup: Completed and verified",
      ],
      deliveryTime: "Services will resume automatically",
      action:
        "No action required from your end. We'll notify you when complete.",
    },
  },
  {
    id: 5,
    title: "Weekly team meeting reminder.",
    subtitle: "Don't forget about tomorrow's team standup at 9:00 AM.",
    expandedContent: {
      details: "Meeting Information:",
      items: [
        "Date: Tomorrow (Wednesday)",
        "Time: 9:00 AM - 9:30 AM",
        "Location: Conference Room B / Zoom",
        "Agenda: Sprint review, new assignments, Q&A",
      ],
      deliveryTime: "Meeting link will be sent 10 minutes before",
      action: "Please prepare your weekly update and any blockers to discuss.",
    },
  },
  {
    id: 6,
    title: "Weekly team meeting reminder.",
    subtitle: "Don't forget about tomorrow's team standup at 9:00 AM.",
    expandedContent: {
      details: "Meeting Information:",
      items: [
        "Date: Tomorrow (Wednesday)",
        "Time: 9:00 AM - 9:30 AM",
        "Location: Conference Room B / Zoom",
        "Agenda: Sprint review, new assignments, Q&A",
      ],
      deliveryTime: "Meeting link will be sent 10 minutes before",
      action: "Please prepare your weekly update and any blockers to discuss.",
    },
  },
  {
    id: 7,
    title: "Weekly team meeting reminder.",
    subtitle: "Don't forget about tomorrow's team standup at 9:00 AM.",
    expandedContent: {
      details: "Meeting Information:",
      items: [
        "Date: Tomorrow (Wednesday)",
        "Time: 9:00 AM - 9:30 AM",
        "Location: Conference Room B / Zoom",
        "Agenda: Sprint review, new assignments, Q&A",
      ],
      deliveryTime: "Meeting link will be sent 10 minutes before",
      action: "Please prepare your weekly update and any blockers to discuss.",
    },
  },
  {
    id: 8,
    title: "Weekly team meeting reminder.",
    subtitle: "Don't forget about tomorrow's team standup at 9:00 AM.",
    expandedContent: {
      details: "Meeting Information:",
      items: [
        "Date: Tomorrow (Wednesday)",
        "Time: 9:00 AM - 9:30 AM",
        "Location: Conference Room B / Zoom",
        "Agenda: Sprint review, new assignments, Q&A",
      ],
      deliveryTime: "Meeting link will be sent 10 minutes before",
      action: "Please prepare your weekly update and any blockers to discuss.",
    },
  },
];

function Body() {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const toggleExpanded = (id: number) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <>
      <div className="p-4 pb-24">
        <div className="text-xl md:text-2xl">Hello, X.</div>
        <div className="text-base md:text-base text-zinc-400 mb-8">
          Here&apos;s what needs your attention.
        </div>
        <div className="flex flex-col gap-2">
          {notifications.map((notification) => {
            const isExpanded = expandedItems.has(notification.id);
            return (
              <div
                key={notification.id}
                className="bg-zinc-800/30 rounded-2xl p-4 cursor-pointer transition-all duration-500 ease-out hover:bg-zinc-800/50 transform"
                onClick={() => toggleExpanded(notification.id)}
              >
                <div className="text-base mb-1 flex items-center justify-between">
                  {notification.title}
                </div>
                <div className="text-sm text-zinc-400 mb-2">
                  {notification.subtitle}
                </div>

                <div
                  className={`overflow-hidden transition-all duration-700 ease-out ${
                    isExpanded
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <div
                    className={`pt-3 transform transition-all duration-500 ease-out ${
                      isExpanded
                        ? "translate-y-0 opacity-100"
                        : "translate-y-[-10px] opacity-0"
                    }`}
                  >
                    <div
                      className={`text-sm font-medium text-zinc-300 mb-3 transition-all duration-400 delay-100 ${
                        isExpanded
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-[-10px]"
                      }`}
                    >
                      {notification.expandedContent.details}
                    </div>
                    <div className="space-y-2 mb-4">
                      {notification.expandedContent.items.map((item, index) => (
                        <div
                          key={index}
                          className={`text-sm text-zinc-400 pl-3 transition-all duration-400 ease-out ${
                            isExpanded
                              ? "opacity-100 translate-x-0"
                              : "opacity-0 translate-x-[-15px]"
                          }`}
                          style={{
                            transitionDelay: isExpanded
                              ? `${150 + index * 50}ms`
                              : "0ms",
                          }}
                        >
                          • {item}
                        </div>
                      ))}
                    </div>
                    <div
                      className={`text-xs text-zinc-500 mb-3 transition-all duration-400 ease-out ${
                        isExpanded
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-[5px]"
                      }`}
                      style={{
                        transitionDelay: isExpanded ? "300ms" : "0ms",
                      }}
                    >
                      {notification.expandedContent.deliveryTime}
                    </div>
                    <div
                      className={`text-sm text-zinc-300 bg-zinc-700/30 rounded-2xl p-3 transition-all duration-500 ease-out ${
                        isExpanded
                          ? "opacity-100 scale-100 translate-y-0"
                          : "opacity-0 scale-95 translate-y-[10px]"
                      }`}
                      style={{
                        transitionDelay: isExpanded ? "400ms" : "0ms",
                      }}
                    >
                      {notification.expandedContent.action}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent pointer-events-none z-40" />
      
      <Pill />
    </>
  );
}

export default Body;
