import styled from "styled-components";

export const ContainerGroup = styled.div`
    width: fit-content;
    margin: 32px;
    display: flex;
    flex-diraction: row;
`

export const Title = styled.div`
margin-top: 100px;   
    width: 100%;
    display: flex;
    justify-content: center;

    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 48px;
    text-align: center;

    color: #1F1E1E;
    margin-bottom: 48px;
`

export const ContainerCard = styled.div`
    width: 384px;
    height: fit-content;
    background: #F4F4F4;
    box-shadow: 3px 3px 3px rgba(60, 57, 57, 0.2);
    border-radius: 6px;

    
    display: flex;
    flex-direction: column;
    padding: 32px;
    padding-bottom: 0px;
`

export const TitleCard = styled.div`
    padding-bottom: 32px;

    width: 100%;
    display: flex;
    justify-content: center;    

    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;

    text-align: center;

    color: #1F1E1E;
`


export const ItemCountry = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    align-items: center;
    gap:32px;
    margin-bottom: 32px;
`

export const TitleCountry = styled.span`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;

    text-align: center;
    vertical-align: center;

    color: #3C3939;

`