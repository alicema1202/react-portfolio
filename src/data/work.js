export const selectWork = [
  {
    id: 'visionfusion',
    title: 'VisionFusion: Iterative AI Image Generation',
    initials: 'VF',
    summary: 'AI image generation concept enabling object-level combine & rearrange workflows for faster iteration.',
    tags: ['AI', 'UX Research', 'Interaction Design'],
    url: '#',
    image: 'https://www.alicemadesign.com/images/visionfusion-thumb.png',
    sections: [
      { id: 'overview', title: 'Overview', headline: 'AI image generation lacks flexibility for iterative workflows', body: [
        'VisionFusion is an AI image generator concept focused on iterative manipulation instead of repeated blind re-prompting.',
        { type: 'carousel', images: [
          'https://www.alicemadesign.com/images/combine-elements.png',
          'https://www.alicemadesign.com/images/rearrange-objects.png'
        ], alt: 'VisionFusion core object manipulation features' },
        { type: 'cards', items: [
          { title: 'Pain Point', text: 'Whole-image regeneration wastes time and reduces control.' },
          { title: 'Insight', text: 'Object-level iteration accelerates convergence.' },
          { title: 'Goal', text: 'Shift user flow from prompt lottery to targeted refinement.' }
        ]},
        'It introduces object-level operations so users can selectively refine results (combine, rearrange, regenerate parts) to converge faster.'
      ] },
  { id: 'problem', title: 'Problem', headline: 'Users rely on trial-and-error prompt cycles with low control', body: [
        'Current AI tools offer little mid-flight control: users endlessly regenerate entire images.',
        'Low transparency and coarse granularity slow exploration and reduce creative confidence.'
      ] },
  { id: 'solution', title: 'Solution Concept', headline: 'Introduce object-level manipulation after generation', body: [
        'Layer interactive object manipulation on top of generation: select objects across batches, merge into a composite, spatially rearrange with generative fill.',
        'Shift from prompt lottery to targeted iteration loops.'
      ], images: ['https://www.alicemadesign.com/images/combine-elements.png','https://www.alicemadesign.com/images/rearrange-objects.png'] },
  { id: 'research', title: 'Research & Competitive Analysis', headline: 'Pain points: transparency, control, and time cost', body: [
        'Pain points: transparency, control, time cost.',
        'NightCafe vs DALL-E audit: breadth vs clarity; both lack seamless granular edit flows.'
      ], images: ['https://www.alicemadesign.com/images/nightcafe-analysis.png','https://www.alicemadesign.com/images/dalle-analysis.webp'] },
  { id: 'ideation', title: 'Ideation Directions', headline: 'Exploring factors, profiles, and object detection', body: [
        'Prompt Factors: expose interpreted attributes for adjustment.',
        'User History Profiles: reuse preference patterns.',
        'Object Detection: detect & operate on discrete elements (lock, combine, regenerate).' 
      ], images: ['https://www.alicemadesign.com/images/object-detection.png'] },
  { id: 'wireframing', title: 'Wireframing Key Features', headline: 'Detailing combine, rearrange, and profile flows', body: [
        'Feature 1.1 Combine objects across multiple generations to synthesize desired composition.',
        'Feature 1.2 Rearrange & scale objects with generative fill maintaining visual coherence.',
        'Preference profiles captured after sessions to influence future prompts.'
      ], images: ['https://www.alicemadesign.com/images/object-detection-combine.png','https://www.alicemadesign.com/images/object-detection-rearrange.png','https://www.alicemadesign.com/images/user-history-profile.png'] },
  { id: 'feedback', title: 'Mid-Project Feedback', headline: 'Feedback prioritized unique selective editing features', body: [
        'Validated novelty of object-centric iteration; warned about over-investing in generic preference memory.',
        'Prioritized selective editing interactions over broad personalization.'
      ] },
  { id: 'final', title: 'Final Concept Snapshot', headline: 'Generate → manipulate → refine loop accelerates iteration', body: [
        'Integrated generate → select → combine/rearrange → refine loop improves speed & control.',
        'Emphasis on visual feedback and low-friction micro-iteration.'
      ], images: ['https://www.alicemadesign.com/images/visionfusion-thumb.png'] },
  { id: 'impact', title: 'Impact & Results', headline: 'Higher perceived control and faster convergence', body: [
        'Benchmarked 4.7/5 vs Human-AI Interaction guidelines (concept evaluation).',
        'Qualitative efficiency gains: fewer full re-prompts; higher perceived control.',
        'Audience cited novelty in granular, object-level iteration workflow.'
      ] },
  { id: 'next', title: 'Future Development', headline: 'Evolve into full-featured generator & validate with users', body: [
        'Expand to full generator: style transfer, background removal, richer selective editing.',
        'Run usability tests with creatives to refine affordances & transparency cues.'
      ] },
  { id: 'learnings', title: 'Key Learnings', headline: 'Granular manipulation + feedback builds AI design trust', body: [
        'Granular manipulation > repeated whole-image regeneration for creative flow.',
        'Real-time visual feedback and control surfaces build trust with AI systems.',
        'Designing AI tools means balancing automation with adjustable agency.'
      ], images: ['https://www.alicemadesign.com/images/visionfusion-logo.png'] }
    ]
  },
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
