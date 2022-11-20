import React from "react";

import { 
    ContainerGroup,
    Title,
    ContainerCard,
    TitleCard,
    ItemCountry,
    TitleCountry } from "./groupSessionStyles";

import ScrollContainer from "../_components/ScrollContainer";

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

    
const groupsTeams = [
    {
        nameGroup: 'GRUPO A',
        teams: [
            {
                team: 'Qatar',
                flag: <FlagQatar/>
            },
            {
                team: 'Equador',
                flag: <FlagEquador/>
            },
            {
                team: 'Senegal',
                flag: <FlagSenegal/>
            },
            {
                team: 'Holanda',
                flag: <FlagNeherlands/>
            },
        ]
    },
    {
        nameGroup: 'GRUPO B',
        teams: [
            {
                team: 'Inglaterra',
                flag: <FlagUnitedKingdom/>
            },
            {
                team: 'Iran',
                flag: <FlagIran/>
            },
            {
                team: 'Estados Unidos',
                flag: <FlagUSA/>
            },
            {
                team: 'Países de Gales',
                flag: <FlagWales/>
            },
        ]
    },
    {
        nameGroup: 'GRUPO C',
        teams: [
            {
                team: 'Argentina',
                flag: <FlagArgentina/>
            },
            {
                team: 'Arábia Saudita',
                flag: <FlagArabia/>
            },
            {
                team: 'México',
                flag: <FlagMexico/>
            },
            {
                team: 'Polônia',
                flag: <FlagPolonia/>
            },
        ]
    }
];

export default function GroupSession() {
    return <>
        <Title>GRUPO</Title>
            <ScrollContainer>
                <div style={{margin: '0px', width: '100%', padding: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    { groupsTeams.map((group, index) => {
                        return  <ContainerGroup key={index}>
                                <ContainerCard>
                                    <TitleCard>{group.nameGroup}</TitleCard>
                                    { group.teams.map((team, index) => {
                                        return <ItemCountry key={index}>
                                            {team.flag}
                                            <TitleCountry>{team.team}</TitleCountry>
                                        </ItemCountry>
                                    })}
                                </ContainerCard>
                            </ContainerGroup>
                    })}
                </div>
            </ScrollContainer>
    </>
}

//