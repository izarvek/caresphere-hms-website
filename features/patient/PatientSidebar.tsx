"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  CalendarDays,
  FileText,
  PillBottle,
  CreditCard,
  Activity,
  LifeBuoy,
  MessageSquare,
  Bell,
  UserCircle2,
  Settings,
  ChevronDown,
  ChevronRight,
  HeartPulse,
  ArrowLeftRight,
  KeyRound,
  Mail,
  ImageIcon,
  ShieldCheck,
  ClipboardList,
  PhoneCall,
  ScanSearch,
  Shield,
  Stethoscope,
  Radar,
  TriangleAlert,
  Syringe,
} from "lucide-react";

type MenuItem = {
  title: string;
  href?: string;
  icon?: LucideIcon;
  children?: MenuItem[];
};

type Section = {
  title: string;
  items: MenuItem[];
};

const menu: Section[] = [
  {
    title: "Overview",
    items: [{ title: "Dashboard", href: "/patient", icon: LayoutDashboard }],
  },
  {
    title: "Clinical",
    items: [
      {
        title: "Appointments",
        href: "/patient/appointments",
        icon: CalendarDays,
        children: [
          { title: "Upcoming", href: "/patient/appointments/upcoming", icon: CalendarDays },
          { title: "Completed", href: "/patient/appointments/completed", icon: ClipboardList },
          { title: "Cancelled", href: "/patient/appointments/cancelled", icon: TriangleAlert },
          { title: "Reschedule", href: "/patient/appointments/reschedule", icon: ArrowLeftRight },
        ],
      },
      {
        title: "Reports",
        href: "/patient/reports",
        icon: FileText,
        children: [
          { title: "Lab Reports", href: "/patient/reports/lab", icon: ScanSearch },
          { title: "Medical Reports", href: "/patient/reports/medical", icon: ClipboardList },
          { title: "Radiology", href: "/patient/reports/radiology", icon: Radar },
          { title: "Prescriptions", href: "/patient/reports/prescriptions", icon: PillBottle },
        ],
      },
      {
        title: "Prescriptions",
        href: "/patient/prescriptions",
        icon: PillBottle,
        children: [
          { title: "Active", href: "/patient/prescriptions/active", icon: PillBottle },
          { title: "Completed", href: "/patient/prescriptions/completed", icon: ClipboardList },
          { title: "History", href: "/patient/prescriptions/history", icon: FileText },
        ],
      },
      {
        title: "Health",
        href: "/patient/health",
        icon: Activity,
        children: [
          { title: "Vitals", href: "/patient/health/vitals", icon: Activity },
          { title: "Medications", href: "/patient/health/medications", icon: PillBottle },
          { title: "Symptoms", href: "/patient/health/symptoms", icon: ClipboardList },
          { title: "Allergies", href: "/patient/health/allergies", icon: Shield },
          { title: "Vaccination", href: "/patient/health/vaccination", icon: Syringe },
        ],
      },
    ],
  },
  {
    title: "Finance",
    items: [
      {
        title: "Billing",
        href: "/patient/billing",
        icon: CreditCard,
        children: [
          { title: "Invoices", href: "/patient/billing/invoices", icon: FileText },
          { title: "Payments", href: "/patient/billing/payments", icon: CreditCard },
          { title: "Insurance", href: "/patient/billing/insurance", icon: Shield },
          { title: "Transactions", href: "/patient/billing/transactions", icon: ClipboardList },
        ],
      },
    ],
  },
  {
    title: "Support",
    items: [
      {
        title: "Messages",
        href: "/patient/support/messages",
        icon: MessageSquare,
      },
      {
        title: "Notifications",
        href: "/patient/support/notifications",
        icon: Bell,
      },
      {
        title: "Help Center",
        href: "/patient/support/help-center",
        icon: LifeBuoy,
      },
      {
        title: "Emergency",
        href: "/patient/support/emergency",
        icon: PhoneCall,
      },
    ],
  },
  {
    title: "Account",
    items: [
      { title: "Profile", href: "/patient/profile", icon: UserCircle2 },
      {
        title: "Settings",
        href: "/patient/settings",
        icon: Settings,
        children: [
          { title: "Password", href: "/patient/settings/password", icon: KeyRound },
          { title: "Email", href: "/patient/settings/email", icon: Mail },
          { title: "Avatar", href: "/patient/settings/avatar", icon: ImageIcon },
          { title: "MFA", href: "/patient/settings/mfa", icon: ShieldCheck },
          { title: "Privacy", href: "/patient/settings/privacy", icon: Shield },
          { title: "Preferences", href: "/patient/settings/preferences", icon: Settings },
        ],
      },
    ],
  },
];

function isActive(path: string, href?: string) {
  if (!href) return false;
  return path === href || path.startsWith(`${href}/`);
}

function hasActiveDescendant(item: MenuItem, path: string): boolean {
  if (isActive(path, item.href)) return true;
  return item.children?.some((child) => hasActiveDescendant(child, path)) ?? false;
}

function MenuItemRow({
  item,
  path,
  depth = 0,
  openState,
  toggle,
}: {
  item: MenuItem;
  path: string;
  depth?: number;
  openState: Record<string, boolean>;
  toggle: (key: string) => void;
}) {
  const active = isActive(path, item.href);
  const descendantActive = !active && hasActiveDescendant(item, path);
  const key = item.title;
  const isOpen = openState[key] ?? descendantActive;
  const Icon = item.icon;

  const padding = depth === 0 ? "pl-3" : "pl-4";

  const rowClass = `flex w-full items-center rounded-xl px-3 py-2 text-sm transition-all ${
    active || descendantActive
      ? "bg-cyan-50 text-cyan-700 ring-1 ring-cyan-200"
      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
  }`;

  const leftClass = "flex min-w-0 flex-1 items-center gap-3";

  if (item.href && !item.children?.length) {
    return (
      <Link href={item.href} className={`${rowClass} ${padding}`}>
        <span className={leftClass}>
          {Icon ? (
            <Icon
              className={`h-4 w-4 shrink-0 ${
                active ? "text-cyan-600" : "text-slate-400"
              }`}
            />
          ) : (
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
          )}
          <span className="truncate">{item.title}</span>
        </span>
      </Link>
    );
  }

  return (
    <div className="space-y-1">
      <button
        type="button"
        onClick={() => toggle(key)}
        className={`${rowClass} ${padding}`}
      >
        <span className={leftClass}>
          {Icon ? (
            <Icon
              className={`h-4 w-4 shrink-0 ${
                active || descendantActive || isOpen ? "text-cyan-600" : "text-slate-400"
              }`}
            />
          ) : (
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
          )}
          <span className="truncate font-medium">{item.title}</span>
        </span>

        {isOpen ? (
          <ChevronDown className="h-4 w-4 shrink-0 text-slate-400" />
        ) : (
          <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" />
        )}
      </button>

      {isOpen && item.children?.length ? (
        <div className="ml-4 space-y-1 border-l border-slate-200 pl-3">
          {item.children.map((child) => (
            <MenuItemRow
              key={child.title + (child.href ?? "group")}
              item={child}
              path={path}
              depth={depth + 1}
              openState={openState}
              toggle={toggle}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function PatientSidebar() {
  const path = usePathname() || "/patient";

  const [openState, setOpenState] = useState<Record<string, boolean>>({
    Appointments: false,
    Reports: false,
    Prescriptions: false,
    Health: false,
    Billing: false,
    Settings: false,
  });

  const toggle = (key: string) => {
    setOpenState((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-600 text-white shadow-sm shadow-cyan-200">
            <HeartPulse className="h-5 w-5" />
          </div>

          <div className="min-w-0">
            <p className="truncate font-semibold text-slate-900">
              Patient Portal
            </p>
            <p className="truncate text-xs text-slate-500">
              Health Management System
            </p>
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-4">
        <div className="space-y-5">
          {menu.map((section) => (
            <div key={section.title}>
              <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                {section.title}
              </p>

              <div className="space-y-1">
                {section.items.map((item) => (
                  <MenuItemRow
                    key={item.title + (item.href ?? "group")}
                    item={item}
                    path={path}
                    openState={openState}
                    toggle={toggle}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>

      <div className="border-t border-slate-200 p-4">
        <button className="flex w-full items-center gap-3 rounded-xl p-2 transition hover:bg-slate-100">
          <UserCircle2 className="h-10 w-10 shrink-0 text-cyan-600" />

          <div className="min-w-0 text-left">
            <p className="truncate text-sm font-medium text-slate-900">
              John Doe
            </p>
            <p className="truncate text-xs text-slate-500">
              Patient Account
            </p>
          </div>
        </button>
      </div>
    </aside>
  );
}