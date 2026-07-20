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
    key: "macros-ai",
    title: "MacrosAI",
    role: "Product & Full-Stack Engineer",
    impact:
      "Living Nutrition is a production-minded mobile nutrition tracker built around source-backed data, assistive AI, immutable meal snapshots, and user-controlled decisions.",
    problem:
      "Nutrition logging is repetitive and difficult to trust. A photo cannot reliably determine weight, oils, sauces, cooking method, hidden ingredients, or edible portions, yet many products present an AI estimate as a definitive answer.",
    solution:
      "Designed and built an advanced MVP vertical slice that combines USDA and Open Food Facts records with manual search, barcode and label capture, recipes, custom foods, camera-assisted analysis, explicit portion review, and resilient offline-aware meal logging.",
    decisions: [
      "Kept nutrition calculations grounded in per-100g provider data and confirmed gram amounts instead of AI-generated macro guesses.",
      "Required a visible source record, confidence signal, editable portion, and user confirmation before camera-assisted meals can be saved.",
      "Stored immutable nutrition snapshots with historical meals so provider revisions never silently rewrite a user's diary.",
      "Structured the npm-workspace monorepo around a mobile app, FastAPI service, typed client, shared types, validation utilities, and design tokens."
    ],
    challenges: [
      "Representing uncertainty without making fast logging feel slow or clinical.",
      "Normalizing serving and nutrient data across providers with different completeness and quality characteristics.",
      "Preventing duplicate meal logs during ambiguous mobile network failures.",
      "Designing camera and label workflows that remain useful while minimizing image retention and metadata exposure."
    ],
    results: [
      "Advanced MVP vertical slice with persistent meal history, daily macro detail, hydration, goals, and date navigation.",
      "Implemented manual search, barcode lookup, custom foods, recipes, favorites, recents, and source-provenance screens.",
      "Added camera and nutrition-label review workflows with provider-backed alternatives and explicit confirmation.",
      "Built versioned /api/v1 endpoints, consistent error envelopes, request IDs, idempotent meal creation, and account-scoped offline queueing.",
      "Added data export, security activity, retention controls, and deliberate typed-confirmation account deletion."
    ],
    stack: [
      "React Native",
      "Expo SDK 54",
      "TypeScript",
      "Expo Router",
      "TanStack Query",
      "Zustand",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "SQLAlchemy",
      "Alembic",
      "USDA FoodData Central",
      "Open Food Facts",
      "Computer Vision",
      "EAS"
    ],
    githubUrl: "https://github.com/luishdez420/MacrosAI",
    accent: "#6ee7b7",
    architecture: [
      { id: "mobile", label: "Expo Mobile", detail: "React Native experience for search, scanning, meal building, diary history, goals, and privacy controls.", x: 10, y: 42 },
      { id: "api", label: "FastAPI v1", detail: "Versioned API with typed contracts, consistent error envelopes, request IDs, and account-scoped authorization.", x: 31, y: 42 },
      { id: "providers", label: "Food Sources", detail: "USDA FoodData Central and Open Food Facts records normalized behind a provider abstraction and cache.", x: 53, y: 23 },
      { id: "vision", label: "Vision Review", detail: "Assistive meal and label analysis proposes candidates, portions, and warnings but never bypasses user review.", x: 53, y: 64 },
      { id: "postgres", label: "PostgreSQL", detail: "Relational model for meals, immutable snapshots, recipes, goals, revisions, audit events, and refresh sessions.", x: 76, y: 23 },
      { id: "queue", label: "Offline Queue", detail: "Confirmed meal snapshots can be queued after ambiguous failures with caller-owned idempotency keys and explicit sync controls.", x: 76, y: 64 },
      { id: "privacy", label: "Data Controls", detail: "Secure token storage, hashed refresh sessions, minimal audit events, export, retention preferences, and account deletion.", x: 91, y: 42 }
    ],
    caseStudySections: [
      {
        title: "Product principles",
        summary: "The product is designed around responsible uncertainty and neutral, non-judgmental guidance.",
        items: [
          "Authoritative provider records or user-confirmed custom foods supply nutrition values; AI never invents the final macros.",
          "Every camera-assisted result exposes confidence, quality warnings, serving basis, alternatives, and editable portions.",
          "Users confirm the exact food record and gram amount before anything changes their diary.",
          "Historical meals retain immutable snapshots, preserving what the user actually logged at that moment.",
          "The experience supports general wellness and habit awareness without presenting itself as medical nutrition therapy."
        ]
      },
      {
        title: "Core product workflows",
        items: [
          "Manual USDA search, Open Food Facts barcode lookup, verified servings, grams, ounces, custom foods, and user-created barcode products.",
          "Meal Builder, reusable recipes, favorites, recent foods, ingredient ordering, categories, and logging-to-today.",
          "Nutrition-label capture routes extracted values into an editable custom-food flow that requires manual review.",
          "Camera-assisted logging accepts one to three photos and surfaces candidates, portion ranges, preparation cues, hidden-ingredient prompts, and provider alternatives.",
          "Daily dashboard covers macro progress, meal timeline, hydration, goals, weight entries, progress ranges, and monthly logging rhythm.",
          "Onboarding captures goals, preferences, preferred logging method, appearance, and optional daily targets."
        ]
      },
      {
        title: "Reliability & data quality",
        items: [
          "Provider abstraction, normalized record caching, cached no-result searches, safe stale-record fallback, timeouts, bounded retries, and capped Retry-After handling.",
          "Quality warnings cover stale records, duplicate conflicts, calorie/macro inconsistencies, missing serving basis, negative values, incomplete nutrients, and kJ/kcal confusion.",
          "Provider revisions are tracked separately while logged meals remain immutable.",
          "Caller-owned idempotency keys prevent duplicate meal creation during uncertain retries.",
          "An account-scoped offline queue preserves confirmed meal snapshots after ambiguous failures and keeps synchronization explicit."
        ]
      },
      {
        title: "Privacy & security",
        items: [
          "Provider and vision API keys remain server-side; device tokens use SecureStore and refresh tokens are hashed, rotated, and revoked.",
          "Images are validated, size-limited, orientation-normalized, re-encoded, and stripped of EXIF/container metadata before analysis.",
          "Label photos are not persistently stored in the current workflow.",
          "Audit events avoid credentials, raw tokens, meal contents, images, and raw request payloads.",
          "Sensitive routes support configurable limits, with production designed for a Redis-backed shared limiter that fails safely.",
          "Users can export data, inspect limited security activity, set retention preferences, and deliberately delete their account."
        ]
      },
      {
        title: "Design & accessibility",
        summary: "The mobile system uses warm, neutral language and makes complex nutrition state legible without moralizing food choices.",
        items: [
          "Semantic light, dark, and system themes use atmospheric backgrounds, translucent materials, and accessible macro colors.",
          "Today, Progress, Scan, Library, and Profile form a deliberate navigation model with Scan elevated as an explicit action.",
          "Reduced-motion and reduced-transparency fallbacks preserve the experience without relying on visual effects.",
          "Keyboard-aware forms, reachable sticky save actions, haptic feedback, and accessible alternatives support mobile ergonomics.",
          "Loading, empty, validation, provider-outage, sync, and correction states are designed as first-class product moments."
        ]
      },
      {
        title: "Current stage",
        summary: "The functioning MVP vertical slice validates the product architecture and the complete core logging loop.",
        items: [
          "Implemented: core logging, persistent history, barcode and custom foods, recipes, provenance, basic insights, privacy controls, and camera confirmation workflows.",
          "Next: managed identity or OAuth, recovery flows, and production deployment validation.",
          "Next: private image storage with enforceable retention/deletion controls and broader end-to-end mobile coverage.",
          "Next: expanded provider refresh policies and more advanced camera correction workflows."
        ]
      }
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
      { name: "TypeScript", projects: ["techcomms", "movie-room", "macros-ai"] },
      { name: "JavaScript", projects: ["movie-room"] },
      { name: "Python", projects: ["sentinel", "macros-ai"] },
      { name: "Java", projects: [] },
      { name: "SQL", projects: ["techcomms", "sentinel", "movie-room", "macros-ai"] },
      { name: "HTML", projects: ["movie-room"] },
      { name: "CSS", projects: ["movie-room"] }
    ]
  },
  {
    name: "Backend",
    description: "Reliable server-side systems with auth, contracts, and operational discipline.",
    skills: [
      { name: "Node.js", projects: ["techcomms", "movie-room"] },
      { name: "FastAPI", projects: ["sentinel", "macros-ai"] },
      { name: "REST APIs", projects: ["techcomms", "sentinel", "movie-room", "macros-ai"] },
      { name: "WebSockets", projects: ["movie-room"] },
      { name: "Authentication", projects: ["techcomms", "sentinel", "movie-room", "macros-ai"] },
      { name: "JWT", projects: ["sentinel", "macros-ai"] },
      { name: "RBAC", projects: ["techcomms"] },
      { name: "Rate limiting", projects: ["sentinel", "macros-ai"] },
      { name: "Background jobs", projects: ["techcomms", "macros-ai"] }
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
      { name: "PostgreSQL", projects: ["techcomms", "sentinel", "movie-room", "macros-ai"] },
      { name: "MariaDB", projects: [] },
      { name: "Redis", projects: ["sentinel", "macros-ai"] },
      { name: "SQLAlchemy", projects: ["sentinel", "macros-ai"] },
      { name: "Alembic", projects: ["sentinel", "macros-ai"] }
    ]
  },
  {
    name: "Frontend",
    description: "Interfaces that make complex systems understandable and pleasant to use.",
    skills: [
      { name: "React", projects: ["movie-room", "macros-ai"] },
      { name: "Next.js", projects: ["movie-room"] },
      { name: "Tailwind CSS", projects: ["movie-room"] },
      { name: "React Native", projects: ["macros-ai"] },
      { name: "Expo", projects: ["macros-ai"] },
      { name: "TanStack Query", projects: ["macros-ai"] },
      { name: "Zustand", projects: ["macros-ai"] },
      { name: "Responsive design", projects: ["movie-room", "macros-ai"] },
      { name: "Framer Motion", projects: [] }
    ]
  }
];
