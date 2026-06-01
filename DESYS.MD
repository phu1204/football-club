# DESIGN SYSTEM — Borderless Finance CTA / FAQ / Footer

## Design Language
- Minimal modern fintech
- Soft premium UI
- Light theme only
- Spacious layout
- Rounded geometry
- Gentle elevation
- Motion-driven accent background
- High readability
- Neutral typography with colorful gradient focal point

---

# FOUNDATION

## Typography

Primary Font:
- Inter
- Fallback: sans-serif

Typography Scale:

Display / Hero
- 3.5rem
- weight: 400
- line-height: 1.1
- letter-spacing: -0.03em

Heading Small
- 0.95rem
- weight: 600

Body
- 0.9rem
- weight: 400
- line-height: 1.6

Caption
- 0.85rem
- weight: 400

Typography Style:
- Mostly regular weight
- Minimal bold usage
- Tight hero tracking
- Comfortable body spacing

---

# COLOR SYSTEM

## Base Colors

Background:
- #ffffff

Surface:
- #fafafa
- #ffffff

Primary Text:
- #171717
- neutral-900

Secondary Text:
- #666666
- #888888

Borders:
- default: #f0f0f0
- active: #eaeaea
- focus: #cccccc

Button Dark:
- background: #171717
- text: #ffffff

---

# GRADIENT SYSTEM

Animated Gradient Type:
- Multi-radial blob gradient
- CSS custom property interpolation
- @property animated variables
- No canvas
- No JS rendering

Gradient Base:
- #ff8e53

Blob Colors:
- #fff1aa
- #ff4b2b
- #8aff8a
- #ffd000
- #ff1493

Animation Style:
- Organic
- Fast loop
- Floating motion
- Pulsing radius
- Non-linear easing
- Independent timings

Blob Motion:
- Wide travel paths
- Multi-directional drift
- Layered depth illusion

Animation Duration Range:
- 3s–6.5s

Reduced Motion:
- Disable all animation via prefers-reduced-motion

Visual Feel:
- Energetic
- Playful
- Premium fintech

---

# SPACING SYSTEM

Container Width:
- max-width: 1100px
- width: 100%
- horizontal padding: 20px

Section Padding:
Desktop:
- 80px vertical

Tablet/Mobile:
- 60px vertical

Spacing Scale:
- 10px
- 12px
- 15px
- 18px
- 20px
- 25px
- 30px
- 40px
- 50px
- 60px
- 80px

Layout Style:
- Generous whitespace
- Breathing room prioritized

---

# GRID SYSTEM

Primary Grid:
Desktop:
- 1.6fr / 1fr

Gap:
- 30px

Alignment:
- stretch
- vertically balanced

Responsive:
≤900px
- single column
- 60px separation

Footer Grid:
Desktop:
- 2fr 1fr 1fr 2fr

Gap:
- 40px

Responsive:
≤900px:
- 2 columns

≤480px:
- 1 column

---

# RADIUS SYSTEM

Soft Rounded UI

Card Radius:
- 24px

Input Radius:
- 10px

Button Radius:
- 10px–12px

Accordion Radius:
- 10px

Visual Character:
- Friendly
- Soft
- Modern

---

# ELEVATION SYSTEM

Shadow Philosophy:
- Very soft
- Low contrast
- Layered depth

CTA Card:
- 0 10px 30px rgba(0,0,0,.05)

Accordion Default:
- 0 2px 8px rgba(0,0,0,.02)

Accordion Active:
- 0 4px 12px rgba(0,0,0,.04)

Input Inner Shadow:
- inset 0 1px 3px rgba(0,0,0,.02)

Primary Button:
- 0 10px 20px rgba(0,0,0,.3)

Primary Button Hover:
- 0 14px 30px rgba(0,0,0,.4)

Newsletter Button:
- 0 12px 24px rgba(0,0,0,.4)

Elevation Feel:
- Floating
- Soft premium
- Never harsh

---

# COMPONENT STYLE RULES

## Cards

Style:
- White or animated surface
- Large radius
- Soft shadow
- Comfortable padding

Padding:
- 40px–80px

Content Alignment:
- Center or vertically centered

---

## Buttons

Shape:
- Rounded rectangle

Weight:
- Semi-bold

Motion:
- Slight hover lift
- translateY(-2px)

Transition:
- 200ms

Hover Behavior:
- Increase shadow
- Subtle lift

No:
- harsh scaling
- aggressive motion

Interaction Feel:
- Smooth
- Premium

---

## Inputs

Style:
- White background
- Soft border
- Rounded
- Subtle inset depth

Focus:
- Border darkens slightly

No:
- glow
- neon
- strong outlines

---

## Accordion

Visual Style:
- Soft bordered cards

Interaction:
- Expand / collapse

State Difference:
Inactive:
- lighter border
- lower shadow

Active:
- stronger border
- slightly elevated

Iconography:
- Minimal
- Chevron indicators
- 20px

Transition:
- 200ms

---

# FOOTER SYSTEM

Footer Background:
- #fafafa

Hierarchy:
1. Brand
2. Navigation
3. Utility links
4. Newsletter

Visual Tone:
- Quiet
- Light
- Low visual noise

Footer Divider:
- #f0f0f0

Bottom Bar:
- Minimal legal strip
- Horizontal desktop
- Vertical mobile

---

# RESPONSIVE SYSTEM

Breakpoint:
- 900px
- 480px

Mobile Philosophy:
- Stack vertically
- Increase breathing room
- Preserve touch comfort

Responsive Behavior:
- Collapse grids
- Maintain padding rhythm
- Keep text readable
- Avoid compressed UI

---

# MOTION SYSTEM

Motion Personality:
- Calm + alive

Transitions:
- 200ms

Easing:
- ease-in-out

Hover Motion:
- Small elevation shifts

Background Motion:
- Continuous
- Organic
- Ambient

Accessibility:
- prefers-reduced-motion supported

No:
- bounce
- elastic motion
- dramatic transforms

---

# OVERALL VISUAL DNA

Keywords:
- Modern fintech
- Soft premium
- Airy
- Gradient-driven
- Friendly
- Minimal
- Editorial spacing
- Rounded geometry
- Quiet luxury
- Motion-enhanced simplicity