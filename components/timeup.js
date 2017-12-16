import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions, } from 'react-native';
import { Container, Content, Header, Body, ListItem, List, Button, Right, Left, Title, Drawer, Fab, Footer, FooterTab, Spinner, Text } from 'native-base';



export default class TimeUp extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }





    render() {




        return (
            <Container style={{ backgroundColor: '#F72F2F', opacity: 0.5, position: 'absolute', zIndex: 10, width: Dimensions.get('window').width, height: Dimensions.get('window').height }} >
                <Content style={{ backgroundColor: '#F72F2F', width: Dimensions.get('window').width, height: Dimensions.get('window').height }} >
                    <List style={{ backgroundColor: '#F72F2F' }}>
                        <ListItem style={{ backgroundColor: '#F72F2F', borderColor: '#F72F2F' }}>
                            <Image source={require('./images/times_up_icon.png')} style={{ marginLeft: 130, marginTop: 50 }} />

                        </ListItem>
                        <ListItem style={{ backgroundColor: '#F72F2F', borderColor: '#F72F2F' }}>
                            <Text style={{ marginLeft: 125, color: 'white', fontWeight: 'bold', fontSize: 20 }}>Time's Up!</Text>
                        </ListItem>
                        <ListItem style={{ backgroundColor: '#F72F2F', borderColor: '#F72F2F' }}>

                            <Image source={require('./images/great_try_btn.png')} style={{ marginLeft: 110 }} />

                        </ListItem>
                        <ListItem style={{ backgroundColor: '#F72F2F', borderColor: '#F72F2F' }}>
                            <Text style={{ marginLeft: 110, color: 'white', marginTop: 120, fontSize: 14 }}>You're on 4th place</Text>

                        </ListItem>
                        <ListItem style={{ backgroundColor: '#F72F2F', borderColor: '#F72F2F' }}>
                            <Text style={{ marginLeft: 60, color: 'white', fontSize: 14, marginTop: -10 }}>you're on 748 points behind nancy</Text>

                        </ListItem>
                        <ListItem style={{ backgroundColor: '#F72F2F', borderColor: '#F72F2F' }}>
                            <Text style={{ marginLeft: 110, color: 'yellow', fontSize: 16, marginTop: 25 }}>View scorecard</Text>

                        </ListItem>

                    </List>
                </Content>

            </Container>
        );
    }
}



