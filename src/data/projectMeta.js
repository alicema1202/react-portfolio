// Project metadata per id: logo, hero image, and summary fields.
// Fill these out per project; unknown fields will display as '—'.

export const projectMeta = {
  visionfusion: {
    logo: 'https://www.alicemadesign.com/images/visionfusion-logo.png',
    heroImage: 'https://www.alicemadesign.com/images/visionfusion-thumb.png',
    purpose: 'Selectively editing AI-generated images through object detection',   // e.g., 'Selective object-level editing concept'
    role: 'UX Design, UX Research, Visual Design',      // e.g., 'Product Designer'
    duration: 'November - December 2024',  // e.g., '2 weeks'
    durationWidth: '294px',
  },
  // Add other projects here, e.g.:
  // 'ow-1': { logo: '/path/logo.svg', heroImage: '/path/hero.jpg', purpose: '...', role: '...', duration: '...' },
}

export function getProjectMeta(id) {
  return projectMeta[id] || null
}
