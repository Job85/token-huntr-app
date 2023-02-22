import React from "react";
import { CardContainer, CardOverlay, CardHeader, Icon, InputWrapper, CardLabel, CardInput, CardFooter, CardButton } from "../CardStyle";

const NewCard = () => {

    return (
        <CardContainer>
            <CardOverlay>
                <CardHeader></CardHeader>
                <form>
                    <InputWrapper>
                        <CardLabel>

                        </CardLabel>
                        <CardInput />
                    </InputWrapper>
                    <InputWrapper>
                        <CardLabel>

                        </CardLabel>
                        <CardInput />
                    </InputWrapper>
                    <CardButton></CardButton>
                </form>
            </CardOverlay>
        </CardContainer>
    )
}