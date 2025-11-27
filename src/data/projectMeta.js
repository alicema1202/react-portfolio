// Project metadata per id: logo, hero image, and summary fields.
// Fill these out per project; unknown fields will display as '—'.

export const projectMeta = {
  visionfusion: {
    logo: 'static/images/visionfusion-logo.png',
    heroImage: 'static/images/visionfusion-thumb.png',
    purpose: 'Selectively editing AI-generated images through object detection',   // e.g., 'Selective object-level editing concept'
    role: 'UX Design, UX Research, Visual Design',      // e.g., 'Product Designer'
    duration: 'Nov - Dec 2024',  // e.g., '2 weeks'
    durationWidth: '200px',
  },
  pega: {
    logo: 'static/images/pega-white-logo.png',
    heroImage: 'static/images/pega-additional-info-screen.png',
    purpose: 'Aligning UI/UX patterns for Constellation Design System at Pega',
    role: 'UX Design, UX Research, Visual Design',
    duration: 'May - Aug 2023',
    durationWidth: '200px',
  },
  sevenseas: {
    logo: 'https://www.alicemadesign.com/images/pega-logo.png',
    heroImage: 'https://www.alicemadesign.com/images/pega-thumb.png',
    purpose: 'Improving design system and aligning UX patterns at Pegasystems',
    role: 'UX Design, UX Research, Visual Design',
    duration: 'May - Aug 2023',
    durationWidth: '294px',
  },
  kiosk: {
    logo: 'https://www.alicemadesign.com/images/pega-logo.png',
    heroImage: 'https://www.alicemadesign.com/images/pega-thumb.png',
    purpose: 'Improving design system and aligning UX patterns at Pegasystems',
    role: 'UX Design, UX Research, Visual Design',
    duration: 'November - December 2024',
    durationWidth: '294px',
  },
  // Add other projects here, e.g.:
  // 'ow-1': { logo: '/path/logo.svg', heroImage: '/path/hero.jpg', purpose: '...', role: '...', duration: '...' },
}

export function getProjectMeta(id) {
  return projectMeta[id] || null
}
