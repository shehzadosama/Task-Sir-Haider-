import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions, } from 'react-native';
import { Container, Content, Header, Body, ListItem, List, Button, Right, Left, Title, Drawer, Fab, Footer, FooterTab, Spinner, Text } from 'native-base';



export default class Wrong extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }





    render() {





        return (
            <Container style={{ backgroundColor: '#F72F2F', opacity: 0.6, position: 'absolute', zIndex: 10, width: '100%', height: Dimensions.get('window').height }} >
                <Content >
                    <List style={{ backgroundColor: '#F72F2F' }}>
                        <ListItem style={{ backgroundColor: '#F72F2F', borderColor: '#F72F2F' }}>
                            <Image source={require('./images/wrong_icon.png')} style={{ width: 100, height: 100, marginLeft: 130, marginTop: 50 }} />

                        </ListItem>
                        <ListItem style={{ backgroundColor: '#F72F2F', borderColor: '#F72F2F' }}>
                            <Text style={{ marginLeft: 135, color: 'white', fontWeight: 'bold', fontSize: 25 }}>Wrong</Text>
                        </ListItem>
                        <ListItem style={{ backgroundColor: '#F72F2F', borderColor: '#F72F2F' }}>
                            <Text style={{ marginLeft: 80, marginTop: -20, color: 'white', fontSize: 14 }}>You meant the another one, right?</Text>
                        </ListItem>

                        <ListItem style={{ backgroundColor: '#F72F2F', borderColor: '#F72F2F' }}>
                            <Text style={{ marginLeft: 110, color: 'white', marginTop: 210, fontSize: 14 }}>You're on 4th place</Text>

                        </ListItem>
                        <ListItem style={{ backgroundColor: '#F72F2F', borderColor: '#F72F2F' }}>
                            <Text style={{ marginLeft: 60, color: 'white', fontSize: 14, marginTop: -10 }}>you're on 748 points behind nancy</Text>

                        </ListItem>


                    </List>
                </Content>

            </Container>
        );
    }
}



