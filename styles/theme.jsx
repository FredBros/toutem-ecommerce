import { createTheme } from "@nextui-org/react";


export const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      // background colors (light)
      background: "$white",
      background2: "#F3F4F6",
      backgroundAlpha: "rgba(255, 255, 255, 0.8)", // used for semi-transparent backgrounds like the navbar
      backgroundAlphaCard: "rgba(255, 255, 255, 0.8)", // used for semi-transparent backgrounds like the navbar
      foreground: "#1F2937",
      foregroundLight: "#9CA3AF",
      foregroundGreen: "$primary",
      backgroundContrast: "#F3F4F6",
      // brand colors
      primaryLight: "#BDF6D0",
      primaryLightHover: "#89E8A9", // commonly used on hover state
      primaryLightActive: "#3EC46B", // commonly used on pressed state
      primaryLightContrast: "$white", // commonly used for text inside the component
      primary: "#5FD788",
      primaryBorder: "#5FD788",
      primaryBorderHover: "#20B151",
      primarySolidHover: "#20B151",
      primarySolidContrast: "$white", // commonly used for text inside the component
      primaryShadow: "#3EC46B",
    },
  },
});
export const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      // background colors (dark)
      background: "#1F2937",
      background2: "#374151",
      backgroundAlpha: "rgba(31, 41, 55, 0.8)", // used for semi-transparent backgrounds like the navbar
      backgroundAlphaCard: "rgba(255, 255, 255, 0.8)",
      foregroundLight: "#9CA3AF",
      foregroundGreen: "$primary",
      backgroundContrast: "#374151",
      // brand colors
      primaryLight: "#BDF6D0",
      primaryLightHover: "#89E8A9", // commonly used on hover state
      primaryLightActive: "#3EC46B", // commonly used on pressed state
      primaryLightContrast: "$white", // commonly used for text inside the component
      primary: "#5FD788",
      primaryBorder: "#5FD788",
      primaryBorderHover: "#20B151",
      primarySolidHover: "#20B151",
      primarySolidContrast: "$white", // commonly used for text inside the component
      primaryShadow: "#3EC46B",
    },
  },
});
