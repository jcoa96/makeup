import styled from "@emotion/styled";
import { Theme } from "@styles/colors";
import { MediaQuery } from "@styles/mediaQuery";

export const SocialsStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;

    margin: 50px 0 0;
`;

export const SocialsList = styled.ul`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 30px;
    padding: 0;
    margin: 0;
    width: 100%;
    list-style: none;

    ${MediaQuery.max("lg")} {
        grid-template-columns: repeat(2, 1fr);
    }

    ${MediaQuery.max("md")} {
        grid-template-columns: 1fr;
    }
`;

export const SocialsListItem = styled.li`
    border-radius: 50%;
    width: 100%;

    cursor: pointer;
    transition: 0.3s;
`;

export const SocialsLink = styled.a`
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid ${Theme.primary};
    padding-top: 20px;
    width: 100%;
    transform: translateY(0);
    transition: transform 0.3s;
    border-radius: 15px;


    /* Agregar estilos para cada red social */
    &.github {
        border-top: 8px solid #FF001882; /* Rojo */

        p {
            color: black;
        }
        img {
            filter: invert(1);
        }
    }

    &.linkedin {
        border-top: 8px solid #FFA52C82; /* Naranja */

        p {
            color: black;
        }
        img {
            filter: invert(1);
        }
    }

    &.facebook {
        border-top: 8px solid #FFFF4182; /* Amarillo */

        p {
            color: black;
        }
        img {
            filter: invert(1);
        }
    }

    &.twitter {
        border-top: 8px solid #00801882; /* Verde */

        p {
            color: black;
        }
        img {
            filter: invert(1);
        }
    }

    &.instagram {
        border-top: 8px solid #4B008282; /* Índigo */

        p {
            color: black;
        }
        img {
            filter: invert(1);
        }
    }

    &:hover {
        transform: translateY(-10px);
    }

    p {
        color: ${Theme.primary};
        font-size: 20px;
        line-height: 1.2;
        border-radius: 8px;
        font-weight: 500;
    }

    img {
        width: 25px;
        height: 25px;
        aspect-ratio: 25/25;
        object-fit: contain;
        margin-left: 30px;
    }
`;
