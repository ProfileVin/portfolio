export const profile = {
  name: 'Alvin Baclagan',
  title: 'Senior Software Developer',
  location: 'Quezon City, Philippines',
  phone: '(+63) 916 5508 506',
  email: 'alvinvbaclagan@gmail.com',
  linkedin: 'https://www.linkedin.com/in/alvinbaclagan/',
  summary:
    'Senior Software developer with 10+ years of experience building robust, scalable RESTful APIs and enterprise applications with .NET, C#, and modern web technologies. Currently developing internal and external banking APIs for Metrobank, with a track record spanning fintech, media, and e-commerce projects — from hands-on development to team leadership.',
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

export const freelance = [
  {
    name: 'Hoyfia Partners — ERP & Recruiting Platform',
    role: 'Full Stack Developer',
    period: 'Feb 2026 – Aug 2026',
    icon: 'Building2',
    description:
      'A business management platform combining a public marketing/hiring site with an internal ERP dashboard — covering jobs, opportunities, quotes, sales orders, invoices, employees, and documents for a growing partnership firm. Built the client-facing application on Supabase, including auth, data access, and 100+ schema migrations, alongside a component-driven admin UI with drag-and-drop pipelines, exportable reports, and in-app click-to-call.',
    highlights: [
      'Implemented an authenticated client portal and internal dashboard covering the full sales-to-invoice pipeline.',
      'Built data grids and Kanban-style pipelines with drag-and-drop using dnd-kit and TanStack Query/Virtual for large datasets.',
      'Added Excel/PDF export and Twilio Voice click-to-call directly from the browser.',
    ],
    frontend: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui (Radix)', 'TanStack Query', 'React Hook Form', 'Zod'],
    backend: ['Supabase (Postgres)', 'Supabase Auth', 'Edge Functions'],
    other: ['Recharts', 'Twilio Voice SDK', 'Vitest'],
  },
  {
    name: 'Achiezer Donor Portal & QuickBooks Sync',
    role: 'Full Stack Developer',
    period: 'Feb 2026 – Aug 2026',
    icon: 'Mail',
    description:
      'A donor and transaction management system for a nonprofit, pairing a public/admin ledger portal with a backend that keeps donation records in sync with QuickBooks Online on a recurring schedule. Delivered an Angular admin portal for reviewing transactions and sending automated donor emails, backed by a .NET API and Azure Function that pulls QBO data into SQL Server and dispatches notifications through Gmail.',
    highlights: [
      'Built a JWT-secured Angular Material admin portal for transaction review, filtering, and templated bulk emailing.',
      'Developed a scheduled Azure Function that syncs transactions from QuickBooks Online into SQL Server via EF Core.',
      'Integrated Gmail API/OAuth for automated donor receipt and notification emails.',
    ],
    frontend: ['Angular 15', 'Angular Material', 'RxJS', 'TypeScript'],
    backend: ['ASP.NET Core (.NET 8/6)', 'Entity Framework Core', 'SQL Server', 'Azure Functions'],
    other: ['QuickBooks Online API', 'Gmail API / OAuth', 'JWT Auth', 'Swagger'],
  },
  {
    name: 'TeleTeams Call Broadcast & IVR Platform',
    role: '.NET Backend Developer',
    period: 'Feb 2026 – Aug 2026',
    icon: 'PhoneCall',
    description:
      'A Telnyx-powered call broadcast and IVR system for scheduled outbound calling, built for a community calling service with observance-aware scheduling. The API answers and routes inbound calls through a configurable IVR menu, while a companion Azure Function generates and schedules outbound call batches, respecting calling-time preferences and do-not-call lists.',
    highlights: [
      'Built an ASP.NET Core Web API integrating the Telnyx SDK to answer, route, and manage live calls.',
      'Developed an Azure Function to generate scheduled call batches, incorporating halachic time calculations for permissible calling windows.',
      'Modeled call preferences, scheduling, and mute/do-not-call lists with EF Core migrations on a shared data layer.',
    ],
    frontend: [],
    backend: ['ASP.NET Core (.NET 8)', 'Entity Framework Core', 'Azure Functions', 'SQL Server'],
    other: ['Telnyx SDK', 'Zmanim (time calculations)', 'Azure Blob/Queue Storage', 'xUnit', 'Swagger'],
  },
  {
    name: 'QBO Transaction Sync & Donor Ledger API',
    role: 'Backend Developer',
    period: 'Feb 2026 – Aug 2026',
    icon: 'RefreshCw',
    description:
      "The backend platform behind the Achiezer donor portal: a public-facing Portal API and a QuickBooks sync engine that keeps the organization's ledger current. The Portal API serves the public app and admin frontend with JWT-secured endpoints, while a companion Azure Function syncs transactions from QuickBooks Online on a schedule and triggers automated donor emails.",
    highlights: [
      'Designed a shared SQL Server data-access layer consumed by both the public Portal API and the sync Function app.',
      'Implemented steady-state transaction syncing from QuickBooks Online using the QuickBooksSharp library.',
      'Wired up automated email notifications via the Gmail API with MimeKit message composition.',
    ],
    frontend: [],
    backend: ['ASP.NET Core (.NET 8/6)', 'Entity Framework Core', 'SQL Server', 'Azure Functions'],
    other: ['QuickBooksSharp', 'Gmail API', 'MimeKit', 'JWT Auth', 'GitHub Actions'],
  },
  {
    name: 'Wedding Orchestrator — Desktop Planning App',
    role: 'Full Stack Developer',
    period: 'Feb 2026 – Aug 2026',
    icon: 'Heart',
    description:
      'A cross-platform desktop application for wedding planners to manage guest lists, family trees, song selections, and printable exports — packaged as a self-contained Windows installer with the API bundled inside the app. Built a modern React front end wrapped in Electron with a bundled ASP.NET Core API, giving planners an offline-capable, installable tool instead of a hosted web app.',
    highlights: [
      'Packaged a React + Vite frontend and an ASP.NET Core API together into a single Electron desktop app via electron-builder.',
      'Built family-tree and guest management views with drag-and-drop and rich data grids.',
      'Implemented Excel/Word export of guest lists and seating plans using ClosedXML and OpenXML.',
    ],
    frontend: ['React 19', 'TypeScript', 'Vite', 'Electron', 'PrimeReact', 'Tailwind CSS', 'Redux Toolkit', 'TanStack Query'],
    backend: ['ASP.NET Core (.NET 8)', 'Entity Framework Core', 'SQL Server'],
    other: ['ClosedXML', 'DocumentFormat.OpenXml', 'electron-builder'],
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
