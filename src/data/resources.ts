export type Tier = "free" | "paid";

export interface Resource {
  id: string;
  title: string;
  description: string;
  tier: Tier;
  fileUrl: string;
  fileType: "pdf" | "doc" | "sheet" | "link";
  category: string;
}

export const resources: Resource[] = [
  // ── FREE resources ────────────────────────────────────────────────────────
  {
    id: "question-doc-free",
    title: "SAT Question Bank (Free Edition)",
    description: "Curated practice questions covering free-tier topics.",
    tier: "free",
    fileUrl: "",
    fileType: "pdf",
    category: "Practice",
  },
  {
    id: "4-week-schedule",
    title: "4-Week SAT Study Schedule",
    description: "A day-by-day plan to prepare for the SAT in four weeks.",
    tier: "free",
    fileUrl: "",
    fileType: "pdf",
    category: "Planning",
  },
  {
    id: "bluebook-tips",
    title: "Bluebook App Tips & Tricks",
    description: "How to navigate the official College Board Bluebook test app.",
    tier: "free",
    fileUrl: "",
    fileType: "pdf",
    category: "Test Prep",
  },
  {
    id: "sat-roadmap",
    title: "SAT Roadmap",
    description: "Overview of the SAT format, section structure, and scoring.",
    tier: "free",
    fileUrl: "",
    fileType: "pdf",
    category: "Test Prep",
  },
  {
    id: "cheat-sheet",
    title: "SAT Cheat Sheet",
    description: "Quick-reference formulas, grammar rules, and key facts.",
    tier: "free",
    fileUrl: "",
    fileType: "pdf",
    category: "Reference",
  },

  // ── PAID resources ────────────────────────────────────────────────────────
  {
    id: "question-doc-full",
    title: "Full SAT Question Bank",
    description: "Complete question bank covering all math and English modules.",
    tier: "paid",
    fileUrl: "",
    fileType: "pdf",
    category: "Practice",
  },
  {
    id: "8-week-schedule",
    title: "8-Week SAT Study Schedule",
    description: "A comprehensive two-month study plan for thorough preparation.",
    tier: "paid",
    fileUrl: "",
    fileType: "pdf",
    category: "Planning",
  },
  {
    id: "12-week-schedule",
    title: "12-Week SAT Study Schedule",
    description: "A three-month plan for students starting from scratch.",
    tier: "paid",
    fileUrl: "",
    fileType: "pdf",
    category: "Planning",
  },
  {
    id: "test-day-tips",
    title: "Test Day Tips & Checklist",
    description: "What to bring, eat, and do the morning of your SAT.",
    tier: "paid",
    fileUrl: "",
    fileType: "pdf",
    category: "Test Prep",
  },
  {
    id: "t25-college-stats",
    title: "T25 College Stats Guide",
    description: "SAT score ranges and acceptance data for top 25 universities.",
    tier: "paid",
    fileUrl: "",
    fileType: "pdf",
    category: "College Prep",
  },
  {
    id: "error-log",
    title: "Error Log Template",
    description: "Track your mistakes by question type to identify weak areas.",
    tier: "paid",
    fileUrl: "",
    fileType: "sheet",
    category: "Tracking",
  },
  {
    id: "score-tracker",
    title: "Score Tracker",
    description: "Log your practice test scores over time to measure progress.",
    tier: "paid",
    fileUrl: "",
    fileType: "sheet",
    category: "Tracking",
  },
  {
    id: "practice-test-review",
    title: "Practice Test Review Guide",
    description: "How to review a practice test to maximize what you learn from mistakes.",
    tier: "paid",
    fileUrl: "",
    fileType: "pdf",
    category: "Test Prep",
  },
  {
    id: "google-classroom",
    title: "Google Classroom Access",
    description: "Link to the Rise Prep Google Classroom for video lessons and announcements.",
    tier: "paid",
    fileUrl: "",
    fileType: "link",
    category: "Access",
  },
];
