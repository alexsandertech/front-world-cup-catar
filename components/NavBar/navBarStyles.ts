import styled from "styled-components";

export const ContainerNavBar = styled.nav`
    width: 100%;
    height: 3.25rem;
    background: #F4F4F4;
    padding-left: 18%;
    padding-right: 18%;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ContainerMenu = styled.div`
    height: 100%;
    width: 500px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`

export const ItemMenu = styled.div`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    height: 100%;
    width: 100%;
    font-weight: 500;
    font-size: 16px;
    line-height: 29px;

    text-transform: capitalize;

    color: #3C3939;
    cursor: pointer;

    
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    &:hover {
        font-weight: 600;
    }
`