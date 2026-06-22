"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Bell,
  Search,
  Settings,
  LogOut,
  UserCircle2,
  ChevronDown,
  Menu,
} from "lucide-react";

export default function DoctorTopBar() {
  const [open, setOpen] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const doctor = {
    name: "Dr. John Doe",
    email: "doctor@hospital.com",
    avatar:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=200&q=80",
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 md:px-6">

      {/* Left Side */}
      <div className="flex items-center gap-3">

        {/* Mobile Menu Button (optional future sidebar toggle) */}
        <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 md:hidden">
          <Menu className="h-5 w-5 text-slate-600" />
        </button>

        {/* Desktop Search */}
        <div className="hidden md:flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2">
          <Search className="h-4 w-4 text-slate-400" />

          <input
            type="text"
            placeholder="Search patients, reports..."
            className="w-72 bg-transparent text-sm outline-none placeholder:text-slate-400"
          />
        </div>

        {/* Mobile Search Toggle */}
        <button
          onClick={() => setMobileSearch((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 md:hidden"
        >
          <Search className="h-5 w-5 text-slate-600" />
        </button>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">

        {/* Notifications */}
        <button className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 hover:bg-slate-50">
          <Bell className="h-5 w-5 text-slate-600" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-cyan-500" />
        </button>

        {/* Settings */}
        <button className="hidden sm:flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 hover:bg-slate-50">
          <Settings className="h-5 w-5 text-slate-600" />
        </button>

        {/* Avatar Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-2 py-1.5 hover:bg-slate-50"
          >
            <Image
              src={doctor.avatar}
              alt="doctor"
              width={32}
              height={32}
              className="h-8 w-8 rounded-full object-cover"
            />

            <div className="hidden sm:block text-left">
              <p className="text-sm font-medium text-slate-900 leading-tight">
                {doctor.name}
              </p>
              <p className="text-xs text-slate-500 leading-tight">
                Doctor
              </p>
            </div>

            <ChevronDown className="h-4 w-4 text-slate-400" />
          </button>

          {/* Dropdown */}
          {open && (
            <div className="absolute right-0 mt-2 w-56 rounded-xl border border-slate-200 bg-white shadow-lg overflow-hidden">

              <div className="p-3 border-b border-slate-100">
                <p className="text-sm font-semibold text-slate-900">
                  {doctor.name}
                </p>
                <p className="text-xs text-slate-500">{doctor.email}</p>
              </div>

              <div className="p-2 space-y-1">

                <Link
                  href="/doctor/profile"
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-100"
                >
                  <UserCircle2 className="h-4 w-4" />
                  Profile
                </Link>

                <Link
                  href="/doctor/settings"
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-100"
                >
                  <Settings className="h-4 w-4" />
                  Settings
                </Link>

                <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-red-600 hover:bg-red-50">
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Search Panel */}
      {mobileSearch && (
        <div className="absolute left-0 top-16 w-full border-b border-slate-200 bg-white p-3 md:hidden">
          <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2">
            <Search className="h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-transparent text-sm outline-none"
            />
          </div>
        </div>
      )}
    </header>
  );
}