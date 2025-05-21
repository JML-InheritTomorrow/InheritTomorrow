# React/Vite Routing Analysis for Inherit Tomorrow

## Current Implementation
- The site currently uses **hash-based routing** (`#page-name`)
- Implementation in `App.tsx` uses `window.location.hash` to determine current page
- Vite is configured with a base path of `/InheritTomorrow/` in `vite.config.ts`
- Build output is directed to the `docs` directory

## Available Options for Addressable URLs

### Option 1: Browser History API with Server Configuration
- Replace hash routing with React Router's `BrowserRouter` 
- Requires server configuration to handle direct URL requests
- For static hosting, needs a rewrite/redirect rule to serve `index.html` for all routes

### Option 2: Hash Router with Path Segments
- Enhanced hash routing that supports path segments (`#/about/team` instead of just `#about`)
- Still uses hash but provides more structured URLs
- No server configuration needed

### Option 3: Hybrid Approach
- Use `BrowserRouter` for main navigation
- Implement client-side redirects for deep links
- Configure build process to generate static assets with proper paths
