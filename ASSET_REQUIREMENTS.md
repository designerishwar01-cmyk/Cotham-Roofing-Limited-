# Reading Roofline LTD — remaining assets

The published version is a designed website demo. The hero and material-study photos are original illustrative concept imagery. They are not evidence of Reading Roofline LTD projects. The reversible roof sequence and comparison are working architectural diagrams while final custom photography/video is unavailable.

## Drop-in media configuration

Use `lib/roofline-media.ts`. Hero video selects desktop or mobile sources and uses the still poster for reduced motion. Roof frames select separate desktop, tablet and mobile manifests; canvas buffers current/nearby frames and limits the retained cache. Empty manifests preserve the working illustrated sequence. Do not substitute seven unrelated photographs: deliver continuous intermediate frames with identical geometry and lighting.

## RRF-HERO-01 — cinematic homepage film

- Purpose: full-screen British residential roofing backdrop, subtle professional work or natural roof detail.
- Format: WebM and H.264 MP4; no audio track; 8–12-second seamless loop.
- Desktop: 1920 × 1080, 16:9, target 2–4 MB.
- Tablet: 1280 × 960 or an approved adaptable crop.
- Mobile: 720 × 1280 portrait composition, target under 2 MB; keep roof visible beside text.
- Camera: extremely slow forward move, no abrupt cuts, stable roof geometry.
- Lighting: natural soft British overcast daylight; warm clay, dark slate, authentic UK brickwork.
- Restrictions: no text, logos, watermarks, malformed people, American architecture, extreme grading or invented company uniforms.
- Existing implementation: mobile/desktop sources, autoplay/muted/loop/playsInline, poster fallback, reduced-motion fallback and subtle push-in.

## RRF-ROOF-01 through RRF-ROOF-07 — continuous construction sequence

Common requirements for every stage:
- One identical British house, fixed three-quarter view, matching roof pitch, chimney, windows, lighting and weather.
- Desktop: 1920 × 1080 master, 16:9; export optimised 1600 × 900 WebP/AVIF frames.
- Tablet: 1200 × 900, 4:3, reframe without changing perspective.
- Mobile: 720 × 960, 3:4, roof-centred composition; keep the full roof legible.
- Continuous camera approach in the opening and pull-back at completion. Intermediate frames must support seamless reverse scrubbing.
- Deliver approximately 90–140 desktop frames, 60–90 tablet frames and 45–70 mobile frames. These are budgets to tune, not mandates; minimise total transfer.
- Preserve natural material textures. No text, logos, watermarks or unrelated people.

| Asset ID | Stage | Required action |
| --- | --- | --- |
| RRF-ROOF-01 | Existing roof | Full British property, visibly weathered covering, restrained damage. Camera begins approaching roof. |
| RRF-ROOF-02 | Stripped back | Existing tiles progressively disappear along the roof plane; expose structure consistently. |
| RRF-ROOF-03 | Membrane | Breathable membrane progressively covers the same roof plane, physically attached to the structure. |
| RRF-ROOF-04 | Battens | Timber battens appear in realistic, consistent fixing rows. |
| RRF-ROOF-05 | New roof covering | New tiles populate organised rows; use continuous geometry rather than crossfades. |
| RRF-ROOF-06 | Finishing details | Ridge details, flashing, roofline and appropriate guttering complete the roof. |
| RRF-ROOF-07 | Completed roof | Finished covering and details; subtle pull-back reveals the original property. |

## RRF-WORK-01 and RRF-WORK-02 — actual project photographs

- Purpose: replace illustrative material studies on Home and Our Work.
- RRF-WORK-01: 1800 × 1400 landscape photo; mobile 900 × 1100 crop.
- RRF-WORK-02: 1400 × 1700 portrait detail; mobile 900 × 1100 crop.
- Camera and lighting: clean editorial framing of real completed work, natural daylight, authentic materials.
- Required accompanying facts: project service, confirmed location, concise description, permission to publish.
- Never assign illustrative imagery to real client names or claim it as company work.

## RRF-COMPARE-01A / RRF-COMPARE-01B — genuine before/after pair

- Same real property, fixed camera, identical crop and scale.
- Desktop: 1800 × 1000, 9:5; mobile: 900 × 900 roof-focused crop.
- Natural daylight with similar exposure; no synthetic repair presented as real work.
- Add both URLs to `roofingMedia.comparison`; retain clear provenance and update the illustrative labels only once verified.

## RRF-ABOUT-01 — team photograph

- Optional until a genuine team photo is supplied. 1600 × 1200 desktop, 800 × 1000 mobile.
- Natural, documentary-style portrait of the actual team with consent, authentic work setting, no invented employees.

## Verified content needed before a business launch

- Company story, registration number/address and applicable VAT details.
- Verified Google listing link, live review count/rating and approved real review quotes.
- Any actual qualifications, certifications, guarantees and confirmed service areas.
- Business-approved privacy/legal text and enquiry delivery destination.
- The demo form currently prepares a copyable enquiry only. It does not upload photos, store contact details or send messages. Enable collection only after a secure receiving service and suitable privacy information are configured.

## Countdown

The fixed start is `app/demo-start.ts`. Every route and browser calculates the same seven-day deadline; refreshing does not reset it. At zero the announcement changes to “This preview has expired.” The site is not automatically deleted or access-blocked.
