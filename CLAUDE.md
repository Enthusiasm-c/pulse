# CLAUDE.md - JÄGERMEISTER Pulse Project Documentation

## 🎯 Project Overview
JÄGERMEISTER Pulse is a field force management application for brand ambassadors and managers to track venue visits, monitor outlet compliance, and report promotional activities across Indonesia.

**Current Status**: MVP Demo (v3)
**Project Path**: `/Users/denisdomashenko/jager101`
**Repository**: Main branch deployment on Vercel

## 📌 Version History

### v3.0 - Role-Based Enhancement (Sep 22, 2025 - fcb5950)
**Major UX improvements and role-based interface enhancements**
- ✅ Implemented role-based access control (Manager vs Ambassador)
- ✅ New login screen with quick role selection buttons
- ✅ Enhanced filtering system with region/location dropdowns
- ✅ Redesigned Settings tab with professional layout
- ✅ Manager-specific: Team leaderboard, full visibility, advanced filters
- ✅ Ambassador-specific: Region-restricted data, simplified interface
- ✅ Fixed data visibility issues between roles
- ✅ Added comprehensive mock data for all ambassadors
- **Lines of code**: 2192 (+863 lines)

### v2.0 - Settings & UX Update (Sep 22, 2025 - c4d5f9e)
**Major enhancements and bug fixes**
- ✅ Added Settings tab with real name and region selection
- ✅ Enhanced mobile responsiveness with safe area insets
- ✅ Added animations to Visits tab matching Statistics
- ✅ Fixed perfect venue badge logic (requires ALL 7 toggles)
- ✅ Fixed venue status not updating after toggle changes
- ✅ Added skeleton loading animations
- ✅ Enhanced toast notifications
- ✅ Region-based filtering for visits/statistics
- ✅ Removed AI insights and performance reports
- **Lines of code**: 1570 (+682 lines)

### v1.0 - Initial Release (Sep 21, 2025 - 35d00d6)
**JÄGERMEISTER Pulse - Field Force Management App**
- ✅ Basic venue management system (23 venues)
- ✅ Simple login system
- ✅ Venue listing with categories
- ✅ Visit reporting functionality
- ✅ 7-criteria "Perfect Outlet" compliance tracking
- ✅ LocalStorage for offline persistence
- ✅ Statistics dashboard with KPIs
- ✅ Mobile-first responsive design
- **Lines of code**: 888 (initial)

## 🏗️ Architecture

### Tech Stack
- **Frontend**: Pure Vanilla JavaScript (NO frameworks)
- **Styling**: Inline CSS with CSS Variables (Design Tokens)
- **Data Storage**: LocalStorage API (offline-first)
- **Deployment**: Vercel (with SPA rewrites)
- **Build System**: None (static HTML/JS/CSS)
- **Package Manager**: None (zero dependencies)

### File Structure
```
jager101/
├── index.html           # Main application (2192 lines, monolithic)
├── CLAUDE.md            # This file - project documentation
├── README.md            # Project documentation
├── vercel.json          # Vercel deployment config
├── clear-storage.html   # Utility: Clear LocalStorage
├── debug.html           # Debugging interface
├── demo-guide.html      # Demo documentation
├── demo-fixes.js        # Demo data fixes
├── fix-demo.js          # Demo utilities
├── test*.html           # Test files (role testing)
└── index_backup*.html   # Version backups
```

### Architecture Principles
- **Single Page Application (SPA)**: All code in one HTML file
- **Offline-First**: Full functionality without internet
- **Mobile-First**: Designed for field use on smartphones
- **Zero Dependencies**: No external libraries or frameworks
- **LocalStorage Persistence**: All data stored client-side
- **Role-Based Access**: Manager vs Ambassador interfaces

## 📦 Dependencies & Libraries

### Current Stack (ZERO external dependencies)
```json
{
  "dependencies": "NONE",
  "devDependencies": "NONE",
  "libraries": [
    "No jQuery",
    "No React/Vue/Angular",
    "No CSS frameworks",
    "No build tools",
    "No bundlers",
    "No TypeScript"
  ]
}
```

### What We DON'T Use (and don't want)
- ❌ **NO npm/yarn/pnpm** - No package.json
- ❌ **NO build process** - Direct browser execution
- ❌ **NO frameworks** - Pure vanilla JS only
- ❌ **NO external APIs** - Fully offline
- ❌ **NO backend** - Client-side only
- ❌ **NO TypeScript** - Plain JavaScript
- ❌ **NO CSS preprocessors** - Plain CSS
- ❌ **NO component libraries** - Custom UI

## 🎨 Code Patterns & Conventions

### JavaScript Patterns
```javascript
// DOM Selection helpers
const $=(id)=>document.getElementById(id);
const qsa=(s,r=document)=>Array.from(r.querySelectorAll(s));

// State Management
let venues=[];
let visits=[];
let userRole='ambassador';

// LocalStorage pattern
function save(){ localStorage.setItem('jpulse',JSON.stringify({venues,visits,user})); }
function load(){ const d=localStorage.getItem('jpulse'); if(d){...} }

// Screen Navigation
function show(id){
  qsa('.screen').forEach(s=>s.classList.remove('active'));
  $(id).classList.add('active');
}
```

### CSS Architecture
- **Design Tokens**: CSS Variables for theming
- **BEM-like naming**: `.card`, `.card-header`, `.card-content`
- **Utility classes**: `.active`, `.hidden`, `.perfect`
- **Mobile-first**: Base styles for mobile, media queries for desktop

### UI/UX Patterns
- **Glass morphism**: Backdrop filters for modern look
- **Skeleton loaders**: Loading states
- **Toast notifications**: User feedback
- **Swipe gestures**: Mobile navigation (prepared but not active)
- **Ripple effects**: Button interactions

## 🚫 Anti-Patterns to Avoid

### Things We Got Rid Of
1. **AI Insights** - Removed fake AI-generated content
2. **Performance Reports** - Removed complex unused features
3. **Email fields in Settings** - Redundant information
4. **Star icons** - Unnecessary visual clutter
5. **Always-open inputs** - Changed to edit/save pattern
6. **Vertical number display** - Fixed to horizontal

### Never Do Again
- Don't add features without user stories
- Don't create multiple files when one works
- Don't add dependencies for simple tasks
- Don't implement backend until validated
- Don't over-engineer the solution
- Don't add comments in production code

## 🤖 Agent Aliases

### Development Agents
- **`cdev`** - Development agent for implementing features
  - Use for: Adding features, fixing bugs, implementing UI changes
  - Example: "cdev add dark mode toggle"

- **`cpm`** - Product Manager agent for planning and UX
  - Use for: Planning features, UX improvements, prioritization
  - Example: "cpm what can we improve in statistics tab?"

- **`creview`** - Code Review agent for debugging
  - Use for: Finding bugs, reviewing code, checking errors
  - Example: "creview check why login button doesn't work"

## 🧪 Testing

### Current Testing Approach
- **No automated tests** (intentional for MVP)
- **Manual testing** via test HTML files:
  - `test.html` - Basic functionality
  - `test-venue-update.html` - Venue updates
  - `test_roles.html` - Role-based access
  - `debug.html` - LocalStorage debugging

### Test Credentials
```javascript
// Demo Login
email: "demo@jager101.com"
password: "password"

// Quick Role Selection (new login screen)
- Manager button
- Ambassador button
```

## 📝 Important Notes

### Current Limitations
1. **Monolithic Structure**: All code in single HTML file (2192 lines)
2. **No Build Process**: Direct file editing only
3. **No Version Control**: Manual backups only (`index_backup*.html`)
4. **LocalStorage Limits**: ~5-10MB max data
5. **No Real Authentication**: Demo login only

### Future Considerations (NOT implemented)
- Photo capture for visits
- GPS location tracking
- Backend synchronization
- Multi-user support
- Excel/PDF export
- Push notifications

## 🚀 Development Workflow

### Making Changes
1. Always read `index.html` first
2. Make changes directly in `index.html`
3. Test in browser (no build needed)
4. Create backup if major change
5. Commit with descriptive message
6. **UPDATE THIS FILE (CLAUDE.md) with version info**

### Git Workflow
```bash
# Check status
git status

# Review changes
git diff

# Commit changes (with CLAUDE.md update)
git add index.html CLAUDE.md
git commit -m "Description of changes"

# Push to GitHub (only when requested)
git push origin main
```

### Commit Message Format
```
[Type]: Brief description

Details:
- Change 1
- Change 2
- Bug fix

Updates: CLAUDE.md version X.X
```

### Deployment
- **Platform**: Vercel
- **Config**: `vercel.json` with SPA rewrites
- **Branch**: Deploys from main branch
- **URL**: [Configured in Vercel]

## 🔒 Security Considerations

### Implemented
- XSS Protection headers
- Input sanitization
- Content Security Policy headers
- SAMEORIGIN frame options

### NOT Implemented (intentional)
- Real authentication
- Server-side validation
- Encrypted storage
- User sessions

## 📊 Data Structure

### Main Entities
```javascript
// Venue
{
  id: 'unique-id',
  name: 'Venue Name',
  cat: 'Important|Core|High',
  type: 'Bar|Club|Restaurant',
  region: 'Bali|West Java|East Java',
  location: 'City Name',
  addr: 'Street Address',
  perfect: false,
  toggles: [false,false,false,false,false,false,false]
}

// Visit
{
  id: 'unique-id',
  venueId: 'venue-id',
  venueName: 'Venue Name',
  date: '2025-01-20',
  time: '14:30',
  user: 'User Name',
  region: 'Bali',
  priceShot: 50000,
  priceBottle: 750000,
  notes: 'Visit notes',
  toggles: [true,false,true,...],
  status: 'completed'
}

// User
{
  email: 'demo@jager101.com',
  name: 'John Smith',
  region: 'Bali',
  role: 'ambassador|manager'
}
```

## 🎯 Project Goals

### Achieved ✅
- Mobile-first field management app
- Offline capability
- Role-based access (Manager/Ambassador)
- Perfect Outlet tracking (7 criteria)
- Visit reporting with pricing
- Basic analytics dashboard
- Region-based filtering
- Team leaderboard for managers
- Professional Settings UI

### In Progress 🔄
- UX refinements
- Data visualization improvements
- Performance optimizations

### Not Started ⏸️
- Backend integration
- Multi-user sync
- Advanced reporting
- Photo capture
- GPS tracking
- Export functionality

## 📈 Metrics

### Code Growth
- v1.0: 888 lines
- v2.0: 1570 lines (+77%)
- v3.0: 2192 lines (+40%)
- Total growth: +147% from v1.0

### Feature Count
- v1.0: 7 major features
- v2.0: 12 major features
- v3.0: 18 major features

---

**⚠️ IMPORTANT**: Always update this file when pushing to GitHub!

*Last Updated: September 23, 2025*
*Version: MVP Demo v3.0*
*Maintainer: Denis Domashenko*
*Next Version: v4.0 (planned)*