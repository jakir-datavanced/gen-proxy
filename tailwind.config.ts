import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      height: {
        mainContent: "calc(100vh - 6.8125rem)",
      },
      spacing: {
        processContent: "4.25rem",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        placeHolder: "#949394",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          foretitle: "hsl(var(--primary-foretitle))",
          cta: "#225fcf",
          focused: "#1f57be",
          disabled: "#92b6f7",
          pink: {
            1: "#E60479",
          },
          lightPurple: {
            1: "#BD5EE9",
            2: "#4E415F",
            3: "#8247E4"
          },
          lightBlue: {
            1: "#e9f0fe",
            2: "#f2f6fe",
            3: "#f9fbff",
          },
        },
        neutral: {
          secheadlines: "#0C0B0C",
          headlines: "#1f1f1f",
          bodyText: "#494949",
          subHeadline: {
            1: "#595959",
            2: "#717171",
            3: "#4C4C4C",
          },
          disabledText: "#8f8f8f",
          progressBar: {
            DEFAULT: "#cecece",
            text: "#5B5B5B",
          },
          borders: {
            DEFAULT: "#e2e2e2",
            light: "#ebebeb",
            gray: "#D7D7D7",
          },
          whiteBg: "#fefefe",
          uploaderBorder: "#979797",
          placeholder: "#393939",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          error: {
            DEFAULT: "#ea3a3d",
            focused: "#FEF9F9",
          },
          warning: "#FF8412",
          success: "#369941",
          tag: {
            1: "#fef1f1",
            2: "#ecfff0",
            3: "#FFFCF3",
          },
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      borderRadius: {
        sm: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
      },
      lineHeight: {
        xs: "110%",
        sm: "115%",
        md: "140%",
        xmd: "145%",
        xl: "160%",
        lg: "1.34rem",
      },
      fontSize: {
        "2xs": "0.6875rem", //10px
        sm: "0.8125rem", //13px
        "2sm": "0.875rem", //14px
        "3sm": "0.9375rem", //15px
        "3md": "1rem", //16px
        "2lg": "1.0625rem", //17px
        "3lg": "1.125rem", //18px
        "4lg": "1.25rem", //20px
        "xl": "1.5rem", //24px
        "xxl": "1.875rem", //30px
        "2xl": "2rem", //32px
        "3xll": "2.50rem", //40px
        "3xl": "2.75rem", //44px
        "3xxl": "3.125rem", //50px
        "5xxl": "5rem", //50px
      },
      boxShadow: {
        'accordion': '6px 6px 20px 0 rgba(0, 0, 0, 0.15)',
        'switch': '0px 0px 20px 0px rgba(0, 0, 0, 0.25)',
        'pricing': '6px 6px 20px 0 rgba(0, 0, 0, 0.15)',
        'partnar': '6px 6px 44.6px 14px rgba(0, 0, 0, 0.12)',
      },
    }

  },
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar-hide")],
} satisfies Config;
