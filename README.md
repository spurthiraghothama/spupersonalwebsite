# Spurthi Portfolio ✨

A cute, kawaii-inspired personal portfolio for **Spurthi** — fresher SDE. Built with real data from [GitHub](https://github.com/spurthiraghothama).

![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)

## Features

- 💗 Custom cursor with heart/star trail effect
- ✨ Floating stars, bubbles & pastel gradient background
- 🌸 Smooth scroll animations (fade-in, slide-up)
- 📱 Fully responsive design
- 🎀 Playful micro-interactions — bouncy buttons, hover effects
- 🐙 Projects pulled from GitHub repos

## Sections

| Section  | Description                                      |
| -------- | ------------------------------------------------ |
| Hero     | Avatar, intro, stats, CTA buttons              |
| About    | Bio, quick facts, mascot                         |
| Skills   | Language bars + skill pills from GitHub data     |
| Projects | Featured repos with links                        |
| Contact  | GitHub connect + footer                          |

## Tech Stack

- **Vite 8** + **React 19** + **TypeScript**
- **Framer Motion** for scroll & hover animations
- **CSS** custom properties for kawaii pastel theme

## Run Locally

```bash
# Clone or navigate to the project
cd spurthi-portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
npm run preview   # preview the production build locally
```

## Deploy to Vercel

### Option 1: Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Vite.

### Option 2: GitHub Integration

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repository
4. Vercel will use the settings from `vercel.json`:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Framework:** Vite
5. Click **Deploy**

No environment variables needed — GitHub data is bundled at build time in `src/data/github.ts`.

## Project Structure

```
spurthi-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/     # UI sections & effects
│   ├── data/github.ts  # GitHub profile & repo data
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css       # Global styles & theme
├── vercel.json
├── vite.config.ts
└── package.json
```

## License

MIT — feel free to fork and make it your own! 💕
