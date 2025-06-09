import { ListFilter, Pen, Search, Sparkles } from "lucide-react";
import React from "react";

function Header() {
  return (
    <div className="flex text-white items-center p-4">
      <div className="w-full">
        <div className="mb-4 flex items-center justify-between">
          <button className=" bg-zinc-800/50 rounded-xl p-2 hover:bg-zinc-800/70 transition-colors ">
            <Search className="w-4 h-4 text-zinc-400" />
          </button>
          <div className="w-full"></div>
          <div className="flex items-center gap-2">
            <button className=" bg-zinc-800/50 rounded-xl p-2 hover:bg-zinc-800/70 transition-colors">
              <ListFilter className="w-4 h-4 text-zinc-400" />
            </button>
            <button className=" bg-zinc-800/50 rounded-xl p-2 hover:bg-zinc-800/70 transition-colors">
              <Sparkles className="w-4 h-4 text-zinc-400" />
            </button>
            <button className=" bg-zinc-800/50 rounded-xl p-2 hover:bg-zinc-800/70 transition-colors">
              <Pen className="w-4 h-4 text-zinc-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
