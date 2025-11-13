export const selectWork = [
  {
  id: 'visionfusion',
  title: "Selectively editing AI-generated images with VisionFusion's Object Detection",
  initials: 'VF',
  tags: ['Human-AI Interaction', '0 to 1'],
  url: '#',
  video: 'static/images/visionfusion-thumb.mp4',
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      headline: 'AI image generation lacks the flexibility for iterative design workflows',
      body: [
        'As AI image generation tools become increasingly popular and accessible, users are facing a growing problem: these tools often produce results that don’t match what they want, leading to frustration. Current tools lack flexibility and give users little control over the creative process. This forces users into a tedious cycle of regenerating images until they get something closer to what they actually need.',
        { type: 'quote', text: 'How might we enable iterative design workflows in AI image generation?' }
      ]
    },
    {
      id: 'solution',
      title: 'Solution',
      headline: 'An AI image generator designed for iterative design and manipulation',
      body: [
        'VisionFusion combines AI image generation with two novel manipulation approaches, allowing users to generate images and then iterate on them by combining elements, rearranging objects, and refining compositions to achieve their creative vision.',
        { type: 'video', src: 'static/images/visionfusion-demo.mov', alt: 'VisionFusion platform demo' },
        { type: 'cards', items: [
          { title: 'Combine Elements', text: 'Users can select their favorite objects from multiple generated images and combine them into a single image.' },
          { title: 'Rearrange Objects', text: 'Users can select an object and move or adjust the size of it while the AI uses generative fill to adjust the composition.' }
        ]}
      ]
    },
    {
      id: 'research',
      title: 'User Research',
      headline: 'Exploring the product space and existing research',
      body: [
        'Our research began by identifying core user pain points in AI image generation. We identified three main problems to focus on solving.',
        { type: 'cards', items: [
          { title: 'Transparency', text: 'Users can’t see how the AI interprets their prompts, making it confusing.' },
          { title: 'User Control', text: 'Limited ability to fine-tune and adjust generated images.' },
          { title: 'Time Spent', text: 'Lots of time spent regenerating images without getting what you want.' }
        ]}
      ]
    },
    {
      id: 'competitive',
      title: 'Competitive Analysis',
      headline: 'Analyzing existing AI image generation platforms and their limitations',
      body: [
        'To understand what’s already out there, we analyzed two popular AI image generators:',
        { type: 'cards', items: [
          { title: 'NightCafe', text: '👍 Lots of editing features\n\n👎 Too many options, unclear interface, confusing prompts' },
          { title: 'DALL-E', text: '👍 Simple interface, inpainting features\n\n👎 Limited control, unclear AI interpretation, lots of trial and error' }
        ]},
        { type: 'images', images: [
          'https://www.alicemadesign.com/images/nightcafe-analysis.png',
          'https://www.alicemadesign.com/images/dalle-analysis.webp'
        ], alt: 'Competitive analysis of NightCafe and DALL-E' },
        'Current selective editing capabilities rely on brush-based or prompt-based selections—both limited in flexibility and accuracy.'
      ]
    },
    {
      id: 'ideation',
      title: 'Ideation',
      headline: 'Imagining a workflow for better selective editing',
      body: [
        'We explored three distinct concepts to address the problem:',
        { type: 'cards', items: [
          { title: 'Prompt Factors', text: 'Users can see how their prompt is understood by the AI through key “factors” (e.g., color, style, objects) and adjust them.' },
          { title: 'User History', text: 'AI system remembers a history of user preferences and allows them to copy these preferences to new prompts.' },
          { title: 'Object Detection', text: 'AI automatically detects objects in the picture, letting users lock, combine, or selectively regenerate them.' }
        ]},
        { type: 'images', images: [
          'https://www.alicemadesign.com/images/object-detection.png'
        ], alt: 'Object detection concept sketches' },
        'Using the Human-AI Interaction Guidelines (CHI 2019), we analyzed each concept’s strengths and weaknesses on a 5-point scale.'
      ]
    },
    {
      id: 'wireframing',
      title: 'Wireframing',
      headline: 'Wireframing for user history and object detection features',
      body: [
        'We refined our ideas into wireframes for the most promising features.',
        { type: 'cards', items: [
          { title: 'Feature 1.1 Object Detection — Combine', text: 'Users can select and combine objects from various AI-generated images to create new compositions.' },
          { title: 'Feature 1.2 Object Detection — Rearrange', text: 'Users can rearrange and scale detected objects on a canvas with generative fill preserving coherence.' },
          { title: 'Feature 2 — User Preference Profiles', text: 'AI generates a user profile after each project to adjust settings based on patterns in the user’s behavior.' }
        ]},
        { type: 'images', images: [
          'https://www.alicemadesign.com/images/object-detection-combine.png',
          'https://www.alicemadesign.com/images/object-detection-rearrange.png',
          'https://www.alicemadesign.com/images/user-history-profile.png'
        ]}
      ]
    },
    {
      id: 'feedback',
      title: 'Mid-Project Feedback',
      headline: 'Feedback prioritized unique selective editing features',
      body: [
        'We presented our initial concepts to a class of 30 students, along with our professor and TA, to validate direction and gather insights.',
        { type: 'cards', items: [
          { title: 'Research Existing Solutions', text: 'We need to explore CHI and related literature to ensure our concept is truly novel.' },
          { title: 'Feature Prioritization', text: 'Preference profiles may already exist elsewhere — focus on unique selective editing features instead.' }
        ]}
      ]
    },
    {
      id: 'final',
      title: 'Final Design',
      headline: 'VisionFusion: An AI image generator designed for iteration',
      body: [
        'VisionFusion combines AI image generation with powerful manipulation tools, enabling users to generate images and then iterate on them by combining elements, rearranging objects, and refining compositions.',
        { type: 'cards', items: [
          { title: 'Combine Elements', text: 'Users can select their favorite objects from multiple generated images and merge them into one.' },
          { title: 'Rearrange Objects', text: 'Users can move and resize objects while the AI intelligently adjusts the rest of the image using generative fill.' }
        ]},
        { type: 'video', src: 'static/images/visionfusion-demo.mov', alt: 'Full demo of VisionFusion features' }
      ]
    },
    {
      id: 'impact',
      title: 'Impact & Results',
      headline: 'Measuring the success of VisionFusion',
      body: [
        'VisionFusion successfully addressed the key pain points identified in our research, providing users with powerful tools for iterative AI image generation and manipulation.',
        { type: 'cards', items: [
          { title: 'Novel Innovation', text: 'Introduces a new paradigm for iterative AI image workflows.' },
          { title: 'Efficiency Gains', text: 'Users reached desired results faster by eliminating re-prompt cycles.' },
          { title: 'Performance Score', text: '4.7/5 — based on Design Guidelines for Human-AI Interaction.' },
          { title: 'Audience Approval', text: 'Audience found the concept effective for addressing current AI image generation challenges.' }
        ]}
      ]
    },
    {
      id: 'next',
      title: 'Next Steps',
      headline: 'Future development and improvements',
      body: [
        'While VisionFusion successfully addresses current AI generation challenges, several areas for future development remain:',
        { type: 'list', items: [
          'Expand to a full-featured image generator with style transfer, background removal, and advanced editing tools.',
          'Conduct user testing with creative professionals to refine the interface and add new interactions for iterative workflows.'
        ]}
      ]
    },
    {
      id: 'learnings',
      title: 'Takeaways',
      headline: 'What I learned from this project',
      body: [
        { type: 'cards', items: [
          { title: 'AI as a Creative Partner', text: 'Successful AI tools enhance creativity by giving users agency and control.' },
          { title: 'Iteration is Key', text: 'Designers need tools that support iterative workflows without starting from scratch.' },
          { title: 'Visual Feedback Matters', text: 'Clear visual feedback and real-time previews build user confidence and trust.' }
        ]}
      ]
    }
  ]},

  {
    id: 'visionfusion',
    title: "Selectively editing AI-generated images with VisionFusion's Object Detection",
    initials: 'VF',
    tags: ['Human-AI Interaction', '0 to 1'],
    url: '#',
    video: 'static/images/visionfusion-thumb.mp4',
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
    id: 'visionfusion',
    title: "Selectively editing AI-generated images with VisionFusion's Object Detection",
    initials: 'VF',
    tags: ['Human-AI Interaction', '0 to 1'],
    url: '#',
    video: 'static/images/visionfusion-thumb.mp4',
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
    id: 'visionfusion',
    title: "Selectively editing AI-generated images with VisionFusion's Object Detection",
    initials: 'VF',
    tags: ['Human-AI Interaction', '0 to 1'],
    url: '#',
    video: 'static/images/visionfusion-thumb.mp4',
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
