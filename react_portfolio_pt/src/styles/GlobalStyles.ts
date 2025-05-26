import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    overflow: hidden; /* Prevent any scrolling */
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5;
    color: #f0f0f0;
    background-color: #0a0a1a;
    background-image: radial-gradient(circle at top right, rgba(67, 67, 255, 0.15), transparent 40%),
                      radial-gradient(circle at bottom left, rgba(120, 41, 190, 0.15), transparent 40%);
    background-attachment: fixed;
    position: fixed; /* Fix body position to prevent any movement */
    width: 100%;
    height: 100vh;
  }

  #root {
    height: 100vh;
    width: 100vw;
    overflow: hidden; /* Ensure root container doesn't scroll */
    position: relative;
  }

  /* Remove default button styles */
  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
    outline: none; /* Remove focus outline for desktop app feel */
    user-select: none; /* Prevent text selection on buttons */
  }

  /* Remove default link styles */
  a {
    text-decoration: none;
    color: inherit;
    outline: none;
  }

  /* Remove default list styles */
  ul, ol {
    list-style: none;
  }

  /* Remove default input styles */
  input, textarea {
    border: none;
    outline: none;
    font-family: inherit;
  }

  /* Ensure images are responsive but contained */
  img {
    max-width: 100%;
    height: auto;
    user-select: none; /* Prevent image dragging */
    pointer-events: auto;
  }

  /* Remove all scrollbar styles since we won't have scrolling */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbars for Firefox */
  html {
    scrollbar-width: none;
  }

  /* Selection styles */
  ::selection {
    background: #3a3af7;
    color: white;
  }

  ::-moz-selection {
    background: #3a3af7;
    color: white;
  }

  /* Prevent text selection in UI elements for desktop app feel */
  .no-select {
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }

  /* Focus styles for accessibility when using keyboard navigation */
  button:focus-visible,
  a:focus-visible,
  input:focus-visible,
  textarea:focus-visible {
    outline: 2px solid #3a3af7;
    outline-offset: 2px;
  }

  /* Prevent highlighting/dragging for desktop app feel */
  * {
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
  }
`;