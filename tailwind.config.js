/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      hueRotate: {
        270: "270deg",
      },
      fontSize: {
        "10xl": "10rem",
      },
      typography: (theme) => ({
        neutral: {
          css: {
            "--tw-prose-invert-body": theme("colors.neutral[400]"),
            "--tw-prose-invert-headings": theme("colors.neutral.300"),
            "--tw-prose-invert-lead": theme("colors.neutral[400]"),
            "--tw-prose-invert-links": theme("colors.white"),
            "--tw-prose-invert-bold": theme("colors.white"),
            "--tw-prose-invert-counters": theme("colors.neutral[400]"),
            "--tw-prose-invert-bullets": theme("colors.neutral[600]"),
            "--tw-prose-invert-hr": theme("colors.neutral[700]"),
            "--tw-prose-invert-quotes": theme("colors.neutral[100]"),
            "--tw-prose-invert-quote-borders": theme("colors.neutral[700]"),
            "--tw-prose-invert-captions": theme("colors.neutral[400]"),
            "--tw-prose-invert-kbd": theme("colors.white"),
            "--tw-prose-invert-code": theme("colors.white"),
            "--tw-prose-invert-pre-code": theme("colors.neutral[300]"),
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": theme("colors.neutral[600]"),
            "--tw-prose-invert-td-borders": theme("colors.neutral[700]"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
