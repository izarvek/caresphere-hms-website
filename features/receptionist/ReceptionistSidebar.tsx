"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CalendarDays,
  FileText,
  CreditCard,
  Building2,
  BedDouble,
  ClipboardCheck,
  Clock3,
  MessageSquare,
  Bell,
  UserCircle2,
  Settings,
  ChevronDown,
  ChevronRight,
  HeartPulse,
  Receipt,
  Megaphone,
  SlidersHorizontal,
  KeyRound,
  Mail,
  ImageIcon,
  ShieldCheck,
  ClipboardList,
  TrendingUp,
  XCircle,
  ArrowRightLeft,
  Shield,
  Stethoscope,
  Users,
  UserPlus,
  UserCheck,
} from "lucide-react";

type MenuItem = {
  label: string;
  href?: string;
  icon?: React.ComponentType<{ className?: string }>;
  children?: MenuItem[];
};

type Section = {
  title: string;
  items: MenuItem[];
};

const sections: Section[] = [
  {
    title: "Overview",
    items: [
      {
        label: "Dashboard",
        href: "/receptionist",
        icon: LayoutDashboard,
      },
    ],
  },

  {
    title: "Patient Management",
    items: [
      {
        label: "Patients",
        icon: Users,
        children: [
          {
            label: "All Patients",
            href: "/receptionist/patients",
            icon: Users,
          },
          {
            label: "New Registration",
            href: "/receptionist/patients/new-registration",
            icon: UserPlus,
          },
          {
            label: "Queue",
            href: "/receptionist/patients/queue",
            icon: ClipboardList,
          },
          {
            label: "Discharged",
            href: "/receptionist/patients/discharged",
            icon: UserCheck,
          },
        ],
      },

      {
        label: "Appointments",
        icon: CalendarDays,
        children: [
          {
            label: "Today's",
            href: "/receptionist/appointments/today",
            icon: CalendarDays,
          },
          {
            label: "Upcoming",
            href: "/receptionist/appointments/upcoming",
            icon: TrendingUp,
          },
          {
            label: "Walk-in",
            href: "/receptionist/appointments/walk-ins",
            icon: Users,
          },
          {
            label: "Cancelled",
            href: "/receptionist/appointments/cancelled",
            icon: XCircle,
          },
          {
            label: "Reschedule",
            href: "/receptionist/appointments/reschedule",
            icon: ArrowRightLeft,
          },
        ],
      },
    ],
  },

  {
    title: "Hospital Operations",
    items: [
      {
        label: "Admissions",
        icon: Building2,
        children: [
          {
            label: "New Admission",
            href: "/receptionist/admissions/new",
            icon: UserPlus,
          },
          {
            label: "Current Admissions",
            href: "/receptionist/admissions/current",
            icon: BedDouble,
          },
          {
            label: "Discharge Requests",
            href: "/receptionist/admissions/discharge",
            icon: ClipboardCheck,
          },
          {
            label: "Transfers",
            href: "/receptionist/admissions/transfers",
            icon: ArrowRightLeft,
          },
        ],
      },

      {
        label: "Doctors",
        icon: Stethoscope,
        children: [
          {
            label: "Doctor Directory",
            href: "/receptionist/doctors",
            icon: Users,
          },
          {
            label: "Availability",
            href: "/receptionist/doctors/availability",
            icon: Clock3,
          },
          {
            label: "Schedules",
            href: "/receptionist/doctors/schedules",
            icon: CalendarDays,
          },
        ],
      },

      {
        label: "Ward & Rooms",
        icon: BedDouble,
        children: [
          {
            label: "Available Rooms",
            href: "/receptionist/rooms/available",
            icon: BedDouble,
          },
          {
            label: "Occupied Rooms",
            href: "/receptionist/rooms/occupied",
            icon: Building2,
          },
          {
            label: "Room Allocation",
            href: "/receptionist/rooms/allocation",
            icon: ClipboardCheck,
          },
        ],
      },
    ],
  },

  {
    title: "Billing",
    items: [
      {
        label: "Billing",
        icon: CreditCard,
        children: [
          {
            label: "Generate Bill",
            href: "/receptionist/billing/generate",
            icon: Receipt,
          },
          {
            label: "Payments",
            href: "/receptionist/billing/payments",
            icon: CreditCard,
          },
          {
            label: "Invoices",
            href: "/receptionist/billing/invoices",
            icon: FileText,
          },
          {
            label: "Insurance",
            href: "/receptionist/billing/insurance",
            icon: Shield,
          },
        ],
      },
    ],
  },

  {
    title: "Communication",
    items: [
      {
        label: "Messages",
        href: "/receptionist/messages",
        icon: MessageSquare,
      },
      {
        label: "Notifications",
        href: "/receptionist/notifications",
        icon: Bell,
      },
      {
        label: "Announcements",
        href: "/receptionist/announcements",
        icon: Megaphone,
      },
    ],
  },

  {
    title: "Reports",
    items: [
      {
        label: "Reports",
        icon: FileText,
        children: [
          {
            label: "Daily",
            href: "/receptionist/reports/daily",
            icon: CalendarDays,
          },
          {
            label: "Admissions",
            href: "/receptionist/reports/admissions",
            icon: Building2,
          },
          {
            label: "Appointments",
            href: "/receptionist/reports/appointments",
            icon: ClipboardList,
          },
          {
            label: "Billing",
            href: "/receptionist/reports/billing",
            icon: CreditCard,
          },
        ],
      },
    ],
  },

  {
    title: "Account",
    items: [
      {
        label: "Profile",
        href: "/receptionist/profile",
        icon: UserCircle2,
      },
      {
        label: "Settings",
        icon: Settings,
        children: [
          {
            label: "Change Password",
            href: "/receptionist/settings/change-password",
            icon: KeyRound,
          },
          {
            label: "Change Email",
            href: "/receptionist/settings/change-email",
            icon: Mail,
          },
          {
            label: "Change Avatar",
            href: "/receptionist/settings/change-avatar",
            icon: ImageIcon,
          },
          {
            label: "MFA",
            href: "/receptionist/settings/mfa",
            icon: ShieldCheck,
          },
          {
            label: "Preferences",
            href: "/receptionist/settings/preferences",
            icon: SlidersHorizontal,
          },
          {
            label: "Privacy",
            href: "/receptionist/settings/privacy",
            icon: Shield,
          },
        ],
      },
    ],
  },
];

function isActivePath(pathname: string, href?: string) {
  if (!href) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

function hasActiveDescendant(item: MenuItem, pathname: string): boolean {
  if (isActivePath(pathname, item.href)) return true;
  return (
    item.children?.some((child) => hasActiveDescendant(child, pathname)) ??
    false
  );
}

function MenuNode({
  item,
  pathname,
  depth = 0,
}: {
  item: MenuItem;
  pathname: string;
  depth?: number;
}) {
  const active = isActivePath(pathname, item.href);
  const descendantActive = !active && hasActiveDescendant(item, pathname);
  const [open, setOpen] = useState(descendantActive);

  useEffect(() => {
    if (descendantActive) setOpen(true);
  }, [descendantActive]);

  const Icon = item.icon;
  const paddingLeft =
    depth === 0
      ? "pl-3"
      : depth === 1
        ? "pl-6"
        : depth === 2
          ? "pl-9"
          : "pl-12";

  if (item.href && !item.children?.length) {
    return (
      <Link
        href={item.href}
        className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-all ${paddingLeft} ${
          active
            ? "bg-cyan-50 text-cyan-700 ring-1 ring-cyan-200"
            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
        }`}
      >
        {Icon ? (
          <Icon
            className={`h-4 w-4 shrink-0 ${active ? "text-cyan-600" : "text-slate-400"}`}
          />
        ) : (
          <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
        )}
        <span className="truncate">{item.label}</span>
      </Link>
    );
  }

  return (
    <div className="space-y-1">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2 text-left text-sm transition-all ${paddingLeft} ${
          descendantActive || open
            ? "bg-cyan-50 text-cyan-700"
            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
        }`}
      >
        <span className="flex min-w-0 items-center gap-3">
          {Icon ? (
            <Icon
              className={`h-4 w-4 shrink-0 ${descendantActive || open ? "text-cyan-600" : "text-slate-400"}`}
            />
          ) : (
            <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
          )}
          <span className="truncate font-medium">{item.label}</span>
        </span>

        {item.children?.length ? (
          open ? (
            <ChevronDown className="h-4 w-4 shrink-0 text-slate-400" />
          ) : (
            <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" />
          )
        ) : null}
      </button>

      {open && item.children?.length ? (
        <div className="ml-5 space-y-1 border-l border-slate-200 pl-3">
          {item.children.map((child) => (
            <MenuNode
              key={child.label + (child.href ?? "group")}
              item={child}
              pathname={pathname}
              depth={depth + 1}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function ReceptionistSidebar() {
  const pathname = usePathname() || "/receptionist";

  return (
    <aside className="flex h-screen w-[320px] flex-col border-r border-slate-200 bg-white text-slate-900 shadow-sm">
      <div className="flex items-center gap-3 border-b border-slate-200 px-5 py-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-600 text-white shadow-sm shadow-cyan-200">
          <HeartPulse className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold tracking-tight text-slate-900">
            Receptionist Dashboard
          </p>
          <p className="text-xs text-slate-500">Clinical workspace</p>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <div className="space-y-5">
          {sections.map((section) => (
            <div key={section.title}>
              <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                {section.title}
              </p>

              <div className="space-y-1">
                {section.items.map((item) => (
                  <MenuNode
                    key={item.label + (item.href ?? "group")}
                    item={item}
                    pathname={pathname}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>

      <div className="border-t border-slate-200 p-3">
        <div className="grid grid-cols-2 gap-2">
          <Link
            href="/admin/notifications/email"
            className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900"
          >
            <Bell className="h-4 w-4 text-slate-400" />
            Alerts
          </Link>
          <Link
            href="/admin/settings/security"
            className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900"
          >
            <Shield className="h-4 w-4 text-slate-400" />
            Security
          </Link>
        </div>
      </div>
    </aside>
  );
}
