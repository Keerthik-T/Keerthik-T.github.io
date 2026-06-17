# Keerthik T. - Portfolio Website

A highly optimized, minimalist personal portfolio website built with semantic HTML5, CSS3, and vanilla JavaScript. 

## 🚀 Overview

This repository hosts my professional portfolio, positioned around a Systems Architect and Cybersecurity Analyst persona. The architecture deliberately eschews heavy frameworks (like React or Tailwind) in favor of a clean, vanilla build. This ensures maximum performance, semantic integrity, and a premium "developer" aesthetic.

**Live Site:** [https://keerthik-t.github.io](https://keerthik-t.github.io)

## 🛠️ Architecture & Tech Stack

- **HTML5:** Semantic document structure (`<nav>`, `<main>`, `<section>`, `<article>`) for accessibility and SEO.
- **CSS3:** Custom styling using CSS Variables (`:root` and `[data-theme="dark"]`) for native, high-performance light/dark mode transitions. Includes custom keyframe animations for floating background elements.
- **JavaScript (Vanilla):** Lightweight logic for theme toggling (with `localStorage` persistence) and `IntersectionObserver` for subtle scroll-reveal animations.

## ✨ Features

- **Dark / Light Mode:** Fully responsive theme toggling without rigid class manipulation.
- **Scroll Animations:** Native `scrollIntoView` for smooth navigation and Intersection Observers for fade-in reveals.
- **Minimalist Aesthetic:** Terminal-inspired typography (JetBrains Mono) mixed with clean sans-serif (Inter) and Phosphor Icons.
- **Zero Dependencies:** No external JS libraries or CSS frameworks. Just standard Web APIs.

## 📁 Repository Structure

```
.
├── index.html   # Main semantic HTML structure
├── styles.css   # Custom CSS with responsive variables and animations
├── script.js    # Vanilla JS for theming and observers
└── serve.ps1    # Optional PowerShell script for local testing
```

## 💻 Local Development

Since this is a static vanilla website, you can simply open `index.html` in your browser. 

If you prefer to run it through a local server, you can use the included PowerShell script:
```powershell
.\serve.ps1
```
This will host the site locally at `http://localhost:8080`.

## 🔒 License

This project is open-source and available under the [MIT License](LICENSE).
