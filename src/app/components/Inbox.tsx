"use client";
import React from "react";

interface InboxProps {
  selectedEmail: number | null;
  onEmailOpen: (id: number) => void;
  onEmailClose: () => void;
  isTransitioning?: boolean;
}

const emails = [
  {
    id: 1,
    sender: "Adobe Creative Cloud",
    title: "Invoice #1234 from Adobe Creative Cloud",
    subtitle: "Your monthly subscription has been charged $52.99",
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

// Helper function to get initials from sender name
const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .substring(0, 2)
    .toUpperCase();
};

// Helper function to get avatar color based on sender name
const getAvatarColor = (name: string): string => {
  const colors = [
    'bg-blue-500',
    'bg-green-500', 
    'bg-purple-500',
    'bg-red-500',
    'bg-yellow-500',
    'bg-indigo-500',
    'bg-pink-500',
    'bg-orange-500',
  ];
  
  const hash = name.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a;
  }, 0);
  
  return colors[Math.abs(hash) % colors.length];
};

// Avatar component
const Avatar = ({ sender }: { sender: string }) => {
  const initials = getInitials(sender);
  const colorClass = getAvatarColor(sender);
  
  return (
    <div className={`w-10 h-10 ${colorClass} rounded-full flex items-center justify-center flex-shrink-0`}>
      <span className="text-white text-sm font-medium">{initials}</span>
    </div>
  );
};

function Inbox({
  selectedEmail,
  onEmailOpen,
  isTransitioning = false,
}: InboxProps) {
  const selectedEmailData = emails.find((email) => email.id === selectedEmail);

  if (selectedEmail && selectedEmailData) {
    return (
      <div className="fixed inset-0 bg-zinc-950 z-60 min-h-screen">
        <div
          className="h-full min-h-screen overflow-y-auto transition-all duration-500 ease-out"
          style={{
            animation: "emailExpand 0.5s ease-out forwards",
            transformOrigin: "center bottom",
          }}
        >
          <div className="p-4 pb-24">
            <div
              className={`space-y-6 transition-all duration-300 ease-out ${
                isTransitioning
                  ? "opacity-0 transform translate-y-4"
                  : "opacity-100 transform translate-y-0"
              }`}
            >
              <div>
                <h1 className="text-xl md:text-2xl text-white mb-2">
                  {selectedEmailData.title}
                </h1>
                <p className="text-base text-zinc-400">
                  {selectedEmailData.subtitle}
                </p>
              </div>

              <div className="bg-zinc-800/30 rounded-2xl p-4">
                <h2 className="text-lg text-zinc-300 mb-4">
                  {selectedEmailData.expandedContent.details}
                </h2>
                <div className="space-y-3">
                  {selectedEmailData.expandedContent.items.map(
                    (item, index) => (
                      <div
                        key={index}
                        className="text-base text-zinc-400 flex items-start gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Status */}
              <div className="bg-zinc-800/20 rounded-2xl p-4">
                <div className="text-sm text-zinc-400 mb-2">Status</div>
                <div className="text-base text-zinc-300">
                  {selectedEmailData.expandedContent.deliveryTime}
                </div>
              </div>

              {/* Action */}
              <div className="bg-blue-900/20 border border-blue-800/30 rounded-2xl p-4">
                <div className="text-sm text-blue-400 mb-2">
                  Action Required
                </div>
                <div className="text-base text-blue-300">
                  {selectedEmailData.expandedContent.action}
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes emailExpand {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideInLeft {
            0% {
              opacity: 0;
              transform: translateX(-15px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes scaleIn {
            0% {
              opacity: 0;
              transform: scale(0.95);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="px-4 pb-24">
      <div className="flex flex-col gap-2">
        {emails.map((email) => (
          <div
            key={email.id}
            className="bg-zinc-800/30 rounded-2xl p-4 cursor-pointer transition-all duration-300 ease-out hover:bg-zinc-800/50 transform"
            onClick={() => onEmailOpen(email.id)}
          >
            <div className="flex items-center gap-4">
              <Avatar sender={email.sender} />
              <div className="flex-1 min-w-0">
                <div className="text-base mb-1 text-white">{email.title}</div>
                <div className="text-sm text-zinc-400 line-clamp-2">
                  {email.subtitle}
                </div>
                {/* <div className="mt-2 text-xs text-zinc-500">Tap to read</div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inbox;
