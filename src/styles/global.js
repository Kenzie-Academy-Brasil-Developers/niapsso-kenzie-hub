import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background-color: var(--grey-4);
  }
  body, input, button {
    font-family: 'Inter', sans-serif;    
    color: var(--grey-0);
  }
  button {
    cursor: pointer;
  }
  :root {
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;
    --grey-50: #868E96;
    --grey-4: #121214;
    --grey-3: #212529;
    --grey-2: #343B41;
    --grey-1: #868E96;
    --grey-0: #F8F9FA;
    --success: #3FE864;
    --negative: #E83F5B;
    --title-1: 1rem;
    --title-2: 0.75rem;
    --title-3: 0.5rem;
  }
`;
