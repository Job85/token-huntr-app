import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled, { css } from 'styled-components';

export const CardContainer = styled.div`
    height: 100vh;
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 10;
`

export const CardOverlay = styled.div`
    border-radius: 2rem;
    width: 30%;
    padding: 2rem;
    border: 2px solid #9fa65a;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
    margin-bottom: 1rem;
    flex-direction: column;
    background-color: #12343b;
    color: #e1b382;
`

export const CardHeader = styled.h2`
    
`
export const Icon = styled(FontAwesomeIcon)`
    padding-right: .2rem;
`

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const CardLabel = styled.label`
    display: flex;
    padding-right: .5rem;
`

export const CardInput = styled.input`
    width: 75%;
    padding: 12px 20px;
    margin: 8px 0;
    color: black;
    border: 1px solid #ccc;
    box-sizing: border-box;
    transition: border-bottom-color 0.25s ease-in;

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
    background: #e1b382;
    color: #12343b;
    border-radius: .5rem;
    width: 45%;
    font-weight: 900;
    font-size: 1em;
    margin: .5rem 0 .5rem 0;
`