export const profile = {
  name: 'Alvin Baclagan',
  title: 'Senior Software Developer',
  location: 'Quezon City, Philippines',
  phone: '(+63) 916 5508 506',
  email: 'alvinvbaclagan@gmail.com',
  linkedin: 'https://www.linkedin.com/in/alvinbaclagan/',
  summary:
    'I help businesses turn ideas into reliable web apps, APIs and desktop tools. 10+ years building software for banking, media and e-commerce, so your project is in experienced hands from first call to launch.',
}

export const certifications = [
  {
    title: 'RESTful Web API - The Complete Guide (.NET 7 API) Part 1',
    issuer: 'Udemy',
    instructor: 'Bhrugen Patel',
    date: 'Sept. 17, 2023',
    meta: '9 total hours',
    url: 'https://www.udemy.com/certificate/UC-30e7ceec-370e-457f-9353-0d8e06e896db/',
  },
  {
    title: 'Learn JavaScript',
    issuer: 'Scrimba',
    instructor: 'Per Harald Borgen',
    date: 'June 15, 2025',
    meta: '9.4 hours · 238 lessons',
    url: 'https://scrimba.com/learn-javascript-c0v;cert2uNjfKA1PefAwDxPM7kNk5zort1o1w2XSBe',
  },
]

export const skills = [
  {
    category: 'Languages & Frameworks',
    items: ['C#', '.NET 6 / 8 Core', 'ASP.NET', 'VB.Net', 'VB6', 'Entity Framework', 'Dapper', 'ADO.Net'],
  },
  {
    category: 'Frontend',
    items: ['React','TypeScript','Tailwind CSS','Electron', 'Primereact','Redux Toolkit','Vite','AngularJS', 'JavaScript', 'Bootstrap', 'HTML', 'Ajax', 'ASP Classic'],
  },
  {
    category: 'Database & Reporting',
    items: ['MS SQL Server', 'Crystal Reports'],
  },
  {
    category: 'APIs',
    items: ['REST API', 'SOAP API', 'QB Online API'],
  },
  {
    category: 'DevOps & Tools',
    items: ['Azure DevOps', 'Azure Git', 'TFS', 'SVN', 'Git', 'Postman', 'Swagger'],
  },
  {
    category: 'Testing',
    items: ['NUnit', 'xUnit', 'Vitest'],
  },
  {
    category: 'Practices & PM',
    items: ['Agile Scrum', 'CI/CD', 'Jira', 'Confluence', 'ServiceNow', 'Slack', 'ClickUp'],
  },
]

// images: [{ src: '/projects/<slug>/NN-name.png', caption }]. Empty = placeholder (UI) or flow chips (no UI).
export const freelance = [
  {
    slug: 'construction-pm',
    name: 'Construction Project Management Platform',
    kind: 'Web app',
    role: 'Full Stack Developer',
    period: 'Sep 2026 – Oct 2026',
    icon: 'HardHat',
    description:
      'A full stack dashboard for construction project managers covering projects, tasks and site activity logs, phase-and-milestone scheduling, budgets, documents and team management, with a guided onboarding wizard for new companies.',
    highlights: [
      'Built a budget module with numbered purchase orders, change orders and payments, approve/reject and mark-paid workflows, and committed/disbursed/contract-value roll-ups.',
      'Structured the .NET 10 API with Clean Architecture (Domain, Application, Infrastructure, API), Identity + JWT, FluentValidation, Serilog and a Scalar API reference.',
      'Ran an AI-first workflow with Claude Code: feature specs, a bug log and architecture decision records fed into every session.',
    ],
    frontend: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'PrimeReact', 'TanStack Query', 'Zustand', 'React Hook Form', 'Zod'],
    backend: ['.NET 10 Web API', 'Entity Framework Core', 'SQL Server', 'ASP.NET Identity', 'JWT'],
    other: ['FluentValidation', 'Serilog', 'Scalar / OpenAPI', 'Playwright'],
    images: [
      { src: '/projects/construction-pm/01-dashboard.png', caption: 'Project dashboard' },
      { src: '/projects/construction-pm/02-schedule.png', caption: 'Phase schedule' },
      { src: '/projects/construction-pm/03-budget.png', caption: 'Budget & finance' },
      { src: '/projects/construction-pm/04-task-log.png', caption: 'Task log' },
      { src: '/projects/construction-pm/05-team.png', caption: 'Team members' },
      { src: '/projects/construction-pm/06-login.png', caption: 'Login' },
    ],
  },
  {
    slug: 'check-scanner',
    name: 'AI Check-Deposit Scanner',
    kind: 'Desktop app',
    role: 'Full Stack Developer',
    period: 'Aug 2026 – Sep 2026',
    icon: 'ScanLine',
    description:
      'A Windows desktop app that batch-scans donation checks from a TWAIN scanner, uses Claude vision to extract the check details (including the bank from its logo), and files each check under a fundraiser with reporting, backed by SQL Server and Azure Blob Storage.',
    highlights: [
      'Integrated TWAIN batch scanning via NTwain in a dedicated 32-bit process to work around scanner-driver crashes in 64-bit hosts.',
      'Built Claude-powered check extraction with the model, prompt and token limit configurable at runtime.',
      'Shipped a one-file NSIS installer that bundles a self-contained .NET API inside Electron, with versions kept in sync.',
    ],
    frontend: ['Electron', 'HTML / JavaScript', 'WebSockets'],
    backend: ['ASP.NET Core Minimal API (.NET 10)', 'Entity Framework Core', 'SQL Server / Azure SQL'],
    other: ['Anthropic Claude API', 'Azure Blob Storage', 'NTwain', 'electron-builder'],
    images: [
      { src: '/projects/check-scanner/01-new-batch.png', caption: 'Batch scan review' },
      { src: '/projects/check-scanner/02-fundraisers.png', caption: 'Fundraiser directory' },
      { src: '/projects/check-scanner/03-reports.png', caption: 'Reports & analytics' },
      { src: '/projects/check-scanner/04-settings.png', caption: 'Scanner settings' },
    ],
  },
  {
    slug: 'wedding-orchestrator',
    name: 'Wedding Orchestrator — Music Planning Desktop App',
    kind: 'Desktop app',
    role: 'Full Stack Developer',
    period: 'May 2026 – Oct 2026',
    icon: 'Music',
    description:
      'A desktop app for wedding music coordinators to manage people and family relationships, a categorized song library and per-wedding song assignments, with conflict detection across weddings, a Hebrew calendar and Word/Excel exports.',
    highlights: [
      'Built a conflict-detection service that finds people shared with other weddings and flags songs that are off-limits.',
      'Implemented a family tree and people directory with relationship types, Hebrew calendar dates and a calendar view.',
      'Packaged React and a self-contained ASP.NET Core API into one Electron installer that checks LocalDB and runs migrations on startup.',
    ],
    frontend: ['React 19', 'TypeScript', 'Vite', 'Electron', 'PrimeReact', 'Tailwind CSS', 'Redux Toolkit', 'TanStack Query'],
    backend: ['ASP.NET Core (.NET 8)', 'Entity Framework Core', 'SQL Server LocalDB'],
    other: ['ClosedXML', 'OpenXML', '@hebcal/core', 'electron-builder'],
    images: [
      
      { src: '/projects/wedding-orchestrator/01-dashboard.png', caption: 'Wedding dashboard' },
      { src: '/projects/wedding-orchestrator/07-wedding-plan.png', caption: 'Wedding family tree' },
      { src: '/projects/wedding-orchestrator/02-weddings.png', caption: 'Wedding events' },
      { src: '/projects/wedding-orchestrator/03-songs.png', caption: 'Song library' },
      { src: '/projects/wedding-orchestrator/04-people.png', caption: 'People directory' },
      { src: '/projects/wedding-orchestrator/05-families.png', caption: 'Families' },
      { src: '/projects/wedding-orchestrator/06-calendar.png', caption: 'Hebrew calendar' },
    ],
  },
  {
    slug: 'donor-ledger',
    name: 'Nonprofit Donor Ledger Portal & QuickBooks Sync',
    kind: 'Web app + Azure Functions',
    role: 'Full Stack Developer',
    period: 'Jul 2026 – Aug 2026',
    icon: 'Landmark',
    description:
      'A donor transaction platform for a nonprofit: Azure Functions sync transactions and balances from QuickBooks Online into SQL Server, a portal lets donors review their ledger in USD or ILS, and an admin console sends templated donor emails through Gmail.',
    highlights: [
      'Added separate Israeli-shekel ledgers and currency-specific payment links across the sync engine, API and portal.',
      'Maintained timer-triggered QuickBooks Online syncs for transactions and balances using QuickBooksSharp and OAuth.',
      'Extended the Angular admin auto-mailer and React portal with filtering, Excel/PDF export and Gmail-templated emails.',
    ],
    frontend: ['React', 'PrimeReact', 'Angular 15', 'Angular Material', 'RxJS'],
    backend: ['Azure Functions (.NET 6)', 'ASP.NET Core (.NET 8)', 'Entity Framework Core', 'SQL Server'],
    other: ['QuickBooks Online API', 'Gmail API / MimeKit', 'JWT Auth', 'Swagger'],
    images: [
      { src: '/projects/donor-ledger/01-ledger.png', caption: 'Donor ledger (RTL)' },
      { src: '/projects/donor-ledger/02-login.png', caption: 'Donor login' },
    ],
  },
  {
    slug: 'indesign-layout',
    name: 'Automated Ad-Layout Plugin for Adobe InDesign',
    kind: 'InDesign plugin',
    role: 'Plugin Developer',
    period: 'Aug 2026 – Oct 2026',
    icon: 'LayoutTemplate',
    description:
      "An Adobe InDesign UXP panel for a classifieds and real-estate publication that pulls ads from the publisher's API and lays out entire issue pages automatically, including right-to-left Hebrew content.",
    highlights: [
      'Built a real-estate layout engine with group banners, section header bars and a 3-column grid that back-fills across page breaks.',
      'Built a classified layout engine that fills a 3×7 grid gap-free, trying up to 40 orderings and enforcing ad-adjacency rules.',
      'Handled right-to-left binding, Hebrew fonts and reversed-number fixes, each documented in its own design note.',
    ],
    frontend: ['React', 'Adobe UXP', 'Webpack', 'Babel'],
    backend: [],
    other: ['InDesign DOM', 'UXP Developer Tool', 'REST API integration'],
    images: [],
  },
  {
    slug: 'prize-ivr',
    name: 'Fundraiser Prize-Selection IVR',
    kind: 'Voice / IVR',
    role: '.NET Backend Developer',
    period: 'Aug 2026',
    icon: 'Phone',
    flow: ['Caller', 'Caller-ID + team check', 'Keypad prize menu', 'Google Sheets'],
    description:
      'A phone line for charity fundraisers: callers are verified by caller ID and team number, hear their available balance, pick prizes from the keypad within budget, and their choices are written to Google Sheets.',
    highlights: [
      'Verified callers against five phone columns per fundraiser plus team number, with phone-number normalization.',
      'Built a step-based call flow with single-key prize selection, a running balance, confirm/start-over and reset-or-keep options.',
      'Used Google Sheets as the data store and played recorded MP3 prompts and team names through SignalWire.',
    ],
    frontend: [],
    backend: ['ASP.NET Core (.NET 10)'],
    other: ['SignalWire (LaML)', 'Google Sheets API', 'ngrok'],
    images: [],
  },
  {
    slug: 'slack-sms',
    name: 'Slack ↔ SMS Bridge',
    kind: 'Webhook service',
    role: '.NET Backend Developer',
    period: 'Sep 2026 – Oct 2026',
    icon: 'MessagesSquare',
    flow: ['Slack channel', 'Bridge API', 'SignalWire SMS', 'Phone'],
    description:
      'A two-way bridge that links a Slack channel to a phone number: Slack messages go out as SMS and inbound texts are posted back into the channel, with right-to-left formatting for Hebrew and Arabic.',
    highlights: [
      'Verified both Slack and SignalWire webhook signatures, de-duplicated Slack retries by event id and prevented echo loops.',
      'Resolved user, channel and group mentions into readable names and sent SMS through an in-memory queue and background worker.',
      'Enforced Clean Architecture with architecture tests and covered signatures, endpoints, formatting and SMS limits with xUnit.',
    ],
    frontend: [],
    backend: ['ASP.NET Core (.NET 10)'],
    other: ['Slack Events / Web API', 'SignalWire Messaging', 'xUnit'],
    images: [],
  },
  {
    slug: 'gmail-voice-agent',
    name: 'AI Phone Agent for Gmail',
    kind: 'Voice AI agent',
    role: 'Developer',
    period: 'Oct 2026',
    icon: 'Bot',
    flow: ['Phone call', 'AI voice agent', 'Gmail (read-only)'],
    description:
      'A personal phone number backed by an AI voice agent that reads your Gmail aloud: list unread mail, search and read messages, with read-only access and layered security.',
    highlights: [
      'Layered security: basic auth, webhook signature checks, a deny-by-default caller allowlist, per-call tool tokens and a spoken PIN with lockouts.',
      'Defended against prompt injection by treating email content as untrusted and never exposing the PIN to the model.',
      'Defined the agent in SWML with SWAIG tools for inbox, search and read, with speech-friendly text cleanup and Vitest tests.',
    ],
    frontend: [],
    backend: ['Node.js 22', 'TypeScript'],
    other: ['SignalWire AI Agent SDK', 'Gmail API', 'Vitest'],
    images: [],
  },
]

export const experience = [
  {
    company: 'WeSupport Inc.',
    role: '.Net Developer (Metrobank)',
    period: 'Feb 2024 – Feb 2026',
    summary:
      'Developing and enhancing internal and external API services for Metrobank, building secure, scalable RESTful APIs using .NET Core for banking transactions, account management, and third-party integrations.',
    highlights: [
      'Developed new REST APIs using .NET 6 Core with C#, leveraging Dapper and ADO.NET for efficient database operations serving critical banking endpoints.',
      'Designed and implemented feature enhancements to address evolving business requirements and improve user experience.',
      'Created unit tests using NUnit to support test-driven development and maintain code quality.',
      'Collaborated with internal teams and third-party vendors to integrate banking services and ensure seamless interoperability.',
    ],
    tools: ['.NET 6 Core', 'C#', 'Dapper', 'ADO.Net', 'MS SQL Server', 'NUnit', 'Postman', 'Jira'],
  },
  {
    company: 'Loanworks',
    role: 'Analyst Programmer L3',
    period: 'Feb 2021 – Feb 2024',
    summary:
      'Built and improved enterprise applications, creating new RESTful APIs and enhancing UI environments, integrated with Azure DevOps CI/CD pipelines.',
    highlights: [
      'Designed and developed new REST APIs using .NET Core with Entity Framework across .NET 6 and .NET 8.',
      'Created and enhanced UI components using AngularJS, JavaScript, Bootstrap, and classic ASP.',
      'Configured Azure DevOps environments and automated build, test, and deployment pipelines.',
      'Managed source code in Azure Git, coordinated CI/CD workflows, and used Jira for task tracking.',
    ],
    tools: ['.NET 6/8', 'Entity Framework', 'AngularJS', 'Azure DevOps', 'Azure Git', 'TFS', 'Jira', 'Confluence'],
  },
  {
    company: 'IBM Business Services, Inc.',
    role: 'Application Developer (ABS-CBN)',
    period: 'Jul 2019 – Dec 2020',
    summary:
      'Continuously enhanced and maintained an enterprise media system, delivering incremental improvements via Agile Scrum.',
    highlights: [
      'Developed and enhanced features on the existing system using C#.NET.',
      'Diagnosed, troubleshot, and resolved software defects to maintain reliability and performance.',
      'Created and executed unit tests to verify new features and bug fixes.',
    ],
    tools: ['C#.NET', 'MS SQL Server', 'Postman'],
  },
  {
    company: 'Accenture PH Manila',
    role: 'Sr. Application Development Analyst — Team Lead',
    period: 'Jan 2019 – Jun 2019',
    summary:
      'Led a development team, managing workflows and Agile ceremonies while ensuring high-quality, timely software delivery.',
    highlights: [
      'Assigned and prioritized ServiceNow and Jira tickets to ensure efficient team workflow.',
      'Led bug identification, prioritization, and resolution efforts across the team.',
      'Prepared and presented management reports on project status and team performance.',
    ],
    tools: ['MS SQL Server', 'Jira', 'ServiceNow'],
  },
  {
    company: 'Cognitif Inc.',
    role: '.Net Developer / Mentor',
    period: 'Feb 2018 – Jan 2019',
    summary:
      'Maintained existing ASP.NET applications and built a new e-commerce platform, while mentoring junior developers.',
    highlights: [
      'Designed and developed a new e-commerce platform using C# .NET Core, Bootstrap, HTML, Ajax, and JavaScript.',
      'Conducted teaching and shadowing sessions for junior employees on SQL and C#.NET programming.',
      'Followed Scrum frameworks for sprint planning, stand-ups, and reviews.',
    ],
    tools: ['C# .NET Core', 'Bootstrap', 'JavaScript', 'Ajax', 'MS SQL Server'],
  },
  {
    company: 'Philsoft Technologies Group Inc.',
    role: 'Software Developer / Technical Mentor',
    period: 'Nov 2014 – Jan 2018',
    summary:
      'Maintained legacy and modern applications, optimized performance, and engaged directly with clients across Accounting, Payroll, and Billing systems.',
    highlights: [
      'Maintained and improved applications built with VB6, VB.NET, C#.NET, HTML, Bootstrap, JavaScript, and Ajax.',
      'Analyzed and optimized software for improved speed and scalability.',
      'Mentored junior developers on Accounting, Payroll, and Billing system processes.',
      'Attended client meetings onsite to gather requirements and align development with business needs.',
    ],
    tools: ['VB6', 'VB.NET', 'C#.NET', 'MS SQL Server', 'Crystal Reports', 'SVN', 'TFS'],
  },
]

export const education = {
  school: 'Quezon City Polytechnic University',
  degree: "Bachelor's in Information Technology, Major in Computer Science",
  year: '2014',
}
