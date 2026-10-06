import {
  Timer,
  ListChecks,
  BellOff,
  ChartNoAxesCombined,
  Headphones,
  SlidersHorizontal,
} from "lucide-react";
export const features = [
  {
    icon: Timer,
    title: "Make time for what matters",
    text: "A flexible Pomodoro timer helps you get into deep work and remember to take a break.",
    tone: "lime",
  },
  {
    icon: ListChecks,
    title: "A little less overwhelm",
    text: "Keep your tasks in one place. Pick a priority and move forward, one small step at a time.",
    tone: "peach",
  },
  {
    icon: BellOff,
    title: "Room to think",
    text: "Focus mode reminds you to put distractions aside and give one thing your full attention.",
    tone: "lavender",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Progress you can see",
    text: "Look back on your sessions and discover when you do your best work.",
    tone: "blue",
  },
  {
    icon: Headphones,
    title: "Set your own atmosphere",
    text: "Rain, forest sounds, or white noise. Find the background that puts you in your element.",
    tone: "peach",
  },
  {
    icon: SlidersHorizontal,
    title: "Your pace. Your rules.",
    text: "Shape your sessions and breaks around your rhythm, so your routine works for you.",
    tone: "lime",
  },
];
export const plans = [
  {
    name: "Free",
    tag: "For your first step",
    price: 0,
    annual: 0,
    text: "Find your rhythm. Start with what matters.",
    items: [
      "Pomodoro timer",
      "Up to 5 active tasks",
      "Basic insights",
      "3 focus soundscapes",
    ],
  },
  {
    name: "Pro",
    tag: "For your everyday flow",
    price: 6,
    annual: 4.8,
    text: "More space for your next big idea.",
    items: [
      "Everything in Free",
      "Unlimited tasks",
      "Advanced insights",
      "Full soundscape library",
      "Custom focus modes",
    ],
  },
  {
    name: "Team",
    tag: "For shared ambitions",
    price: 10,
    annual: 8,
    text: "Build a healthier rhythm together.",
    items: [
      "Everything in Pro",
      "Shared task lists",
      "Team focus sessions",
      "Team progress overview",
      "Priority support",
    ],
  },
];
export const quotes = [
  {
    quote:
      "I finally stopped jumping between ten different things. One session, one task - and my whole day feels different.",
    name: "Olivia K.",
    role: "UX/UI designer",
    initials: "OK",
    color: "peach",
  },
  {
    quote:
      "I love that it never feels like a productivity race. Just a simple rhythm that makes room for both work and rest.",
    name: "Andrew M.",
    role: "Frontend developer",
    initials: "AM",
    color: "lavender",
  },
  {
    quote:
      "Studying for exams feels so much calmer now. I can see my progress and remember to pause. Small change, big difference.",
    name: "Sophie L.",
    role: "Student",
    initials: "SL",
    color: "lime",
  },
];

export const navigation = [
  ["Features", "features"],
  ["How it works", "how-it-works"],
  ["Pricing", "pricing"],
  ["Contact", "contact"],
] as const;
export type PlanName = "Free" | "Pro" | "Team";
export type StartDemo = (plan?: string) => void;
export type DialogKind = "demo" | "privacy" | "terms" | "social" | "contact";
