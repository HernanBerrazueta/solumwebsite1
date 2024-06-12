const size = {
  mobile: "320px",
  mobileOnly: "767px",
  smallTablet: "768px",
  tablet: "1024px",
  tabletOnly: "1359px",
  desktop: "1360px",
  copyright: "1536px",
  ultraLarge: "2560px",
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  mobileOnly: `(max-width: ${size.mobileOnly})`,
  smallTablet: `(min-width: ${size.smallTablet})`,
  tablet: `(min-width: ${size.tablet})`,
  tabletOnly: `(min-width: ${size.tabletOnly})`,
  desktop: `(min-width: ${size.desktop})`,
  copyright: `(min-width: ${size.copyright})`,
  ultraLarge: `(min-width: ${size.ultraLarge})`,
};
