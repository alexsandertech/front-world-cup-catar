import React from "react";

import Image from "next/image";
import { imgBanner } from "../../public/images";
import { LogoCup } from "../_Icons";

import { BannerContainer, WrapperLogoCup } from "./bannerStyles";

export default function Banner() {
    return <>
        <BannerContainer>
            <Image 
                src={imgBanner.src} 
                alt={''}
                width={1920}
                height={600}
                style={{opacity: 0.4, marginBottom: '-560px'}}
            />
            <WrapperLogoCup>
                <LogoCup/>
            </WrapperLogoCup>
        </BannerContainer>
    </>
}