"use client";

import { Search, X } from "lucide-react";

interface GlossarySearchProps {
  query: string;
  onChange: (query: string) => void;
}

export default function GlossarySearch({ query, onChange }: GlossarySearchProps) {
  return (
    <div className="relative max-w-md mx-auto mb-8">
      <Search
        size={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
      />
      <input
        type="text"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Hledat pojem..."
        className="w-full pl-12 pr-10 py-3 bg-white border border-gray-200 rounded-full text-secondary placeholder:text-muted/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
      />
      {query && (
        <button
          onClick={() => onChange("")}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-secondary transition-colors"
          aria-label="Vymazat hledání"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
}
