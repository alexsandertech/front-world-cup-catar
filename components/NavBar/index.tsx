import React, { useState } from "react";

import { Logo } from "../_Icons";
import { 
    ContainerNavBar,
    ContainerMenu,
    ItemMenu } from "./navBarStyles";

export default function NavBar() {

    const [ itemsMenu, setItemsMenu ] = useState( [
        {
            name: 'Início', 
            action: () => alert('hoIníciome')
        },
        {
            name: 'Grupos', 
            action: () => alert('Grupos')
        },
        {
            name: 'Partidas', 
            action: () => alert('Partidas')
        },
        {
            name: 'Assistir', 
            action: () => alert('Assistir')
        },
    ]
    );


    return (
        <ContainerNavBar>
            <div style={{cursor:'pointer'}}><Logo /></div>
            <ContainerMenu>
                { itemsMenu && itemsMenu.map((item, index) => {
                    return  <ItemMenu key={index}>
                                {item.name}
                            </ItemMenu>
                }) }
            </ContainerMenu>
        </ContainerNavBar>
    )
}