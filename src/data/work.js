export const selectWork = [
  {id: 'visionfusion',
  title: "Selectively editing AI-generated images with VisionFusion's Object Detection",
  year: 'static/images/2024.png',
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
        { type: 'quote', text: 'How might we enable iterative design workflows in AI image generation?' },
      ]
    },
    {
      id: 'solution',
      title: 'Solution',
      headline: 'An AI image generator designed for iterative design and manipulation',
      body: [
        'VisionFusion combines AI image generation with two novel manipulation approaches, allowing users to generate images and then iterate on them by combining elements, rearranging objects, and refining compositions to achieve their creative vision.',
        { type: 'video', src: 'static/images/visionfusion-demo.mov', alt: 'VisionFusion platform demo' },
        { type: 'subheading', text: 'Primary features'},
        { type: 'stackCards', items: [
          { title: 'Combine Elements', description: 'Users can select their favorite objects from multiple generated images and combine them into a single image.', image: ['static/images/combine-elements.png'] },
          { title: 'Rearrange Objects', description: 'Users can select an object and move or adjust the size of it while the AI uses generative fill to adjust the composition.', image: ['static/images/rearrange-objects.png'] }
        ]},
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
        { type: 'sideCards', items: [
          {
            title: 'NightCafe',
            description: [
              '👍 Lots of editing features',
              '👎 Too many options',
              '👎 Unclear interface',
              '👎 Confusing prompts'
            ],
            image: ['static/images/nightcafe-analysis.png']
          },
          {
            title: 'DALL-E',
            description: [
              '👍 Simple interface',
              '👍 Inpainting features',
              '👎 Limited control',
              '👎 Unclear AI interpretation',
              '👎 Lots of trial and error'
            ],
            image: ['static/images/dalle-analysis.webp']
          }
        ]},
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
  {id: 'pega',
  title: "Improving design systems and aligning UX patterns at Pegasystems",
  year: 'static/images/2023.png',
  initials: 'VF',
  tags: ['B2B SAAS', 'Design System', 'Internship'],
  url: '#',
  video: 'static/images/pega-thumb.mov',
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      headline: 'AI image generation lacks the flexibility for iterative design workflows',
      body: [
        'As AI image generation tools become increasingly popular and accessible, users are facing a growing problem: these tools often produce results that don’t match what they want, leading to frustration. Current tools lack flexibility and give users little control over the creative process. This forces users into a tedious cycle of regenerating images until they get something closer to what they actually need.',
        { type: 'quote', text: 'How might we enable iterative design workflows in AI image generation?' },
      ]
    },
    {
      id: 'solution',
      title: 'Solution',
      headline: 'An AI image generator designed for iterative design and manipulation',
      body: [
        'VisionFusion combines AI image generation with two novel manipulation approaches, allowing users to generate images and then iterate on them by combining elements, rearranging objects, and refining compositions to achieve their creative vision.',
        { type: 'video', src: 'static/images/visionfusion-demo.mov', alt: 'VisionFusion platform demo' },
        { type: 'subheading', text: 'Primary features'},
        { type: 'stackCards', items: [
          { title: 'Combine Elements', description: 'Users can select their favorite objects from multiple generated images and combine them into a single image.', image: ['static/images/combine-elements.png'] },
          { title: 'Rearrange Objects', description: 'Users can select an object and move or adjust the size of it while the AI uses generative fill to adjust the composition.', image: ['static/images/rearrange-objects.png'] }
        ]},
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
        { type: 'sideCards', items: [
          {
            title: 'NightCafe',
            description: [
              '👍 Lots of editing features',
              '👎 Too many options',
              '👎 Unclear interface',
              '👎 Confusing prompts'
            ],
            image: ['static/images/nightcafe-analysis.png']
          },
          {
            title: 'DALL-E',
            description: [
              '👍 Simple interface',
              '👍 Inpainting features',
              '👎 Limited control',
              '👎 Unclear AI interpretation',
              '👎 Lots of trial and error'
            ],
            image: ['static/images/dalle-analysis.webp']
          }
        ]},
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
  {id: 'sevenseas',
  title: "Reimagining site design to enhance customer experience for Seven Seas Coffee",
  year: 'static/images/2025.png',
  initials: 'SS',
  tags: ['Responsive Web Design', 'Client Work'],
  url: '#',
  image: 'static/images/sevenseas-thumb.png',
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      headline: 'AI image generation lacks the flexibility for iterative design workflows',
      body: [
        'As AI image generation tools become increasingly popular and accessible, users are facing a growing problem: these tools often produce results that don’t match what they want, leading to frustration. Current tools lack flexibility and give users little control over the creative process. This forces users into a tedious cycle of regenerating images until they get something closer to what they actually need.',
        { type: 'quote', text: 'How might we enable iterative design workflows in AI image generation?' },
      ]
    },
    {
      id: 'solution',
      title: 'Solution',
      headline: 'An AI image generator designed for iterative design and manipulation',
      body: [
        'VisionFusion combines AI image generation with two novel manipulation approaches, allowing users to generate images and then iterate on them by combining elements, rearranging objects, and refining compositions to achieve their creative vision.',
        { type: 'video', src: 'static/images/visionfusion-demo.mov', alt: 'VisionFusion platform demo' },
        { type: 'subheading', text: 'Primary features'},
        { type: 'stackCards', items: [
          { title: 'Combine Elements', description: 'Users can select their favorite objects from multiple generated images and combine them into a single image.', image: ['static/images/combine-elements.png'] },
          { title: 'Rearrange Objects', description: 'Users can select an object and move or adjust the size of it while the AI uses generative fill to adjust the composition.', image: ['static/images/rearrange-objects.png'] }
        ]},
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
        { type: 'sideCards', items: [
          {
            title: 'NightCafe',
            description: [
              '👍 Lots of editing features',
              '👎 Too many options',
              '👎 Unclear interface',
              '👎 Confusing prompts'
            ],
            image: ['static/images/nightcafe-analysis.png']
          },
          {
            title: 'DALL-E',
            description: [
              '👍 Simple interface',
              '👍 Inpainting features',
              '👎 Limited control',
              '👎 Unclear AI interpretation',
              '👎 Lots of trial and error'
            ],
            image: ['static/images/dalle-analysis.webp']
          }
        ]},
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
  {id: 'kiosk',
  title: "Enhancing the experience of buying concert merchandise with Kiosk on Tour",
  year: 'static/images/2024.png',
  initials: 'KOT',
  tags: ['Kiosk Design', 'Physical UX', '0 to 1'],
  url: '#',
  image: 'static/images/kiosk-thumb.png',
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      headline: 'AI image generation lacks the flexibility for iterative design workflows',
      body: [
        'As AI image generation tools become increasingly popular and accessible, users are facing a growing problem: these tools often produce results that don’t match what they want, leading to frustration. Current tools lack flexibility and give users little control over the creative process. This forces users into a tedious cycle of regenerating images until they get something closer to what they actually need.',
        { type: 'quote', text: 'How might we enable iterative design workflows in AI image generation?' },
      ]
    },
    {
      id: 'solution',
      title: 'Solution',
      headline: 'An AI image generator designed for iterative design and manipulation',
      body: [
        'VisionFusion combines AI image generation with two novel manipulation approaches, allowing users to generate images and then iterate on them by combining elements, rearranging objects, and refining compositions to achieve their creative vision.',
        { type: 'video', src: 'static/images/visionfusion-demo.mov', alt: 'VisionFusion platform demo' },
        { type: 'subheading', text: 'Primary features'},
        { type: 'stackCards', items: [
          { title: 'Combine Elements', description: 'Users can select their favorite objects from multiple generated images and combine them into a single image.', image: ['static/images/combine-elements.png'] },
          { title: 'Rearrange Objects', description: 'Users can select an object and move or adjust the size of it while the AI uses generative fill to adjust the composition.', image: ['static/images/rearrange-objects.png'] }
        ]},
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
        { type: 'sideCards', items: [
          {
            title: 'NightCafe',
            description: [
              '👍 Lots of editing features',
              '👎 Too many options',
              '👎 Unclear interface',
              '👎 Confusing prompts'
            ],
            image: ['static/images/nightcafe-analysis.png']
          },
          {
            title: 'DALL-E',
            description: [
              '👍 Simple interface',
              '👍 Inpainting features',
              '👎 Limited control',
              '👎 Unclear AI interpretation',
              '👎 Lots of trial and error'
            ],
            image: ['static/images/dalle-analysis.webp']
          }
        ]},
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
]

export const otherWork = [
  {id: 'bytebrew',
  title: "Announcement video for game analytics software feature",
  year: 'static/images/2025.png',
  initials: 'BB',
  tags: ['Motion Graphics', 'Video Editing'],
  url: '#',
  video: 'static/images/bytebrew-thumb.mov',
  videoToPlay:'static/images/bytebrew-full.mov',
  // externalUrl: 'https://www.alicemadesign.com/about',
  },
  {id: 'cooklaborate',
  title: "Matchmaking app to facilitate meal and recipe exchanges",
  year: 'static/images/2024.png',
  initials: 'CL',
  tags: ['Social Computing', '0 to 1'],
  url: '#',
  image: 'static/images/cooklab-thumb.png',
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      headline: 'AI image generation lacks the flexibility for iterative design workflows',
      body: [
        'As AI image generation tools become increasingly popular and accessible, users are facing a growing problem: these tools often produce results that don’t match what they want, leading to frustration. Current tools lack flexibility and give users little control over the creative process. This forces users into a tedious cycle of regenerating images until they get something closer to what they actually need.',
        { type: 'quote', text: 'How might we enable iterative design workflows in AI image generation?' },
      ]
    },
    {
      id: 'solution',
      title: 'Solution',
      headline: 'An AI image generator designed for iterative design and manipulation',
      body: [
        'VisionFusion combines AI image generation with two novel manipulation approaches, allowing users to generate images and then iterate on them by combining elements, rearranging objects, and refining compositions to achieve their creative vision.',
        { type: 'video', src: 'static/images/visionfusion-demo.mov', alt: 'VisionFusion platform demo' },
        { type: 'subheading', text: 'Primary features'},
        { type: 'stackCards', items: [
          { title: 'Combine Elements', description: 'Users can select their favorite objects from multiple generated images and combine them into a single image.', image: ['static/images/combine-elements.png'] },
          { title: 'Rearrange Objects', description: 'Users can select an object and move or adjust the size of it while the AI uses generative fill to adjust the composition.', image: ['static/images/rearrange-objects.png'] }
        ]},
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
        { type: 'sideCards', items: [
          {
            title: 'NightCafe',
            description: [
              '👍 Lots of editing features',
              '👎 Too many options',
              '👎 Unclear interface',
              '👎 Confusing prompts'
            ],
            image: ['static/images/nightcafe-analysis.png']
          },
          {
            title: 'DALL-E',
            description: [
              '👍 Simple interface',
              '👍 Inpainting features',
              '👎 Limited control',
              '👎 Unclear AI interpretation',
              '👎 Lots of trial and error'
            ],
            image: ['static/images/dalle-analysis.webp']
          }
        ]},
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
  {id: 'uxcelerate',
  title: "AI-powered assistant to help students plan academic paths",
  year: 'static/images/2025.png',
  initials: 'VF',
  tags: ['LLM Training', 'Human-AI Interaction'],
  url: '#',
  video: 'static/images/uxcel-thumb.mp4',
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      headline: 'AI image generation lacks the flexibility for iterative design workflows',
      body: [
        'As AI image generation tools become increasingly popular and accessible, users are facing a growing problem: these tools often produce results that don’t match what they want, leading to frustration. Current tools lack flexibility and give users little control over the creative process. This forces users into a tedious cycle of regenerating images until they get something closer to what they actually need.',
        { type: 'quote', text: 'How might we enable iterative design workflows in AI image generation?' },
      ]
    },
    {
      id: 'solution',
      title: 'Solution',
      headline: 'An AI image generator designed for iterative design and manipulation',
      body: [
        'VisionFusion combines AI image generation with two novel manipulation approaches, allowing users to generate images and then iterate on them by combining elements, rearranging objects, and refining compositions to achieve their creative vision.',
        { type: 'video', src: 'static/images/visionfusion-demo.mov', alt: 'VisionFusion platform demo' },
        { type: 'subheading', text: 'Primary features'},
        { type: 'stackCards', items: [
          { title: 'Combine Elements', description: 'Users can select their favorite objects from multiple generated images and combine them into a single image.', image: ['static/images/combine-elements.png'] },
          { title: 'Rearrange Objects', description: 'Users can select an object and move or adjust the size of it while the AI uses generative fill to adjust the composition.', image: ['static/images/rearrange-objects.png'] }
        ]},
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
        { type: 'sideCards', items: [
          {
            title: 'NightCafe',
            description: [
              '👍 Lots of editing features',
              '👎 Too many options',
              '👎 Unclear interface',
              '👎 Confusing prompts'
            ],
            image: ['static/images/nightcafe-analysis.png']
          },
          {
            title: 'DALL-E',
            description: [
              '👍 Simple interface',
              '👍 Inpainting features',
              '👎 Limited control',
              '👎 Unclear AI interpretation',
              '👎 Lots of trial and error'
            ],
            image: ['static/images/dalle-analysis.webp']
          }
        ]},
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
  {id: 'mpa',
  title: "Website redesign for MPA Collaborative Network",
  year: 'static/images/2024.png',
  initials: 'VF',
  tags: ['Human-AI Interaction', '0 to 1'],
  url: '#',
  image: 'static/images/mpa-thumb.png',
  },
  {id: 'medtime',
  title: "Cross-platform health app for medication management",
  year: 'static/images/2022.png',
  initials: 'VF',
  tags: ['Cross-platform', '0 to 1'],
  url: '#',
  image: 'static/images/medtime-thumb.png',
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      headline: 'AI image generation lacks the flexibility for iterative design workflows',
      body: [
        'As AI image generation tools become increasingly popular and accessible, users are facing a growing problem: these tools often produce results that don’t match what they want, leading to frustration. Current tools lack flexibility and give users little control over the creative process. This forces users into a tedious cycle of regenerating images until they get something closer to what they actually need.',
        { type: 'quote', text: 'How might we enable iterative design workflows in AI image generation?' },
      ]
    },
    {
      id: 'solution',
      title: 'Solution',
      headline: 'An AI image generator designed for iterative design and manipulation',
      body: [
        'VisionFusion combines AI image generation with two novel manipulation approaches, allowing users to generate images and then iterate on them by combining elements, rearranging objects, and refining compositions to achieve their creative vision.',
        { type: 'video', src: 'static/images/visionfusion-demo.mov', alt: 'VisionFusion platform demo' },
        { type: 'subheading', text: 'Primary features'},
        { type: 'stackCards', items: [
          { title: 'Combine Elements', description: 'Users can select their favorite objects from multiple generated images and combine them into a single image.', image: ['static/images/combine-elements.png'] },
          { title: 'Rearrange Objects', description: 'Users can select an object and move or adjust the size of it while the AI uses generative fill to adjust the composition.', image: ['static/images/rearrange-objects.png'] }
        ]},
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
        { type: 'sideCards', items: [
          {
            title: 'NightCafe',
            description: [
              '👍 Lots of editing features',
              '👎 Too many options',
              '👎 Unclear interface',
              '👎 Confusing prompts'
            ],
            image: ['static/images/nightcafe-analysis.png']
          },
          {
            title: 'DALL-E',
            description: [
              '👍 Simple interface',
              '👍 Inpainting features',
              '👎 Limited control',
              '👎 Unclear AI interpretation',
              '👎 Lots of trial and error'
            ],
            image: ['static/images/dalle-analysis.webp']
          }
        ]},
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
  {id: 'portfolio',
  title: "This portfolio website from design to development",
  year: 'static/images/2022-NOW.png',
  initials: 'P',
  tags: ['Web Design', 'Frontend Development'],
  url: '#',
  image: 'static/images/portfolio-thumb.png'
  }
]
