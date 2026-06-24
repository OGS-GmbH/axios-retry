---
layout: home
isHome: true

hero:
  text: axios-retry
  tagline: Resilient Axios requests with exponential backoff, flexible retry conditions, and lifecycle hooks — zero boilerplate.
  actions:
    - theme: brand
      text: Get started
      link: /guide
    - theme: alt
      text: Reference
      link: /reference
    - theme: alt
      text: GitHub
      link: https://github.com/OGS-GmbH/_code-template

features:
  - icon: <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15.39 4.39a1 1 0 0 0 1.68-.47 2.5 2.5 0 1 1 3.01 3.01 1 1 0 0 0-.47 1.68l1.68 1.68a2.4 2.4 0 0 1 0 3.42l-1.68 1.68a1 1 0 0 1-1.68-.47 2.5 2.5 0 1 0-3.01 3.01 1 1 0 0 1 .47 1.68l-1.68 1.68a2.4 2.4 0 0 1-3.42 0l-1.68-1.68a1 1 0 0 0-1.68.47 2.5 2.5 0 1 1-3.01-3.01 1 1 0 0 0 .47-1.68L2.71 13.7a2.4 2.4 0 0 1 0-3.42l1.68-1.68a1 1 0 0 1 1.68.47 2.5 2.5 0 1 0 3.01-3.01 1 1 0 0 1-.47-1.68l1.68-1.68a2.4 2.4 0 0 1 3.42 0z"/></svg>
    title: Drop-in Setup
    details: One function call on any Axios instance — no wrappers, no class extensions, no config files.
  - icon: <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 16v5M16 14.64V21M20 10.66V21M22 3l-8.65 8.65a.5.5 0 0 1-.7 0l-3.3-3.3a.5.5 0 0 0-.7 0L2 15M4 18.46V21M8 14.66V21"/></svg>
    title: Linear & Exponential Backoff
    details: Choose a fixed delay between retries or let the wait time grow automatically with each attempt.
  - icon: <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 9-9 9.8 9.8 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
    title: Flexible Retry Conditions
    details: Pass a list of HTTP status codes or a custom function to decide exactly when a retry should happen.
  - icon: <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 12a9 9 0 0 1 9-9 9.8 9.8 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5M21 12a9 9 0 0 1-9 9 9.8 9.8 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>
    title: Full Lifecycle Hooks
    details: React to every retry event — `onRetry`, `onMaxRetry`, `onRetryFailed`, and `onMaxRetryExceeded` — for logging, alerting, or custom logic.
---
