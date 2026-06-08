"use client";

import { useRef, useState, useEffect } from "react";
import type { CountyRecord } from "@/lib/types";

interface Props {
  counties: CountyRecord[];
  onSelect: (code: string) => void;
  placeholder?: string;
}

export default function Search({ counties, onSelect, placeholder = "Search county..." }: Props) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const filtered = query.length > 0
    ? counties.filter((c) => c.name.toLowerCase().includes(query.toLowerCase())).slice(0, 8)
    : [];

  useEffect(() => {
    setActiveIndex(-1);
  }, [query]);

  useEffect(() => {
    if (!isOpen) setQuery("");
  }, [isOpen]);

  const handleSelect = (code: string) => {
    onSelect(code);
    setQuery("");
    setIsOpen(false);
    inputRef.current?.blur();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || filtered.length === 0) {
      if (e.key === "Escape") { setIsOpen(false); inputRef.current?.blur(); }
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev < filtered.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : filtered.length - 1));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      handleSelect(filtered[activeIndex].id);
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative w-full max-w-md">
      <input
        ref={inputRef}
        type="text"
        role="combobox"
        aria-expanded={isOpen}
        aria-controls="search-results"
        aria-activedescendant={activeIndex >= 0 ? `search-option-${activeIndex}` : undefined}
        placeholder={placeholder}
        className="w-full rounded-lg border border-[#E0DBD0] bg-[#FDFBF7] px-4 py-2.5 text-sm text-[#292524] placeholder-[#A8A08F] transition-colors focus:border-[#EA580C] focus:outline-none focus:ring-2 focus:ring-[#EA580C]/20"
        value={query}
        onChange={(e) => { setQuery(e.target.value); setIsOpen(true); }}
        onFocus={() => query.length > 0 && setIsOpen(true)}
        onKeyDown={handleKeyDown}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
      />
      {isOpen && filtered.length > 0 && (
        <ul
          ref={listRef}
          id="search-results"
          role="listbox"
          className="absolute z-50 mt-1 w-full rounded-lg border border-[#E0DBD0] bg-white shadow-lg"
        >
          {filtered.map((c, i) => (
            <li
              key={c.id}
              id={`search-option-${i}`}
              role="option"
              aria-selected={i === activeIndex}
              className={`cursor-pointer border-b border-[#E0DBD0] px-4 py-2.5 text-sm text-[#292524] transition-colors last:border-0 ${
                i === activeIndex ? "bg-[#F8F5F0] font-medium" : "hover:bg-[#F8F5F0]"
              }`}
              onMouseDown={() => handleSelect(c.id)}
            >
              {c.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
