'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  Menu,
  X,
  ChevronDown,
  Bell,
  LayoutDashboard,
  CalendarCheck2,
  UserCircle2,
} from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [token, setToken] = useState(null);
   useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const router = useRouter();
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = () => setProfileOpen(false);
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleNavigate = (href) => {
    router.push(href);
    setMobileOpen(false);
    setProfileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white backdrop-blur-md">
      <div className="flex h-16 items-center justify-between">
        <div
          onClick={() => handleNavigate('/')}
          className="flex cursor-pointer items-center gap-2 select-none"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-600 text-white shadow-sm">
            <Image src="/images/logo/logo.png" alt="CareSphere Logo" width={40} height={40} />
          </div>
          <div className="leading-tight">
            <p className="text-base font-semibold text-slate-900">CareSphere</p>
            <p className="text-xs text-slate-500">Healthcare made simple</p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition ${
                  active ? 'text-cyan-700' : 'text-slate-700 hover:text-cyan-700'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {!token ? (
            <>
              <button
                onClick={() => handleNavigate('/login')}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition bg-slate-50 hover:bg-slate-100"
              >
                Sign In
              </button>

              <button
                onClick={() => handleNavigate('/signup')}
                className="rounded-full bg-cyan-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-cyan-700"
              >
                Get Started
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => handleNavigate('/appointments')}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                <CalendarCheck2 className="h-4 w-4" />
                Book Appointment
              </button>

              <button
                onClick={() => handleNavigate('/notifications')}
                className="rounded-full border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-50"
                aria-label="Notifications"
              >
                <Bell className="h-4 w-4" />
              </button>

              <button
                onClick={() => handleNavigate('/dashboard')}
                className="inline-flex items-center gap-2 rounded-full bg-cyan-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-cyan-700"
              >
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </button>

              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setProfileOpen((prev) => !prev);
                  }}
                  className="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  <UserCircle2 className="h-5 w-5" />
                  <ChevronDown className="h-4 w-4" />
                </button>
                {profileOpen && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="absolute right-0 mt-2 w-44 rounded-xl border border-slate-200 bg-white p-2 shadow-lg"
                  >
                    <button
                      onClick={() => handleNavigate('/profile')}
                      className="w-full rounded-lg px-3 py-2 text-left text-sm text-slate-700 transition hover:bg-slate-50"
                    >
                      My Profile
                    </button>
                    <button
                      onClick={() => handleNavigate('/logout')}
                      className="w-full rounded-lg px-3 py-2 text-left text-sm text-slate-700 transition hover:bg-slate-50"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="rounded-xl border border-slate-200 p-2 text-slate-700 md:hidden"
          aria-label="Open menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavigate(item.href)}
                className={`rounded-xl px-3 py-2 text-left text-sm font-medium transition ${
                  pathname === item.href
                    ? 'bg-cyan-50 text-cyan-700'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-4 border-t border-slate-200 pt-4">
            {!token ? (
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleNavigate('/login')}
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700"
                >
                  Sign In
                </button>
                <button
                  onClick={() => handleNavigate('/signup')}
                  className="rounded-xl bg-cyan-600 px-4 py-3 text-sm font-medium text-white"
                >
                  Get Started
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleNavigate('/appointments')}
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700"
                >
                  Book Appointment
                </button>
                <button
                  onClick={() => handleNavigate('/dashboard')}
                  className="rounded-xl bg-cyan-600 px-4 py-3 text-sm font-medium text-white"
                >
                  Dashboard
                </button>
                <button
                  onClick={() => handleNavigate('/profile')}
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700"
                >
                  My Profile
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
