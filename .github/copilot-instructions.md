# Copilot Instructions for Professor Portfolio

This project is a static portfolio website for a professor, showcasing expertise, skills, projects, and experiences. The codebase is organized for clarity and easy extension.

## Architecture Overview
- **index.html**: Main HTML file. Defines the structure and sections: About, Skills, Projects, Experience, and Contact.
- **style.css**: Contains all styling. Uses modern, clean, and responsive design principles.
- **script.js**: Handles dynamic population of skills, projects, and experience sections, and manages the contact form.

## Key Patterns & Conventions
- **Separation of Concerns**: HTML, CSS, and JS are strictly separated. All dynamic content is rendered via JS.
- **Data-driven Sections**: Skills, projects, and experience are defined as arrays/objects in `script.js` and rendered into the DOM. To add or update content, edit these arrays.
- **Contact Form**: The form is handled client-side only. On submit, a thank-you message is shown; no backend integration is present.
- **Navigation**: Uses anchor links to scroll to each section.

## Customization & Extension
- To add a new skill, project, or experience, update the respective array in `script.js`.
- For new sections, add the HTML in `index.html`, style in `style.css`, and update `script.js` for dynamic content if needed.
- For backend integration (e.g., contact form), add API calls in `script.js` and update the form handler.

## Example: Adding a New Project
1. In `script.js`, add an object to the `projects` array:
   ```js
   {
     title: "New Project Title",
     description: "Short description of the project.",
     link: "#"
   }
   ```
2. The project will appear automatically in the Projects section.

## No Build or Test Workflow
- This is a static site. No build, test, or package management is required.
- Open `index.html` directly in a browser to view the site.

## File References
- Main files: `index.html`, `style.css`, `script.js`
- All files are in the project root.

---
For major changes, keep the separation of HTML, CSS, and JS. Use the data-driven approach for dynamic content. For questions, review the structure in the main files.
