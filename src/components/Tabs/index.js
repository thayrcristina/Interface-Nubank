import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, TabText, TabsContainer, TabItem } from './styles'; 


export default function Header(){
    return (
        <Container>
         <TabsContainer>
             <TabItem>
                <Icon name="person-add" size={24} color="#FFF" />
                <TabText>Indicar Amigos</TabText>
             </TabItem>             
        </TabsContainer>                
         </Container>
    );
}