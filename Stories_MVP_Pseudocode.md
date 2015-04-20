<!-- Stories_MVP_Pseudocode.md -->

STORIES, MVP, & PSEUDOCODE
==========================================================================

###User Stories
1. Has a "Flyer" page
  - Is "Flyer" the landing page?
2. Has an intuitive layout
  - Pages of importance must be easy to get to from anywhere
3. Has a responsive design
  - Works well on phones (mobile-first design)
  - Works well on tablets
  - Works well on monitors
  - Works well on wearable tech (strech-goal)
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
    - use `google-ajax-crawler`?
    - use `grunt-compile-handlebars`?
    - use `grunt-static-handlebars`?
    - use `grunt-handlebars-to-static`?
    - forget about SEO?
  - Ditch Single-Page Website style for SEO?



###MVP
- Pages
  - Home
  - Flyer
  - About*
  - Skills*
  - Projects
  - Project Showcase
  - Contact
  - Links
  - Résumé (Resume)
  - Sidebar
- Design layout HTML
- Design sections using Handlebars
- Design basic styling using Sass



###Pseudocode
######TECHNOLOGIES:
- HTML5
- CSS3
  - Animations
  - Transitions
- Compiler
  - Sass
- JavaScript
  - jQuery
  - (?!) AJAX (!?)
  - requireJS
  - (?!) underscore.js (!?)
  - (?!) Modernizr (!?)
- Single-Page Website Markup
  - (?!) Handlebars.js (!?)
  - (?!) Haml (!?)

######PROCESS:
- Whiteboard goals
  - Turn into User Stories
  - Decide on MVP
- UX workflow
- Wireframe
- Deep dive into technologies
  - Ensure that any tech used is necessary
- Mobile-first design
- Create a test-suite in parallel
  - Include design tests
- Keep solid Git workflow
