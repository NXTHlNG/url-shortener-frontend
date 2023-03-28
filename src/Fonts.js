import {css, Global} from "@emotion/react"
import Lumos from '/public/fonts/Lumos.ttf'
import ParryHotter from '/public/fonts/ParryHotter-LOZ.ttf'

export const Fonts = () => (
    <Global
        styles={css`
          @font-face {
            font-family: 'Lumos';
            src: url(${Lumos}) format('truetype');
          }
          @font-face {
            font-family: 'Parry Hotter';
            src: url(${ParryHotter}) format('truetype');
          }
      `}
    />
)