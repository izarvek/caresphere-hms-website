"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BadgeCheck,
  Bell,
  BookOpen,
  Building2,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  CreditCard,
  FileBarChart2,
  FileText,
  HeartPulse,
  LayoutDashboard,
  FlaskConical,
  Microscope,
  Package,
  PillBottle,
  Settings2,
  Shield,
  Stethoscope,
  Syringe,
  UserCircle2,
  Users,
  Users2,
  UserRoundPlus,
  UserRoundSearch,
  UserRoundCog,
  Waves,
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
      { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
    ],
  },
  {
    title: "Core Operations",
    items: [
      {
        label: "Patients",
        icon: Users,
        children: [
          { label: "All Patients", href: "/admin/patients", icon: Users },
          { label: "Create Patient", href: "/admin/patients/create", icon: UserRoundPlus },
          {
            label: "Admissions",
            icon: ClipboardList,
            children: [
              { label: "Active", href: "/admin/patients/admissions/active", icon: BadgeCheck },
              { label: "Discharged", href: "/admin/patients/admissions/discharged", icon: FileText },
              { label: "Emergency", href: "/admin/patients/admissions/emergency", icon: Bell },
            ],
          },
          { label: "Appointments", href: "/admin/patients/appointments", icon: CalendarDays },
          { label: "Medical Records", href: "/admin/patients/medical-records", icon: FileText },
        ],
      },
      {
        label: "Doctors",
        icon: Stethoscope,
        children: [
          { label: "All Doctors", href: "/admin/doctors", icon: Users2 },
          { label: "Create Doctor", href: "/admin/doctors/create", icon: UserRoundPlus },
          {
            label: "Departments",
            icon: Building2,
            children: [
              { label: "Cardiology", href: "/admin/doctors/departments/cardiology", icon: HeartPulse },
              { label: "Neurology", href: "/admin/doctors/departments/neurology", icon: Waves },
              { label: "Orthopedics", href: "/admin/doctors/departments/orthopedics", icon: BookOpen },
              { label: "Pediatrics", href: "/admin/doctors/departments/pediatrics", icon: Syringe },
            ],
          },
          { label: "Schedules", href: "/admin/doctors/schedules", icon: CalendarDays },
          { label: "Attendance", href: "/admin/doctors/attendance", icon: BadgeCheck },
        ],
      },
      {
        label: "Nurses",
        icon: UserRoundCog,
        children: [
          { label: "All Nurses", href: "/admin/nurses", icon: Users2 },
          { label: "Create Nurse", href: "/admin/nurses/create", icon: UserRoundPlus },
          {
            label: "Wards",
            icon: ClipboardList,
            children: [
              { label: "ICU", href: "/admin/nurses/wards/icu", icon: Shield },
              { label: "Emergency", href: "/admin/nurses/wards/emergency", icon: Bell },
              { label: "General", href: "/admin/nurses/wards/general", icon: Users },
            ],
          },
          { label: "Attendance", href: "/admin/nurses/attendance", icon: BadgeCheck },
        ],
      },
      {
        label: "Receptionists",
        icon: UserRoundSearch,
        children: [
          { label: "All Receptionists", href: "/admin/receptionists", icon: Users2 },
          { label: "Create Receptionist", href: "/admin/receptionists/create", icon: UserRoundPlus },
          { label: "Appointments", href: "/admin/receptionists/appointments", icon: CalendarDays },
          { label: "Registrations", href: "/admin/receptionists/registrations", icon: ClipboardList },
          { label: "Attendance", href: "/admin/receptionists/attendance", icon: BadgeCheck },
        ],
      },
    ],
  },
  {
    title: "Clinical & Pharmacy",
    items: [
      {
        label: "Laboratory",
        icon: FlaskConical,
        children: [
          {
            label: "Tests",
            icon: Microscope,
            children: [
              { label: "Blood Test", href: "/admin/laboratory/tests/blood-test", icon: FlaskConical },
              { label: "Urine Test", href: "/admin/laboratory/tests/urine-test", icon: FileText },
              { label: "X-Ray", href: "/admin/laboratory/tests/xray", icon: FileBarChart2 },
            ],
          },
          { label: "Reports", href: "/admin/laboratory/reports", icon: FileBarChart2 },
          { label: "Technicians", href: "/admin/laboratory/technicians", icon: Users2 },
        ],
      },
      {
        label: "Pharmacy",
        icon: PillBottle,
        children: [
          {
            label: "Medicines",
            icon: Package,
            children: [
              { label: "Inventory", href: "/admin/pharmacy/medicines/inventory", icon: Package },
              { label: "Stock Alerts", href: "/admin/pharmacy/medicines/stock-alerts", icon: Bell },
              { label: "Suppliers", href: "/admin/pharmacy/medicines/suppliers", icon: Users2 },
            ],
          },
          { label: "Prescriptions", href: "/admin/pharmacy/prescriptions", icon: FileText },
          { label: "Sales", href: "/admin/pharmacy/sales", icon: CreditCard },
        ],
      },
    ],
  },
  {
    title: "Scheduling & Finance",
    items: [
      {
        label: "Appointments",
        icon: CalendarDays,
        children: [
          { label: "Upcoming", href: "/admin/appointments/upcoming", icon: CalendarDays },
          { label: "Completed", href: "/admin/appointments/completed", icon: BadgeCheck },
          { label: "Cancelled", href: "/admin/appointments/cancelled", icon: Bell },
          { label: "Calendar", href: "/admin/appointments/calendar", icon: LayoutDashboard },
        ],
      },
      {
        label: "Billing",
        icon: CreditCard,
        children: [
          { label: "Invoices", href: "/admin/billing/invoices", icon: FileText },
          { label: "Payments", href: "/admin/billing/payments", icon: CreditCard },
          { label: "Insurance", href: "/admin/billing/insurance", icon: Shield },
          { label: "Refunds", href: "/admin/billing/refunds", icon: FileBarChart2 },
          { label: "Expenses", href: "/admin/billing/expenses", icon: ClipboardList },
        ],
      },
      {
        label: "Reports",
        icon: FileBarChart2,
        children: [
          { label: "Revenue", href: "/admin/reports/revenue", icon: CreditCard },
          { label: "Patients", href: "/admin/reports/patients", icon: Users },
          { label: "Doctors", href: "/admin/reports/doctors", icon: Stethoscope },
          { label: "Appointments", href: "/admin/reports/appointments", icon: CalendarDays },
          { label: "Laboratory", href: "/admin/reports/laboratory", icon: FlaskConical },
        ],
      },
    ],
  },
  {
    title: "Administration",
    items: [
      {
        label: "Staff Management",
        icon: Shield,
        children: [
          { label: "Roles", href: "/admin/staff-management/roles", icon: UserCircle2 },
          { label: "Permissions", href: "/admin/staff-management/permissions", icon: Shield },
          { label: "Attendance", href: "/admin/staff-management/attendance", icon: BadgeCheck },
        ],
      },
      {
        label: "Notifications",
        icon: Bell,
        children: [
          { label: "Email", href: "/admin/notifications/email", icon: Bell },
          { label: "SMS", href: "/admin/notifications/sms", icon: FileText },
          { label: "Push", href: "/admin/notifications/push", icon: Bell },
        ],
      },
      {
        label: "Settings",
        icon: Settings2,
        children: [
          { label: "Hospital Profile", href: "/admin/settings/hospital-profile", icon: HeartPulse },
          { label: "Departments", href: "/admin/settings/departments", icon: Building2 },
          { label: "Roles", href: "/admin/settings/roles", icon: UserCircle2 },
          { label: "Security", href: "/admin/settings/security", icon: Shield },
          { label: "Integrations", href: "/admin/settings/integrations", icon: ClipboardList },
          { label: "Backup", href: "/admin/settings/backup", icon: FileBarChart2 },
        ],
      },
      { label: "Profile", href: "/admin/profile", icon: UserCircle2 },
    ],
  },
];

function isActivePath(pathname: string, href?: string) {
  if (!href) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

function hasActiveDescendant(item: MenuItem, pathname: string): boolean {
  if (isActivePath(pathname, item.href)) return true;
  return item.children?.some((child) => hasActiveDescendant(child, pathname)) ?? false;
}

function MenuNode({item, pathname, depth = 0,}: { item: MenuItem; pathname: string; depth?: number;}) {
  const active = isActivePath(pathname, item.href);
  const descendantActive = !active && hasActiveDescendant(item, pathname);
  const [open, setOpen] = useState(descendantActive);

  useEffect(() => {
    if (descendantActive) setOpen(true);
  }, [descendantActive]);

  const Icon = item.icon;
  const paddingLeft = depth === 0 ? "pl-3" : depth === 1 ? "pl-6" : depth === 2 ? "pl-9" : "pl-12";

  if (item.href && !item.children?.length) {
    return (
      <Link
        href={item.href}
        className={`group flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-all ${paddingLeft} ${
          active
            ? "bg-cyan-50 text-cyan-700 ring-1 ring-cyan-200"
            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
        }`}
      >
        {Icon ? (
          <Icon className={`h-4 w-4 shrink-0 ${active ? "text-cyan-600" : "text-slate-400"}`} />
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
            <Icon className={`h-4 w-4 shrink-0 ${descendantActive || open ? "text-cyan-600" : "text-slate-400"}`} />
          ) : (
            <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
          )}
          <span className="truncate font-medium">{item.label}</span>
        </span>
        {item.children?.length ? (
          open ? <ChevronDown className="h-4 w-4 shrink-0 text-slate-400" /> : <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" />
        ) : null}
      </button>

      {open && item.children?.length ? (
        <div className="space-y-1 border-l border-slate-200 ml-5 pl-3">
          {item.children.map((child) => (
            <MenuNode key={child.label + (child.href ?? "group")} item={child} pathname={pathname} depth={depth + 1} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function AdminSidebar() {
  const pathname = usePathname() || "/admin";

  return (
    <aside className="flex h-screen w-[320px] flex-col border-r border-slate-200 bg-white text-slate-900 shadow-sm">
      
      <div className="flex items-center gap-3 border-b border-slate-200 px-5 py-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-600 text-white shadow-sm shadow-cyan-200">
          <HeartPulse className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold tracking-tight text-slate-900">Hospital Admin</p>
          <p className="text-xs text-slate-500">Light dashboard shell</p>
        </div>
      </div>
      
      <nav className="flex-1 overflow-y-auto px-3 pb-5 mt-4">
        <div className="space-y-5">
          {sections.map((section) => (
            <div key={section.title}>
              <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                {section.title}
              </p>
              <div className="space-y-1">
                {section.items.map((item) => (
                  <MenuNode key={item.label + (item.href ?? "group")} item={item} pathname={pathname} />
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
