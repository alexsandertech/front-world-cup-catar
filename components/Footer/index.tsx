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

                <div style={{color: '#FFF', display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '16px', marginTop: '30px'}}> 
                    <a  href="http://alexsander.tech" rel="noreferrer" target='_blank'>Code: AlexsanderTech</a>
                    <a href="https://www.figma.com/file/Yb9IBH56g7T1hdIyZ3BMNO/Desafios---Codel%C3%A2ndia?node-id=152536%3A1288"  rel="noreferrer" target='_blank'>Design: Iuri Silva</a>
                </div>
            </Part>
        </Container>
    )
}