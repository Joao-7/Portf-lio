import {createGlobalStyle} from "styled-components"

export default createGlobalStyle`
    .bgs{
        background-color: ${({theme}) => theme.bg };
    }

    .menu{
    
    }

    .text{
        color: ${({theme}) => theme.text };
    }

    .text2{
        color: ${({theme}) => theme.text2 };
    }
`;