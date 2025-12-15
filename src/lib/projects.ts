export type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  screenshot?: string;
};

export const projects: Project[] = [
  {
    title: "Crypto Signal Generator",
    description: "Generates buy/sell signals from CoinGecko data using moving averages and RSI.",
    tech: ["Python", "Pandas", "CoinGecko API"],
    github: "https://github.com/johnnich03/finance-prediction.git",
    screenshot: "/screenshots/finance.jpg",
  },
  {
    title: "California DiD Analysis",
    description: "Difference-in-Differences analysis of farmland revenue from 2012-2022.",
    tech: ["R", "modelsummary"],
    github: "https://github.com/johnnich03/Difference-in-Differences-analysis-of-farmland-revenue-from-2012-2022.git",
    screenshot: "/screenshots/farmland.jpg",
  },
  {
    title: "Message Encryption and Decryption",
    description: "Utilizes Markov Chain Monte Carlo algorithm to encrypt and decrypt messages.",
    tech: ["Python"],
    github: "https://github.com/johnnich03/Message-Encryption-and-Decryption.git",
    screenshot: "/screenshots/security.jpeg",
  }
];
