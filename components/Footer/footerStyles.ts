import styled from "styled-components";

export const Container = styled.div`
    height: 338px;
    background: #8D1B3D;

    padding-left: 18%;
    padding-right: 18%;
    display: flex;
    padding: 75px;
`


export const Part = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`

export const Title = styled.div`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 29px;

    text-align: center;
    text-transform: capitalize;

    color: #FFFFFF;
    margin-bottom: 20px;
`

export const Item = styled.div`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    color: #F4F4F4;

    order: 0;
    flex-grow: 0;
`