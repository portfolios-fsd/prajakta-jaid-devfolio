export const profile = {
  name: "Prajakta Jaid",
  title: "Full Stack Developer",
  tagline:
    "Senior Software Engineer with 5+ years building scalable Java & Spring Boot services, event-driven systems with Kafka, and React interfaces — now bringing AI into everyday engineering workflows.",
  location: "Pune, India",
  email: "jaidprajakta28@gmail.com",
  phone: "+91 74200 64945",
  linkedin: "https://www.linkedin.com/in/prajakta-jaid-a13430155",
  github: "https://github.com/prajaktajaid",
};

export const stats = [
  { value: "5+", label: "Years experience" },
  { value: "4", label: "Cloud certifications" },
];

export const about = [
  "I'm a Senior Software Engineer specialising in full-stack Java development — Spring Boot, microservices and RESTful APIs — with a strong record in performance optimisation and large-scale data integrity work using Kafka and RabbitMQ.",
  "On the frontend I work with React, JavaScript and TypeScript, so I can carry a feature from database schema to the screen. I deploy cloud-native with Docker, Kubernetes and CI/CD, and I test seriously with JUnit and Mockito.",
  "Lately I'm most excited by AI-driven engineering: I built and integrated AI-powered skills on an MCP server architecture to streamline workflows and raise output quality.",
];

export const skillGroups = [
  {
    label: "Core Backend",
    items: [
      "Java 8/J2EE",
      "Spring Boot",
      "Microservices",
      "REST/SOAP",
      "GraphQL",
      "Hibernate/JPA",
      "Node.js",
    ],
  },
  {
    label: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "AngularJS", "HTML", "CSS", "jQuery"],
  },
  {
    label: "Databases & Messaging",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Apache Kafka", "RabbitMQ"],
  },
  {
    label: "Cloud & DevOps",
    items: ["Azure", "AWS", "Docker", "Kubernetes", "OpenShift", "Jenkins", "GitLab CI"],
  },
  {
    label: "AI & Emerging Tech",
    items: ["MCP servers", "AI integration", "AI agents", "Prompt engineering"],
  },
  {
    label: "Quality & Practice",
    items: ["JUnit", "Mockito", "TDD", "SAFe Agile", "Spring Batch", "Quartz"],
  },
];

export const experience = [
  {
    company: "Nitor Infotech",
    role: "Senior Software Engineer",
    period: "Aug 2025 — Present",
    points: [
      "Building a large-scale data integrity & measurement platform handling millions of records for multiple clients.",
      "Integrated Kafka and RabbitMQ for reliable real-time messaging across distributed services.",
      "Led the Spring Boot 4 and Jackson 4 migration across DO services; cut execution time 20% through multithreading, batching and refactoring.",
      "Engineered AI-driven personalised skills on an MCP server architecture.",
    ],
  },
  {
    company: "Volkswagen IT Service",
    role: "Software Engineer",
    period: "Dec 2023 — Jul 2025",
    points: [
      "Developed APIs with Java 8, Spring Boot and microservices; contributed to Azure cloud solutions.",
      "Worked across React frontends and DevOps tooling: OpenShift, Bamboo, JFrog, Kubernetes.",
      "Practised TDD with JUnit and Mockito inside a SAFe Agile delivery model.",
    ],
  },
  {
    company: "Accenture",
    role: "Application Development Analyst",
    period: "Dec 2021 — Dec 2023",
    points: [
      "Built Java/J2EE and Spring services with MySQL and ORM layers for banking and finance clients.",
      "Delivered development and unit testing alongside business stakeholders, with AWS exposure.",
    ],
  },
  {
    company: "DXC Technology",
    role: "Associate Professional Software Engineer",
    period: "Jul 2021 — Dec 2021",
    points: [
      "Backend development, bug fixing and unit testing across core Java applications.",
      "Collaborated cross-functionally on clean code standards and OOP fundamentals.",
    ],
  },
];

export const education = {
  degree: "B.E. Computer Engineering",
  school: "Dr. D. Y. Patil Institute of Technology, Pune",
  detail: "CGPA 8.84 · Jul 2021",
};

export interface Certification {
  title: string;
  code?: string;
  issuer: string;
  badgeType:
    | "microsoft"
    | "googlecloud"
    | "upgrad"
    | "coursera"
    | "cognixia"
    | "kodekloud"
    | "newrelic"
    | "aws"
    | "github"
    | "linkedin"
    | "kafka";
  skills: string[];
}

export const certifications: Certification[] = [
  {
    title: "Microsoft Certified: Azure Developer Associate",
    code: "AZ-204",
    issuer: "Microsoft",
    badgeType: "microsoft",
    skills: [
      "Azure App Services",
      "Azure Functions",
      "Cosmos DB",
      "Cloud Security",
      "Blob Storage",
    ],
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    code: "AZ-900",
    issuer: "Microsoft",
    badgeType: "microsoft",
    skills: ["Cloud Concepts", "Azure Architecture", "Governance & Compliance", "Cost Management"],
  },
  {
    title: "Google Cloud Certified: Associate Cloud Engineer",
    code: "ACE",
    issuer: "Google Cloud",
    badgeType: "googlecloud",
    skills: ["Google Compute Engine", "GKE / Kubernetes", "Cloud IAM", "VPC Networking"],
  },
  {
    title: "Cloud DevOps Certification",
    code: "DevOps",
    issuer: "upGrad",
    badgeType: "upgrad",
    skills: ["Docker", "Kubernetes (K8s)", "Jenkins CI/CD", "Infrastructure as Code"],
  },
  {
    title: "Learn By Doing: Beginner's Guide to Apache Kafka - Foundations and Development",
    code: "Kafka",
    issuer: "KodeKloud",
    badgeType: "kodekloud",
    skills: ["Event Streaming", "Topic Partitions", "Producers & Consumers", "Kafka Brokers"],
  },
  {
    title: "Docker & Kubernetes DevOps Certification",
    code: "K8s",
    issuer: "KodeKloud",
    badgeType: "kodekloud",
    skills: ["Kubernetes Architecture", "Pod Scheduling", "Ingress & Services", "Helm Charts"],
  },
  {
    title: "Front-End Development with React",
    code: "React",
    issuer: "Coursera",
    badgeType: "coursera",
    skills: ["React 18", "Hooks & State", "TypeScript", "Component Architecture"],
  },
  {
    title: "Full Stack Observability",
    code: "APM",
    issuer: "New Relic",
    badgeType: "newrelic",
    skills: ["APM Metrics", "Distributed Tracing", "Log Analysis", "Alerting & SLIs"],
  },
  {
    title: "AWS Cloud Computing 101",
    code: "AWS",
    issuer: "Amazon Web Services",
    badgeType: "aws",
    skills: ["EC2 & S3", "IAM Security", "VPC & CloudWatch", "Serverless Basics"],
  },
  {
    title: "GitHub Copilot GenAI Persona: Platform Engineering",
    code: "GenAI",
    issuer: "Cognixia",
    badgeType: "cognixia",
    skills: ["Copilot CLI", "Prompt Engineering", "Automated Testing", "CI/CD Actions"],
  },
  {
    title: "Generative AI Level 101",
    code: "AI 101",
    issuer: "Cognixia",
    badgeType: "cognixia",
    skills: ["LLM Fundamentals", "Prompt Architecture", "AI Ethics", "Agentic Systems"],
  },
];
