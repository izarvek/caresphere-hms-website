'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, Clock3, ArrowRight, SlidersHorizontal } from 'lucide-react';

type SearchItem = {
  label: string;
  href: string;
  description?: string;
  keywords?: string[];
};

type SearchBarProps = {
  items: SearchItem[];
  placeholder?: string;
  onSearch?: (query: string) => void;
  onSelect?: (item: SearchItem) => void;
  className?: string;
};

const RECENT_KEY = 'careSphere_recent_searches';

const SearchBar: React.FC<SearchBarProps> = ({
  items,
  placeholder = 'Search services, doctors, departments...',
  onSearch,
  onSelect,
  className = '',
}) => {
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [recent, setRecent] = useState<string[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(RECENT_KEY);
      if (saved) setRecent(JSON.parse(saved));
    } catch {
      setRecent([]);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
        setActiveIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items.slice(0, 6);

    return items
      .filter((item) => {
        const inLabel = item.label.toLowerCase().includes(q);
        const inDesc = item.description?.toLowerCase().includes(q) ?? false;
        const inKeywords = item.keywords?.some((k) => k.toLowerCase().includes(q)) ?? false;
        return inLabel || inDesc || inKeywords;
      })
      .slice(0, 8);
  }, [items, query]);

  const visibleRecent = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return recent.slice(0, 4);
    return recent.filter((r) => r.toLowerCase().includes(q)).slice(0, 4);
  }, [query, recent]);

  const saveRecent = (value: string) => {
    const next = [value, ...recent.filter((r) => r !== value)].slice(0, 8);
    setRecent(next);
    localStorage.setItem(RECENT_KEY, JSON.stringify(next));
  };

  const handleSelect = (item: SearchItem) => {
    setQuery(item.label);
    setOpen(false);
    setActiveIndex(-1);
    saveRecent(item.label);

    if (onSelect) onSelect(item);
    else router.push(item.href);
  };

  const handleSearch = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) return;

    saveRecent(trimmed);
    setOpen(false);
    setActiveIndex(-1);

    if (onSearch) onSearch(trimmed);
    else router.push(`/search?q=${encodeURIComponent(trimmed)}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
      setOpen(true);
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((prev) => {
        const max = filteredItems.length + visibleRecent.length - 1;
        return prev < max ? prev + 1 : max;
      });
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : -1));
    }

    if (e.key === 'Enter') {
      e.preventDefault();

      const all = [...visibleRecent.map((r) => ({ label: r, href: `/search?q=${encodeURIComponent(r)}` })), ...filteredItems];
      const picked = all[activeIndex];

      if (picked) {
        handleSelect(picked);
      } else {
        handleSearch(query);
      }
    }

    if (e.key === 'Escape') {
      setOpen(false);
      setActiveIndex(-1);
    }
  };

  const allSuggestions = [
    ...visibleRecent.map((r) => ({
      label: r,
      href: `/search?q=${encodeURIComponent(r)}`,
      description: 'Recent search',
    })),
    ...filteredItems,
  ];

  return (
    <div ref={wrapperRef} className={`relative w-full ${className} mb-10`}>
      <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2.5 transition focus-within:border-cyan-400">
        <Search className="h-5 w-5 text-slate-400" />

        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
            setActiveIndex(-1);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
        />

        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setOpen(true);
              setActiveIndex(-1);
            }}
            className="rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}

        <button
          type="button"
          onClick={() => handleSearch(query)}
          className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-cyan-700"
        >
          <Search className="h-4 w-4" />
          Search
        </button>
      </div>

      {open && (visibleRecent.length > 0 || filteredItems.length > 0) && (
        <div className="absolute z-50 mt-2 w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Suggestions
            </p>
            <SlidersHorizontal className="h-4 w-4 text-slate-400" />
          </div>

          <div className="max-h-80 overflow-y-auto">
            {allSuggestions.map((item, index) => {
              const isRecent = index < visibleRecent.length;
              const active = activeIndex === index;

              return (
                <button
                  key={`${item.label}-${index}`}
                  type="button"
                  onClick={() => handleSelect(item)}
                  className={`flex w-full items-start gap-3 px-4 py-3 text-left transition ${
                    active ? 'bg-cyan-50' : 'hover:bg-slate-50'
                  }`}
                >
                  <div className="mt-0.5 rounded-lg border border-slate-200 bg-white p-2">
                    {isRecent ? (
                      <Clock3 className="h-4 w-4 text-slate-500" />
                    ) : (
                      <Search className="h-4 w-4 text-slate-500" />
                    )}
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900">{item.label}</p>
                    {item.description && (
                      <p className="mt-0.5 text-xs text-slate-500">{item.description}</p>
                    )}
                  </div>

                  <ArrowRight className="mt-1 h-4 w-4 text-slate-400" />
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;