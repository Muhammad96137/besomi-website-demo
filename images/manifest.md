# Image Manifest — Besomi Robotics & AI Website

All paths are served from the Vite `public/` dir, so reference them in code as `/images/...`.
Product/hero shots are JPG (quality 85, max 1920px). Logos are PNG with transparency.

## Logos

| Path | Description |
| --- | --- |
| `/images/logo-white.png` | BESOMI ROBOTICS & AI logo, all-white version with transparency — use on dark navy / dark backgrounds (2500×2500, wide padding). |
| `/images/logo-color.png` | BESOMI ROBOTICS & AI logo, blue/dark-blue color version with transparency — use on white / light backgrounds (2500×2500, wide padding). |

Note: both logo files have generous transparent padding around the mark; use `object-contain` and size the container accordingly.

## Product Images (`/images/products/`)

Product shots are flattened onto **white** backgrounds (studio-style) — best on light cards/sections, or with blend/overlay treatments on dark.

| Path | Description |
| --- | --- |
| `/images/products/g1-1.jpg` | Unitree G1 humanoid, full-body front view, white studio background (1500×1750). Best primary G1 shot. |
| `/images/products/g1-2.jpg` | Unitree G1 humanoid, three-quarter side view with glowing blue face visor, white background (760×776). |
| `/images/products/g1-3.jpg` | Unitree G1-D dual-arm humanoid workstations (stationary lift + wheeled chassis) with dexterous-hand options, white background (1890×1920). Good for "platform/ecosystem" contexts. |
| `/images/products/h2-1.jpg` | Unitree H2 full-size humanoid, dynamic dance-style pose, white background (500×500). Only full-body H2 shot available — small; avoid huge full-bleed usage. |
| `/images/products/h2-2.jpg` | Dex5-1 five-finger dexterous hand (silver, Inspire-style), white background (682×1001). Good H2 accessory/detail shot. |
| `/images/products/r1-1.jpg` | Unitree R1 humanoid, full-body three-quarter view (white/blue/red livery), white background (1080×1080). Only good R1 shot available. |
| `/images/products/go2-1.jpg` | Unitree Go2 quadruped robot dog, side three-quarter studio shot, white background (800×800). Best primary Go2 shot. |
| `/images/products/go2-2.jpg` | Unitree Go2 with mounted dual-camera/inspection payload module, white background (382×440). Small — use only at card size. |
| `/images/products/go2w-1.jpg` | Unitree Go2-W wheeled quadruped with LiDAR + camera rig on back, white background (900×900). Best primary Go2-W shot. |
| `/images/products/go2w-2.jpg` | Unitree Go2-W wheeled quadruped, three-quarter view with 7" tires, white background (598×599). |
| `/images/products/z1-1.jpg` | Unitree Z1/D1 robotic arm with gripper, dramatic **dark navy background** with purple motor accents (1560×1184). Works directly on dark sections. |
| `/images/products/z1-2.jpg` | Four Unitree D1 servo robotic arms arrayed on a white surface (639×391). Good for ALOHA/bimanual kit context. |

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
- No high-res full-body H2 photograph exists in the source material; `h2-1.jpg` (500×500) is the only one — pair with `h2-2.jpg` (hand detail) on the H2 page.
- R1 has only one usable shot (`r1-1.jpg`); reuse with different crops/treatments if a second visual is needed.
