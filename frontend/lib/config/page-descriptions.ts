/**
 * Centralized page descriptions with expandable details.
 * Edit this file to update the "Learn more" content across all pages.
 */

export interface PageDescriptionConfig {
  title: string;
  shortDescription?: string;
  sections: DescriptionSection[];
}

export interface DescriptionSection {
  title: string;
  content?: string | string[];
  items?: DescriptionItem[];
  example?: string;
  additionalContent?: string;
}

export interface DescriptionItem {
  label: string;
  description: string;
}

// ────────────────────────────────────────────────────────────────────────────────
// Page descriptions
// ────────────────────────────────────────────────────────────────────────────────

export const PAGE_DESCRIPTIONS: Record<string, PageDescriptionConfig> = {
  npl_playground: {
    title: "NPL Playground",
    shortDescription: "Generate NPL snippets and full specs from the conventions directory.",
    sections: [
      {
        title: "Overview",
        content:
          "The NPL (Noizu Prompt Language) Playground is an interactive environment for exploring and generating NPL syntax specifications. NPL is a structured convention system used to define prompt patterns, directives, and compositional elements for agentic workflows.",
      },
      {
        title: "Expression DSL Tab",
        content: "Query the NPL conventions directory using a compact expression language. Build complex queries by combining:",
        items: [
          { label: "section", description: "Broad category like syntax, directives, pumps" },
          { label: "section#component", description: "Specific component within a section" },
          { label: ":+priority", description: "Filter by minimum priority level (0-4)" },
          { label: "-term", description: "Exclude specific terms from results" },
        ],
        example:
          'syntax#placeholder:+2 directives -syntax#literal-string loads placeholder syntax with priority 2+, all directives, but excludes literal-string definitions.',
      },
      {
        title: "Component Composer Tab",
        content: "Generate complete NPL framework blocks wrapped in ⌜NPL@1.0⌝...⌞NPL@1.0⌟ markers. This is useful for:",
        items: [
          { label: "", description: "Bootstrapping new agent prompts with NPL conventions" },
          { label: "", description: "Regenerating npl-full.md documentation" },
          { label: "", description: "Creating custom NPL subsets for specific use cases" },
        ],
        additionalContent:
          "Options include concise mode (shorter descriptions), XML examples, and extension blocks for advanced use cases.",
      },
    ],
  },

  npl_book: {
    title: "NPL Book",
    shortDescription: "Browse the Noizu Prompt Lingua specification one section at a time. Each tab renders on open with default verbosity.",
    sections: [
      {
        title: "Overview",
        content:
          "The NPL Book is a comprehensive reference for the Noizu Prompt Language specification. Browse each section independently with customizable rendering options.",
      },
      {
        title: "Section Rendering",
        content:
          "Each NPL section (syntax, directives, pumps, etc.) is rendered on-demand with your preferred verbosity level. Adjust component and example priorities independently to control output detail.",
      },
      {
        title: "Rendering Controls",
        items: [
          { label: "Component priority", description: "Filters which components are included by their minimum importance level (0–3)" },
          { label: "Example priority", description: "Controls which examples appear based on complexity level (0–3)" },
          { label: "Concise mode", description: "Removes extended descriptions for brevity" },
          { label: "XML examples", description: "Includes XML-formatted examples alongside standard markdown" },
        ],
      },
      {
        title: "Element Exclusion",
        content:
          "Refine your view by excluding specific elements from the render. The exclude panel shows all available elements in the current section for granular control.",
      },
    ],
  },

  tool_detail: {
    title: "Tool Detail",
    shortDescription: "View tool documentation, parameters, and test invocations directly.",
    sections: [
      {
        title: "Overview",
        content:
          "This page provides comprehensive documentation and an interactive testing environment for the selected MCP tool. Explore tool capabilities, understand parameter requirements, and invoke the tool directly from your browser.",
      },
      {
        title: "Parameters Reference",
        content:
          "A complete list of accepted parameters, including data types, requirements, and descriptions. Each parameter is documented with examples where applicable.",
      },
      {
        title: "Try It Panel",
        content:
          "Interactively test the tool by providing parameter values and invoking it directly. Results are displayed in real-time with response status, duration, and formatted output.",
      },
    ],
  },

  tools_catalog: {
    title: "Tools Catalog",
    shortDescription: "Browse and explore all registered MCP tools.",
    sections: [
      {
        title: "Overview",
        content:
          "The Tools Catalog is a comprehensive directory of all registered MCP (Model Context Protocol) tools available in the system. Browse, search, and filter tools to find exactly what you need for your workflows.",
      },
      {
        title: "Browsing & Filtering",
        content: "Find tools quickly with multiple navigation options:",
        items: [
          {
            label: "Category Navigation",
            description: "Browse tools by category using the sidebar. Categories are hierarchical - expand parent categories to reveal subcategories.",
          },
          {
            label: "Search",
            description: "Search across tool names, descriptions, and tags to find specific functionality.",
          },
          {
            label: "Tag Filtering",
            description: "Filter by tags to find tools with specific characteristics or capabilities.",
          },
        ],
      },
      {
        title: "Tool Cards",
        content:
          "Each tool card displays the tool name, category, description, and associated tags. Click any card to view detailed documentation, parameter specifications, and an interactive testing interface.",
      },
    ],
  },

  markdown_converter: {
    title: "Markdown Converter",
    shortDescription: "Fetch a URL or local file and convert to Markdown.",
    sections: [
      {
        title: "Overview",
        content:
          "The Markdown Converter transforms web content and documents into clean, structured Markdown. Fetch from any URL or local file and customize the output with filtering and processing options.",
      },
      {
        title: "Content Sources",
        content:
          "Provide either a URL (https://...) or a local file path (/path/to/file). The converter supports HTML, text files, and various document formats.",
      },
      {
        title: "Filtering Options",
        items: [
          {
            label: "Heading filter",
            description: "Extract only the content under a specific heading (e.g. 'API Reference')",
          },
          {
            label: "Collapse depth",
            description: "Control heading level preservation (1–6). Lower values flatten structure.",
          },
          {
            label: "Bare mode",
            description: "Return only the matched section, excluding surrounding content",
          },
        ],
      },
      {
        title: "Image Descriptions",
        content:
          "Enable 'Inject image descriptions' to add alt-text placeholders for images detected in the source content. Useful for accessibility and documenting visual elements.",
      },
    ],
  },

  skill_validator: {
    title: "Skill Validator",
    shortDescription: "Check schema validity or evaluate overall quality of a skill file.",
    sections: [
      {
        title: "Overview",
        content:
          "The Skill Validator provides two modes for analyzing skill definitions: Validate checks schema compliance, while Evaluate assesses overall quality using heuristic dimensions.",
      },
      {
        title: "Validate Mode",
        content: "Checks that your skill file conforms to the required schema structure.",
        items: [
          {
            label: "Frontmatter validation",
            description: "Ensures required fields (name, description, allowed-tools) are present and correctly formatted",
          },
          {
            label: "Content structure",
            description: "Verifies proper markdown section organization and required headings",
          },
          {
            label: "Cross-reference checks",
            description: "Validates that filename matches the skill name declared in frontmatter",
          },
        ],
      },
      {
        title: "Evaluate Mode",
        content: "Assesses skill quality across multiple dimensions with scores from 0-100%.",
        items: [
          {
            label: "Completeness",
            description: "Measures presence of required sections and documentation depth",
          },
          {
            label: "Clarity",
            description: "Evaluates how well the skill's purpose and usage are explained",
          },
          {
            label: "Structure",
            description: "Assesses organization and formatting consistency",
          },
        ],
      },
      {
        title: "Quality Scoring",
        content:
          "Each dimension receives a percentage score with color-coded feedback: 80%+ (green/good), 50-79% (yellow/improving), below 50% (red/needs work). Suggestions for improvement are provided automatically.",
      },
    ],
  },

  sessions: {
    title: "Sessions",
    shortDescription: "Agent sessions keyed by (project, agent, task) with parent hierarchy.",
    sections: [
      {
        title: "Overview",
        content:
          "Sessions track agent interactions organized by project, agent, and task. Each session captures conversation history, notes, and metadata for debugging and analysis.",
      },
      {
        title: "Session Hierarchy",
        content: "Sessions are organized hierarchically to support complex workflows:",
        items: [
          {
            label: "Project",
            description: "Top-level grouping for related work",
          },
          {
            label: "Agent",
            description: "Specific agent or persona within a project",
          },
          {
            label: "Task",
            description: "Specific task or conversation thread",
          },
        ],
      },
      {
        title: "Filtering & Search",
        content:
          "Filter sessions by project or agent to focus on specific workflows. Search across brief descriptions and notes to find relevant conversations. The Updated column shows recency for quick triage.",
      },
    ],
  },

  tasks: {
    title: "Tasks",
    shortDescription: "Flat work-item queue. Filter by status/assignee; flip status inline.",
    sections: [
      {
        title: "Overview",
        content:
          "Tasks is a streamlined work queue for tracking and completing work items. The flat structure prioritizes speed and simplicity over complex hierarchies.",
      },
      {
        title: "Task Properties",
        items: [
          {
            label: "Title",
            description: "Short, imperative description of the work",
          },
          {
            label: "Priority",
            description: "Low (0), Normal (1), High (2), or Urgent (3) - color-coded for visual triage",
          },
          {
            label: "Status",
            description: "pending, in_progress, blocked, review, or done - change inline from the list",
          },
          {
            label: "Assignee",
            description: "Optional username assignment for team coordination",
          },
        ],
      },
      {
        title: "Quick Actions",
        content:
          "Update task status directly from the list view without opening each task. Use filters to focus on specific assignees or statuses. Create new tasks with the compact inline form.",
      },
    ],
  },

  instructions: {
    title: "Instructions",
    shortDescription: "Versioned instruction documents with text and intent search.",
    sections: [
      {
        title: "Overview",
        content:
          "Instructions are versioned documents that provide reusable guidance for agents. Each instruction has a title, description, tags for categorization, and an active version number.",
      },
      {
        title: "Search Modes",
        items: [
          {
            label: "Text Search",
            description: "Searches across titles, descriptions, and tags for literal matches",
          },
          {
            label: "Intent Search",
            description: "Semantic search that finds instructions by meaning and intent (simulated in mock preview)",
          },
        ],
      },
      {
        title: "Tag Filtering",
        content:
          "Use interactive tag buttons to filter instructions. Tags use AND semantics - selecting multiple tags shows only instructions that have all selected tags. Active tags are highlighted for clear feedback.",
      },
      {
        title: "Versioning",
        content:
          "Each instruction maintains version history. The active version badge shows the current live version. Click any instruction card to view details and manage versions.",
      },
    ],
  },

  projects: {
    title: "Projects",
    shortDescription: "NPL MCP projects with their personas and user stories.",
    sections: [
      {
        title: "Overview",
        content:
          "Projects are the organizing unit for NPL development work. Each project contains personas, user stories, and associated artifacts that define product requirements and specifications.",
      },
      {
        title: "Project Components",
        items: [
          {
            label: "Personas",
            description: "User archetypes that define target audiences and their goals",
          },
          {
            label: "User Stories",
            description: "Structured requirements written from the persona's perspective",
          },
          {
            label: "PRDs",
            description: "Product Requirement Documents that formalize specifications",
          },
        ],
      },
      {
        title: "Project Cards",
        content:
          "Each project card displays the title, internal name, description, and counts for personas and stories. The created date shows project age. Click to drill into project details and manage components.",
      },
    ],
  },

  prds: {
    title: "PRDs",
    shortDescription: "Product requirement documents.",
    sections: [
      {
        title: "Overview",
        content:
          "Product Requirement Documents (PRDs) formalize product specifications with clear acceptance criteria. Each PRD is numbered sequentially for easy reference and tracking.",
      },
      {
        title: "PRD Components",
        items: [
          {
            label: "Status",
            description: "Implemented, Documented, or Draft - color-coded for quick status assessment",
          },
          {
            label: "Functional Requirements",
            description: "FRs indicate formalized functional requirements are defined",
          },
          {
            label: "Acceptance Tests",
            description: "ATs show testable criteria for implementation validation",
          },
        ],
      },
      {
        title: "Navigation",
        content:
          "Filter PRDs by status to focus on active work. Search by title or PRD number to find specific documents. Click any card to view full requirements, FRs, and ATs.",
      },
    ],
  },

  explorer: {
    title: "Project Explorer",
    shortDescription: "Browse the repository file tree.",
    sections: [
      {
        title: "Overview",
        content:
          "The Project Explorer provides a tree-based navigation interface for browsing the repository structure. Expand directories and click files to view their contents directly in the browser.",
      },
      {
        title: "Navigation",
        content: "Use the file tree panel on the left to navigate:",
        items: [
          {
            label: "Expand/Collapse",
            description: "Click directory names or chevron icons to toggle folder contents",
          },
          {
            label: "Select Files",
            description: "Click any file to load its content in the preview panel",
          },
          {
            label: "Binary Files",
            description: "Binary files display with a 'bin' badge and cannot be previewed as text",
          },
        ],
      },
      {
        title: "File Preview",
        content:
          "The right panel displays the selected file's contents with syntax highlighting. Large files are truncated at 256 KB for performance. File path breadcrumbs help you understand the current location in the repository.",
      },
    ],
  },

  doc_schema: {
    title: "Database Schema Documentation",
    shortDescription: "Database schema: ERDs, table details, indexes, migrations.",
    sections: [
      {
        title: "Overview",
        content:
          "The Database Schema documentation provides comprehensive information about the data model, including entity-relationship diagrams, table structures, column types, indexes, and migration history.",
      },
      {
        title: "Documentation Sections",
        items: [
          {
            label: "ERDs",
            description: "Entity-Relationship Diagrams showing table relationships in Mermaid and PlantUML formats",
          },
          {
            label: "Table Details",
            description: "Complete column definitions, data types, constraints, and relationships",
          },
          {
            label: "Indexes",
            description: "Performance indexes with column composition and purpose",
          },
          {
            label: "Migrations",
            description: "Schema evolution history with timestamps and change descriptions",
          },
        ],
      },
      {
        title: "Domain Documentation",
        content:
          "Detailed domain breakdowns are available in docs/schema/*.md for deeper analysis of specific areas like sessions, tasks, instructions, and more.",
      },
    ],
  },

  doc_arch: {
    title: "Architecture Documentation",
    shortDescription: "High-level architecture: components, diagrams, design decisions.",
    sections: [
      {
        title: "Overview",
        content:
          "The Architecture documentation describes the system's high-level design, component relationships, data flow, infrastructure, and design rationale. Use this to understand how different parts of the system interact.",
      },
      {
        title: "Documentation Structure",
        items: [
          {
            label: "Core Architecture",
            description: "Main components, their responsibilities, and interaction patterns",
          },
          {
            label: "Diagrams",
            description: "Visual representations of system architecture, data flow, and deployment",
          },
          {
            label: "Design Decisions",
            description: "Rationale behind key architectural choices and trade-offs",
          },
          {
            label: "Tech Stack",
            description: "Technologies, frameworks, and libraries used throughout the system",
          },
        ],
      },
      {
        title: "Detail Sections",
        content:
          "Detailed architecture sections live in docs/arch/*.md for specific topics like agent orchestration, API design, and infrastructure patterns.",
      },
    ],
  },

  doc_layout: {
    title: "Project Layout Documentation",
    shortDescription: "Directory tree with descriptions of what each directory contains.",
    sections: [
      {
        title: "Overview",
        content:
          "The Project Layout documentation maps the repository structure, explaining what each directory and key file contains. Use this to quickly locate code, configuration, tests, or documentation.",
      },
      {
        title: "Directory Organization",
        items: [
          {
            label: "src/",
            description: "Main application source code organized by feature/domain",
          },
          {
            label: "tests/",
            description: "Test files mirroring the src/ structure",
          },
          {
            label: "docs/",
            description: "Project documentation including architecture, schema, and layout",
          },
          {
            label: "frontend/",
            description: "Next.js frontend application code",
          },
        ],
      },
      {
        title: "Quick Navigation",
        content:
          "Use the layout documentation to understand the codebase organization. Each directory entry includes a description of its purpose and key files. Find entry points, configurations, and feature locations quickly.",
      },
    ],
  },

  agents: {
    title: "Agents",
    shortDescription: "TDD pipeline agents and utility/executor agents defined in agents/*.md.",
    sections: [
      {
        title: "Overview",
        content:
          "The Agents page displays all registered agents in the system. Agents are autonomous software entities that perform specific tasks, ranging from TDD pipeline execution to utility functions.",
      },
      {
        title: "Agent Types",
        items: [
          {
            label: "Pipeline",
            description: "Agents that orchestrate the Test-Driven Development workflow, coordinating between tester, coder, and debugger agents",
          },
          {
            label: "Executor",
            description: "Agents that execute specific tasks or operations with high intelligence and capability",
          },
          {
            label: "Utility",
            description: "Helper agents that perform auxiliary functions and support operations",
          },
        ],
      },
      {
        title: "Agent Cards",
        content:
          "Each agent card displays the display name, internal name (code), kind badge, description, assigned model, and number of allowed tools. Click any card to view detailed configuration and capabilities.",
      },
      {
        title: "Search & Filter",
        content:
          "Use the search box to find agents by name or description. Filter by kind to focus on specific agent types. The search filters across display name, internal name, and description fields.",
      },
    ],
  },

  pipes: {
    title: "Agent Pipes",
    shortDescription: "Inter-agent structured messaging. Push data to targets (agents or groups) and pull incoming dashboards.",
    sections: [
      {
        title: "Overview",
        content:
          "Agent Pipes provide a structured messaging system for inter-agent communication. Agents can push messages to specific targets (other agents or groups) and pull incoming message dashboards.",
      },
      {
        title: "Input Tab",
        content: "Pull incoming pipe messages for an agent session.",
        items: [
          {
            label: "Agent session UUID",
            description: "The short or full UUID of the agent to pull messages for",
          },
          {
            label: "Since filter",
            description: "Optional ISO-8601 timestamp to only fetch messages after this time",
          },
          {
            label: "Sections filter",
            description: "Comma-separated section names to filter specific message types",
          },
          {
            label: "Full mode",
            description: "Ignore the 'since' filter and fetch all available messages",
          },
        ],
      },
      {
        title: "Output Tab",
        content: "Push structured YAML messages to target agents or groups.",
        items: [
          {
            label: "Message structure",
            description: "Each top-level key is a message name with 'target' and 'data' blocks",
          },
          {
            label: "Target options",
            description: "Direct UUID, agent-handle, group name, or group-handle",
          },
          {
            label: "Data payload",
            description: "Arbitrary YAML data that the target agent will receive",
          },
        ],
      },
    ],
  },

  chat: {
    title: "Chat",
    shortDescription: "Collaborative chat rooms for agent coordination.",
    sections: [
      {
        title: "Overview",
        content:
          "The Chat page provides collaborative chat rooms for agent coordination and communication. Rooms are persistent and store message history for reference.",
      },
      {
        title: "Room Cards",
        content:
          "Each room card displays the room name (in monospace), last activity timestamp, description, and message count. Click any room to enter and view the conversation history.",
      },
      {
        title: "Creating Rooms",
        content:
          "Use the 'New Room' button to create a new chat room. Provide a name for the room and it will be instantly available for agents and users to join.",
      },
      {
        title: "Agent Coordination",
        content:
          "Chat rooms enable agents to coordinate with each other and with humans. Messages are persisted and can be referenced later for context and debugging.",
      },
    ],
  },

  artifacts: {
    title: "Artifacts",
    shortDescription: "Versioned text artifacts (PRD-002 MVP). Each artifact has a history of revisions.",
    sections: [
      {
        title: "Overview",
        content:
          "The Artifacts page manages versioned text artifacts. Each artifact maintains a complete revision history, allowing you to track changes and restore previous versions.",
      },
      {
        title: "Artifact Types",
        items: [
          { label: "Text", description: "markdown, json, yaml, code, text, other" },
          { label: "Media", description: "image, video, audio, pdf, binary" },
        ],
      },
      {
        title: "Creating Artifacts",
        content:
          "Click 'New artifact' to create text-based artifacts with inline content. For media files, upload files up to 15 MB with MIME type auto-detection.",
      },
      {
        title: "Artifact List",
        content:
          "Each artifact entry shows the title, ID, description, kind badge, latest revision number, and last update time. Click any artifact to view its revision history and content.",
      },
      {
        title: "Filtering",
        content:
          "Use the Kind dropdown to filter artifacts by type. The count badge shows the total number of artifacts matching the current filter.",
      },
    ],
  },

  health: {
    title: "System Health",
    shortDescription: "Live status of server, database, LLM proxy, catalog, and frontend build. Polls every 5s.",
    sections: [
      {
        title: "Overview",
        content:
          "The System Health page provides real-time monitoring of all critical system components. Status updates automatically every 5 seconds to ensure you have the latest information.",
      },
      {
        title: "Monitored Subsystems",
        items: [
          {
            label: "Server",
            description: "Uptime, FastMCP version, and ping response status",
          },
          {
            label: "Database",
            description: "Connection status and query latency",
          },
          {
            label: "LiteLLM",
            description: "LLM proxy availability, URL, and response latency",
          },
          {
            label: "Catalog",
            description: "Tool counts: total, MCP tools, hidden tools, and stubs",
          },
          {
            label: "Frontend Build",
            description: "Build artifact availability and dist path",
          },
        ],
      },
      {
        title: "Status Indicators",
        content:
          "Each subsystem shows a status badge: ok (green), unavailable (red), missing (yellow), or not_configured (gray). The overall system health is aggregated from all subsystems.",
      },
    ],
  },

  orchestration: {
    title: "Orchestration",
    shortDescription: "Pipeline execution and agent coordination.",
    sections: [
      {
        title: "Overview",
        content:
          "The Orchestration page manages pipeline execution and agent coordination. Trigger TDD pipelines, monitor recent runs, and view registered agents in one place.",
      },
      {
        title: "Pipelines Tab",
        content: "Trigger and monitor TDD pipeline execution.",
        items: [
          {
            label: "Trigger Form",
            description: "Enter a feature description to queue a new TDD pipeline run",
          },
          {
            label: "Recent Runs",
            description: "Table showing pipeline run history with feature, stage, status, and timestamps",
          },
          {
            label: "Status",
            description: "Pipeline runs show: complete, running, or failed status",
          },
        ],
      },
      {
        title: "Agents Tab",
        content:
          "Browse all registered agents involved in orchestration. Each agent card shows the agent name, kind badge, and purpose description.",
      },
    ],
  },

  metrics: {
    title: "Metrics",
    shortDescription: "Tool call history and LLM usage.",
    sections: [
      {
        title: "Overview",
        content:
          "The Metrics page provides visibility into system performance through tool call history, LLM usage statistics, error tracking, and NPL coverage metrics.",
      },
      {
        title: "Tool Calls",
        content: "Monitor tool invocation patterns and performance.",
        items: [
          {
            label: "Tool Call History",
            description: "Table showing recent tool calls with name, status, response time, and timestamp",
          },
          {
            label: "Response Time Distribution",
            description: "Bar chart bucketing tool calls by latency: 0–100ms, 100–500ms, 500–1000ms, 1–2s, 2s+",
          },
        ],
      },
      {
        title: "LLM Usage",
        content:
          "Track large language model consumption with token counts, purpose labels, model identifiers, and call duration.",
      },
      {
        title: "Errors",
        content:
          "View recent tool errors with tool name, error type, message, and linking to related sessions for debugging.",
      },
      {
        title: "NPL Coverage",
        content: "Visualize NPL convention coverage progress.",
        items: [
          {
            label: "Overall percentage",
            description: "Complete components vs total components across all sections",
          },
          {
            label: "Per-section breakdown",
            description: "Individual coverage for syntax, directives, pumps, and other NPL sections",
          },
          {
            label: "Missing components",
            description: "Badge list of components yet to be implemented",
          },
        ],
      },
    ],
  },
};

// ────────────────────────────────────────────────────────────────────────────────
// Helper to get page description by key
// ────────────────────────────────────────────────────────────────────────────────

export function getPageDescription(key: string): PageDescriptionConfig | undefined {
  return PAGE_DESCRIPTIONS[key];
}
