import React, { Component } from 'react';
import Background from './images/x.png';

import { View, Image, StyleSheet, Dimensions, } from 'react-native';
import { Container, Content, Header, Body, ListItem, List, Button, Right, Left, Title, Drawer, Fab, Footer, FooterTab, Spinner, Text } from 'native-base';


export default class Scoreboard extends Component {

    render() {
        return (
            <Container style={{

                width: '100%',
            }} >


                <Content style={{ width: '100%', height: Dimensions.get('window').height }}>
                    <Image source={require('./images/storyboard_bg.png')} style={{ flex: 1, height: Dimensions.get('window').height }} />
                    <List style={{ position: 'absolute', width: '100%', backgroundColor: 'none' }}>

                        <ListItem style={{ backgroundColor: 'none', borderBottomWidth: 0 }}>
                            <Text style={{ marginLeft: 105, color: '#E8EE29', fontWeight: 'bold', fontSize: 25, textShadowOffset: { width: 0, height: 3 } }}>Scoreboard</Text>
                        </ListItem>
                        <ListItem style={{ backgroundColor: 'none', borderBottomWidth: 0, marginLeft: 150, borderColor: 'white' }} >
                            <Image source={require('./images/score_card_yellow.png')} style={{width:60,height:8 ,borderRadius: 5, }} />

                        </ListItem>

                        <ListItem style={{ backgroundColor: 'none', borderBottomWidth: 0 }}>
                            <Image source={require('./images/score_card_blue.png')} style={{}} />

                            <View style={{ position: 'absolute', flexDirection: 'row' }}>
                                <Text style={{ marginLeft: 25, fontWeight: 'bold', color: '#E8EE29' }}>1. Robyn </Text>
                                <Image source={require('./images/btn.png')} style={{ marginLeft: 10 }} />
                                <Image source={require('./images/master_icon.png')} style={{ width: 20, height: 20, position: 'absolute', marginLeft: 110, marginTop: 10 }} />
                                <Text style={{ marginLeft: 50, color: '#564B1C', fontWeight: 'bold', position: 'absolute', marginLeft: 140 }}>MASTER </Text>

                                <Text style={{ marginLeft: 50, color: '#E8EE29', fontWeight: 'bold', }}>2799 </Text>

                            </View>

                        </ListItem>

                        <ListItem style={{ backgroundColor: 'none', marginTop: -10, borderBottomWidth: 0 }}>
                            <Image source={require('./images/score_card_blue.png')} style={{}} />

                            <View style={{ position: 'absolute', flexDirection: 'row' }}>
                                <Text style={{ marginLeft: 25, color: '#E8EE29', fontWeight: 'bold', }}>2. John </Text>
                                <Image source={require('./images/btn.png')} style={{ marginLeft: 15 }} />
                                <Image source={require('./images/master_icon.png')} style={{ width: 20, height: 20, position: 'absolute', marginLeft: 110, marginTop: 10 }} />
                                <Text style={{ marginLeft: 50, color: '#564B1C', fontWeight: 'bold', position: 'absolute', marginLeft: 140 }}>MASTER </Text>

                                <Text style={{ marginLeft: 55, color: '#E8EE29', fontWeight: 'bold', }}>1195 </Text>

                            </View>

                        </ListItem>
                        <ListItem style={{ backgroundColor: 'none', marginTop: -10, borderBottomWidth: 0 }}>
                            <Image source={require('./images/score_card_yellow.png')} style={{}} />
                            <View style={{ position: 'absolute', flexDirection: 'row' }}>
                                <Text style={{ marginLeft: 25, color: '#176E8C', fontWeight: 'bold', }}>3. Samana</Text>
                                <Image source={require('./images/btn_blue.png')} style={{ marginLeft: 10 }} />
                                <Image source={require('./images/game_control_icon.png')} style={{ position: 'absolute', marginLeft: 120, marginTop: 10 }} />
                                <Text style={{ marginLeft: 50, color: 'white', fontWeight: 'bold', position: 'absolute', marginLeft: 150 }}>5</Text>

                                <Text style={{ color: '#176E8C', marginLeft: 100, fontWeight: 'bold', }}>2799 </Text>

                            </View>
                        </ListItem>
                        <ListItem style={{ backgroundColor: 'none', marginTop: -10, borderBottomWidth: 0 }}>
                            <Image source={require('./images/score_card_blue.png')} style={{}} />

                            <View style={{ position: 'absolute', flexDirection: 'row' }}>
                                <Text style={{ marginLeft: 25, color: '#E8EE29', fontWeight: 'bold', }}>1. Robyn</Text>
                                <Image source={require('./images/btn.png')} style={{ marginLeft: 12 }} />
                                <Image source={require('./images/master_icon.png')} style={{ width: 20, height: 20, position: 'absolute', marginLeft: 110, marginTop: 10 }} />
                                <Text style={{ marginLeft: 50, color: '#564B1C', fontWeight: 'bold', position: 'absolute', marginLeft: 140 }}>MASTER </Text>


                                <Text style={{ marginLeft: 50, color: '#E8EE29', fontWeight: 'bold', }}>2799 </Text>

                            </View>

                        </ListItem>
                        <ListItem style={{ backgroundColor: 'none', borderBottomWidth: 0, }}>
                            <Image source={require('./images/okay_btn.png')} style={{ marginLeft: 100 }} />

                        </ListItem>


                    </List>
                </Content>

            </Container>
        )
    }
}