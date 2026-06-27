"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity,
  Bell,
  ArrowRightLeft,
  BedDouble,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  FileBarChart2,
  FileText,
  HeartPulse,
  LayoutDashboard,
  Building2,
  Microscope,
  PillBottle,
  Shield,
  Bandage,
  Syringe,
  Settings,
  TestTube2,
  MessageSquare,
  UserCircle2,
  Users,
  Droplets,
  UserCheck,
  UserPlus,
  TrendingUp,
  ShieldAlert,
  Clock3,
  Boxes,
  ClipboardCheck,
  Siren,
  PhoneCall,
  Megaphone,
  TriangleAlert,
  KeyRound,
  Mail,
  ImageIcon,
  ShieldCheck,
  SlidersHorizontal,
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
        href: "/nurse",
        icon: LayoutDashboard,
      },
    ],
  },

  {
    title: "Patient Care",
    items: [
      {
        label: "My Patients",
        icon: Users,
        children: [
          {
            label: "Assigned Patients",
            href: "/nurse/patients/assigned",
            icon: Users,
          },
          {
            label: "New Admissions",
            href: "/nurse/patients/admissions",
            icon: UserPlus,
          },
          {
            label: "Discharged Patients",
            href: "/nurse/patients/discharged",
            icon: UserCheck,
          },
          {
            label: "Patient Timeline",
            href: "/nurse/patients/timeline",
            icon: ClipboardList,
          },
        ],
      },

      {
        label: "Nursing Care",
        icon: HeartPulse,
        children: [
          {
            label: "Vitals Monitoring",
            href: "/nurse/nursing-care/vitals",
            icon: Activity,
          },
          {
            label: "Medication",
            href: "/nurse/nursing-care/medications",
            icon: PillBottle,
          },
          {
            label: "IV Fluids",
            href: "/nurse/nursing-care/iv-fluids",
            icon: Droplets,
          },
          {
            label: "Injections",
            href: "/nurse/nursing-care/injections",
            icon: Syringe,
          },
          {
            label: "Dressing Care",
            href: "/nurse/nursing-care/dressing",
            icon: Bandage,
          },
          {
            label: "Nursing Notes",
            href: "/nurse/nursing-care/notes",
            icon: FileText,
          },
        ],
      },

      {
        label: "Ward Management",
        icon: Building2,
        children: [
          {
            label: "Rooms & Beds",
            href: "/nurse/ward/rooms",
            icon: BedDouble,
          },
          {
            label: "Bed Allocation",
            href: "/nurse/ward/bed-allocation",
            icon: BedDouble,
          },
          {
            label: "Transfers",
            href: "/nurse/ward/transfers",
            icon: ArrowRightLeft,
          },
          {
            label: "Isolation Patients",
            href: "/nurse/ward/isolation",
            icon: ShieldAlert,
          },
        ],
      },

      {
        label: "Appointments",
        icon: CalendarDays,
        children: [
          {
            label: "Today's Schedule",
            href: "/nurse/appointments/today",
            icon: CalendarDays,
          },
          {
            label: "Upcoming Visits",
            href: "/nurse/appointments/upcoming",
            icon: TrendingUp,
          },
          {
            label: "Follow-ups",
            href: "/nurse/appointments/follow-ups",
            icon: Bell,
          },
        ],
      },
    ],
  },

  {
    title: "Clinical Services",
    items: [
      {
        label: "Laboratory",
        icon: Microscope,
        children: [
          {
            label: "Sample Collection",
            href: "/nurse/laboratory/sample-collection",
            icon: TestTube2,
          },
          {
            label: "Pending Samples",
            href: "/nurse/laboratory/pending",
            icon: Clock3,
          },
          {
            label: "Reports",
            href: "/nurse/laboratory/reports",
            icon: FileBarChart2,
          },
        ],
      },

      {
        label: "Pharmacy",
        icon: PillBottle,
        children: [
          {
            label: "Medicine Requests",
            href: "/nurse/pharmacy/requests",
            icon: PillBottle,
          },
          {
            label: "Medicine Stock",
            href: "/nurse/pharmacy/stock",
            icon: Boxes,
          },
          {
            label: "Prescription Pickup",
            href: "/nurse/pharmacy/pickup",
            icon: ClipboardCheck,
          },
        ],
      },

      {
        label: "Emergency",
        icon: Siren,
        children: [
          {
            label: "Emergency Calls",
            href: "/nurse/emergency/calls",
            icon: PhoneCall,
          },
          {
            label: "Critical Patients",
            href: "/nurse/emergency/critical",
            icon: HeartPulse,
          },
          {
            label: "Code Blue",
            href: "/nurse/emergency/code-blue",
            icon: ShieldAlert,
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
        href: "/nurse/messages",
        icon: MessageSquare,
      },
      {
        label: "Notifications",
        href: "/nurse/notifications",
        icon: Bell,
      },
      {
        label: "Announcements",
        href: "/nurse/announcements",
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
            label: "Daily Reports",
            href: "/nurse/reports/daily",
            icon: CalendarDays,
          },
          {
            label: "Shift Reports",
            href: "/nurse/reports/shift",
            icon: Clock3,
          },
          {
            label: "Incident Reports",
            href: "/nurse/reports/incidents",
            icon: TriangleAlert,
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
        href: "/nurse/profile",
        icon: UserCircle2,
      },
      {
        label: "Settings",
        icon: Settings,
        children: [   
          {
            label: "Change Password",
            href: "/nurse/settings/change-password",
            icon: KeyRound,
          },
          {
            label: "Change Email",
            href: "/nurse/settings/change-email",
            icon: Mail,
          },
          {
            label: "Change Avatar",
            href: "/nurse/settings/change-avatar",
            icon: ImageIcon,
          },
          {
            label: "MFA",
            href: "/nurse/settings/mfa",
            icon: ShieldCheck,
          },
          {
            label: "Preferences",
            href: "/nurse/settings/preferences",
            icon: SlidersHorizontal,
          },
          {
            label: "Privacy",
            href: "/nurse/settings/privacy",
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

export default function NurseSidebar() {
  const pathname = usePathname() || "/nurse";

  return (
    <aside className="flex h-screen w-[320px] flex-col border-r border-slate-200 bg-white text-slate-900 shadow-sm">
      <div className="flex items-center gap-3 border-b border-slate-200 px-5 py-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-600 text-white shadow-sm shadow-cyan-200">
          <HeartPulse className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold tracking-tight text-slate-900">
            Nurse Panel
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
