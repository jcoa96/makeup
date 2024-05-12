import styled from "@emotion/styled";
import { Theme } from "@styles/colors";
import type { ParallaxVideoProps } from "./ParallaxVideo";
import { MediaQuery } from "@styles/mediaQuery";

export const ParallaxVideoStyled = styled.div<{
    $bgVideo: ParallaxVideoProps["video"]; // Cambiar a prop de video
}>`
    width: 100%;
    min-height: 457px;
    padding: 90px 20px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    /* Estilos para el video */
    video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1; /* Colocar detrás del contenido */
    }

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1;
    }
`;

export const ParallaxImageContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    position: relative;
    z-index: 2; /* Asegurar que esté encima del video */

    h1 {
        font-size: 90px;
        line-height: 90px;
        text-transform: uppercase;
        letter-spacing: 3px;
        text-align: center;
        margin-bottom: 20px;
        color: ${Theme.primary};

        ${MediaQuery.max("lg")} {
            font-size: 50px;
            line-height: 50px;
        }
    }

    p {
        color: ${Theme.primary};
        max-width: 600px;
        margin: 0 auto;
        text-align: center;

        ${MediaQuery.max("lg")} {
            font-size: 14px;
            line-height: 20px;
        }
    }
`;
