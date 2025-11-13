# Tech Portfolio Site

A personal portfolio website showcasing projects in cybersecurity and artificial intelligence.

## File Structure

The website is organized into separate files for easy maintenance:

- **`content.js`** - Contains all website content (text, project descriptions, etc.)
- **`script.js`** - Contains the program logic (animations, form handling, etc.)
- **`index.html`** - HTML template structure
- **`styles.css`** - Styling and layout

## How to Update Content

To change the website content, simply edit the `content.js` file. This file contains all the text and data in a structured format:

- **Navigation**: Brand name and menu links
- **Hero Section**: Main title and subtitle
- **About Section**: Biography paragraphs and skills list
- **Projects Section**: Project cards with titles, descriptions, and tags
- **Contact Section**: Form labels and messages
- **Footer**: Copyright text

No need to touch the HTML or JavaScript program files - just update the content in `content.js`!

## Local Development

To view the site locally, open `index.html` in a web browser or use a local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.