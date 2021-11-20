import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --background: #f0f2f5;
  --red: #ff0000;
  --green: #33cc95;

  --blue-ligth: #6933ff;

  --text-title: #363f5f;
  --text-body: #969cb3;

  --background: #f0f2f5;
  --sape: #ffffff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

// font-size: 16px (Desktop)

html {
  @media (max-width: 1080px) {
    font-size: 93.75%;//15px
  }

  @media (max-width: 720px) {
    font-size:  87.5%; //14px
  }
}


body {
  background: var(--background);
  -webkit-font-smoothing: antialiased;
}

border-style, input, textarea, button {
  font-family: 'poppins', sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
   font-weight: 600;
}

button {
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

`;
