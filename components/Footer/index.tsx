import React from "react";
import { LogoFooter } from "../_Icons";

import { Container, Part, Title, Item } from "./footerStyles";

export default function Footer() {
    return(
        <Container>
            <Part>
                <Title>
                    Redes Sociais
                </Title>
                <Item>Facebook</Item>
                <Item>Instagram</Item>
                <Item>Twitter</Item>
                <Item>Youtube</Item>
            </Part>
           
            <Part>
                <Title>
                    Legais
                </Title>
                <Item>Sobre</Item>
                <Item>Licença</Item>
                <Item>Contato</Item>
                <Item>Politica de privacidade</Item>
            </Part>            
            
            <Part>
                <Title>
                    Fifa
                </Title>
                <Item>Serviços</Item>
                <Item>Patrocinadore</Item>
            </Part>
            
            <Part style={{justifyContent: 'center', alignItems: 'flex-start'}}>
                <LogoFooter/>
            </Part>
        </Container>
    )
}