"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";


import {
  Bell,
  ChevronDown,
  Search,
  Settings,
  UserCircle2,
  LogOut,
  User,
  Shield,
} from "lucide-react";

export default function AdminTopbar() {
  const router = useRouter();

  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-slate-200 bg-white pl-6">
      {/* Left */}
      <div className="flex items-center gap-4">
        <div>
          <h1 className="text-lg font-semibold text-slate-900">
            Hospital Management System
          </h1>

          <p className="text-xs text-slate-500">
            Welcome back, Administrator
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="hidden md:flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
          <Search className="h-4 w-4 text-slate-400" />

          <input
            type="text"
            placeholder="Search patients, doctors..."
            className="w-64 bg-transparent text-sm outline-none placeholder:text-slate-400"
          />
        </div>

        {/* Settings */}
        <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white transition hover:bg-slate-50">
          <Settings className="h-5 w-5 text-slate-600" />
        </button>

        {/* Notifications */}
        <button className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white transition hover:bg-slate-50">
          <Bell className="h-5 w-5 text-slate-600" />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-cyan-500" />
        </button>

        {/* Profile Dropdown */}
        <div className="relative" ref={profileRef}>
          <button
            onClick={() => setIsProfileOpen((prev) => !prev)}
            className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2 transition hover:bg-slate-50"
          >
            <UserCircle2 className="h-8 w-8 text-cyan-600" />

            <div className="hidden text-left lg:block">
              <p className="text-sm font-medium text-slate-900">
                Admin User
              </p>

              <p className="text-xs text-slate-500">
                Super Administrator
              </p>
            </div>

            <ChevronDown
              className={`h-4 w-4 text-slate-400 transition-transform ${
                isProfileOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 top-14 w-64 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
              {/* Header */}
              <div className="border-b border-slate-100 p-4">
                <p className="font-semibold text-slate-900">
                  Admin User
                </p>

                <p className="text-sm text-slate-500">
                  admin@hospital.com
                </p>
              </div>

              {/* Menu */}
              <div className="p-2">
                <button
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-50"
                >
                  <User className="h-4 w-4" />
                  My Profile
                </button>

                <button
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-50"
                >
                  <Shield className="h-4 w-4" />
                  Account Settings
                </button>

                <button
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-50"
                >
                  <Settings className="h-4 w-4" />
                  Preferences
                </button>
              </div>

              {/* Logout */}
              <div className="border-t border-slate-100 p-2">
                <button
                  onClick={handleLogout}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm text-red-600 transition hover:bg-red-50"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}