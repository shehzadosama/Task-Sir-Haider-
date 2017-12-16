import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions, } from 'react-native';
import { Container, Content, Header, Body, ListItem, List, Button, Right, Left, Title, Drawer, Fab, Footer, FooterTab, Spinner, Text } from 'native-base';



export default class Correct extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }



    
    render() {

        



        return (
            <Container style={{ backgroundColor: '#19D617', opacity: 0.5, position: 'absolute', zIndex: 10, width: Dimensions.get('window').width, height: Dimensions.get('window').height }} >
                <Content style={{ backgroundColor: '#19D617', width: Dimensions.get('window').width, height: Dimensions.get('window').height }} >
                    <List style={{ backgroundColor: '#19D617' }}>
                        <ListItem style={{ backgroundColor: '#19D617', borderColor: '#19D617' }}>
                            <Image source={require('./images/correct_icon.png')} style={{ width: 100, height: 100, marginLeft: 130, marginTop: 50 }} />

                        </ListItem>
                        <ListItem style={{ backgroundColor: '#19D617', borderColor: '#19D617' }}>
                            <Text style={{ marginLeft: 135, color: 'white', fontWeight: 'bold', fontSize: 25 }}>Correct</Text>
                        </ListItem>

                        <ListItem style={{ backgroundColor: '#19D617', borderColor: '#19D617' }}>
                            <Text style={{ marginLeft: 110, color: 'white', marginTop: 250, fontSize: 14 }}>You're on 4th place</Text>

                        </ListItem>
                        <ListItem style={{ backgroundColor: '#19D617', borderColor: '#19D617' }}>
                            <Text style={{ marginLeft: 60, color: 'white', fontSize: 14, marginTop: -20 }}>you're on 748 points behind nancy</Text>

                        </ListItem>


                    </List>
                </Content>

            </Container>
        );
    }
}



