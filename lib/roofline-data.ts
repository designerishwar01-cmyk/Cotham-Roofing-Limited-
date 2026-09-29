export const business = { name: 'Cotham Roofing Limited', phone: '+44 7392 809776', tel: 'tel:+447392809776', area: 'Bristol', reviews: 7 };
export const services = [
  { slug: 'roof-repairs', name: 'Roof repairs', short: 'A little attention. A lot of protection.', description: 'From a slipped tile to signs of a leak, start with a closer look at the problem.', intro: 'A roof problem does not always mean a whole new roof. Tell us what you have noticed so we can discuss the next step.', problems: ['Missing or broken tiles', 'Water marks inside your home', 'Weathered flashing or roof details'], number: '01' },
  { slug: 'new-roofs', name: 'New roofs', short: 'A fresh start, from the top down.', description: 'Explore a roof replacement that brings the whole covering together.', intro: 'When it is time to consider a replacement, understanding the existing roof is the first step. Discuss the roof covering, supporting layers and finishing details as part of one clear scope.', problems: ['An ageing roof covering', 'Repeated roof repairs', 'Planning a complete replacement'], number: '02' },
  { slug: 'flat-roofing', name: 'Flat roofing', short: 'Clean lines. Considered details.', description: 'A considered approach to flat roof repairs and replacement enquiries.', intro: 'Flat roofs need attention to their surface, edges and drainage. Share what you have noticed and arrange a conversation about the work your roof may need.', problems: ['Signs of water ingress', 'A worn roof surface', 'Questions about drainage'], number: '03' },
  { slug: 'fascias-soffits-guttering', name: 'Fascias, soffits & guttering', short: 'The details that finish the job.', description: 'Care for the edges of your roof and the path rainwater takes away.', intro: 'The roofline brings together fascias, soffits and guttering. Discuss damaged boards, overflowing gutters or a wider roofline refresh.', problems: ['Leaking or overflowing gutters', 'Worn fascia boards', 'Damaged soffits or roofline details'], number: '04' },
  { slug: 'emergency-roofing', name: 'Emergency roofing', short: 'When your roof needs attention.', description: 'For urgent roofing enquiries, speak to the business directly.', intro: 'If a roof problem needs urgent attention, call Cotham Roofing Limited directly to explain what has happened and check availability. Do not climb onto the roof to inspect damage.', problems: ['Storm damage', 'A sudden leak', 'Loose or fallen roof materials'], number: '05' },
];
export const stages = [
 ['Existing roof', 'Every roof has a story. Start with a closer look at its condition.'],
 ['Stripped back', 'The existing covering comes away to reveal the roof structure.'],
 ['Breathable membrane', 'An additional weather-resistant layer beneath the finished roof.'],
 ['Roof battens', 'Timber battens form the fixing lines for the new roof covering.'],
 ['New roof covering', 'New tiles come together, row by row, across the roof.'],
 ['Finishing details', 'Ridge details, flashing and the roofline complete the picture.'],
 ['Ready for the weather.', 'The layers come together. A complete roof, from structure to surface.'],
];
export const problems = [
 {name: 'Roof leaking', service: 'roof-repairs', title: 'Start with the signs you can see.', text: 'Tell us where the water appears and when you first noticed it. Photos taken safely from the ground or indoors can help.', stage: 0},
 {name: 'Missing / broken tiles', service: 'roof-repairs', title: 'Small details deserve attention.', text: 'Let us know what looks out of place. A closer assessment can establish what work may be needed.', stage: 4},
 {name: 'Storm damage', service: 'emergency-roofing', title: 'Speak to someone directly.', text: 'For urgent enquiries, call to explain the damage and check availability. Keep away from loose roofing materials.', stage: 1},
 {name: 'Flat roof problem', service: 'flat-roofing', title: 'Look beyond the surface.', text: 'Describe the roof, any visible wear and where you have noticed water. We can discuss the next step.', stage: 2},
 {name: 'Guttering issue', service: 'fascias-soffits-guttering', title: 'Give the rain a clear way out.', text: 'Overflowing water or a leaking joint? Tell us what happens when it rains and which part of the roofline is affected.', stage: 5},
 {name: 'Roof looks old', service: 'new-roofs', title: 'Understand the whole picture.', text: 'Age alone does not tell the whole story. Discuss the condition of your roof before deciding what to do next.', stage: 6},
 {name: 'Not sure', service: 'roof-repairs', title: 'You do not need all the answers.', text: 'Just describe what you have noticed. Start a conversation and take it from there.', stage: 3},
];
