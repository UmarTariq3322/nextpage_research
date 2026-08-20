"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  FolderKanban,
  Users,
  BookOpen,
  Database,
  UserCog,
  FileText,
  CalendarDays,
  CheckSquare,
  BarChart3,
  Settings,
  Bell,
  Search,
  ArrowUpRight,
  ArrowRight,
  Clock,
  ChevronRight,
  Beaker,
  GraduationCap,
  UserCheck,
  Shield,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type Role = "Student" | "Researcher" | "Mentor" | "Admin";

const roleTabs: Role[] = ["Student", "Researcher", "Mentor", "Admin"];

const roleIcons: Record<Role, typeof GraduationCap> = {
  Student: GraduationCap,
  Researcher: Beaker,
  Mentor: UserCheck,
  Admin: Shield,
};

function Stat({
  label,
  value,
  trend,
  Icon,
  tone = "brand",
}: {
  label: string;
  value: string;
  trend?: string;
  Icon: typeof ArrowUpRight;
  tone?: "brand" | "emerald" | "amber" | "sky";
}) {
  const tones: Record<string, string> = {
    brand: "bg-brand-50 text-brand-600 ring-brand-100",
    emerald: "bg-brand-50 text-brand-600 ring-brand-100",
    amber: "bg-amber-50 text-amber-600 ring-amber-100",
    sky: "bg-sky-50 text-sky-600 ring-sky-100",
  };
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
            {label}
          </p>
          <p className="mt-2 text-2xl font-bold text-ink-900">{value}</p>
          {trend && (
            <p className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-brand-700">
              <ArrowUpRight className="h-3.5 w-3.5" />
              {trend}
            </p>
          )}
        </div>
        <div
          className={cn(
            "grid h-10 w-10 shrink-0 place-items-center rounded-xl ring-1",
            tones[tone]
          )}
        >
          <Icon className="h-4.5 w-4.5" />
        </div>
      </div>
    </Card>
  );
}

function RecentList({
  items,
  Icon,
  statuses,
}: {
  items: string[];
  Icon: typeof FileText;
  statuses?: Record<string, string>;
}) {
  return (
    <ul className="divide-y divide-ink-100">
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-3 py-3.5">
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-ink-50 text-ink-500 ring-1 ring-ink-200">
            <Icon className="h-4 w-4" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="truncate text-sm font-medium text-ink-900">
              {item}
            </p>
            <p className="mt-0.5 text-xs text-ink-500 flex items-center gap-1">
              <Clock className="h-3 w-3" /> Updated {i + 1} day
              {i === 0 ? "" : "s"} ago
            </p>
          </div>
          {statuses?.[item] && (
            <Badge variant="outline" className="text-[11px]">
              {statuses[item]}
            </Badge>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function PortalPageClient() {
  const [role, setRole] = useState<Role>("Student");

  const RoleIcon = roleIcons[role];

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-ink-50/60">
      <div className="container py-10 lg:py-14">
        <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
          <div>
            <Badge variant="default" className="mb-3">
              Research Portal
            </Badge>
            <h1 className="font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              Dashboard · {role} View
            </h1>
            <p className="mt-2 text-sm text-ink-600">
              UI architecture mockup. Backend authentication and data layer are
              not implemented.
            </p>
          </div>
          <div className="inline-flex rounded-2xl border border-ink-200 bg-white p-1 shadow-sm">
            {roleTabs.map((r) => {
              const RI = roleIcons[r];
              const active = r === role;
              return (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRole(r)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-semibold transition-colors sm:text-sm",
                    active
                      ? "bg-brand-600 text-white shadow-sm"
                      : "text-ink-700 hover:bg-ink-50"
                  )}
                >
                  <RI className="h-4 w-4" />
                  <span className="hidden sm:inline">{r}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <aside className="hidden lg:col-span-3 lg:block">
            <Card className="p-4 sticky top-28">
              <nav className="space-y-1" aria-label="Portal navigation">
                {[
                  { Icon: LayoutDashboard, label: "Dashboard", active: true },
                  { Icon: FolderKanban, label: "Projects" },
                  { Icon: FileText, label: "Documents" },
                  { Icon: Users, label: "Collaborators" },
                  { Icon: CalendarDays, label: "Meetings" },
                  { Icon: BookOpen, label: "Publications" },
                  { Icon: Database, label: "Datasets" },
                  { Icon: CheckSquare, label: "Tasks" },
                  { Icon: Settings, label: "Settings" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className={cn(
                      "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors",
                      item.active
                        ? "bg-brand-50 text-brand-700 font-semibold"
                        : "text-ink-700 hover:bg-ink-50"
                    )}
                  >
                    <item.Icon className="h-4 w-4" />
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mt-6 rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 via-white to-brand-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                  Role selector
                </p>
                <p className="mt-2 text-sm font-semibold text-ink-900">
                  Viewing as: {role}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-ink-600">
                  Switch roles above to see the role-specific dashboard
                  concepts defined in the brief.
                </p>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="mt-4 w-full"
                >
                  <Link href="/contact">
                    Request portal access
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          </aside>

          <div className="lg:col-span-9 space-y-6">
            <Card className="p-5">
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                    <RoleIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink-900">
                      Welcome back, {role} (demo account)
                    </p>
                    <p className="text-xs text-ink-500">
                      {new Date().toLocaleDateString(undefined, {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
                <div className="flex w-full gap-2 sm:w-auto">
                  <div className="relative flex-1 sm:w-72 sm:flex-none">
                    <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
                    <Input placeholder="Search..." className="pl-10" />
                  </div>
                  <Button variant="ghost" size="icon" aria-label="Notifications">
                    <Bell className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>

            {role === "Student" && (
              <>
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                  <Stat
                    label="Research projects"
                    value="2"
                    trend="+1 this semester"
                    Icon={FolderKanban}
                    tone="brand"
                  />
                  <Stat
                    label="Mentor meetings"
                    value="12"
                    Icon={CalendarDays}
                    tone="sky"
                  />
                  <Stat
                    label="Open tasks"
                    value="7"
                    Icon={CheckSquare}
                    tone="amber"
                  />
                  <Stat
                    label="Documents reviewed"
                    value="18"
                    trend="+4 this week"
                    Icon={FileText}
                    tone="emerald"
                  />
                </div>
                <div className="grid gap-6 lg:grid-cols-5">
                  <Card className="p-6 lg:col-span-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-ink-900">
                        Assigned mentor
                      </h3>
                      <Badge variant="default">Active</Badge>
                    </div>
                    <div className="mt-4 flex items-center gap-4">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 text-base font-bold text-white">
                        MU
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-ink-900">
                          Muhammad Umar Tariq
                        </p>
                        <p className="text-sm text-ink-600">
                          AI Engineer & Researcher
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        Message mentor
                      </Button>
                    </div>
                    <div className="mt-6 border-t border-ink-100 pt-6">
                      <h4 className="text-sm font-semibold text-ink-900">
                        Progress · Project: Demo LLM Literature Assistant
                      </h4>
                      <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-ink-100">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-600"
                          style={{ width: "62%" }}
                        />
                      </div>
                      <div className="mt-2 flex justify-between text-xs text-ink-500">
                        <span>62% complete</span>
                        <span>Milestone 3 of 5</span>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 lg:col-span-2">
                    <h3 className="font-semibold text-ink-900">
                      Upcoming meetings
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {[
                        { t: "Literature review feedback", d: "Today · 3:00 PM" },
                        { t: "Methodology design review", d: "Thu · 4:30 PM" },
                        { t: "Results & analysis session", d: "Next Mon · 2:00 PM" },
                      ].map((m, i) => (
                        <li
                          key={i}
                          className="rounded-xl border border-ink-100 bg-ink-50/40 p-3.5"
                        >
                          <p className="text-sm font-semibold text-ink-900">
                            {m.t}
                          </p>
                          <p className="mt-0.5 text-xs text-ink-500">{m.d}</p>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-ink-900">Recent tasks</h3>
                    <Button variant="ghost" size="sm">
                      View all
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                  <RecentList
                    Icon={CheckSquare}
                    items={[
                      "Finalize research protocol",
                      "Draft introduction section",
                      "Finish baseline experiments",
                      "Share weekly progress report",
                    ]}
                    statuses={{
                      "Finalize research protocol": "In progress",
                      "Draft introduction section": "Review",
                      "Finish baseline experiments": "Next",
                      "Share weekly progress report": "Overdue",
                    }}
                  />
                </Card>
              </>
            )}

            {role === "Researcher" && (
              <>
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                  <Stat label="Active projects" value="5" Icon={FolderKanban} tone="brand" />
                  <Stat label="Publications (2025)" value="2" trend="+1 under review" Icon={BookOpen} tone="emerald" />
                  <Stat label="Datasets" value="9" Icon={Database} tone="sky" />
                  <Stat label="Collaborators" value="14" Icon={Users} tone="amber" />
                </div>
                <div className="grid gap-6 lg:grid-cols-5">
                  <Card className="p-6 lg:col-span-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-ink-900">Recent projects</h3>
                      <Badge variant="default">Portfolio</Badge>
                    </div>
                    <RecentList
                      Icon={FolderKanban}
                      items={[
                        "LLM-based Research Assistant",
                        "Self-Supervised Biomedical Vision",
                        "Tabular Synthesis Benchmark",
                        "Automated Screening Pipeline",
                      ]}
                      statuses={{
                        "LLM-based Research Assistant": "In Progress",
                        "Self-Supervised Biomedical Vision": "In Progress",
                        "Tabular Synthesis Benchmark": "Under Review",
                        "Automated Screening Pipeline": "In Progress",
                      }}
                    />
                  </Card>
                  <Card className="p-6 lg:col-span-2">
                    <h3 className="font-semibold text-ink-900">Datasets</h3>
                    <ul className="mt-4 space-y-3">
                      {[
                        { n: "Annotated Threat Reports", r: "12.4k rows", v: "v2.1" },
                        { n: "Retail Demand (Multi-region)", r: "1.8M rows", v: "v1.3" },
                        { n: "Screening Simulation Bench", r: "12 reviews", v: "v1.0" },
                      ].map((d, i) => (
                        <li
                          key={i}
                          className="flex items-center justify-between rounded-xl border border-ink-100 bg-ink-50/40 p-3.5"
                        >
                          <div>
                            <p className="text-sm font-semibold text-ink-900">
                              {d.n}
                            </p>
                            <p className="text-xs text-ink-500">{d.r}</p>
                          </div>
                          <Badge variant="outline">{d.v}</Badge>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-ink-900">
                      Publication pipeline
                    </h3>
                    <Button variant="outline" size="sm">
                      Add submission
                    </Button>
                  </div>
                  <RecentList
                    Icon={FileText}
                    items={[
                      "Demo: Tabular synthesis benchmark",
                      "Demo: RAG faithfulness evaluation",
                      "Demo: Screening simulation",
                    ]}
                    statuses={{
                      "Demo: Tabular synthesis benchmark": "Under Review",
                      "Demo: RAG faithfulness evaluation": "Writing",
                      "Demo: Screening simulation": "Analysis",
                    }}
                  />
                </Card>
              </>
            )}

            {role === "Mentor" && (
              <>
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                  <Stat label="Students advised" value="8" Icon={GraduationCap} tone="brand" />
                  <Stat label="Projects under mentorship" value="9" Icon={FolderKanban} tone="sky" />
                  <Stat label="Reviews due" value="4" Icon={BookOpen} tone="amber" />
                  <Stat label="Tasks assigned" value="32" Icon={CheckSquare} tone="emerald" />
                </div>
                <div className="grid gap-6 lg:grid-cols-5">
                  <Card className="p-6 lg:col-span-3">
                    <h3 className="font-semibold text-ink-900">Students</h3>
                    <ul className="mt-4 divide-y divide-ink-100">
                      {[
                        { n: "Student A", p: "LLM Literature Assistant", pct: 62, lvl: "MS" },
                        { n: "Student B", p: "CV for Dermatology", pct: 44, lvl: "BS" },
                        { n: "Student C", p: "Forecasting Benchmark", pct: 81, lvl: "MS" },
                        { n: "Student D", p: "Review: AI in Cybersec", pct: 30, lvl: "PhD" },
                      ].map((s, i) => (
                        <li key={i} className="py-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-ink-100 text-xs font-bold text-ink-700">
                                {s.n.split(" ").map((x) => x[1]).join("")}
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-ink-900">
                                  {s.n}
                                </p>
                                <p className="text-xs text-ink-500">
                                  {s.lvl} · {s.p}
                                </p>
                              </div>
                            </div>
                            <Badge variant="outline">{s.pct}%</Badge>
                          </div>
                          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-ink-100">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-600"
                              style={{ width: `${s.pct}%` }}
                            />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </Card>
                  <Card className="p-6 lg:col-span-2">
                    <h3 className="font-semibold text-ink-900">Reviews requested</h3>
                    <RecentList
                      Icon={FileText}
                      items={[
                        "Chapter 3 · Methodology",
                        "Introduction section draft",
                        "Paper: Results revision",
                      ]}
                      statuses={{
                        "Chapter 3 · Methodology": "Due Fri",
                        "Introduction section draft": "Urgent",
                        "Paper: Results revision": "Next week",
                      }}
                    />
                  </Card>
                </div>
              </>
            )}

            {role === "Admin" && (
              <>
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                  <Stat label="Total users" value="128" Icon={Users} tone="brand" />
                  <Stat label="Active programs" value="3" Icon={BookOpen} tone="sky" />
                  <Stat label="Projects" value="24" Icon={FolderKanban} tone="emerald" />
                  <Stat label="New leads" value="11" Icon={BarChart3} tone="amber" />
                </div>
                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="p-6">
                    <h3 className="font-semibold text-ink-900">
                      Admin shortcuts
                    </h3>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      {[
                        { Icon: UserCog, label: "Manage users" },
                        { Icon: BookOpen, label: "Programs & cohorts" },
                        { Icon: FolderKanban, label: "Projects" },
                        { Icon: FileText, label: "Publications" },
                        { Icon: BarChart3, label: "Leads & CRM" },
                        { Icon: Database, label: "Content editor" },
                      ].map(({ Icon, label }) => (
                        <button
                          key={label}
                          type="button"
                          className="flex items-center gap-3 rounded-xl border border-ink-200 bg-white p-3.5 text-left hover:border-ink-300 hover:bg-ink-50 transition-colors"
                        >
                          <div className="grid h-9 w-9 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                            <Icon className="h-4 w-4" />
                          </div>
                          <span className="text-sm font-semibold text-ink-900">
                            {label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </Card>
                  <Card className="p-6">
                    <h3 className="font-semibold text-ink-900">Recent activity</h3>
                    <ul className="mt-4 divide-y divide-ink-100">
                      {[
                        "New student registered · Foundations program",
                        "Publication draft submitted for review",
                        "3 consulting inquiries received",
                        "Program cohort enrollment closed",
                      ].map((t, i) => (
                        <li key={i} className="flex items-start gap-3 py-3.5">
                          <div className="mt-0.5 grid h-8 w-8 place-items-center rounded-xl bg-ink-50 text-ink-500 ring-1 ring-ink-200">
                            <BarChart3 className="h-3.5 w-3.5" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-ink-800">{t}</p>
                            <p className="mt-0.5 text-xs text-ink-500">
                              {i + 1} hour{i === 0 ? "" : "s"} ago
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-dashed border-ink-300 bg-white p-8 text-center">
          <h3 className="font-semibold text-ink-900">
            Research Portal — Product concept only
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-ink-600">
            This page shows the planned UI architecture for{" "}
            <code className="rounded bg-ink-50 px-1.5 py-0.5 text-[12px] ring-1 ring-ink-200">
              /portal
            </code>
            . Authentication, role-based access, and backend integration are
            intentionally out of scope for this release and can be layered on
            top of this structure.
          </p>
          <Button asChild size="lg" className="mt-6">
            <Link href="/contact">
              Talk about full portal build
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
