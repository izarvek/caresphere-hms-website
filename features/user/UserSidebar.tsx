"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Bell,
  MessageSquare,
  UserCircle2,
  Settings,
  ChevronRight,
  ChevronDown,
  HeartPulse,
  ArrowLeftRight,
  KeyRound,
  Mail,
  ShieldCheck,
  ImageIcon,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Notifications",
    href: "/dashboard/notifications",
    icon: Bell,
  },
  {
    title: "Messages",
    href: "/dashboard/messages",
    icon: MessageSquare,
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: UserCircle2,
  },
  {
    title: "Settings",
    icon: Settings,
    children: [
      {
        title: "Change Password",
        href: "/dashboard/settings/change-password",
        icon: KeyRound,
      },
      {
        title: "Change Email",
        href: "/dashboard/settings/change-email",
        icon: Mail,
      },
      {
        title: "Change Avatar",
        href: "/dashboard/settings/change-avatar",
        icon: ImageIcon,
      },
      {
        title: "MFA Settings",
        href: "/dashboard/settings/mfa",
        icon: ShieldCheck,
      },
    ],
  },
];

export default function UserSidebar() {
  const pathname = usePathname();

  const [openMenus, setOpenMenus] = useState({
    settings: false,
  });

  const toggleMenu = (menu: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu as keyof typeof prev],
    }));
  };

  return (
    <aside className="flex h-screen w-72 flex-col border border-slate-200 bg-white">

      {/* Logo */}
      <div className="border-b border-slate-200 p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-600 text-white">
            <HeartPulse className="h-5 w-5" />
          </div>

          <div>
            <h2 className="font-semibold text-slate-900">
              User Portal
            </h2>

            <p className="text-xs text-slate-500">
              Account Management
            </p>
          </div>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 overflow-y-auto p-4">
        <div className="space-y-1">
          {menuItems.map((item) => {

            if (item.children) {
              const isOpen = openMenus.settings;

              return (
                <div key={item.title}>
                  <button
                    onClick={() => toggleMenu("settings")}
                    className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 text-slate-400" />
                      <span>{item.title}</span>
                    </div>

                    {isOpen ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="ml-6 mt-1 border-l border-slate-200 pl-3">
                      {item.children.map((child) => {
                        const active =
                          pathname === child.href ||
                          pathname.startsWith(`${child.href}/`);

                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`mb-1 flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition ${
                              active
                                ? "bg-cyan-50 text-cyan-700"
                                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                            }`}
                          >
                            <child.icon
                              className={`h-4 w-4 ${
                                active
                                  ? "text-cyan-600"
                                  : "text-slate-400"
                              }`}
                            />

                            <span>{child.title}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            const active =
              pathname === item.href ||
              pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href!}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition ${
                  active
                    ? "bg-cyan-50 text-cyan-700"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon
                    className={`h-5 w-5 ${
                      active
                        ? "text-cyan-600"
                        : "text-slate-400"
                    }`}
                  />

                  <span>{item.title}</span>
                </div>

                <ChevronRight className="h-4 w-4" />
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Switch To Patients */}
      <div className="border-t border-slate-200 p-4">
        <Link
          href="/patient"
          className="flex items-center gap-3 rounded-xl border border-cyan-200 bg-cyan-50 px-4 py-3 text-sm font-medium text-cyan-700 transition hover:bg-cyan-100"
        >
          <ArrowLeftRight className="h-5 w-5" />
          <span>Switch to Patients</span>
        </Link>
      </div>

      {/* User Profile */}
      <div className="border-t border-slate-200 p-4">
        <button className="flex w-full items-center gap-3 rounded-xl p-2 transition hover:bg-slate-100">
          <UserCircle2 className="h-10 w-10 text-cyan-600" />

          <div className="text-left">
            <p className="text-sm font-medium text-slate-900">
              John Doe
            </p>

            <p className="text-xs text-slate-500">
              User Account
            </p>
          </div>
        </button>
      </div>

    </aside>
  );
}