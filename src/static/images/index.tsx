import { type FC } from "react";
import PreviewPng from "./preview.webp";
import HeroImg from "./hero-img.webp";
import Logo from "./logo-vic-new.webp";

import HeroSlider1 from "../videos/Clip-8.mp4";
import HeroSlider2 from "./hero-slider-02.webp";
import HeroSlider3 from "./foto-arcoiris.jpeg";

import FotoContacto from "./foto-vic-1.jpeg"

import InfiniteImg1 from "./infinite-img-1.webp";
import InfiniteImg2 from "./infinite-img-2.webp";

import Patron from "./fondo-black-2.png"

export const images = {
    preview: PreviewPng,
    heroImg: HeroImg,
    logo: Logo,
};

export type ImageProps = {
    srcLocal?: keyof typeof images;
    src?: string;
    alt: string;
    width?: number | string;
    height?: number | string;
    loading?: "lazy" | "eager";
};

export type VideoProps = {
    src?: string;
    type?: string; // Añade un tipo de archivo de video opcional si es necesario
    alt: string;
    width?: number | string;
    height?: number | string;
    loading?: "lazy" | "eager";
};

/**
 * @example
 * <Image src="logo" alt="logo" width="50px" height="50px" />
 */
export const Image: FC<ImageProps> = ({
    alt,
    srcLocal,
    height,
    width,
    src,
    loading,
    ...rest
}) => {
    /**
     * If srcLocal or src is not provided throw an error
     */
    if (!srcLocal && !src) {
        throw new Error("srcLocal or src is required");
    }

    /**
     * this component should be able to use local images or images from external sources
     */
    const image = srcLocal ? images[srcLocal] : { src, width, height };

    return (
        <img
            src={image.src}
            alt={alt}
            width={width ? width : image.width}
            height={height ? height : image.height}
            loading={loading}
            {...rest}
        />
    );
};

export const Video: FC<VideoProps> = ({
    alt,
    height,
    width,
    src,
    loading,
    ...rest
}) => {
    if (src) {
        console.warn("Missing 'type' prop for video.");
    }

    const media = { src, width, height };

    return (
        <video
            src={media.src}
            width={width ? width : media.width}
            height={height ? height : media.height}
            controls
            {...rest}
        />
    );
};

// default export of the images
export {
    PreviewPng,
    HeroSlider1,
    HeroSlider2,
    HeroSlider3,
    InfiniteImg1,
    InfiniteImg2,
    Patron,
    FotoContacto
};
