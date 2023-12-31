import { Metadata } from "next";

export const meta: Metadata = {
  title: "FCC Clock",
  description: `Experience the FCC Clock, a timer application for effective time management. Customize session and break lengths to enhance your productivity. Stay on track with this interactive countdown timer.`,
  authors: [{ name: "Baliram Singh", url: "https://ome9a.com" }],
  applicationName: "FCC Clock",
  keywords: [
    "Timer app",
    "Pomodoro technique",
    "Productivity tool",
    "Time management",
    "Session length",
    "Break length",
    "Countdown timer",
    "Interactive clock",
    "Customizable timer",
    "Web application",
    "Frontend project",
    "React app",
  ],
  creator: "OMEGA",
  publisher: "OMEGA",
};

// Additional Twitter metadata
export const twitterMeta = {
  card: "summary",
  site: "@omegaStrike", // Replace with your actual Twitter handle
  title: "FCC Clock - Timer Application",
  description:
    "Enhance your productivity with the FCC Clock timer app. Customize session and break lengths for effective time management.",
  image: "/social.png", // Replace with an actual image URL
};

export default meta;
