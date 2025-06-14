"use client";
import {
  ArrowLeft,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import React from "react";

interface EmailPillProps {
  onClose: () => void;
  onPreviousEmail?: () => void;
  onNextEmail?: () => void;
}

export default function EmailPill({
  onClose,
  onPreviousEmail,
  onNextEmail,
}: EmailPillProps) {
  return (
    <div>
      <div className="justify-center px-4 flex items-center z-70 relative">
        <div className="fixed bottom-6 flex gap-2 bg-zinc-800/50 rounded-2xl p-1">
          <button
            onClick={onClose}
            className="p-3 rounded-xl hover:bg-zinc-700 cursor-pointer transition-colors duration-200 text-zinc-300 hover:text-white"
          >
            <ArrowLeft size={20} />
          </button>

          <button
            onClick={onPreviousEmail}
            className="p-3 rounded-xl hover:bg-zinc-700 cursor-pointer transition-colors duration-200 text-zinc-300 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!onPreviousEmail}
          >
            <ArrowUp size={20} />
          </button>

          <button
            onClick={onNextEmail}
            className="p-3 rounded-xl hover:bg-zinc-700 cursor-pointer transition-colors duration-200 text-zinc-300 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!onNextEmail}
          >
            <ArrowDown size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
