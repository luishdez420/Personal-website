import type { Metric, Project, SkillCategory } from "@/types/portfolio";

export const projects: Project[] = [
  {
    key: "techcomms",
    title: "TechComms",
    role: "Software Development Lead",
    impact: "AWS communication platform with 50+ endpoints, RBAC, AI summarization, and production-style performance testing.",
    problem:
      "Vanguard stakeholders needed a reliable communication and notification platform that could support scheduled, critical, and role-aware message delivery.",
    solution:
      "Led an AWS-based platform with API Gateway, Lambda handlers, PostgreSQL persistence, Cognito authentication, Bedrock summarization, SES email delivery, EventBridge scheduling, and CloudWatch observability.",
    decisions: [
      "Modeled hierarchical RBAC around real communication workflows instead of flat permissions.",
      "Split Lambda handlers by bounded workflow to keep backend ownership and testing clear.",
      "Used EventBridge for scheduled notifications and CloudWatch for operational visibility.",
      "Integrated Amazon Bedrock where summaries improved review speed without replacing human control."
    ],
    challenges: [
      "Coordinating stakeholder expectations across a senior capstone timeline.",
      "Maintaining predictable latency while orchestrating multiple AWS services.",
      "Testing critical notification behavior across authentication, scheduling, and persistence boundaries."
    ],
    results: [
      "50+ backend endpoints across communication, notification, and administration workflows.",
      "9 AWS services integrated into one deployable system.",
      "36 passing unit and integration tests.",
      "Load tested with 20 concurrent users at approximately 48 requests per second.",
      "p95 latency below approximately 130 ms for major workflows."
    ],
    stack: [
      "TypeScript",
      "Node.js",
      "AWS Lambda",
      "API Gateway",
      "Cognito",
      "PostgreSQL",
      "Amazon Bedrock",
      "SES",
      "EventBridge",
      "CloudWatch",
      "S3",
      "GitHub Actions"
    ],
    githubUrl: "https://github.com/trs329/TechComms",
    accent: "#5eead4",
    architecture: [
      { id: "frontend", label: "Frontend", detail: "Stakeholder-facing workspace for composing, reviewing, and scheduling communications.", x: 9, y: 42 },
      { id: "gateway", label: "API Gateway", detail: "Routes typed REST requests into focused Lambda handlers.", x: 29, y: 42 },
      { id: "lambda", label: "Lambda", detail: "Backend workflows for auth-aware CRUD, notifications, summaries, and admin logic.", x: 49, y: 42 },
      { id: "postgres", label: "PostgreSQL", detail: "Relational source of truth for users, messages, roles, schedules, and audit-ready state.", x: 70, y: 24 },
      { id: "bedrock", label: "Bedrock", detail: "AI summarization for long communication threads and review support.", x: 70, y: 60 },
      { id: "ses", label: "SES", detail: "Email delivery for scheduled and critical notifications.", x: 90, y: 24 },
      { id: "eventbridge", label: "EventBridge", detail: "Triggers scheduled notification workflows at the right time.", x: 90, y: 60 },
      { id: "cloudwatch", label: "CloudWatch", detail: "Centralized logs and metrics for debugging and operational confidence.", x: 49, y: 78 }
    ]
  },
  {
    key: "sentinel",
    title: "Sentinel API",
    role: "Backend Engineer",
    impact: "Production-style FastAPI service with JWT auth, migrations, Redis rate limits, and protected CRUD workflows.",
    problem:
      "A robust API needs more than endpoints: it needs authentication, input discipline, database evolution, rate safety, and repeatable deployment.",
    solution:
      "Built a FastAPI REST API with JWT authentication, PostgreSQL persistence, SQLAlchemy models, Alembic migrations, Redis-backed rate limiting, idempotency, Docker, CI, and Fly.io deployment.",
    decisions: [
      "Kept validation and response shapes consistent across protected endpoints.",
      "Used Alembic migrations so schema changes remain reviewable and reproducible.",
      "Added idempotent request handling to protect clients from accidental duplicate writes.",
      "Designed pagination and error responses as first-class API contract details."
    ],
    challenges: [
      "Balancing pragmatic API ergonomics with production-style safeguards.",
      "Keeping database, auth, and rate-limit behavior testable in local and deployed environments."
    ],
    results: [
      "JWT-protected CRUD endpoints.",
      "Redis-backed rate limiting.",
      "Dockerized local development and deployment path.",
      "Consistent validation, pagination, and error handling."
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "Redis", "JWT", "Docker", "GitHub Actions", "Fly.io"],
    githubUrl: "https://github.com/luishdez420/sentinel-api",
    liveUrl: "https://sentinel-api-cqjiqw.fly.dev/docs",
    accent: "#93c5fd",
    architecture: [
      { id: "auth", label: "Auth Request", detail: "Client submits credentials through a validated login route.", x: 12, y: 44 },
      { id: "jwt", label: "JWT", detail: "Signed token gives the client scoped access to protected resources.", x: 33, y: 25 },
      { id: "rate", label: "Redis Limit", detail: "Rate-limit checks protect the API from noisy or abusive clients.", x: 33, y: 64 },
      { id: "api", label: "FastAPI", detail: "Protected endpoint validates request shape, identity, idempotency, and pagination.", x: 56, y: 44 },
      { id: "db", label: "PostgreSQL", detail: "SQLAlchemy models and Alembic migrations keep persistence disciplined.", x: 82, y: 44 }
    ]
  },
  {
    key: "movie-room",
    title: "Movie Recommendation Platform",
    role: "Full-Stack Developer",
    impact: "Collaborative movie discovery app with real-time rooms, WebSockets, accounts, reviews, watchlists, and recommendations.",
    problem:
      "Choosing a movie with a group is slow because people evaluate options asynchronously and lose shared context.",
    solution:
      "Created a real-time platform where participants join rooms, synchronize movie selections, review TMDB-powered metadata, and save ratings, reviews, watchlists, and recommendations.",
    decisions: [
      "Used WebSockets for shared selection state instead of polling.",
      "Separated account features from room state so collaborative flows stay fast.",
      "Integrated TMDB as the metadata layer while keeping user preferences local to the platform."
    ],
    challenges: [
      "Synchronizing participant state without making the UI feel busy.",
      "Designing recommendations around both individual preference and group context."
    ],
    results: [
      "Real-time room creation and participant synchronization.",
      "Shared movie selection workflow.",
      "User accounts, ratings, reviews, watchlists, and personalized recommendations."
    ],
    stack: ["React", "Node.js", "WebSockets", "REST APIs", "TMDB API", "PostgreSQL", "Authentication", "Tailwind CSS"],
    githubUrl: "https://github.com/luishdez420/movie-picker",
    liveUrl: "https://cuezly.fly.dev/",
    accent: "#c4b5fd",
    architecture: [
      { id: "room", label: "Room", detail: "A shared decision space for participants and movie candidates.", x: 18, y: 42 },
      { id: "socket", label: "WebSocket", detail: "Keeps participants synchronized as votes and selections change.", x: 42, y: 28 },
      { id: "tmdb", label: "TMDB", detail: "Supplies searchable movie metadata, posters, and discovery signals.", x: 42, y: 62 },
      { id: "prefs", label: "Preferences", detail: "Ratings, reviews, and watchlists shape personal recommendations.", x: 66, y: 28 },
      { id: "match", label: "Group Pick", detail: "The room converges on a movie everyone can agree on.", x: 82, y: 52 }
    ]
  },
  {
    key: "betterdays",
    title: "BetterDays",
    role: "iOS Developer",
    impact: "SwiftUI self-care and productivity app with daily goals, persistent progress, reminders, and midnight resets.",
    problem:
      "Goal tracking apps often make simple routines feel heavy, especially when users need a calm daily reset rather than another dashboard.",
    solution:
      "Built a focused SwiftUI app for daily and permanent goals, progress tracking, persistent storage, reminders, and automatic midnight resets.",
    decisions: [
      "Designed around daily momentum and small recovery loops.",
      "Kept permanent goals separate from daily goals so long-term tracking does not clutter the day.",
      "Used local persistence and notifications to preserve privacy and responsiveness."
    ],
    challenges: [
      "Handling midnight reset behavior reliably.",
      "Making progress visible without turning self-care into a pressure system."
    ],
    results: [
      "Daily and permanent goal flows.",
      "Persistent storage and progress tracking.",
      "Reminder support and automatic midnight resets.",
      "Accessible mobile interactions."
    ],
    stack: ["Swift", "SwiftUI", "Persistent storage", "Notifications", "Responsive design"],
    githubUrl: "https://github.com/luishernandez/betterdays",
    accent: "#fda4af",
    architecture: [
      { id: "today", label: "Today", detail: "Daily goals reset cleanly and keep the current day focused.", x: 20, y: 35 },
      { id: "progress", label: "Progress", detail: "Lightweight progress tracking shows momentum without clutter.", x: 46, y: 22 },
      { id: "storage", label: "Storage", detail: "Persistent local data keeps goals available across sessions.", x: 46, y: 62 },
      { id: "reminders", label: "Reminders", detail: "Notification prompts help users return to meaningful routines.", x: 72, y: 35 },
      { id: "reset", label: "Reset", detail: "Midnight resets prepare the next day without manual cleanup.", x: 72, y: 66 }
    ]
  }
];

export const metrics: Metric[] = [
  { label: "Backend endpoints", value: 50, suffix: "+", context: "TechComms API workflows across communication, notifications, and admin controls." },
  { label: "AWS services", value: 9, suffix: "", context: "Lambda, API Gateway, Cognito, Bedrock, SES, EventBridge, CloudWatch, S3, and supporting infrastructure." },
  { label: "Passing tests", value: 36, suffix: "", context: "Unit and integration coverage for critical backend behavior." },
  { label: "Requests / second", value: 48, suffix: "", context: "Measured during 20-user load testing for major TechComms workflows." },
  { label: "Concurrent users", value: 20, suffix: "", context: "Used in load tests to validate platform behavior under pressure." },
  { label: "Major projects", value: 4, suffix: "+", context: "Cloud platforms, APIs, real-time collaboration, and mobile product work." }
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    description: "Tools for shaping APIs, interfaces, mobile experiences, and data models.",
    skills: [
      { name: "TypeScript", projects: ["techcomms", "movie-room"] },
      { name: "JavaScript", projects: ["movie-room"] },
      { name: "Python", projects: ["sentinel"] },
      { name: "Java", projects: [] },
      { name: "Swift", projects: ["betterdays"] },
      { name: "SQL", projects: ["techcomms", "sentinel", "movie-room"] },
      { name: "HTML", projects: ["movie-room"] },
      { name: "CSS", projects: ["movie-room"] }
    ]
  },
  {
    name: "Backend",
    description: "Reliable server-side systems with auth, contracts, and operational discipline.",
    skills: [
      { name: "Node.js", projects: ["techcomms", "movie-room"] },
      { name: "FastAPI", projects: ["sentinel"] },
      { name: "REST APIs", projects: ["techcomms", "sentinel", "movie-room"] },
      { name: "WebSockets", projects: ["movie-room"] },
      { name: "Authentication", projects: ["techcomms", "sentinel", "movie-room"] },
      { name: "JWT", projects: ["sentinel"] },
      { name: "RBAC", projects: ["techcomms"] },
      { name: "Rate limiting", projects: ["sentinel"] },
      { name: "Background jobs", projects: ["techcomms"] }
    ]
  },
  {
    name: "Cloud and DevOps",
    description: "Cloud-native delivery paths, observability, and deployment automation.",
    skills: [
      { name: "AWS Lambda", projects: ["techcomms"] },
      { name: "API Gateway", projects: ["techcomms"] },
      { name: "Cognito", projects: ["techcomms"] },
      { name: "Amazon Bedrock", projects: ["techcomms"] },
      { name: "SES", projects: ["techcomms"] },
      { name: "EventBridge", projects: ["techcomms"] },
      { name: "CloudWatch", projects: ["techcomms"] },
      { name: "S3", projects: ["techcomms"] },
      { name: "Docker", projects: ["sentinel"] },
      { name: "GitHub Actions", projects: ["techcomms", "sentinel"] },
      { name: "Fly.io", projects: ["sentinel"] },
      { name: "Vercel", projects: ["movie-room"] }
    ]
  },
  {
    name: "Databases",
    description: "Persistence layers for relational workflows, migrations, and fast request guards.",
    skills: [
      { name: "PostgreSQL", projects: ["techcomms", "sentinel", "movie-room"] },
      { name: "MariaDB", projects: [] },
      { name: "Redis", projects: ["sentinel"] },
      { name: "SQLAlchemy", projects: ["sentinel"] },
      { name: "Alembic", projects: ["sentinel"] }
    ]
  },
  {
    name: "Frontend",
    description: "Interfaces that make complex systems understandable and pleasant to use.",
    skills: [
      { name: "React", projects: ["movie-room"] },
      { name: "Next.js", projects: ["movie-room"] },
      { name: "Tailwind CSS", projects: ["movie-room"] },
      { name: "SwiftUI", projects: ["betterdays"] },
      { name: "Responsive design", projects: ["movie-room", "betterdays"] },
      { name: "Framer Motion", projects: [] }
    ]
  }
];
