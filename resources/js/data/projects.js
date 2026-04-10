const projects = [
  /*{
    title: "MediGuard Demo",
    description: "A validation engine built with .NET 8 and Vue.js. Designed to modernize legacy clinical dosage checks into a decoupled, testable, and reactive safety-check module.",
    github: "https://github.com/kolivanne/mediguard-demo",
    repo: "kolivanne/mediguard-demo",
    badges: [
      { text: "C#", color: "dark" },
      { text: "Vue.js 3", color: "dark" },
      { text: "Core Challenge", color: "secondary", note: "Focus: Scalable Fullstack Architecture & Clinical Safety" },
      { text: "Design Decision", color: "secondary", note: "Strict separation of Domain Logic from Web API to ensure auditability and TDD readiness" }
    ],
    notes: [
      "Fullstack implementation bridging a high-performance .NET 8 Minimal API with a reactive Vue.js 3 frontend",
      "Engineered with a 'Safety-First' UI/UX strategy, including real-time threshold monitoring and explicit regulatory disclaimers",
    ]
  },*/
  {
    title: "OpsFlow: Atlassian Lifecycle & Governance Demo",
    description: "A modular framework for managing and automating Jira and Confluence lifecycle processes, including knowledge base cleanup, ticket governance, and AI policy enforcement.",
    github: "https://github.com/kolivanne/atlas-ops-demo",
    repo: "kolivanne/atlas-ops-demo",
    badges: [
      { "text": "Python", "color": "dark" },
      { "text": "GitHub Actions", "color": "dark" },
      { "text": "Core Challenge", "color": "secondary", "note": "Focus: safe lifecycle automation across multiple Atlassian products" },
      { "text": "Design Decision", "color": "secondary", "note": "Separation of concerns and extensible architecture for future tools" }
    ],
    notes: [
      "Automated identification and archiving of stale Confluence pages",
      "Cross-project Jira ticket governance with staleness checks and prioritization rules",
      "AI governance layer to prevent sensitive data leakage",
    ]
  },
  {
    title: "Carbon Pipeline & Audit Suite 🐸",
    description: "A validation engine for transforming energy activity data into CO₂ emissions. Built to guarantee data integrity in asynchronous ingestion pipelines.",
    github: "https://github.com/kolivanne/carbon-stream-validator",
    repo: "kolivanne/carbon-stream-validator",
    badges: [
      { text: "Node.js", color: "dark" },
      { text: "TypeScript", color: "dark" },
      { text: "Playwright", color: "dark" },
      { text: "Core Challenge", color: "secondary", note: "Focus: deterministic results in asynchronous processing" },
      { text: "Design Decision", color: "secondary", note: "Audit layer with repeatable runs (1000 iterations)" }
    ],
    notes: [
      "State-tracked async ingestion pipeline",
      "Stress-tested with 100 concurrent executions",
      "Deterministic audit layer for calculation validation"
    ]
  },
  {
    title: "Selenium NUnit",
    description: "UI test strategy for Google Maps with focus on maintainability and reusable automation patterns.",
    github: "https://github.com/kolivanne/nunit-selenium-google-maps",
    repo: "kolivanne/nunit-selenium-google-maps",
    badges: [
      { text: "C#", color: "dark" },
      { text: "Selenium", color: "dark" },
      { text: "NUnit", color: "dark" },
      { text: "Take-Home Task", color: "info", note: "Built as part of a hiring process with focus on maintainability" },
      { text: "Design Decision", color: "secondary", note: "Page Object Pattern + reusable selectors to reduce maintenance cost" }
    ],
    notes: [
      "Page Object Model for structured test design",
      "Reusable components to reduce duplication",
      "Focus on long-term maintainability over quick wins"
    ]
  }
];