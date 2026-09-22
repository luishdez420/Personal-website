import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Credentials } from "@/components/Credentials";
import { GithubActivity } from "@/components/GithubActivity";
import { Hero } from "@/components/Hero";
import { Metrics } from "@/components/Metrics";
import { Process } from "@/components/Process";
import { ProjectShowcase } from "@/components/projects/ProjectShowcase";
import { SkillsEcosystem } from "@/components/SkillsEcosystem";
import { profile } from "@/data/profile";
import { credentials } from "@/data/credentials";
import { projects } from "@/data/projects";

export default function Home() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: profile.name,
      jobTitle: profile.title,
      email: profile.email,
      url: "https://luishernandez.dev",
      sameAs: [profile.github, profile.linkedin],
      hasCredential: credentials.map((credential) => ({
        "@type": "EducationalOccupationalCredential",
        name: credential.title,
        credentialCategory: "Professional certificate",
        recognizedBy: {
          "@type": "Organization",
          name: credential.issuer
        },
        dateCreated: credential.issuedOn,
        url: credential.credentialUrl
      })),
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Drexel University"
      },
      knowsAbout: ["Cloud infrastructure", "Backend engineering", "REST APIs", "AWS", "PostgreSQL", "AI integrations", "Full-stack development"]
    },
    ...projects.map((project) => ({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: project.title,
      applicationCategory: "DeveloperApplication",
      description: project.impact,
      creator: {
        "@type": "Person",
        name: profile.name
      },
      ...(project.githubUrl ? { codeRepository: project.githubUrl } : {})
    })),
    ...credentials.map((credential) => ({
      "@context": "https://schema.org",
      "@type": "EducationalOccupationalCredential",
      name: credential.title,
      description: credential.description,
      credentialCategory: "Professional certificate",
      dateCreated: credential.issuedOn,
      recognizedBy: {
        "@type": "Organization",
        name: credential.issuer
      },
      url: credential.credentialUrl
    }))
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <About />
      <Metrics />
      <ProjectShowcase />
      <SkillsEcosystem />
      <Credentials />
      <Process />
      <GithubActivity />
      <Contact />
    </main>
  );
}
