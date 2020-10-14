export const styles = {
  Container: {
    maxWidth: 960,
  },
  a: {
    color: "green",

    ":hover": {
      textDecoration: "none",
      color: "greenDark",
    },
  },
  ul: {
    p: 0,
    pl: 5,
  },
  inlineCode: {
    display: "inline-block",
    p: 0,
    py: 2,
    px: 3,
    bg: "greyLightest",
    fontSize: "85%",
    borderRadius: "square",
  },
  blockquote: {
    my: 5,
    py: 4,
    px: 5,
    borderRadius: "square",
    borderLeft: t => `var(--border-thick) solid ${t.colors.blockquote.border}`,
  },
};
