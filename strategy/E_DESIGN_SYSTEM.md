# The Moving Target — Design System

## Brand Foundation

### Visual Identity
The Moving Target is bold yet refined. The visual language draws from editorial design and premium media brands—clean typography, generous whitespace, and subtle motion accents that reference the "moving target" concept without being literal.

---

## Color Palette

### Primary Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | `#0A0A0A` | Main background |
| `--bg-secondary` | `#141414` | Card backgrounds, sections |
| `--bg-tertiary` | `#1A1A1A` | Hover states, subtle elevation |
| `--text-primary` | `#FAFAFA` | Headlines, primary text |
| `--text-secondary` | `#A3A3A3` | Body text, descriptions |
| `--text-muted` | `#737373` | Captions, metadata |

### Accent Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--accent-cream` | `#F5F5DC` | Primary accent, CTAs |
| `--accent-cream-hover` | `#E8E8D0` | CTA hover state |
| `--accent-streak` | `rgba(245, 245, 220, 0.15)` | Motion streak elements |

### Semantic Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--border-subtle` | `#262626` | Borders, dividers |
| `--border-focus` | `#F5F5DC` | Focus rings |
| `--success` | `#22C55E` | Success states |
| `--error` | `#EF4444` | Error states |

### Color Usage Rules
1. Background is always dark (`--bg-primary`)
2. Text hierarchy: primary (headlines) → secondary (body) → muted (meta)
3. Accent color (cream) is used sparingly for CTAs and key highlights
4. Motion streaks use low-opacity cream for subtle brand presence

---

## Typography

### Font Family

**Primary:** `Inter` (Google Fonts)
- Weights: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)

**Display/Headlines:** `Inter` with tight tracking
- Alternative: `Space Grotesk` for more character (optional)

### Type Scale

| Style | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| Display | 64px / 4rem | 700 | 1.0 | -0.03em | Hero headline |
| H1 | 48px / 3rem | 700 | 1.1 | -0.02em | Page titles |
| H2 | 36px / 2.25rem | 600 | 1.2 | -0.01em | Section headlines |
| H3 | 24px / 1.5rem | 600 | 1.3 | 0 | Card titles |
| H4 | 20px / 1.25rem | 600 | 1.4 | 0 | Subsection titles |
| Body Large | 18px / 1.125rem | 400 | 1.6 | 0 | Hero subheadline |
| Body | 16px / 1rem | 400 | 1.6 | 0 | Paragraphs |
| Body Small | 14px / 0.875rem | 400 | 1.5 | 0 | Secondary text |
| Caption | 12px / 0.75rem | 500 | 1.4 | 0.02em | Labels, metadata |

### Responsive Typography

| Style | Desktop | Tablet | Mobile |
|-------|---------|--------|--------|
| Display | 64px | 48px | 40px |
| H1 | 48px | 40px | 32px |
| H2 | 36px | 32px | 28px |
| H3 | 24px | 22px | 20px |

### Typography Rules
1. Headlines use negative letter-spacing for tighter, more impactful display
2. Body text maintains comfortable line-height (1.6) for readability
3. Captions and labels use slight positive tracking for clarity
4. Maximum line length: 65 characters for body text

---

## Spacing System

### Base Unit
**4px** — All spacing values are multiples of 4px

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 4px | Tight spacing |
| `--space-2` | 8px | Icon gaps, tight padding |
| `--space-3` | 12px | Small gaps |
| `--space-4` | 16px | Default padding |
| `--space-6` | 24px | Card padding |
| `--space-8` | 32px | Section internal spacing |
| `--space-12` | 48px | Large gaps |
| `--space-16` | 64px | Section padding (small) |
| `--space-20` | 80px | Section padding (medium) |
| `--space-24` | 96px | Section padding (large) |
| `--space-32` | 128px | Major section breaks |

### Section Spacing
- Default section padding: `96px 0` (vertical)
- Mobile section padding: `64px 0`
- Container max-width: `1280px`
- Container padding: `24px` (desktop), `16px` (mobile)

---

## Components

### Buttons

**Primary Button**
- Background: `--accent-cream`
- Text: `--bg-primary`
- Padding: `14px 28px`
- Border-radius: `6px`
- Font: 16px, weight 600
- Hover: `--accent-cream-hover`, slight scale (1.02)

**Secondary Button**
- Background: transparent
- Border: 1px solid `--border-subtle`
- Text: `--text-primary`
- Padding: `14px 28px`
- Border-radius: `6px`
- Hover: background `--bg-secondary`, border `--text-secondary`

**Ghost Button**
- Background: transparent
- Text: `--text-secondary`
- Padding: `8px 16px`
- Hover: text `--text-primary`

**Button with Icon**
- Icon size: 20px
- Icon gap: 8px
- Icon positioned left or right

---

### Cards

**Episode Card**
- Background: `--bg-secondary`
- Border-radius: `12px`
- Padding: `0` (image bleeds) + `24px` (content)
- Border: 1px solid `--border-subtle`
- Hover: border `--border-focus`, subtle lift

**Project Card**
- Background: `--bg-secondary`
- Border-radius: `12px`
- Padding: `24px`
- Border: 1px solid `--border-subtle`

**Feature Card (Pillars)**
- Background: `--bg-secondary`
- Border-radius: `12px`
- Padding: `32px`
- Border: 1px solid `--border-subtle`
- Icon at top (if applicable)

---

### Forms

**Input Field**
- Background: `--bg-secondary`
- Border: 1px solid `--border-subtle`
- Border-radius: `8px`
- Padding: `14px 16px`
- Text: `--text-primary`
- Placeholder: `--text-muted`
- Focus: border `--border-focus`, ring 2px `--accent-streak`

**Textarea**
- Same as input
- Min-height: `120px`
- Resize: vertical

**Select/Dropdown**
- Same styling as input
- Custom arrow icon (chevron-down)

**Label**
- Font: 14px, weight 500
- Color: `--text-secondary`
- Margin-bottom: `8px`

**Form Group**
- Margin-bottom: `24px`

---

### Navigation

**Header**
- Background: `--bg-primary` with blur backdrop
- Height: `72px`
- Position: fixed, z-index 50
- Border-bottom: 1px solid `--border-subtle` (on scroll)

**Nav Links**
- Font: 15px, weight 500
- Color: `--text-secondary`
- Hover: `--text-primary`
- Active: `--text-primary` with underline

**Mobile Menu**
- Full-screen overlay
- Background: `--bg-primary`
- Links stacked, larger size (24px)

---

### Tags/Badges

**Topic Tag**
- Background: `--bg-tertiary`
- Border-radius: `9999px` (pill)
- Padding: `6px 14px`
- Font: 13px, weight 500
- Color: `--text-secondary`

---

### Dividers

**Horizontal Rule**
- Border: none
- Height: 1px
- Background: `--border-subtle`
- Margin: `48px 0`

---

## Motion & Animation

### Principles
1. **Subtle** — Motion should enhance, not distract
2. **Purposeful** — Every animation has a reason
3. **Fast** — Transitions are quick (150-300ms)
4. **Respectful** — Reduced motion support

### Standard Transitions

| Effect | Duration | Easing |
|--------|----------|--------|
| Hover states | 150ms | ease-out |
| Card lifts | 200ms | cubic-bezier(0.4, 0, 0.2, 1) |
| Page transitions | 300ms | ease-in-out |
| Modal open | 250ms | cubic-bezier(0.4, 0, 0.2, 1) |

### Micro-interactions

**Card Hover**
- Border color transition to `--border-focus`
- Subtle translateY(-2px)
- Duration: 200ms

**Button Hover**
- Background color change
- Scale: 1.02
- Duration: 150ms

**Link Hover**
- Color transition
- Optional underline animation

### Brand Motion Element

**Motion Streak**
- Horizontal gradient lines
- Opacity: 0.1 - 0.2
- Used sparingly in hero and section accents
- CSS gradient or SVG

---

## Layout Patterns

### Container
```css
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}
```

### Grid Patterns

**2-Column Layout**
```css
display: grid;
grid-template-columns: 1fr 1fr;
gap: 64px;
```

**3-Column Card Grid**
```css
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 24px;
```

**Responsive Breakpoints**
- Desktop: 1280px+
- Tablet: 768px - 1279px
- Mobile: < 768px

### Section Structure
```
<section>
  <div class="container">
    <div class="section-header">
      <h2>Section Title</h2>
      <p>Optional description</p>
    </div>
    <div class="section-content">
      <!-- Content here -->
    </div>
  </div>
</section>
```

---

## Icons

### Icon Library
**Lucide React** — Consistent, clean line icons

### Icon Sizes
- Small: 16px
- Default: 20px
- Large: 24px
- XL: 32px

### Icon Usage
- Use icons to enhance, not replace text
- Maintain consistent stroke width
- Ensure sufficient contrast

---

## Accessibility

### Color Contrast
- All text meets WCAG AA (4.5:1 for normal text)
- Large text meets WCAG AAA (7:1)

### Focus States
- Visible focus rings on all interactive elements
- Focus ring: 2px solid `--border-focus`
- Offset: 2px

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Screen Reader
- Semantic HTML structure
- ARIA labels where needed
- Skip navigation link

---

## Implementation Notes

### Tailwind Configuration
```javascript
// tailwind.config.js additions
{
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        foreground: '#FAFAFA',
        muted: '#737373',
        accent: '#F5F5DC',
        'accent-hover': '#E8E8D0',
        border: '#262626',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.03em',
        tight: '-0.02em',
      },
    },
  },
}
```
