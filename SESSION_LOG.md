# Session Log - 2026-01-29

## Summary

Development session covering Formspree integration, footer updates, content cleanup, Route 53 DNS setup, and deployment.

## Changes Made

### 1. Formspree Integration (commit `e5fecd1`)
- Replaced unreliable mailto-based form submissions with Formspree API
- Updated all three inquiry forms: Guest, Partner, Demo
- Added error handling and display for failed submissions
- Removed misleading "check your inbox" message from success page
- Created `.env` with Formspree form IDs (not committed - gitignored)

**Files changed:**
- `app/src/components/forms/GuestForm.tsx`
- `app/src/components/forms/PartnerForm.tsx`
- `app/src/components/forms/DemoForm.tsx`
- `app/src/pages/InquiriesSuccess.tsx`

**Formspree Form IDs:**
- Guest: `xwvbkdwv`
- Partner: `mjgrvqpo`
- Demo: `xaqjyglp`

### 2. Footer Updates (commit `9c98cef`)
- Added semantic version string `v0.2.1` center-justified in footer
- Renamed "Projects" link to "CatchUp" to match header nav
- Removed Twitter social icon and link
- Updated LinkedIn company URL to `https://www.linkedin.com/company/111419075`

**Files changed:**
- `app/src/components/layout/Footer.tsx`

### 3. Em-Dash Removal (commit `286698f`)
- Replaced all em-dashes with contextually appropriate alternatives (commas, colons, parentheses, spaced hyphens)

**Files changed:**
- `app/src/pages/Press.tsx`
- `app/src/pages/About.tsx`
- `app/src/pages/Home.tsx`
- `app/src/pages/Agents.tsx`
- `app/src/content/projects/rag-context-layers.json`
- `app/src/content/projects/ep3-resources.json`

### 4. Route 53 DNS Setup (commit `5c8a190`)
- Created Route 53 hosted zone `Z001505230RWGJLLB0B3E`
- Added Alias A record for apex domain `themovingtarget.ai` pointing to CloudFront
- Added CNAME for `www.themovingtarget.ai` pointing to CloudFront
- Updated `CLAUDE.md` with Route 53 configuration

**Nameservers (configured at Namecheap):**
- `ns-1434.awsdns-51.org`
- `ns-391.awsdns-48.com`
- `ns-516.awsdns-00.net`
- `ns-1786.awsdns-31.co.uk`

**Result:** Both `https://themovingtarget.ai` and `https://www.themovingtarget.ai` now resolve correctly over HTTPS via CloudFront.

### 5. About Page, Comics, and Version Bump (commit `dd8894f`)
- Removed "Episode X" overlay from comic images on CatchUp page
- Removed Twitter icons from host tiles on About page
- Updated LinkedIn URLs:
  - Sidd: `https://www.linkedin.com/in/delhiryder/`
  - Avyay: `https://www.linkedin.com/in/avyay-misra-848a08166/`
- Updated both host roles to "Co-Founder"
- Bumped version to `0.2.2`

**Files changed:**
- `app/src/pages/CatchUp.tsx`
- `app/src/pages/About.tsx`
- `app/src/components/layout/Footer.tsx`

## Deployments

| # | Commit | CloudFront Invalidation |
|---|--------|------------------------|
| 1 | `e5fecd1` | `IETGV8X0TAOVRQMD9OV3WL3ONT` |
| 2 | `dd8894f` | `I6OEZ7VA5GWY693WDWQEUCXQGJ` |

## Commit History (this session)

```
dd8894f Update About page, comics, and version to 0.2.2
5c8a190 Add Route 53 configuration to CLAUDE.md
286698f Remove em-dashes from all visible text
9c98cef Update footer: add version, fix links, remove Twitter
e5fecd1 Replace mailto forms with Formspree integration
```

## Current Version

`0.2.2` - Live at https://www.themovingtarget.ai
