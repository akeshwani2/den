import React, { useState } from "react";
import { Reply, Archive } from "lucide-react";
import ComposeArea from "./ui/ComposeArea";

interface ContentProps {
  selectedEmail: {
    id: number;
    sender: string;
    title: string;
    subtitle: string;
    expandedContent: {
      details: string;
      items: string[];
      deliveryTime: string;
      action: string;
    };
  } | null;
  isTransitioning?: boolean;
}

interface ChatMessage {
  id: string;
  content: string;
  isOutgoing: boolean;
  timestamp: Date;
}

function Content({ selectedEmail, isTransitioning = false }: ContentProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  if (!selectedEmail) {
    return <div>No email selected</div>;
  }

  const handleSendMessage = (content: string) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      content,
      isOutgoing: true,
      timestamp: new Date(),
    };
    setMessages([...messages, newMessage]);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <>
      <div className="fixed inset-0 z-40 backdrop-blur-sm" />

      <div
        className="fixed top-0 right-0 h-full w-full md:w-1/2 lg:w-[40%] bg-zinc-900/80 backdrop-blur-xl rounded-l-xl z-50 transform transition-transform duration-300 ease-out translate-x-0 flex flex-col"
        style={{
          boxShadow: "-10px 0 25px -5px rgba(0, 0, 0, 0.4)",
          animation: "slideInFromRight 0.3s ease-out forwards",
        }}
      >
        <div className="flex-shrink-0 p-4">
          <div
            className={`transition-all duration-300 ease-out ${
              isTransitioning
                ? "opacity-0 transform translate-y-4"
                : "opacity-100 transform translate-y-0"
            }`}
          >
            <div className="flex items-center gap-3">
              <div>
                <h1 className="text-2xl text-white">{selectedEmail.title}</h1>
                <p className="text-base text-zinc-400">
                  {selectedEmail.sender}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Messages Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 space-y-4">
            {/* Original Email as Incoming Message */}
            <div className="flex justify-start">
              <div className="w-full group">
                <div className="bg-zinc-800/60 rounded-2xl rounded-tl-md p-4 backdrop-blur-sm border border-zinc-700/30">
                  <div className="space-y-3">
                    <div className="text-zinc-200 font-medium text-sm">
                      {selectedEmail.expandedContent.details}
                    </div>

                    <div className="space-y-2">
                      {selectedEmail.expandedContent.items.map(
                        (item, index) => (
                          <div
                            key={index}
                            className="text-sm text-zinc-300 flex items-start gap-2"
                          >
                            <div className="w-1 h-1 bg-zinc-400 rounded-full mt-2 flex-shrink-0" />
                            {item}
                          </div>
                        )
                      )}
                    </div>

                    <div className="grid grid-cols-1 gap-3 mt-4">
                      <div className="bg-zinc-700/40 rounded-xl p-3">
                        <div className="text-xs text-zinc-400 mb-1">Status</div>
                        <div className="text-sm text-zinc-300">
                          {selectedEmail.expandedContent.deliveryTime}
                        </div>
                      </div>

                      <div className="bg-blue-900/30 border border-blue-800/30 rounded-xl p-3">
                        <div className="text-xs text-blue-400 mb-1">
                          Action Required
                        </div>
                        <div className="text-sm text-zinc-300">
                          {selectedEmail.expandedContent.action}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-xs text-zinc-500 mt-1">
                  {new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            </div>

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.isOutgoing ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] group ${
                    message.isOutgoing ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`rounded-2xl p-4 backdrop-blur-sm ${
                      message.isOutgoing
                        ? "bg-white/80 rounded-tr-md text-black"
                        : "bg-zinc-800/60 rounded-tl-md text-zinc-200 border border-zinc-700/30"
                    }`}
                  >
                    <div className="text-sm whitespace-pre-wrap break-words">
                      {message.content}
                    </div>
                  </div>
                  <div
                    className={`text-xs text-zinc-500 mt-1 items-center flex justify-end`}
                  >
                    {formatTime(message.timestamp)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compose Area - Always Visible */}
        <ComposeArea onSend={handleSendMessage} />
      </div>

      <style jsx>{`
        @keyframes slideInFromRight {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        /* Custom scrollbar */
        .overflow-y-auto::-webkit-scrollbar {
          width: 4px;
        }

        .overflow-y-auto::-webkit-scrollbar-track {
          background: rgba(39, 39, 42, 0.3);
          border-radius: 2px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: rgba(113, 113, 122, 0.5);
          border-radius: 2px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: rgba(113, 113, 122, 0.7);
        }
      `}</style>
    </>
  );
}

export default Content;
