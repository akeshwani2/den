"use client";
import React, { useState, useEffect } from "react";
import Content from "./Content";
import EmailPill from "./ui/EmailPill";

export const emails = [
  {
    id: 1,
    sender: "Adobe Creative Cloud",
    title: "Invoice #1234 from Adobe Creative Cloud",
    subtitle: "Your monthly subscription has been charged $52.99",
    date: "Jan 15",
    expandedContent: {
      details: "Invoice Details:",
      items: [
        "Plan: Creative Cloud All Apps",
        "Billing Period: Jan 15 - Feb 15, 2024",
        "Amount: $52.99 USD",
        "Payment Method: •••• 4567",
      ],
      deliveryTime: "Payment processed successfully",
      action:
        "View full invoice details or manage your subscription in your Adobe account.",
    },
  },
  {
    id: 2,
    sender: "Security Team",
    title: "Security Alert: New login detected",
    subtitle:
      "Someone signed into your account from a new device in San Francisco, CA",
    date: "Today",
    expandedContent: {
      details: "Login Information:",
      items: [
        "Device: iPhone 15 Pro",
        "Location: San Francisco, CA, USA",
        "Time: Today at 2:45 PM",
        "IP Address: 192.168.1.45",
      ],
      deliveryTime: "If this was you, no action needed",
      action:
        "If this wasn't you, secure your account immediately and change your password.",
    },
  },
  {
    id: 3,
    sender: "UPS Shipping",
    title: "Your order has shipped - Order #789456",
    subtitle: "Tracking number: 1Z999AA1234567890. Expected delivery: Tomorrow",
    date: "Today",
    expandedContent: {
      details: "Shipping Details:",
      items: [
        "Carrier: UPS Ground",
        "Tracking: 1Z999AA1234567890",
        "Ship Date: Today",
        "Estimated Delivery: Tomorrow by 8:00 PM",
      ],
      deliveryTime: "Currently in transit",
      action:
        "Track your package or update delivery preferences through the UPS website.",
    },
  },
  {
    id: 4,
    sender: "Account Security",
    title: "Password changed successfully",
    subtitle: "Your account password was updated on Jan 15, 2024 at 3:22 PM",
    date: "Jan 15",
    expandedContent: {
      details: "Security Update:",
      items: [
        "Changed: Account Password",
        "Date: Jan 15, 2024",
        "Time: 3:22 PM PST",
        "Location: San Francisco, CA",
      ],
      deliveryTime: "Change confirmed and active",
      action: "If you didn't make this change, contact support immediately.",
    },
  },
  {
    id: 5,
    sender: "GitHub",
    title: "Weekly digest: 47 new updates",
    subtitle: "GitHub notifications, 12 pull requests, 8 issues, 27 commits",
    date: "Jan 8",
    expandedContent: {
      details: "Activity Summary:",
      items: [
        "Pull Requests: 12 new, 5 merged, 3 pending review",
        "Issues: 8 new, 4 closed, 15 still open",
        "Commits: 27 across 8 repositories",
        "Mentions: 3 direct mentions requiring attention",
      ],
      deliveryTime: "Week of Jan 8 - Jan 15",
      action: "Review pending items or adjust your notification preferences.",
    },
  },
  {
    id: 6,
    sender: "Calendar App",
    title: "Calendar reminder: Team standup in 15 minutes",
    subtitle: "Daily standup meeting starts at 9:00 AM in Conference Room B",
    date: "Today",
    expandedContent: {
      details: "Meeting Details:",
      items: [
        "Meeting: Daily Team Standup",
        "Time: 9:00 AM - 9:15 AM",
        "Location: Conference Room B",
        "Attendees: 8 team members",
      ],
      deliveryTime: "Starts in 15 minutes",
      action: "Join the meeting or let the team know if you'll be late.",
    },
  },
  {
    id: 7,
    sender: "Sarah Johnson",
    title: "Slack message from Sarah Johnson",
    subtitle: "Hey! Can you review the design mockups I shared yesterday?",
    date: "Yesterday",
    expandedContent: {
      details: "Message Details:",
      items: [
        "From: Sarah Johnson (Design Team)",
        "Channel: #product-design",
        "Time: Yesterday at 4:30 PM",
        "Attachments: 3 design files",
      ],
      deliveryTime: "Waiting for your response",
      action:
        "Reply to Sarah or check the shared files in the #product-design channel.",
    },
  },
  {
    id: 8,
    sender: "Bank of America",
    title: "Bank statement available for December 2023",
    subtitle: "Your monthly statement is ready for download",
    date: "Dec 31",
    expandedContent: {
      details: "Statement Summary:",
      items: [
        "Period: December 1-31, 2023",
        "Account: Checking •••• 1234",
        "Transactions: 47 total",
        "Ending Balance: $3,247.82",
      ],
      deliveryTime: "Available for download",
      action:
        "Download your statement or view transactions in your online banking portal.",
    },
  },
  {
    id: 9,
    sender: "Bank of America",
    title: "Bank statement available for December 2023",
    subtitle: "Your monthly statement is ready for download",
    date: "Dec 31",
    expandedContent: {
      details: "Statement Summary:",
      items: [
        "Period: December 1-31, 2023",
        "Account: Checking •••• 1234",
        "Transactions: 47 total",
        "Ending Balance: $3,247.82",
      ],
      deliveryTime: "Available for download",
      action:
        "Download your statement or view transactions in your online banking portal.",
    },
  },
  {
    id: 10,
    sender: "Bank of America",
    title: "Bank statement available for December 2023",
    subtitle: "Your monthly statement is ready for download",
    date: "Dec 31",
    expandedContent: {
      details: "Statement Summary:",
      items: [
        "Period: December 1-31, 2023",
        "Account: Checking •••• 1234",
        "Transactions: 47 total",
        "Ending Balance: $3,247.82",
      ],
      deliveryTime: "Available for download",
      action:
        "Download your statement or view transactions in your online banking portal.",
    },
  },
  {
    id: 11,
    sender: "Bank of America",
    title: "Bank statement available for December 2023",
    subtitle: "Your monthly statement is ready for download",
    date: "Dec 31",
    expandedContent: {
      details: "Statement Summary:",
      items: [
        "Period: December 1-31, 2023",
        "Account: Checking •••• 1234",
        "Transactions: 47 total",
        "Ending Balance: $3,247.82",
      ],
      deliveryTime: "Available for download",
      action:
        "Download your statement or view transactions in your online banking portal.",
    },
  },
  {
    id: 12,
    sender: "Bank of America",
    title: "Bank statement available for December 2023",
    subtitle: "Your monthly statement is ready for download",
    date: "Dec 31",
    expandedContent: {
      details: "Statement Summary:",
      items: [
        "Period: December 1-31, 2023",
        "Account: Checking •••• 1234",
        "Transactions: 47 total",
        "Ending Balance: $3,247.82",
      ],
      deliveryTime: "Available for download",
      action:
        "Download your statement or view transactions in your online banking portal.",
    },
  },
];

interface InboxPageProps {
  isTransitioning?: boolean;
  onEmailStateChange?: (isEmailOpen: boolean) => void;
}

function InboxPage({
  isTransitioning = false,
  onEmailStateChange,
}: InboxPageProps) {
  const [selectedEmail, setSelectedEmail] = useState<number | null>(null);
  const [isEmailTransitioning, setIsEmailTransitioning] = useState(false);

  const isEmailOpen = selectedEmail !== null;

  useEffect(() => {
    onEmailStateChange?.(isEmailOpen);
  }, [isEmailOpen, onEmailStateChange]);

  const handleEmailOpen = (id: number) => {
    setSelectedEmail(id);
  };

  const handleEmailClose = () => {
    setIsEmailTransitioning(true);
    setTimeout(() => {
      setSelectedEmail(null);
      setTimeout(() => {
        setIsEmailTransitioning(false);
      }, 50);
    }, 200);
  };

  const handlePreviousEmail = () => {
    if (!selectedEmail) return;
    const currentIndex = emails.findIndex(
      (email) => email.id === selectedEmail
    );
    if (currentIndex > 0) {
      setIsEmailTransitioning(true);
      setTimeout(() => {
        setSelectedEmail(emails[currentIndex - 1].id);
        setTimeout(() => {
          setIsEmailTransitioning(false);
        }, 50);
      }, 200);
    }
  };

  const handleNextEmail = () => {
    if (!selectedEmail) return;
    const currentIndex = emails.findIndex(
      (email) => email.id === selectedEmail
    );
    if (currentIndex < emails.length - 1) {
      setIsEmailTransitioning(true);
      setTimeout(() => {
        setSelectedEmail(emails[currentIndex + 1].id);
        setTimeout(() => {
          setIsEmailTransitioning(false);
        }, 50);
      }, 200);
    }
  };

  const currentEmailIndex = selectedEmail
    ? emails.findIndex((email) => email.id === selectedEmail)
    : -1;
  const canGoPrevious = currentEmailIndex > 0;
  const canGoNext =
    currentEmailIndex < emails.length - 1 && currentEmailIndex !== -1;

  const selectedEmailData = selectedEmail
    ? emails.find((email) => email.id === selectedEmail) || null
    : null;

  return (
    <>
      <div
        className={`pt-32 md:pt-36 transition-all duration-500 ease-out ${
          isTransitioning
            ? "opacity-0 transform translate-y-4 scale-95"
            : "opacity-100 transform translate-y-0 scale-100"
        }`}
      >
        <div className="p pb-24 relative">
          <div className="flex flex-col">
            {emails.map((email) => (
              <div
                key={email.id}
                className="bg-zinc-900/70 px-4 py-4 md:py-6 cursor-pointer transition-all duration-300 ease-out hover:bg-zinc-900 transform active:scale-[0.98] active:bg-zinc-800"
                onClick={() => handleEmailOpen(email.id)}
              >
                {/* Mobile Layout */}
                <div className="block md:hidden">
                  <div className="flex items-start justify-between mb-2">
                    <div className="text-sm text-white font-medium truncate flex-1 pr-2">
                      {email.sender}
                    </div>
                    <div className="text-xs text-zinc-400 flex-shrink-0">
                      {email.date}
                    </div>
                  </div>
                  <div className="text-sm text-white font-medium mb-1 line-clamp-2">
                    {email.title}
                  </div>
                  <div className="text-sm text-zinc-400 line-clamp-2">
                    {email.subtitle}
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:flex items-center gap-4">
                  <div className="flex-1 min-w-0 flex items-start gap-4">
                    <div className="text-base text-white text-left w-100 flex-shrink-0">
                      {email.sender}
                    </div>
                    <div className="text-base text-white font-medium text-left">
                      {email.title}
                    </div>
                    <span className="text-zinc-400 text-base items-center">
                      •
                    </span>

                    <div className="text-base text-zinc-400 truncate text-left flex-1">
                      {email.subtitle}
                    </div>
                    <div className="text-xs text-white w-20 flex-shrink-0 text-right">
                      {email.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-zinc-950 via-zinc-950/90  to-transparent pointer-events-none" />
        </div>
      </div>

      {isEmailOpen && (
        <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent pointer-events-none z-40" />
      )}

      {isEmailOpen && (
        <>
          <Content
            selectedEmail={selectedEmailData}
            isTransitioning={isEmailTransitioning}
          />
          <EmailPill
            onClose={handleEmailClose}
            onPreviousEmail={canGoPrevious ? handlePreviousEmail : undefined}
            onNextEmail={canGoNext ? handleNextEmail : undefined}
          />
        </>
      )}
    </>
  );
}

export default InboxPage;
