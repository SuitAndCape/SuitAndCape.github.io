<!-- Stories_MVP_Specs_Pseudocode.md -->

User Stories, MVP, Specifications, & Pseudocode
==========================================================================

## User Stories

1. Has a "Flyer" page
2. Has an intuitive layout
  - Pages of importance must be easy to get to from anywhere
3. Has a responsive design
  - Works well on phones (mobile-first design)
  - Works well on tablets
  - Works well on monitors
  - Works well on wearable tech (stretch-goal)
4. Has the following pages
  - Home
  - Flyer
  - About
  - Skills
  - Projects
  - Project Showcase
  - Contact
  - Links
  - Résumé (Resume)
  - Sidebar
  - Scrapbook/Gallery
  - Hobbies
  - Services
  - Blog
  - EverydayEnthusiasm/EverydayEndeavors
5. Has hooks for features and goals, where necessary
6. Has a clear browser compatibility baseline
  - IE 9+
7. Has a modular setup
  - Don't go overboard
8. Has effective SEO
  - If Single-Page Website...
    + use the "Flyer" as a simple, searchable response?
    + use `google-ajax-crawler`?
    + use `grunt-compile-handlebars`?
    + use `grunt-static-handlebars`?
    + use `grunt-handlebars-to-static`?
    + forget about SEO?
  - Ditch Single-Page Website style for SEO?

--------------------------------------------------------------------------

## MVP

- Pages
  + Home
  + Flyer
  + About*
  + Skills*
  + Projects
  + Project Showcase
  + Contact
  + Links
  + Résumé
  + Sidebar
- Design layout HTML
- Design sections using Handlebars
- Design basic styling using Sass

--------------------------------------------------------------------------

## Additional

### Technologies:
- Structure
  + HTML5
- Styling, Animations, and Transitions
  + CSS3
- Compiler
  + Sass
- Behavior
  + JavaScript
  + jQuery
  + AJAX
  + requireJS
  + (?!) underscore.js (!?)
  + (?!) hammer.js (!?)
  + (?!) Modernizr (!?)
- Semantic Web Template System
  + Handlebars.js

### Process:
1. Whiteboard goals
  - Turn into User Stories
  - Decide on MVP
2. UX workflow
3. Wireframe
4. Deep dive into technologies
  - Ensure that any tech used is necessary, or just does something neat
5. Mobile-first design
6. Create a test-suite in parallel
  - Due to the nature of the project, the test-suite is replaced by design tests
7. Commit often
