import styled from "styled-components";

export const BannerContainer = styled.div`
    width: 100%;
    height: 500px;
    object-fit: cover;
    overflow: hidden;
    
    background: #8D1B3D;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

export const WrapperLogoCup = styled.div`
    width: 100%;
    height: 10px;
    z-index: 99;
    display:flex;
    justify-content: center;
    
    & svg {
        width: 330px;
        padding: 30px;
    }

`
    