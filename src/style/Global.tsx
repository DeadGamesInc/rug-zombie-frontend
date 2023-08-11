import { createGlobalStyle } from 'styled-components'
import { PancakeTheme } from '@rug-zombie-libs/uikit/dist/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Poppins', sans-serif;
  }
  body {
    background-color: #0d1517;

    img {
      height: auto;
      max-width: 100%;
    }
  }
  .hHItVm {
    background-image: url('/images/rug_zombie_bg.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
  }
  .nftTimerPopup {
    font-size: 20px !important;
    pointer-events: auto !important;
    &:hover {
      visibility: visible !important;
      opacity: 1 !important;
    }
`

export default GlobalStyle
