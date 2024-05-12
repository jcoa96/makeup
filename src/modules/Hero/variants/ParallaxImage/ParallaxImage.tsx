import React, { type FC, useState, useEffect } from "react";

import * as S from "./styled";
import type { ImageProps, VideoProps } from "@static/images";

export type ParallaxImageProps = {
    image?: ImageProps["srcLocal"] | ImageProps["src"];
    content?: {
        title?: string;
        paragraph?: string;
    };
};

export const ParallaxImage: FC<ParallaxImageProps> = ({ image, content }) => {
    // No renderizar este componente si no hay contenido, imagen ni video
    if (!content || !image) {
        return null;
    }

    // Si no hay video, renderizar la imagen
    return (
        <S.ParallaxImageStyled $bgImage={image}>
            {/* Renderizar el contenido si está presente */}
            {content.title && content.paragraph && (
                <S.ParallaxImageContent>
                    <h1>{content.title}</h1>
                    <p>{content.paragraph}</p>
                </S.ParallaxImageContent>
            )}
        </S.ParallaxImageStyled>
    );
};
