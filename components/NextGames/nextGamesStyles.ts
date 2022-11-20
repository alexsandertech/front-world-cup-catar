import styled from "styled-components";

export const  ContainerGroup  = styled.div`
    width: 100%;  
    margin: 32px;
    display: flex;
    flex-diraction: column;
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
    width: 100%;
    height: 100px;

    background: #F4F4F4;
    box-shadow: 3px 3px 3px rgba(60, 57, 57, 0.2);
    border-radius: 6px;
    
    display: flex;
    flex-diraction: row;
    justify-content: space-between;
    align-items: center;

    padding: 8px;

    & svg {
        height: 80px;
        width: 105px;
    }
`

export const NameCountry = styled.div`
    width: 136px;
    
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 23px;
    line-height: 31px;
    text-align: center;

    color: #1F1E1E;
    white-space: nowrap;
`

export const DateHour = styled.div`
    width: 100px;
    height: 22px;

    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;

    text-align: center;

    color: #8D1B3D;
    display: flex;
    flex-diraction: row;
    justify-content: space-between;
    gap: 5px;
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

export const WrapperMatches = styled.div`
    margin: 0px;
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 18%;
    padding-right: 18%;
`


export const ButtonViewAll = styled.div`
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    color:  #8D1B3D;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 48px;
    gap: 10px;

    width: 298px;
    height: 54px;

    background: #FFF2F6;
    border-radius: 6px;
    margin-bottom: 100px;

    cursor: pointer;
`
