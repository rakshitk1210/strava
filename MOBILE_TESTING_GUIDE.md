# Mobile Responsive Testing Guide

## Quick Start

Your dashboard is now fully mobile responsive! Based on the Figma design at 360px width, all components have been optimized for mobile, tablet, and desktop views.

## Testing in Browser

### Using Chrome DevTools
1. Open your dashboard at `http://localhost:3000`
2. Press `F12` or `Cmd+Option+I` (Mac) / `Ctrl+Shift+I` (Windows)
3. Click the device toolbar icon (or press `Cmd+Shift+M` / `Ctrl+Shift+M`)
4. Test at these key breakpoints:

#### Mobile Devices
- **iPhone SE** (375×667) - Small mobile
- **iPhone 12/13/14** (390×844) - Standard mobile
- **iPhone 14 Pro Max** (430×932) - Large mobile
- **Galaxy S20** (360×800) - Small Android
- **Pixel 5** (393×851) - Standard Android

#### Tablets
- **iPad Mini** (768×1024) - Small tablet
- **iPad Air** (820×1180) - Standard tablet
- **iPad Pro 11"** (834×1194) - Large tablet

#### Desktop
- **Laptop** (1024×768) - Small desktop
- **Desktop** (1440×900) - Standard desktop
- **Large Desktop** (1920×1080) - Large desktop

### Using Firefox Responsive Design Mode
1. Press `Cmd+Option+M` (Mac) / `Ctrl+Shift+M` (Windows)
2. Select device or enter custom dimensions
3. Test at breakpoints: 360px, 768px, 1024px, 1440px

### Using Safari
1. Open Safari > Develop > Enter Responsive Design Mode
2. Test various device presets

## What to Check

### 1. Dashboard Header ✓
- [ ] Avatar and title display correctly
- [ ] Year dropdown works on all sizes
- [ ] Unit toggle (Km/Miles) is accessible
- [ ] "Connect Strava" button is visible (shows as "Connect" on mobile)
- [ ] No horizontal overflow

### 2. Metrics Section ✓
- [ ] Cards stack vertically on mobile (< 768px)
- [ ] Cards display in 2 columns on tablet
- [ ] Cards display in 5 columns on desktop
- [ ] Sparklines render correctly
- [ ] Numbers are readable at all sizes
- [ ] No text overflow

### 3. Map Component ✓
- [ ] Map loads and displays routes
- [ ] Map height is appropriate for screen size
- [ ] Navigation controls are accessible
- [ ] Popups work on touch devices
- [ ] Map is centered on routes

### 4. Records Card ✓
- [ ] Records are easy to read
- [ ] Values align properly
- [ ] Full width on mobile, fixed width on desktop

### 5. Running Trends Chart ✓
- [ ] Tab buttons (Pace/Distance/Elevation) are clickable
- [ ] Chart displays without horizontal scrolling
- [ ] Axis labels are readable
- [ ] Bars render correctly
- [ ] Tooltip shows on hover/tap

### 6. Performance Card ✓
- [ ] Distance badges (5K, 10K, etc.) are visible
- [ ] Times and paces display correctly
- [ ] "Waiting for you : )" message shows for incomplete distances
- [ ] Full width on mobile

### 7. Year Streaks (Running Days) ✓
- [ ] Month names display clearly
- [ ] Day squares are tappable
- [ ] Scrolling works smoothly
- [ ] Tooltips appear on hover/tap
- [ ] Grid wraps properly on mobile
- [ ] Count shows correctly (e.g., "Running days (90)")

### 8. Footer ✓
- [ ] "RUNNING IS A PRIVILEGE" scales appropriately
- [ ] Credit text is readable
- [ ] Text stacks on mobile, spreads on desktop
- [ ] No text overflow

## Common Issues & Fixes

### Issue: Horizontal Scrolling
**Fix:** Check that all components have `w-full` and no fixed widths exceeding screen size.

### Issue: Touch Targets Too Small
**Fix:** Ensure interactive elements are at least 44×44px (iOS guidelines) or 48×48px (Material Design).

### Issue: Text Too Small on Mobile
**Fix:** Minimum readable font size is 12px. Body text should be 14-16px.

### Issue: Chart Not Responsive
**Fix:** Ensure `ResponsiveContainer` is used and parent has defined dimensions.

### Issue: Map Not Loading
**Fix:** Check `NEXT_PUBLIC_MAPBOX_TOKEN` in `.env.local`.

## Performance Testing

### Load Time
- Mobile: Should load in < 3 seconds on 3G
- Desktop: Should load in < 1 second

### Scrolling
- Should be smooth (60fps)
- No janky animations
- Scrollbars styled correctly

### Touch Interactions
- Tap response < 100ms
- No double-tap zoom on buttons
- Gestures work naturally

## Accessibility Testing

### Screen Readers
- All interactive elements have labels
- Alt text for images
- Proper heading hierarchy (h1, h2, h3)

### Keyboard Navigation
- Tab through all interactive elements
- Enter/Space to activate buttons
- Escape to close modals/dropdowns

### Color Contrast
- Text meets WCAG AA standards
- Focus indicators are visible

## Browser Testing Checklist

- [ ] Chrome (latest)
- [ ] Safari (iOS & macOS)
- [ ] Firefox (latest)
- [ ] Edge (latest)
- [ ] Samsung Internet (Android)

## Device Testing (if available)

### Real Devices
- [ ] iPhone (any model)
- [ ] Android phone (any model)
- [ ] iPad or Android tablet
- [ ] Desktop browser

## Breakpoint Reference

```css
/* Mobile First */
Default: < 768px (mobile)
md: >= 768px (tablet)
lg: >= 1024px (desktop)
xl: >= 1280px (large desktop)
```

## Component Widths by Breakpoint

| Component | Mobile | Tablet | Desktop | Large |
|-----------|--------|--------|---------|-------|
| Container Padding | 16px | 32px | 64px | 64px |
| Metrics Grid | 1 col | 2 cols | 5 cols | 5 cols |
| Records/Trends | Full width | Full width | 328px / flex-1 | 264px / flex-1 |
| Performance/Streaks | Full width | Full width | 328px / flex-1 | 264px / flex-1 |

## Testing Script

Run this in your browser console to test all breakpoints:

```javascript
const breakpoints = [360, 375, 414, 768, 1024, 1440, 1920];
let currentIndex = 0;

function testBreakpoint() {
  const width = breakpoints[currentIndex];
  window.resizeTo(width, window.outerHeight);
  console.log(`Testing at ${width}px`);
  currentIndex = (currentIndex + 1) % breakpoints.length;
  setTimeout(testBreakpoint, 3000);
}

// Start testing
testBreakpoint();
```

## Reporting Issues

When reporting issues, include:
1. Browser and version
2. Device or screen size
3. Screenshot or video
4. Steps to reproduce
5. Expected vs actual behavior

## Success Criteria

✅ **Mobile (360px-767px)**
- All content visible without horizontal scroll
- Touch targets are 44px minimum
- Text is readable (min 12px)
- Maps and charts load correctly

✅ **Tablet (768px-1023px)**
- Layout uses 2-column grid where appropriate
- Optimal use of screen space
- All interactions work with touch

✅ **Desktop (1024px+)**
- Full multi-column layout
- Hover states work
- Maximum width of 1440px respected

---

**Created:** January 28, 2026  
**Last Updated:** January 28, 2026  
**Status:** Ready for Testing
