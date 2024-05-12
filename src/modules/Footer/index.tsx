import { type FC } from "react";
import * as S from "./styled";
import { LogoFooter } from "@components/LogoFooter";
import { Container } from "@components/Container";
import { Socials } from "@components/Socials";

export const Footer: FC = () => {
    return (
        <S.FooterStyled>
            <Container>
                <S.FooterContainer>
                    <LogoFooter />
                    <S.FooterContent>
                        <p>© 2024 All rights reserved by victoriapaezmakeup.com</p>
                    </S.FooterContent>
                </S.FooterContainer>
                <Socials />
            </Container>
        </S.FooterStyled>
    );
};
