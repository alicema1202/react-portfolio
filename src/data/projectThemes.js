// Define per-project theme constants.
// Customize brand and accent for each project ID.
// Any project not listed will use the global defaults from :root in styles.css

export const projectThemes = {
  // Example: using current global defaults so behavior is unchanged until you edit
  visionfusion: {
    brand: '#6197de',       // primary color
    accent: '#3b357b',       // secondary/accent color
  },

  // Add more projects, e.g.:
  // 'ow-1': { brand: '#6C5CE7', accent: '#241B5B' },
  // 'ow-2': { brand: '#00C2A8', accent: '#0C2A2E' },
}

export function getProjectTheme(id) {
  return projectThemes[id] || null
}
