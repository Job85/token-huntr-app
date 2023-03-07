import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled, { css } from 'styled-components';

const size = {
    mobile: "320px",
    tablet: "768px",
    laptop: "1024px",
    desktop: "2560px"
}

export const mobile = (inner) => css`
    @media (max-width: ${size.mobile}) {
        ${inner};
    }
`

export const CardContainer = styled.div`
    height: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;
    position: relative;
    z-index: 10;

   @media screen and (max-height: 360px){
    padding-top: 1rem;
   }
`

export const CardOverlay = styled.div`
    border-radius: 2rem;
    width: inherit;
    padding: 2rem;
    border: 2px solid #9fa65a;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    background-color: #edf4f2;
    color: #31473a;

    @media screen and (max-height: 360px){
    padding: 1rem;
   }

   @media screen and (max-height: 545px){
    width: inherit;
   }
`

export const CardHeader = styled.h2`
    
`
export const Icon = styled(FontAwesomeIcon)`
    padding-right: .2rem;
`

export const Form = styled.form`
    display: block;
    margin-top: 0;

    @media screen and (max-height: 545px){
    display: flex;
    flex-direction: column;
   }
`

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    ${mobile(css`
        flex-direction: column;
        align-items: baseline;
    `)}
`

export const CardInput = styled.input`
    width: 75%;
    padding: 12px 20px;
    margin: 8px 0;
    color: black;
    border: 1px solid #ccc;
    box-sizing: border-box;
    transition: border-bottom-color 0.25s ease-in;

    ${mobile(css`
        font-size: small;
        padding: 5px 0 5px 0;
    `)}

    &:focus {
        border-bottom-color: #9fa65a;
        outline: 0;
    }
`

export const CardFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
        color: #56daf4;
    }
`

export const CardButton = styled.button`
    background: #31473a;
    color: #edf4f2;
    border-radius: .5rem;
    width: 45%;
    font-weight: 900;
    font-size: 1em;
    margin: .25rem auto;

    @media screen and (max-height: 545px){
    width: 30%;
    margin: 0 auto;
   }

    ${mobile(css`
        font-size: small;
        width: inherit;
    `)}
`