import {createGlobalStyle } from 'styled-components'


export const Globalstyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;

}
a{
   color: var(--card-background);
   transition: var(--transition);
   &:hover{
    color: #fff;
   }
}
body{
    background-color: var(--Global-background);
    font-family: 'Montserrat', sans-serif;
}
:root{
    --container-width-lg:80%;
    --container-width-md:90%;
    --transition:500ms;
    --color-blue: #076FC6;
    --transition: all 500ms ease;
    --color-primary-hue: #3293e2;
    --color-secondary: #ffb116;
    --Global-background: #141439;
    --card-background: #24245C;
    --color-light:#d6cdcd;
    --color-white:#fff;

}

`