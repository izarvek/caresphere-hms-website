"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Bell,
  ChevronDown,
  LogOut,
  Search,
  Settings,
  UserCircle2,
  MessageSquare,
  HeartPulse,
  Menu,
} from "lucide-react";

export default function PatientTopbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between px-4 shadow-sm sm:px-6">
      <div className="flex items-center gap-3">

        <div>
          <p className="text-base font-semibold text-slate-900 sm:text-lg">
            Patient Dashboard
          </p>
          <p className="hidden text-xs text-slate-500 sm:block">
            Manage your account and activity
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        <div className="hidden items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 md:flex">
          <Search className="h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-64 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
          />
        </div>

        <button className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50">
          <Bell className="h-5 w-5" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-cyan-500" />
        </button>

        <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50">
          <MessageSquare className="h-5 w-5" />
        </button>

        <div className="relative">
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-2 py-1.5 pr-3 transition hover:bg-slate-50"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
              <UserCircle2 className="h-6 w-6" />
            </div>

            <div className="hidden text-left sm:block">
              <p className="text-sm font-medium text-slate-900">John Doe</p>
              <p className="text-xs text-slate-500">Regular User</p>
            </div>

            <ChevronDown className="h-4 w-4 text-slate-400" />
          </button>

          {open && (
            <div className="absolute right-0 mt-3 w-64 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm shadow-slate-200/60">
              <div className="flex items-center gap-3 rounded-xl px-3 py-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                  <HeartPulse className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    John Doe
                  </p>
                  <p className="text-xs text-slate-500">john@example.com</p>
                </div>
              </div>

              <div className="my-2 h-px bg-slate-200" />

              <Link
                href="/user/profile"
                className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
              >
                <UserCircle2 className="h-4 w-4 text-slate-400" />
                My Profile
              </Link>

              <Link
                href="/user/settings"
                className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
              >
                <Settings className="h-4 w-4 text-slate-400" />
                Settings
              </Link>

              <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-600 transition hover:bg-red-50 hover:text-red-600">
                <LogOut className="h-4 w-4 text-slate-400" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
