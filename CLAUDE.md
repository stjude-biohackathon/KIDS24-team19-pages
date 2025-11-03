# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **CoCoRV UI** - a React single-page application for the CoCoRV bioinformatics pipeline. It's a web-based interface for configuring and running a cloud-based tool for prioritizing disease predisposition genes. Built for the St. Jude KIDS24 BioHackathon by Team 19.

**Deployed at:** https://stjude-biohackathon.github.io/KIDS24-team19-pages

## Tech Stack

- **React 18.3.1** with Create React App
- **React Router DOM 6.26.1** for client-side routing
- **React Bootstrap 2.10.4** + **Bootstrap 5.3.3** for UI components
- **Tailwind CSS 3.4.10** for utility classes
- **GitHub Pages** deployment via `gh-pages` package

## Development Commands

```bash
# Start development server (http://localhost:3000)
npm start

# Run tests in watch mode
npm test

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Architecture

### Router Structure
The app uses React Router v6 with these routes:
- `/` → ConfigForm (main feature - pipeline configuration form)
- `/about` → About (project info + workflow diagram)
- `/run-on-github` → RunOnGithub (stub for GitHub execution instructions)
- `/run-on-dnanexus` → RunOnDNAnexus (stub for DNAnexus instructions)
- `/s3-resource-files` → S3ResourceFiles (stub for S3 access instructions)

### Component Organization
- **Flat structure** - all components in `/src` root
- **One component per file** with matching names
- **Functional components** using hooks only (no class components)
- **Local state management** - each component manages its own state with `useState`

### Key Components
- **App.js** - Root router component with navigation structure
- **ConfigForm.js** - Main feature: 24+ field form for pipeline configuration
  - Generates downloadable `.txt` config files
  - Form validation with Bootstrap error styling
  - Help modals for field descriptions
- **Navbar.js** - Navigation bar with responsive design
- **Stub pages** - RunOnGithub, RunOnDNAnexus, S3ResourceFiles need implementation

## Styling Approach

**Hybrid Bootstrap + Tailwind:**
- Use **React Bootstrap components** for forms, modals, navigation
- Use **Tailwind utility classes** for spacing, colors, typography
- Both CSS frameworks loaded in `index.js`
- Custom styles in `App.css` (minimal usage)

## Development Patterns

### State Management
- No global state management (Redux/Context/etc.)
- Use `useState` for component-local state
- Form data stays local to ConfigForm component

### Event Handling
- Form submission with validation in ConfigForm
- Modal show/hide state management
- NavLink active state (prefer React Router's built-in `isActive`)

### Testing
- Uses Jest + React Testing Library
- Run tests with `npm test`
- Test files use `.test.js` suffix
- Current coverage is minimal - tests needed for new features

## Deployment

### GitHub Pages Workflow
1. Make changes and commit to `main` branch
2. Run `npm run deploy` to build and push to `gh-pages` branch
3. GitHub Pages serves from `gh-pages` branch automatically

### Build Process
- Create React App handles all bundling/transpilation
- No custom webpack configuration
- Production build outputs to `/build` directory (git-ignored)

## Important Notes

- **Frontend-only application** - no backend API integration
- **Form-focused** - main feature generates downloadable config files
- **Active development** - stub pages need implementation
- **MIT License** - open source project
- **Browser support** - Modern browsers (>0.2% market share)

## File Structure Context

```
src/
├── App.js              # Router + route definitions
├── Navbar.js           # Navigation component
├── ConfigForm.js       # Main form feature (24+ fields)
├── About.js            # Project info page
├── Run*.js             # Stub pages for platform instructions
├── *.png, *.jpg        # Images (logos, workflow diagram)
└── index.js            # React DOM entry point
```

## Common Tasks

### Adding New Pages
1. Create component file in `/src`
2. Add route to `App.js`
3. Add navigation link to `Navbar.js`

### Form Field Changes
- Modify state and JSX in `ConfigForm.js`
- Update validation logic if needed
- Consider adding help modal for complex fields

### Styling Changes
- Use React Bootstrap components when possible
- Add Tailwind utility classes for spacing/colors
- Minimize custom CSS in `App.css`