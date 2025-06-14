"use client";
import React, { useState } from "react";

interface ComposeAreaProps {
  onSend: (message: string) => void;
}

export default function ComposeArea({
  onSend,
}: ComposeAreaProps) {
  const [replyText, setReplyText] = useState("");

  const handleSendReply = () => {
    if (replyText.trim()) {
      onSend(replyText.trim());
      setReplyText("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendReply();
    }
  };

  const handleClear = () => {
    setReplyText("");
  };

  return (
    <div className="flex-shrink-0 p-4">
      <div className="bg-zinc-800/50 rounded-2xl p-3 backdrop-blur-sm border border-zinc-700/30">
        <textarea
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your reply..."
          className="w-full bg-transparent text-white placeholder-zinc-400 resize-none outline-none text-sm"
          rows={3}
          autoFocus
        />
        <div className="flex justify-between items-center mt-2">
          <button
            onClick={handleClear}
            className="text-xs text-zinc-400 hover:text-zinc-300 transition-colors"
          >
            Clear
          </button>
          <div className="flex items-center gap-4">
            {/* <div>
              <Sparkles className="text-zinc-400" size={16} />
            </div>
            <div>
              <Paperclip className="text-zinc-400" size={16} />
            </div>
            <div>
              <Sparkles className="text-zinc-400" size={16} />
            </div> */}

            <button
              onClick={handleSendReply}
              disabled={!replyText.trim()}
              className="flex items-center gap-2 px-3 py-1.5 bg-white hover:bg-zinc-100 disabled:bg-zinc-700 disabled:text-zinc-400 rounded-lg text-zinc-900 text-sm font-medium transition-all duration-200 disabled:cursor-not-allowed"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
