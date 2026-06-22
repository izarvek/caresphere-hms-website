"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity,
  Bell,
  BookOpen,
  Brain,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  FileBarChart2,
  FileText,
  HeartPulse,
  LayoutDashboard,
  Layers3,
  Microscope,
  PillBottle,
  Shield,
  Stethoscope,
  Syringe,
  Settings,
  TestTube2,
  MessageSquare,
  UserCircle2,
  Users,
  Sparkles,
  WandSparkles,
  ScrollText,
  TrendingUp,
  Bot,
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
    items: [{ label: "Dashboard", href: "/doctor", icon: LayoutDashboard }],
  },
  {
    title: "Clinical Work",
    items: [
      {
        label: "Appointments",
        icon: CalendarDays,
        children: [
          {
            label: "Today",
            href: "/doctor/appointments/today",
            icon: CalendarDays,
          },
          {
            label: "Upcoming",
            href: "/doctor/appointments/upcoming",
            icon: TrendingUp,
          },
          {
            label: "Completed",
            href: "/doctor/appointments/completed",
            icon: ClipboardList,
          },
          {
            label: "Calendar",
            href: "/doctor/appointments/calendar",
            icon: LayoutDashboard,
          },
        ],
      },
      {
        label: "Patients",
        icon: Users,
        children: [
          { label: "All Patients", href: "/doctor/patients", icon: Users },
          {
            label: "Recent Patients",
            href: "/doctor/patients/recent",
            icon: Activity,
          },
          {
            label: "Critical Patients",
            href: "/doctor/patients/critical",
            icon: HeartPulse,
          },
          {
            label: "Follow Ups",
            href: "/doctor/patients/follow-ups",
            icon: Bell,
          },
        ],
      },
      {
        label: "Consultations",
        icon: Stethoscope,
        children: [
          {
            label: "New Consultation",
            href: "/doctor/consultations/new",
            icon: Stethoscope,
          },
          {
            label: "Ongoing",
            href: "/doctor/consultations/ongoing",
            icon: Activity,
          },
          {
            label: "History",
            href: "/doctor/consultations/history",
            icon: FileText,
          },
        ],
      },
      {
        label: "Prescriptions",
        icon: FileText,
        children: [
          {
            label: "Create Prescription",
            href: "/doctor/prescriptions/create",
            icon: FileText,
          },
          {
            label: "Templates",
            href: "/doctor/prescriptions/templates",
            icon: Layers3,
          },
          {
            label: "History",
            href: "/doctor/prescriptions/history",
            icon: ScrollText,
          },
        ],
      },
      {
        label: "Medical Records",
        icon: ClipboardList,
        children: [
          {
            label: "All Records",
            href: "/doctor/medical-records",
            icon: ClipboardList,
          },
          {
            label: "Diagnoses",
            href: "/doctor/medical-records/diagnoses",
            icon: Activity,
          },
          {
            label: "Allergies",
            href: "/doctor/medical-records/allergies",
            icon: Shield,
          },
          {
            label: "History",
            href: "/doctor/medical-records/history",
            icon: ScrollText,
          },
        ],
      },
    ],
  },
  {
    title: "Diagnostics",
    items: [
      {
        label: "Laboratory",
        icon: Microscope,
        children: [
          {
            label: "Lab Reports",
            href: "/doctor/laboratory/reports",
            icon: FileBarChart2,
          },
          {
            label: "Pending Reports",
            href: "/doctor/laboratory/pending",
            icon: Bell,
          },
          {
            label: "Completed Reports",
            href: "/doctor/laboratory/completed",
            icon: FileText,
          },
        ],
      },
      {
        label: "Radiology",
        icon: TestTube2,
        children: [
          { label: "X-Ray", href: "/doctor/radiology/xray", icon: FileText },
          {
            label: "CT Scan",
            href: "/doctor/radiology/ct-scan",
            icon: FileBarChart2,
          },
          { label: "MRI", href: "/doctor/radiology/mri", icon: Brain },
          {
            label: "Ultrasound",
            href: "/doctor/radiology/ultrasound",
            icon: Activity,
          },
        ],
      },
    ],
  },
  {
    title: "Clinical Intelligence",
    items: [
      {
        label: "Medicine Library",
        icon: PillBottle,
        children: [
          {
            label: "By Disease",
            icon: HeartPulse,
            children: [
              {
                label: "Diabetes",
                href: "/doctor/medicine-library/by-disease/diabetes",
                icon: HeartPulse,
              },
              {
                label: "Hypertension",
                href: "/doctor/medicine-library/by-disease/hypertension",
                icon: HeartPulse,
              },
              {
                label: "Asthma",
                href: "/doctor/medicine-library/by-disease/asthma",
                icon: HeartPulse,
              },
              {
                label: "Migraine",
                href: "/doctor/medicine-library/by-disease/migraine",
                icon: HeartPulse,
              },
              {
                label: "Infection",
                href: "/doctor/medicine-library/by-disease/infection",
                icon: HeartPulse,
              },
            ],
          },
          {
            label: "By Category",
            icon: BookOpen,
            children: [
              {
                label: "Antibiotics",
                href: "/doctor/medicine-library/by-category/antibiotics",
                icon: BookOpen,
              },
              {
                label: "Analgesics",
                href: "/doctor/medicine-library/by-category/analgesics",
                icon: BookOpen,
              },
              {
                label: "Antihistamines",
                href: "/doctor/medicine-library/by-category/antihistamines",
                icon: BookOpen,
              },
              {
                label: "Antivirals",
                href: "/doctor/medicine-library/by-category/antivirals",
                icon: BookOpen,
              },
              {
                label: "Vaccines",
                href: "/doctor/medicine-library/by-category/vaccines",
                icon: BookOpen,
              },
            ],
          },
          {
            label: "Drug Interactions",
            href: "/doctor/medicine-library/interactions",
            icon: Shield,
          },
          {
            label: "Side Effects",
            href: "/doctor/medicine-library/side-effects",
            icon: Sparkles,
          },
          {
            label: "Dosage Guide",
            href: "/doctor/medicine-library/dosage-guide",
            icon: ClipboardList,
          },
        ],
      },
      {
        label: "Disease Library",
        icon: Activity,
        children: [
          {
            label: "By Category",
            icon: Layers3,
            children: [
              {
                label: "Cardiology",
                href: "/doctor/disease-library/by-category/cardiology",
                icon: HeartPulse,
              },
              {
                label: "Neurology",
                href: "/doctor/disease-library/by-category/neurology",
                icon: Brain,
              },
              {
                label: "Orthopedics",
                href: "/doctor/disease-library/by-category/orthopedics",
                icon: Activity,
              },
              {
                label: "Dermatology",
                href: "/doctor/disease-library/by-category/dermatology",
                icon: Sparkles,
              },
              {
                label: "Pediatrics",
                href: "/doctor/disease-library/by-category/pediatrics",
                icon: Syringe,
              },
            ],
          },
          {
            label: "Symptoms",
            href: "/doctor/disease-library/symptoms",
            icon: Activity,
          },
          {
            label: "Diagnosis Guide",
            href: "/doctor/disease-library/diagnosis-guide",
            icon: ClipboardList,
          },
          {
            label: "Treatment Guide",
            href: "/doctor/disease-library/treatment-guide",
            icon: WandSparkles,
          },
          {
            label: "Prevention",
            href: "/doctor/disease-library/prevention",
            icon: Shield,
          },
        ],
      },
      {
        label: "Treatment Automation",
        icon: Bot,
        children: [
          {
            label: "Smart Suggestions",
            href: "/doctor/treatment-automation/smart-suggestions",
            icon: Sparkles,
          },
          {
            label: "Cure by Category",
            href: "/doctor/treatment-automation/cure-by-category",
            icon: WandSparkles,
          },
          {
            label: "Protocols",
            href: "/doctor/treatment-automation/protocols",
            icon: ScrollText,
          },
          {
            label: "Clinical Rules",
            href: "/doctor/treatment-automation/clinical-rules",
            icon: Shield,
          },
          {
            label: "Templates",
            href: "/doctor/treatment-automation/templates",
            icon: Layers3,
          },
        ],
      },
    ],
  },
  {
    title: "Communication",
    items: [
      {
        label: "Telemedicine",
        icon: MessageSquare,
        children: [
          {
            label: "Video Consultations",
            href: "/doctor/telemedicine/video",
            icon: MessageSquare,
          },
          {
            label: "Chat Consultations",
            href: "/doctor/telemedicine/chat",
            icon: MessageSquare,
          },
          {
            label: "History",
            href: "/doctor/telemedicine/history",
            icon: ScrollText,
          },
        ],
      },
      { label: "Messages", href: "/doctor/messages", icon: MessageSquare },
      { label: "Notifications", href: "/doctor/notifications", icon: Bell },
    ],
  },
  {
    title: "Account",
    items: [
      { label: "Profile", href: "/doctor/profile", icon: UserCircle2 },
      {
        label: "Settings",
        icon: Shield,
        children: [
          {
            label: "Change Password",
            href: "/doctor/settings/change-password",
            icon: Shield,
          },
          {
            label: "Change Email",
            href: "/doctor/settings/change-email",
            icon: FileText,
          },
          {
            label: "Change Avatar",
            href: "/doctor/settings/change-avatar",
            icon: UserCircle2,
          },
          { label: "MFA", href: "/doctor/settings/mfa", icon: Shield },
          {
            label: "Preferences",
            href: "/doctor/settings/preferences",
            icon: Settings,
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

export default function DoctorSidebar() {
  const pathname = usePathname() || "/doctor";

  return (
    <aside className="flex h-screen w-[320px] flex-col border-r border-slate-200 bg-white text-slate-900 shadow-sm">
      <div className="flex items-center gap-3 border-b border-slate-200 px-5 py-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-600 text-white shadow-sm shadow-cyan-200">
          <HeartPulse className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold tracking-tight text-slate-900">
            Doctor Panel
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
