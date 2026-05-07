export const portfolioConfig = {
  githubUsername: "Aaditya-Patil29",
  links: {
    github: "https://github.com/Aaditya-Patil29",
    linkedin: "https://www.linkedin.com/in/aaditya-patil-m1629/",
    x: "https://x.com/Aaditya_Patil_1",
    email: "aadityapatil7260@gmail.com"
  },
  // Add repo name(s) here for live card metadata.
  // If repo is omitted, the card uses a dummy link (`#`) until we match a repo.
  featured: [
    {
      title: "Kubernetes CI/CD Orchestrator",
      description:
        "Self-healing delivery pipeline with ArgoCD + Helm, cutting rollback time by 75%.",
      tags: ["Kubernetes", "Helm", "ArgoCD", "Prometheus"],
      repo: undefined
    },
    {
      title: "Azure IaC Automation Engine",
      description:
        "Terraform modules for multi-region Azure, reducing environment provisioning from days to minutes.",
      tags: ["Azure", "Terraform", "Monitoring", "Security"],
      repo: undefined
    },
    {
      title: "Serverless MERN Data Pipeline",
      description:
        "Full-stack MERN app deployed via Next.js + edge/serverless patterns.",
      tags: ["Next.js", "AWS", "MongoDB", "Node.js"],
      repo: undefined
    },
    {
      title: "Open-source work",
      description: "Tools, scripts, and learning projects I share publicly.",
      tags: ["GitHub", "CI/CD", "DevOps"],
      repo: undefined
    }
  ]
} as const;

