# Image Manifest — Besomi Robotics & AI Website

All paths are served from the Vite `public/` dir, so reference them in code as `/images/...`.
Product/hero shots are JPG (quality 85, max 1920px). Logos are PNG with transparency.

## ⚠️ REAL vs AI — READ FIRST

- **`/images/products/h2-formal.png` = AI-GENERATED. DO NOT USE.** It is a generic
  silver humanoid render (1024×1536) with no Unitree branding — not real client
  product photography. It is flagged for removal. Nothing in `src/data/products.ts`
  references it. Replacements: use `/images/products/h2-1.jpg` (real H2 dance pose)
  wherever an H2 visual is needed.
- **Every `products/*.jpg` file = REAL Unitree product imagery**, extracted from the
  client's own Unitree PPTX/PDF decks (see `_assets_staging/`). No AI-generated
  images are used anywhere in the product galleries.
- `/images/team/` (incl. `runner.png`) comes from the client's own Digital Crew PDF
  (brand artwork) — intentionally out of scope, leave as-is.

## Logos

| Path | Description |
| --- | --- |
| `/images/logo-white.png` | BESOMI ROBOTICS & AI logo, all-white version with transparency — use on dark navy / dark backgrounds (2500×2500, wide padding). |
| `/images/logo-color.png` | BESOMI ROBOTICS & AI logo, blue/dark-blue color version with transparency — use on white / light backgrounds (2500×2500, wide padding). |

Note: both logo files have generous transparent padding around the mark; use `object-contain` and size the container accordingly.

## Product Images (`/images/products/`)

Product shots are flattened onto **white** backgrounds (studio-style) — best on light cards/sections, or with blend/overlay treatments on dark. All are REAL Unitree imagery from client decks.

### Unitree G1 (humanoid) — 5 images

| Path | Description |
| --- | --- |
| `/images/products/g1-1.jpg` | **HERO.** G1 full-body front view, white studio background (1500×1750). |
| `/images/products/g1-2.jpg` | G1 three-quarter side view with glowing blue face visor (760×776). |
| `/images/products/g1-3.jpg` | G1-D dual-arm humanoid workstations (stationary lift + wheeled chassis) with dexterous-hand options (1890×1920). Good for "platform/ecosystem" contexts. |
| `/images/products/g1-4.jpg` | Dex3-1 five-finger force-controlled dexterous hand, detail shot (1610×1043). NEW. |
| `/images/products/g1-5.jpg` | Three-finger dexterous gripper with embedded wrist camera, detail shot (1459×1259). NEW. |

### Unitree H2 (humanoid) — 4 images

| Path | Description |
| --- | --- |
| `/images/products/h2-1.jpg` | **HERO (only full-body H2 shot in client material).** H2 full-size humanoid, dynamic dance-style pose (500×500). Small — avoid huge full-bleed usage. |
| `/images/products/h2-2.jpg` | Dex5-1 five-finger dexterous hand, silver (682×1001). |
| `/images/products/h2-3.jpg` | Dex5-1 five-finger dexterous hand, black version (356×492). NEW. |
| `/images/products/h2-4.jpg` | White five-finger dexterous hand option (Inspire-style, from H2 deck hand-options page) (265×398). NEW. |

### Unitree R1 (humanoid) — 2 images

| Path | Description |
| --- | --- |
| `/images/products/r1-1.jpg` | **HERO (only R1 robot shot in client material).** R1 full-body three-quarter view, white/blue/red livery (1080×1080). |
| `/images/products/r1-2.jpg` | Dex3-1 three-finger dexterous hand for R1 Edu (250×141 — small, card-size use only). NEW. |

### Unitree Go2 (quadruped) — 5 images

| Path | Description |
| --- | --- |
| `/images/products/go2-1.jpg` | **HERO.** Go2 side three-quarter studio shot (800×800). |
| `/images/products/go2-2.jpg` | Go2 with mounted dual-camera/inspection payload module (382×440). Small — card size only. |
| `/images/products/go2-3.jpg` | Go2 with spinning LiDAR payload (352×360). Small — card size only. NEW. |
| `/images/products/go2-4.jpg` | Go2 with thermal-gimbal inspection rig (351×414). Small — card size only. NEW. |
| `/images/products/go2-5.jpg` | Go2 Edu with top-mounted compute dock (366×360). Small — card size only. NEW. |

### Unitree Go2-W (wheel-legged quadruped) — 3 images

| Path | Description |
| --- | --- |
| `/images/products/go2w-1.jpg` | **HERO.** Go2-W with LiDAR + camera rig on back (900×900). |
| `/images/products/go2w-2.jpg` | Go2-W three-quarter view with 7" tires (598×599). |
| `/images/products/go2w-3.jpg` | Go2-W with compact LiDAR module (416×416). NEW. |

### Unitree Z1 & D1 (robotic arms) — 5 images

| Path | Description |
| --- | --- |
| `/images/products/z1-1.jpg` | **HERO (dark).** D1 robotic arm with gripper, dramatic **dark navy background** with purple motor accents (1560×1184). Works directly on dark sections. |
| `/images/products/z1-2.jpg` | Four D1 servo arms arrayed on a white surface (639×391). Good for ALOHA/bimanual kit context. |
| `/images/products/z1-3.jpg` | Z1 silver 6-axis dexterous arm, white background (509×490). NEW. |
| `/images/products/z1-4.jpg` | Two D1 arms on white table — bimanual/teleoperation pair (617×395). NEW. |
| `/images/products/z1-5.jpg` | Z1 claw gripper close-up (336×269). Small — card size only. NEW. |

### Do NOT use

| Path | Description |
| --- | --- |
| `/images/products/h2-formal.png` | **AI-GENERATED render — not real product photography. Flagged for removal; do not reference anywhere.** |

## Hero Images (`/images/hero/`)

Hero shots are flattened onto **dark navy (#080F1E-ish)** backgrounds — safe for full-bleed dark hero sections.

| Path | Description |
| --- | --- |
| `/images/hero/hero-1.jpg` | Robotic arm (Z1/D1) with purple accents on dark navy — dramatic, matches brand purple accent (1560×1184, landscape). |
| `/images/hero/hero-2.jpg` | Unitree Go2 quadruped on dark navy background (800×800, square). |
| `/images/hero/hero-3.jpg` | Unitree G1 humanoid full body on dark navy background (1500×1750, portrait — good for split hero layouts). |
| `/images/hero/hero-4.jpg` | Unitree R1 humanoid full body on dark navy background (1080×1080, square). |

## Notes for page builders

- `hero-3`/`hero-4` (humanoids) and `hero-2` (Go2) have the robot rendered on dark navy — subtle glow/gradient overlays blend well.
- `z1-1` and `hero-1` are the same source image in two crops/backgrounds (dark both) — don't use both on the same screen.
- H2 has only ONE real full-body shot in the client decks (`h2-1.jpg`, 500×500); the rest of the H2 gallery is dexterous-hand detail shots. For large H2 visuals use `h2-1.jpg`, never the AI-generated `h2-formal.png`.
- R1 has only ONE real robot shot (`r1-1.jpg`); `r1-2.jpg` is a small hand detail. Reuse `r1-1.jpg` with different crops/treatments when more R1 visuals are needed (a dark-navy variant already exists as `hero-4.jpg`).
