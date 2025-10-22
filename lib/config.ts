import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Ενημέρωση γιατις υπηρεσίες μας!",
    prompt: "Θέλω να μάθω περισσότερα για τις υπηρεσίες σας!",
    icon: "circle-question",
  },
  {
    label: "Προγραμματισμός ραντεβού για demo.",
    prompt: "Θα ήθελα να κλείσω ένα ραντεβού για demo.",
    icon: "circle-question",
  },
];

export const PLACEHOLDER_INPUT = "Συνομιλία με ΑΙ...";

export const GREETING = "Καλώς Ορίσατε! Πως μπορώ να βοηθήσω σήμερα;";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  // color: {
  //   grayscale: {
  //     hue: 220,
  //     tint: 6,
  //     shade: theme === "dark" ? -1 : -4,
  //   },
  //   accent: {
  //     primary: theme === "dark" ? "#f1f5f9" : "#0f172a",
  //     level: 1,
  //   },
  // },
  color: {
      grayscale: {
        hue: 0,
        tint: 0
      },
      accent: {
        primary: '#181818',
        level: 2
      },
      surface: {
        background: '#ffffff',
        foreground: '#ffffff'
      }
    },
  radius: "round",
  density: 'spacious',
  typography: {
      baseSize: 16,
      fontFamily: 'Inter, sans-serif',
      fontSources: [
        {
          family: 'Inter',
          src: 'https://rsms.me/inter/font-files/Inter-Regular.woff2',
          weight: 400,
          style: 'normal'
        }
  },
  // Add other theme options here
  // chatkit.studio/playground to explore config options
});
