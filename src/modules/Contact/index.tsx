import { type FC } from "react";
import * as S from "./styled";
import { TextBox } from "@components/textBox";
import { FadeIn } from "@utils/animations/FadeIn";
import { icons } from "@static/icons"

export const Contact: FC = () => {
    return (
        <S.ContactStyled>
            <S.ContainerStyled>
                <S.ContactBox>
                    <FadeIn delay={0.2}>
                        <TextBox
                            variant="background-text"
                            bgText="Phone"
                            boxAsLink={true}
                            href="https://wa.me/584121072808"
                            target="_blank"
                        >
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <div style={{ height: '60px', width: '60px' }}>
                                    <img style={{ height: '100%', width: '100%' }} src={icons.phone.src} alt="telefono" />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <h3>Agenda tu cita aqui</h3>
                                    <p>
                                        Escribeme para reservar 🥰
                                    </p>
                                </div>
                            </div>
                        </TextBox>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <TextBox
                            variant="background-text"
                            bgText="Email"
                            boxAsLink={true}
                            href="mailto:victoriapaezmakeup@gmail.com"
                            target="_blank"
                        >
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ height: '60px', width: '80px', display: 'flex', alignItems: 'center' }}>
                                    <img style={{ height: 'auto', width: '100%' }} src={icons.correo.src} alt="telefono" />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <h3>Enviame tu propuesta comercial por aqui</h3>
                                    <p>
                                        !Encantada de crear juntos!
                                    </p>
                                </div>
                            </div>
                        </TextBox>
                    </FadeIn>
                </S.ContactBox>
            </S.ContainerStyled>
        </S.ContactStyled>
    );
};
