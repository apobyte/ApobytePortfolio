# Portfolio

Astro + React starter for a personal portfolio. Pages are static Astro; interactive bits are React islands.

## Stack

- [Astro](https://astro.build) for pages, layouts, and static output
- [React](https://react.dev) for client islands (`client:load`)
- TypeScript (strict)

## Get started

```sh
npm install
npm run dev
```

The site runs at [http://localhost:4321](http://localhost:4321).

## Project structure

```text
src/
  components/   Astro + React UI
  data/         Site copy and project list
  layouts/      Shared page chrome
  pages/        Routes
  styles/       Global CSS
```

Update your name, links, and projects in `src/data/site.ts` and `src/data/projects.ts`.

Use React when a component needs browser state. Example:

```astro
<ThemeToggle client:load />
```

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm run dev`     | Start the local dev server                  |
| `npm run build`   | Build production output to `./dist/`        |
| `npm run preview` | Preview the production build locally        |
