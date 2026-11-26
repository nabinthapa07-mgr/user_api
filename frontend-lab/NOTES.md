\# Assignment 1.2 – Short Answers



\## 1. CSR vs SSR vs SSG



\- \*\*CSR (Client-Side Rendering):\*\* The browser renders the UI using JavaScript. Example: Admin dashboards.

\- \*\*SSR (Server-Side Rendering):\*\* The server generates HTML for each request. Example: Personalized e-commerce pages.

\- \*\*SSG (Static Site Generation):\*\* HTML pages are generated during the build process. Example: Blogs and documentation websites.



\## 2. What is Hydration?



Hydration is the process of attaching JavaScript event handlers and interactivity to HTML that was already rendered by the server.



\## 3. When is Context the Wrong Tool?



Context is not suitable for frequently changing or complex application state, large-scale data fetching, or state needed by only a small component. Local state or dedicated state management libraries may be more appropriate.



\## 4. What did StrictMode's double-invoke teach you?



StrictMode runs certain component logic and effects an extra time during development to identify potential problems. It taught me to write effects that are safe to repeat and clean up event listeners and subscriptions properly.

