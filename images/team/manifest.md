# Digital Team Images — Manifest

Source: `_assets_staging/digital_crew/` (extracted from `_source/Digital Crew.pdf`).
All files live at `app/public/images/team/` and are referenced from code as `/images/team/<file>`.

## Files

| File | Source | Size | Notes |
|---|---|---|---|
| `family-stage.jpg` | `p1_0_X5.png` | 1600×900, q88 | Full "Besomi Family" group stage shot with all five personas and the GUARDIAN / SCOUT / LEADER / ASSISTANT / EXPLORER role chart. Best used as the Digital Team page hero. Dark purple background — pairs well with dark section or overlay. |
| `rashid.jpg` | `p3_0_X5.png` | 1600×900, q88 | Rashid (Unitree G1) martial-arts high-kick profile card. Includes "MEET RASHID (G1)" title, personality and hobbies panels baked into the artwork. |
| `noora.jpg` | `p4_0_X5.png` | 1600×902, q88 | Noora (Unitree H2) ballet pose profile card with title and personality/hobbies panels baked in. |
| `laith-latifa.jpg` | `p5_0_X5.png` | 1600×889, q88 | Laith & Latifa (Unitree R1) twins profile card — Laith with football (left), Latifa standing (right), both personality/hobbies panels baked in. |
| `gogo.jpg` | cropped from `p1_0_X5.png` | 265×270, q88 | GoGo (Unitree Go2 / Go2-W wheeled quadruped) cropped from the family stage shot. Small source region — use at card/avatar sizes only, NOT as a large hero. |
| `runner.png` | `p6_1_X9.png` | 676×600, RGBA | Extra individual render: chrome humanoid in running pose on transparent background. Good for floating decorations, cards, or parallax accents on light backgrounds. |

## Usage notes

- `rashid.jpg`, `noora.jpg`, `laith-latifa.jpg` already contain the persona names, personality and hobby text as artwork — page components should treat them as rich media cards, not plain portraits. If text-free portraits are needed later, they must be re-extracted from the PDF's individual renders.
- `gogo.jpg` is the only available GoGo/quadruped shot; there was no standalone Go2 render in the PDF page-6 image set (those were the glowing ring/wave/X symbols, not robots).
- All JPGs are photographic/gradient content (no transparency). `runner.png` keeps its alpha channel.
