import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Workforce Next - Your Remote Team. Built to Stay.",
    short_name: "Workforce Next",
    description:
      "Hire dedicated AI developers, data engineers, and product engineers from India. Context-matched by SethAI for longevity.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#146EF5",
    icons: [
      { src: "/icon.png", sizes: "192x192", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
