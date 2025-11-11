export const selectWork = [
  {
    id: 'cs-1',
    title: 'Onboarding Redesign',
    initials: 'OR',
    summary: 'Reduced time-to-value by 38% via progressive disclosure.',
    tags: ['UX Strategy', 'IA', 'Experimentation'],
    url: '#',
    image: '',
    sections: [
      { id: 'context', title: 'Context', body: [
        'Legacy onboarding required nine mandatory fields before users could explore product value. Drop-off reached 62% by step three.',
        'Stakeholders believed gathering rich data up front would improve personalization, but early friction prevented users from seeing core value.'
      ], images: ['/case/placeholder-1.svg'] },
      { id: 'problem', title: 'Problem', body: 'Users abandoned due to cognitive overload and lack of perceived progress. Business needed faster activation to unlock expansion.' },
      { id: 'approach', title: 'Approach', body: [
        'Audited funnel, ran journey mapping, and identified decision-heavy steps that overloaded new users.',
        'Prototyped progressive disclosure with adaptive forms and inline guidance triggered by user intent.'
      ], images: ['/case/placeholder-2.svg'] },
      { id: 'experiments', title: 'Experiments', body: 'A/B tested form breakup (3 steps vs. legacy), microcopy variants, and optional vs mandatory profile fields.' },
      { id: 'outcomes', title: 'Outcomes', body: [
        'Time-to-first key action improved 38%. Completion rose from 38% to 74%.',
        'Support tickets on setup decreased 21%, and qualitative feedback highlighted clearer progress cues.'
      ] },
      { id: 'learnings', title: 'Learnings', body: 'Reducing initial commitment and clarifying progress indicators drives activation. Adaptive help beats static docs.' }
    ]
  },
  {
    id: 'cs-2',
    title: 'Mobile Billing Flows',
    initials: 'MB',
    summary: 'Simplified payments across 12 locales.',
    tags: ['Mobile', 'Payments', 'Accessibility'],
    url: '#',
    image: '',
    sections: [
      { id: 'overview', title: 'Overview', body: [
        'Fragmented billing UX caused confusion around tax, currency, and confirmation states.',
        'Different providers presented inconsistent error surfaces and locale formatting.'
      ] },
      { id: 'research', title: 'Research', body: 'Shadowed checkout sessions, analyzed drop-offs, interviewed support agents handling payment friction.' },
      { id: 'constraints', title: 'Constraints', body: 'Multiple payment providers; regulatory variance (VAT/GST); strict mobile performance budget.' },
      { id: 'design', title: 'Design Strategy', body: [
        'Unified summary screen, progressive validation, and locale-aware formatting.',
        'Established a semantic error hierarchy to prioritize blockers and show inline recovery.'
      ], images: ['/case/placeholder-1.svg'] },
      { id: 'accessibility', title: 'Accessibility', body: 'Focus order tuned, announced inline errors via ARIA live regions, ensured color contrast and large tap targets.' },
      { id: 'results', title: 'Results', body: 'Checkout completion up 15%. Error recovery time down 27%. Accessibility audit passed AA with 0 critical issues.' },
    ]
  },
  {
    id: 'cs-3',
    title: 'Design System Foundations',
    initials: 'DS',
    summary: 'Tokenized design system with usage guidelines.',
    tags: ['Design System', 'Tokens', 'Docs'],
    url: '#',
    image: '',
    sections: [
      { id: 'mission', title: 'Mission', body: [
        'Create a scalable design system enabling consistency and speed for 7 product squads.',
        'Balance constraints for accessibility, performance, and internationalization.'
      ] },
      { id: 'inventory', title: 'Inventory', body: 'Audited 140+ unique color values, 22 button variants, inconsistent spacing rules.' },
      { id: 'tokens', title: 'Tokens', body: [
        'Defined semantic tokens (action-bg, surface-subtle) layered over raw primitives.',
        'Mapped tokens to platform variables and set up theming hooks for dark mode.'
      ], images: ['/case/placeholder-2.svg'] },
      { id: 'components', title: 'Components', body: 'Refactored core primitives: Button, Input, Modal with accessibility and flexible composition.' },
      { id: 'documentation', title: 'Documentation', body: 'Authored usage guidelines, anti-patterns, and adoption playbook in an internal portal.' },
      { id: 'impact', title: 'Impact', body: 'PR review time dropped 18%. Visual regressions decreased notably. Onboarding new designers faster by ~30%.' }
    ]
  },
  {
    id: 'cs-4',
    title: 'Prototyping for AI Feature',
    initials: 'AI',
    summary: 'Wizard-of-Oz tests for assisted authoring.',
    tags: ['Prototyping', 'Research', 'AI'],
    url: '#',
    image: '',
    sections: [
      { id: 'goal', title: 'Goal', body: 'Validate desirability and trust signals for an AI-assisted writing helper.' },
      { id: 'method', title: 'Method', body: 'Wizard-of-Oz prototype: human operator generated suggestions to simulate model outputs.' },
      { id: 'trust', title: 'Trust & Friction', body: 'Iterated on disclosure patterns, model confidence badges, and opt-out controls.' },
      { id: 'iterations', title: 'Iterations', body: 'Three rounds: raw inline suggestions → contextual panel → minimal inline with expand affordance.' },
      { id: 'metrics', title: 'Metrics', body: 'Suggestion acceptance rate 62%. Perceived task time reduced subjectively by users.' },
      { id: 'next', title: 'Next Phase', body: 'Integrate actual model, explore personalization, long-form drafting enhancements.' }
    ]
  },
]

export const otherWork = [
  { id: 'ow-1', title: 'Settings IA Audit', initials: 'IA', summary: 'Recard sorting + tree tests to restructure.', tags: ['IA', 'Research'], url: '#', image: '', sections: [
    { id: 'audit', title: 'Audit Findings', body: 'Navigation depth exceeded four levels; duplicate labels caused confusion.' },
    { id: 'testing', title: 'Card Sorting & Tree Tests', body: 'Hybrid card sort led to a simplified top-level grouping.' },
    { id: 'recommendations', title: 'Recommendations', body: 'Flatten hierarchy, consolidate terminology, add task-based shortcuts.' }
  ] },
  { id: 'ow-2', title: 'Zero State Patterns', initials: 'ZS', summary: 'Patterns library for empty states.', tags: ['Patterns', 'Content'], url: '#', image: '', sections: [
    { id: 'pattern', title: 'Pattern Library', body: 'Cataloged empty states, defined goals: educate, reassure, enable action.' },
    { id: 'taxonomy', title: 'Taxonomy', body: 'Segmented by context (first-use, loading failure, search empty, permissions).' },
  ] },
  { id: 'ow-3', title: 'Admin Bulk Actions', initials: 'BA', summary: 'Reduced clicks by 52% with batch ops.', tags: ['Enterprise', 'Workflow'], url: '#', image: '', sections: [
    { id: 'workflow', title: 'Workflow Analysis', body: 'Observed admins performing repetitive single-item edits.' },
    { id: 'design', title: 'Design Solution', body: 'Introduced multi-select with bulk toolbar and conflict resolution modal.' },
  ] },
  { id: 'ow-4', title: 'Growth Email Opt-in', initials: 'GE', summary: 'Consent-first modal improved CTR by 1.8x.', tags: ['Growth', 'Ethical UX'], url: '#', image: '', sections: [
    { id: 'ethics', title: 'Ethical Framing', body: 'Ensured transparency about data usage and easy opt-out.' },
    { id: 'copy', title: 'Copy Variants', body: 'Tested value proposition ordering and reassurance language.' },
  ] },
  { id: 'ow-5', title: 'Help Center Revamp', initials: 'HC', summary: 'Task-based information architecture.', tags: ['Content Design'], url: '#', image: '', sections: [
    { id: 'ia', title: 'Information Architecture', body: 'Shifted from product-centric to task-centric categorization.' },
    { id: 'search', title: 'Search Improvements', body: 'Improved metadata tagging and synonym mapping for findability.' },
  ] },
  { id: 'ow-6', title: 'Team Rituals', initials: 'TR', summary: 'Design crit and weekly insights cadence.', tags: ['Ops'], url: '#', image: '', sections: [
    { id: 'cadence', title: 'Cadence', body: 'Instituted weekly insights and bi-weekly critique with structured agenda.' },
    { id: 'impact', title: 'Impact', body: 'Cross-team alignment strengthened and decision velocity increased.' },
  ] },
]
