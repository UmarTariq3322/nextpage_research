import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { researchProjects } from "@/data/projects";
import { RegisterFormClient } from "./RegisterFormClient";

type Params = {
  params: { slug: string };
};

export async function generateMetadata({
  params,
}: Params): Promise<Metadata> {
  const project = researchProjects.find((p) => p.slug === params.slug);
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }
  return {
    title: `Register for ${project.title}`,
    description: `Register your interest to collaborate on ${project.title}`,
  };
}

export default function RegisterPage({ params }: Params) {
  const project = researchProjects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-ink-50/50 min-h-screen">
      <RegisterFormClient projectTitle={project.title} projectSlug={project.slug} />
    </div>
  );
}
