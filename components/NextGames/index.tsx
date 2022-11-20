import React from "react";

import { 
    ContainerGroup,
    Title,
    ContainerCard,
    WrapperMatches,
    DateHour,
    NameCountry,
    ButtonViewAll } from "./nextGamesStyles";

import { 
    FlagQatar,
    FlagEquador,
    FlagSenegal,
    FlagNeherlands,
    
    FlagUnitedKingdom,
    FlagIran,
    FlagUSA,
    FlagWales,

    FlagArgentina,
    FlagArabia,
    FlagMexico,
    FlagPolonia} from "../_Icons";

    
const groupsGamesTeams = [
    {
        countryFirst: {
            name: 'Qatar',
            flag: <FlagQatar/>
        },
        countrySecond: {
            name: 'Equador',
            flag: <FlagEquador/>
        },
        date: '20/11',
        hour: '13:00'
    },
    {
        countryFirst: {
            name: 'Inglaterra',
            flag: <FlagUnitedKingdom/>
        },
        countrySecond: {
            name: 'Irã',
            flag: <FlagIran/>
        },
        date: '21/11',
        hour: '10:00'
    },
    {
        countryFirst: {
            name: 'Senegal',
            flag: <FlagSenegal/>
        },
        countrySecond: {
            name: 'Holanda',
            flag: <FlagNeherlands/>
        },
        date: '21/11',
        hour: '13:00'
    },  
    {
        countryFirst: {
            name: 'EUA',
            flag: <FlagUSA/>
        },
        countrySecond: {
            name: 'Países de Gales',
            flag: <FlagWales/>
        },
        date: '21/11',
        hour: '16:00'
    },  
    {
        countryFirst: {
            name: 'Argentina',
            flag: <FlagArgentina/>
        },
        countrySecond: {
            name: 'Arábia Saudita',
            flag: <FlagArabia/>
        },
        date: '22/11',
        hour: '07:00'
    },  
];

export default function NextGames() {
    return <div style={{display: 'flex', flexDirection: 'column',  justifyContent: 'center', alignItems: 'center'}}>
        <Title>PRÓXIMOS JOGOS</Title>
        <WrapperMatches>
            { groupsGamesTeams.map((group, index) => {
                return <ContainerGroup key={index}>
                    <ContainerCard>
                        {group.countryFirst.flag}
                        <NameCountry>{group.countryFirst.name}</NameCountry>

                        <DateHour>
                            <div>{group.date}</div>
                            <div>{group.hour}</div>
                        </DateHour>

                        <NameCountry>{group.countrySecond.name}</NameCountry>
                        {group.countrySecond.flag}
                    </ContainerCard>
                </ContainerGroup>
            })}
        </WrapperMatches>
        <ButtonViewAll onClick={() => alert('Ver todos')}>
            VER TODOS OS JOGOS
        </ButtonViewAll>
    </div>
}

//