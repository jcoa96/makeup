import styled from "@emotion/styled";
import { Theme } from "@styles/colors";
import { MediaQuery } from "@styles/mediaQuery";

export const FooterStyled = styled.footer`
    width: 100%;

    background: ${Theme.primary};

    padding-bottom: 90px;
`;

export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;

    ${MediaQuery.max("lg")} {
        flex-direction: column;
        gap: 20px;
        justify-content: center;
        align-items: center;
    }
`;

export const FooterContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    ${MediaQuery.max("lg")} {
        flex-direction: column;
        text-align: center;
    }

    p {
        margin: 0;
        color: ${Theme.secondary};
    }
`;
