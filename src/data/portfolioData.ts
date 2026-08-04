import { Project, Metric, Certification } from '../types';

export const PERSONAL_INFO = {
  name: "Aaditya Patil",
  handle: "Aaditya-Patil29",
  role: "Backend-Focused Software Engineer | DevOps Engineer",
  tagline: "Building scalable cloud-native infrastructure, production-ready backend systems, and automated CI/CD pipelines.",
  email: "aadityapatil.dev@gmail.com",
  location: "India",
  github: "https://github.com/Aaditya-Patil29",
  linkedin: "https://linkedin.com/in/aaditya-patil-m1629",
  // Path to your resume PDF file. Place your PDF in the 'public' directory as 'resume.pdf' or update this URL.
  resumeUrl: "https://drive.google.com/file/d/19xOdpQR1HLz1z-fDO9GXusW15B3ZRs4P/view?usp=sharing",
  bio: "Computer Engineering Undergraduate passionate about Cloud Infrastructure, Backend Development, Automation, and System Design.",
};

export const METRICS_DATA: Metric[] = [
  {
    id: "projects",
    label: "Production Projects",
    value: 4,
    suffix: "+",
    description: "High performance backend & fullstack systems",
    iconName: "FolderGit2",
    status: "optimal"
  },
  {
    id: "pipelines",
    label: "CI/CD Pipelines",
    value: 12,
    suffix: "+",
    description: "Automated GitHub Actions & Docker workflows",
    iconName: "GitMerge",
    status: "active"
  },
  {
    id: "containers",
    label: "Containers Built",
    value: 150,
    suffix: "+",
    description: "Production Dockerized microservices",
    iconName: "Container",
    status: "synced"
  },
  {
    id: "cloud",
    label: "Cloud Platforms",
    value: 3,
    suffix: " Cloud",
    description: "AWS, Kubernetes & Hybrid Cloud Setup",
    iconName: "Cloud",
    status: "optimal"
  },
  {
    id: "repos",
    label: "GitHub Repositories",
    value: 18,
    suffix: " Public",
    description: "Open source & personal repositories",
    iconName: "GitBranch",
    status: "synced"
  },
  {
    id: "commits",
    label: "GitHub Commits",
    value: 1250,
    prefix: ">",
    suffix: "+",
    description: "Consistent code contributions & maintenance",
    iconName: "GitCommitHorizontal",
    status: "active"
  },
  {
    id: "availability",
    label: "System Availability SLA",
    value: 99.99,
    suffix: "%",
    description: "Target uptime for deployed services",
    iconName: "Activity",
    status: "optimal"
  },
  {
    id: "stack",
    label: "Tech Stack Tools",
    value: 16,
    suffix: " Tools",
    description: "DevOps, Cloud, Backend & Monitoring",
    iconName: "Cpu",
    status: "synced"
  }
];

export const TECH_STACK_CATEGORIES = [
  {
    category: "Cloud & DevOps",
    topics: [
      { name: "AWS", color: "#FF9900" },
      { name: "Docker", color: "#2496ED" },
      { name: "Kubernetes", color: "#326CE5" },
      { name: "Terraform", color: "#844FBA" },
      { name: "Linux", color: "#FCC624" },
      { name: "GitHub Actions", color: "#2088FF" },
      { name: "Jenkins", color: "#D24939" },
      { name: "Nginx", color: "#009639" },
      { name: "Redis", color: "#DC382D" },
    ]
  },
  {
    category: "Backend & Systems",
    topics: [
      { name: "Node.js", color: "#5FA04E" },
      { name: "Express.js", color: "#E6EDF3" },
      { name: "REST API", color: "#58A6FF" },
      { name: "Authentication", color: "#D29922" },
      { name: "JWT", color: "#FB015B" },
    ]
  },
  {
    category: "Databases",
    topics: [
      { name: "PostgreSQL", color: "#4169E1" },
      { name: "MongoDB", color: "#47A248" },
      { name: "Redis", color: "#DC382D" },
    ]
  },
  {
    category: "Frontend",
    topics: [
      { name: "React", color: "#61DAFB" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Tailwind CSS", color: "#06B6D4" },
      { name: "Vite", color: "#646CFF" },
    ]
  },
  {
    category: "Monitoring & Observability",
    topics: [
      { name: "Prometheus", color: "#E6522C" },
      { name: "Grafana", color: "#F46800" },
    ]
  },
  {
    category: "Version Control",
    topics: [
      { name: "Git", color: "#F05032" },
      { name: "GitHub", color: "#E6EDF3" },
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "novapay-digital-bank",
    name: "NovaPay Digital Bank",
    description: "Production-grade digital banking backend built using Node.js, Express, PostgreSQL, Docker, and JWT authentication.",
    fullDescription: "NovaPay is a high-security production-grade digital banking backend API. Features multi-account support, ACID transaction guarantees, JWT auth with refresh tokens, rate limiting, Docker containerization, and zero-downtime deployment workflows.",
    language: "TypeScript",
    languageColor: "#3178C6",
    topics: ["node.js", "express", "postgresql", "docker", "jwt", "rest-api", "devops", "aws"],
    stars: 24,
    forks: 7,
    updatedAt: "2 days ago",
    githubUrl: "https://github.com/Aaditya-Patil29/NovaPay-Digital-Bank",
    liveUrl: "https://api.novapay.internal-devops.net",
    readme: `# NovaPay Digital Bank - Production Core Backend

## Overview
NovaPay is a resilience-focused digital banking backend infrastructure engineered for zero transaction loss, strict ACID compliance, and instant horizontal scaling.

### Key Capabilities
- **Transaction Safety**: PostgreSQL row-level locks preventing race conditions during concurrent money transfers.
- **Authentication**: Dual-token OAuth2/JWT security model with Redis token blacklisting.
- **Containerization**: Multi-stage lightweight Docker image (<90MB) optimized for Alpine Linux.
- **Observability**: Prometheus metrics endpoint tracking http latency, error budgets, and DB pool connections.

\`\`\`bash
# Quick local run with Docker Compose
git clone https://github.com/Aaditya-Patil29/NovaPay-Digital-Bank.git
cd NovaPay-Digital-Bank
docker compose up -d
\`\`\`
`,
    architecture: {
      components: [
        "Cloudflare WAF / Rate Limiter",
        "NGINX Ingress Controller",
        "Node.js Core Banking API Cluster (K8s pods)",
        "PostgreSQL Master-Replica cluster with PgBouncer",
        "Redis Cache & Session Store"
      ],
      dataFlow: "Client -> WAF -> NGINX -> Node.js API -> Redis Auth Check -> PostgreSQL Transaction Exec -> Audit Log",
      highlights: [
        "Sub-50ms API response time",
        "Encrypted payload transport via TLS 1.3",
        "Automated database migrations on container start"
      ]
    },
    deployment: {
      environment: "Production AWS EKS",
      ci: "GitHub Actions",
      hosting: "AWS EC2 / EKS",
      containerized: true,
      commands: [
        "docker build -t novapay-api:latest .",
        "kubectl apply -f k8s/deployment.yaml",
        "helm upgrade --install novapay ./helm-chart"
      ]
    },
    apiEndpoints: [
      { method: "POST", path: "/api/v1/auth/register", description: "Registers new bank user with encrypted credentials" },
      { method: "POST", path: "/api/v1/accounts/transfer", description: "Executes atomic wire transfer between accounts" },
      { method: "GET", path: "/api/v1/transactions/ledger", description: "Fetches paginated account statement and audit log" },
      { method: "GET", path: "/health", description: "Liveness and Readiness check endpoint for Kubernetes probes" }
    ]
  },
  {
    id: "ai-resume-builder",
    name: "AI Resume Builder",
    description: "AI-powered resume builder with intelligent resume generation, authentication, responsive frontend, backend APIs, and deployment-ready architecture.",
    fullDescription: "An end-to-end fullstack platform that uses LLMs to structure, score, and optimize resumes for ATS standards. Built with React, TypeScript, Node.js, Express, MongoDB, and Docker.",
    language: "TypeScript",
    languageColor: "#3178C6",
    topics: ["react", "node.js", "mongodb", "express", "openai-api", "docker", "tailwind"],
    stars: 19,
    forks: 4,
    updatedAt: "1 week ago",
    githubUrl: "https://github.com/Aaditya-Patil29/AI-Resume-Builder",
    liveUrl: "https://ai-resume.devops.net",
    readme: `# AI Resume Builder & ATS Scanner

## Features
- **AI Keyword Optimization**: Integrates OpenAI API to parse job descriptions and recommend bullet point enhancements.
- **State Management**: React state + custom context with live PDF preview generation.
- **Docker Ready**: Standalone Docker containers for client, server, and mongo DB instance.

\`\`\`json
{
  "status": 200,
  "data": {
    "atsScore": 94,
    "suggestions": ["Include Kubernetes deployment experience in bullet #2"]
  }
}
\`\`\`
`,
    architecture: {
      components: [
        "React + Vite Frontend Client",
        "Node.js Express Backend API",
        "MongoDB Document Database",
        "OpenAI API Integration Layer",
        "Docker Compose Stack"
      ],
      dataFlow: "User -> React UI -> Express API -> OpenAI Prompt Processing -> MongoDB Document Storage -> PDF Engine",
      highlights: [
        "Instant live preview engine",
        "Token bucket rate-limiting for AI endpoint Protection",
        "Scalable document schemas"
      ]
    },
    deployment: {
      environment: "AWS EC2 Containerized",
      ci: "GitHub Actions Workflow",
      hosting: "Vercel + EC2",
      containerized: true,
      commands: [
        "docker build -t ai-resume-backend .",
        "docker-compose -f docker-compose.prod.yml up -d"
      ]
    },
    apiEndpoints: [
      { method: "POST", path: "/api/resume/generate", description: "Sends resume payload to OpenAI API for formatting" },
      { method: "POST", path: "/api/resume/ats-check", description: "Scores bullet points against specified job description" },
      { method: "GET", path: "/api/user/resumes", description: "Fetches user's saved resume documents" }
    ]
  },
  {
    id: "project-management-system",
    name: "Project Management System",
    description: "Backend-focused project management application with authentication, role-based access control, API architecture, JWT security, and scalable backend design.",
    fullDescription: "A enterprise-grade project management backend engineered for complex team hierarchies, permission matrix RBAC, sprint planning APIs, and automated task audit trails.",
    language: "JavaScript",
    languageColor: "#F7DF1E",
    topics: ["node.js", "express", "mongodb", "jwt", "rest-api", "docker", "rbac"],
    stars: 15,
    forks: 3,
    updatedAt: "2 weeks ago",
    githubUrl: "https://github.com/Aaditya-Patil29/Project-Management-System",
    liveUrl: "https://pms-api.devops.net",
    readme: `# Scalable Project Management API Engine

## Highlights
- **Role-Based Access Control (RBAC)**: Fine-grained permissions (Admin, Manager, Developer, Auditor).
- **MongoDB Aggregations**: Fast complex analytics for sprint velocity and task completion rates.
- **REST Best Practices**: Strict standard status codes, input validation using Joi/Zod, and structured error responses.
`,
    architecture: {
      components: [
        "Express REST Server",
        "JWT RBAC Middleware",
        "MongoDB Replica Set",
        "Docker Swarm Cluster"
      ],
      dataFlow: "Client Request -> JWT Middleware -> RBAC Permission Check -> Controller -> MongoDB Aggregation",
      highlights: [
        "Modular repository-service architecture pattern",
        "Comprehensive JSDoc & OpenAPI Swagger docs",
        "Automated Jest unit and integration testing suite"
      ]
    },
    deployment: {
      environment: "Docker Container Host",
      ci: "GitHub Actions (Lint, Test, Docker Build)",
      hosting: "DigitalOcean Droplet",
      containerized: true,
      commands: [
        "npm test",
        "docker build -t pms-backend:v1.0 ."
      ]
    },
    apiEndpoints: [
      { method: "POST", path: "/api/v1/projects", description: "Creates a new project workspace with assigned roles" },
      { method: "GET", path: "/api/v1/tasks/board", description: "Fetches aggregated board columns and cards" },
      { method: "PUT", path: "/api/v1/tasks/:id/status", description: "Updates task state and triggers webhook notification" }
    ]
  },
  {
    id: "social-post-project",
    name: "Social Post Project",
    description: "Full-stack social posting platform supporting user authentication, post creation, secure backend APIs, and responsive frontend.",
    fullDescription: "Modern fullstack social feed application with user auth, real-time post feeds, image uploads, like/comment features, and optimized mongo indexing.",
    language: "TypeScript",
    languageColor: "#3178C6",
    topics: ["react", "node.js", "mongodb", "express", "tailwindcss", "rest-api"],
    stars: 12,
    forks: 2,
    updatedAt: "3 weeks ago",
    githubUrl: "https://github.com/Aaditya-Patil29/Social-Post-Project",
    liveUrl: "https://social-feed.devops.net",
    readme: `# Social Post Fullstack Application

## Features
- **Feed Engine**: Infinite scroll implementation with paginated MongoDB queries.
- **Authentication**: Secure bcrypt password hashing + JWT HTTP-Only cookies.
- **Responsive UI**: Built with React, Tailwind CSS, and Framer Motion micro-interactions.
`,
    architecture: {
      components: [
        "React Frontend",
        "Node.js Backend Server",
        "MongoDB Database",
        "Cloudinary Media Engine"
      ],
      dataFlow: "React App -> Express Backend -> Cloudinary Image Upload -> MongoDB Indexing",
      highlights: [
        "Clean folder structure",
        "Optimized image loading",
        "Responsive across all screen sizes"
      ]
    },
    deployment: {
      environment: "Vercel + Render",
      ci: "GitHub Actions",
      hosting: "Cloud Native Hosting",
      containerized: true,
      commands: [
        "npm run build",
        "docker build -t social-app ."
      ]
    },
    apiEndpoints: [
      { method: "GET", path: "/api/posts/feed", description: "Retrieves paginated social feed posts" },
      { method: "POST", path: "/api/posts", description: "Creates a post with optional image upload" },
      { method: "POST", path: "/api/posts/:id/like", description: "Toggles user like status on post" }
    ]
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: "accenture-virtual-exp",
    title: "Accenture UK Developer & Technology Virtual Experience",
    issuer: "Forage / Accenture",
    issueDate: "2024",
    skills: ["Software Engineering", "Architecture", "Agile", "Technical Consulting", "Security"],
    badgeColor: "#A100FF",
    credentialId: "ACC-DEV-2024-89"
  },
  {
    id: "udemy-web-bootcamp",
    title: "Complete Web Development Bootcamp (97+ Hours)",
    issuer: "Udemy",
    issueDate: "2023",
    skills: ["Fullstack Web Development", "React", "Node.js", "MongoDB", "Express", "REST APIs"],
    badgeColor: "#A435F0",
    credentialId: "UC-97HRS-DEV-2023"
  }
];

export const ABOUT_README_CONTENT = {
  header: "Aaditya Patil / README.md",
  lastCommit: "feat(profile): update cloud-native devops engineer specs",
  content: `
# Aaditya Patil

\`\`\`json
{
  "name": "Aaditya Patil",
  "role": "Backend-Focused Software Engineer | DevOps Engineer",
  "education": "Computer Engineering Undergraduate",
  "status": "Available for Backend & Cloud-Native DevOps Roles"
}
\`\`\`

## Technical Focus
- ☁️ **Cloud Infrastructure**: AWS Services (EC2, S3, EKS, VPC, IAM), Containerization (Docker), Orchestration (Kubernetes).
- ⚙️ **Backend Engineering**: Node.js, Express.js, TypeScript, RESTful Microservices, Database Design (PostgreSQL, MongoDB, Redis).
- 🚀 **DevOps & Automation**: Infrastructure as Code (Terraform), CI/CD Pipelines (GitHub Actions, Jenkins), Linux Administration.
- 📊 **Monitoring & Reliability**: Observability, Prometheus, Grafana Dashboards, High Availability & Fault Tolerance.

## Current Learning & Deep Dives
- Advanced **Kubernetes Custom Resource Definitions (CRDs)** & Operators.
- Multi-region **Terraform** module architectures.
- **eBPF & Prometheus** telemetry optimization.

## Engineering Philosophy
> "Build scalable infrastructure, automate repetitive deployments, and design reliable, production-ready distributed systems that never sleep."
`
};
