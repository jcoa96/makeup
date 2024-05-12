import React, { type FC, useState, useEffect } from "react";

import * as S from "./styled";
import type { VideoProps } from "@static/images";

export type ParallaxVideoProps = {
    video?: VideoProps["src"];
    content?: {
        title?: string;
        paragraph?: string;
    };
};

export const ParallaxVideo: FC<ParallaxVideoProps> = ({ content, video }) => {
    // No renderizar este componente si no hay contenido, imagen ni video
    if (!content || !video) {
        return null;
    }

    // Si hay un video, renderizar el video
    return (
        <div style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            display: 'flex',
            filter: 'brightness(0.5)'
        }}>
            <video 
                src={video}
                width="100%"
                height="100%"
                autoPlay
                loop
                muted
            />

            {/* Renderizar el contenido si está presente */}
            {content.title && content.paragraph && (
                <S.ParallaxImageContent>
                    <h1>{content.title}</h1>
                    <p>{content.paragraph}</p>
                </S.ParallaxImageContent>
            )}
        </div>
    );
};
