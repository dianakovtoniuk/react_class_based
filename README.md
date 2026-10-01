#Class based React User Finder

A learning project built with React and TypeScript that uses class-based components. It shows a list of users with a search field and a button for hiding the list, and it demonstrates lifecycle methods, context and error boundaries.

## Features

- List of users that can be shown or hidden with a button
- Search field that filters users by name as you type
- User data shared through React context
- Error boundary that shows a fallback message when the list fails to render
- Console message when a user item is removed from the page

## Tech Stack

- React
- TypeScript
- Vite
- CSS Modules

## React Concepts Used

- Class components with typed props and state
- Lifecycle methods: `componentDidMount`, `componentDidUpdate` and `componentWillUnmount`
- Updating state with `setState`, including the functional form
- Context in class components through `static contextType`
- Error boundaries with `componentDidCatch`
- Throwing an error on purpose to see how the boundary reacts
- Scoped styles with CSS Modules
- The same logic written with functional components and hooks, kept as comments for comparison

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

1. Clone the repository with `git clone https://github.com/dianakovtoniuk/react_class_components.git`
2. Go to the project folder with `cd react_class_components`
3. Install dependencies with `npm install`
4. Start the development server with `npm run dev`

The app will be available at http://localhost:5173.

## Available Scripts

- `npm run dev` starts the development server
- `npm run build` creates a production build in the `dist` folder
- `npm run preview` serves the production build locally

## Project Structure

- `src/`
  - `components/`
    - `UserFinder.tsx` search field and filtering logic
    - `Users.tsx` list of users with the show and hide button
    - `User.tsx` single user item
    - `ErrorBoundary.tsx` fallback UI for rendering errors
    - CSS Module files for each component
  - `store/`
    - `users-context.ts` context with the list of users
  - `App.tsx` root component that provides the users through context
  - `types.ts` shared types
  - `main.tsx` application entry point
- `index.html` HTML template

## Notes

When a search matches no users, the list throws an error on purpose. In development mode Vite shows its own error overlay on top of the page, so close it to see the fallback message, or check the result in a production build with the build and preview scripts.

## Limitations

The error boundary does not reset itself, so the page has to be reloaded after an error. The search is case sensitive.
