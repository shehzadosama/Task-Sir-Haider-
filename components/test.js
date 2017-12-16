import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions, } from 'react-native';
import { Container, Content, Header, Body, ListItem, List, Button, Right, Left, Title, Drawer, Fab, Footer, FooterTab, Spinner, Text } from 'native-base';
// import * as nb from 'native-base';
import TimeUp from './timeup';
import Correct from './correct';
import Wrong from './wrong';



export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            correctAns: "A",
            correctA: false,
            correctB: false,
            correctC: false,
            correctD: false,
            wrongA: false,
            wrongB: false,
            wrongC: false,
            wrongD: false,
            wrongSelectedA: false,
            wrongSelectedB: false,
            wrongSelectedC: false,
            wrongSelectedD: false,
            selected: false,
            time: 30,
            counter: 30,
            currentCounterVal: 30,
            percentage: '100%',
            currentPercentageVal: '100%',
            timeup: false,
            correct: false,
            wrong: false,
            height: Dimensions.get('window').height,

        };
        this.handler = this.handler.bind(this);
        // if (this.state.counter >= 0) {
        //     setInterval(() => {

        //         this.setState({
        //             counter: this.state.counter - 1,
        //             percentage: `${(this.state.counter / this.state.time * 100)}%`


        //         })
        //     }, 1000);
        // }
    }

    componentDidMount() {
        // if (this.state.counter > 0) {
        setInterval(() => {
            if (this.state.counter > 0) {
                this.setState({
                    counter: this.state.counter - 1,
                    percentage: `${(this.state.counter / this.state.time * 100)}%`
                    //     percentage: this.state.counter / this.state.time * 100,
                    //   height: Dimensions.get('window').height *this.state.percentage /100

                })
            } else this.setState({ timeup: true })

        }, 1000);
        // }
    }
    handler(opt) {
        this.setState({
            selected: true,
            currentCounterVal: this.state.counter,
            currentPercentageVal: this.state.percentage
        });
        if (opt === this.state.correctAns) {
            setTimeout(()=>{ this.setState({ correct: true }) }, 2000);
            // this.setState({ correct: true })
            if (opt === "A") {
                this.setState({
                    correctA: true,
                    wrongB: true,
                    wrongC: true,
                    wrongD: true,
                })
            }
            else if (opt === "B") {
                this.setState({
                    correctB: true,
                    wrongA: true,
                    wrongC: true,
                    wrongD: true,
                })
            }
            else if (opt === "C") {

                this.setState({
                    correctC: true,
                    wrongA: true,
                    wrongD: true,
                    wrongB: true,
                })
            }
            else if (opt === "D") {
                this.setState({
                    correctD: true,
                    wrongA: true,
                    wrongC: true,
                    wrongB: true,
                })
            }
            // alert(opt);



        }
        else {
            setTimeout(()=>{ this.setState({ wrong: true }) }, 2000);
            if (this.state.correctAns === "A") {
                this.setState({
                    correctA: true,
                    wrongSelectedB: true,
                    wrongSelectedC: true,
                    wrongSelectedD: true,

                })
            }
            else if (this.state.correctAns === "B") {
                this.setState({
                    correctB: true,
                    wrongSelectedA: true,
                    wrongSelectedC: true,
                    wrongSelectedD: true,
                })
            }
            else if (this.state.correctAns === "C") {

                this.setState({
                    correctC: true,
                    wrongSelectedB: true,
                    wrongSelectedA: true,
                    wrongSelectedD: true,
                })
            }
            else if (this.state.correctAns === "D") {
                this.setState({
                    correctD: true,
                    wrongSelectedB: true,
                    wrongSelectedC: true,
                    wrongSelectedA: true,
                })
            }
        }

    }

    showCorrectScreen() {
        alert()
        //    setTimeout(() => {
        //     alert()
        //    }, 500) 

    }


    render() {


        console.log(this.state.currentPercentageVal)
        console.log(this.state.currentCounterVal)

        return (


            <Container style={{ backgroundColor: 'white' }} >
                {this.state.timeup ? <TimeUp /> : null}
                {this.state.correct ? <Correct /> : null}
                {this.state.wrong ? <Wrong /> : null}
                <Header style={{ backgroundColor: 'white', marginLeft: -150 }}>
                    <Left >
                        {!this.state.selected ?
                            <ListItem style={{ width: this.state.percentage, height: 1, backgroundColor: '#FD01AC', borderRadius: 20, borderColor: 'white' }} >
                                <Text style={{ color: 'white', marginLeft: 'auto', marginRight: -25 }}>{this.state.counter}   </Text>
                            </ListItem> :
                            <ListItem style={{ width: this.state.currentPercentageVal, height: 1, backgroundColor: '#CEE1F8', borderRadius: 20, borderColor: 'white' }} >
                                <Text style={{ color: 'white', marginLeft: 'auto', marginRight: -15 }}>
                                    {this.state.currentCounterVal}
                                </Text>
                            </ListItem>

                        }

                    </Left>
                </Header>
                <Content>

                    <List>
                        <ListItem style={{ borderColor: 'white' }}>
                            <Left>
                                <View style={{ marginLeft: 30, marginTop: -10 }}>
                                    <Text style={{ fontWeight: 'bold' }} >What date is thanksgiving this year?</Text>

                                </View>
                            </Left>
                        </ListItem>

                        <ListItem style={{ borderColor: 'white' }}>
                            <Left>
                                <Image source={require('./images/Question_header.png')} style={{ height: 250, width: 400, marginTop: -80, marginLeft: 10 }} />
                            </Left>
                        </ListItem>

                        <ListItem style={{ borderColor: 'white' }}>
                            <Left style={{ flexDirection: 'column', }}>

                                {this.state.correctA ?
                                    <Button iconRight style={{ width: 140, height: 110, borderRadius: 10, backgroundColor: '#19D617', marginLeft: 25, marginTop: -10, position: 'relative' }}
                                        onPress={this.handler.bind(this, "A")} >
                                        <Image source={require('./images/checkmark.png')} style={{ height: 85, width: 90, opacity: 0.4, position: 'absolute', marginLeft: 20 }} />

                                        <Text style={{ marginLeft: 20 }}>Nov 23rd</Text>
                                    </Button>

                                    :
                                    this.state.wrongA ?
                                        <Button iconRight style={{ width: 140, height: 110, borderRadius: 10, backgroundColor: '#F72F2F', marginLeft: 25, marginTop: -10 }}
                                            onPress={this.handler.bind(this, "A")} >
                                            <Text style={{ marginLeft: 20 }}>Nov 23rd</Text>
                                        </Button> :
                                        this.state.wrongSelectedA ?
                                            <Button iconRight style={{ width: 140, height: 110, borderRadius: 10, backgroundColor: '#FB3134', marginLeft: 25, marginTop: -10, position: 'relative' }}
                                                onPress={this.handler.bind(this, "A")} >
                                                <Image source={require('./images/x.png')} style={{ height: 85, width: 90, opacity: 0.4, position: 'absolute', marginLeft: 20 }} />

                                                <Text style={{ position: 'absolute', marginLeft: 20 }}>Nov 25th</Text>
                                            </Button>
                                            :

                                            <Button iconRight style={{ width: 140, height: 110, borderRadius: 10, backgroundColor: '#9D1716', marginLeft: 25, marginTop: -10 }}
                                                onPress={this.handler.bind(this, "A")} >

                                                <Text style={{ marginLeft: 20 }}>Nov 23rd</Text>
                                            </Button>}


                            </Left>
                            <Body style={{ flexDirection: 'column', }}>
                                {this.state.correctB ?
                                    <Button style={{ width: 140, height: 110, borderRadius: 10, position: 'relative', backgroundColor: '#19D617', marginTop: -10, marginLeft: 25 }}
                                        onPress={this.handler.bind(this, "B")}>
                                        <Image source={require('./images/checkmark.png')} style={{ height: 85, width: 90, opacity: 0.4, position: 'absolute', marginLeft: 20 }} />

                                        <Text style={{ marginLeft: 20 }}>Nov 25th</Text>
                                    </Button>
                                    :
                                    this.state.wrongB ?
                                        <Button iconRight style={{ width: 140, height: 110, borderRadius: 10, backgroundColor: '#F72F2F', marginLeft: 25, marginTop: -10 }}
                                            onPress={this.handler.bind(this, "B")} >
                                            <Text style={{ marginLeft: 20 }}>Nov 25th</Text>
                                        </Button> :
                                        this.state.wrongSelectedB ?
                                            <Button iconRight style={{ width: 140, height: 110, borderRadius: 10, backgroundColor: '#FB3134', marginLeft: 25, marginTop: -10, position: 'relative' }}
                                                onPress={this.handler.bind(this, "B")} >
                                                <Image source={require('./images/x.png')} style={{ height: 85, width: 90, opacity: 0.4, position: 'absolute', marginLeft: 20 }} />

                                                <Text style={{ position: 'absolute', marginLeft: 20 }}>Nov 25th</Text>
                                            </Button>
                                            :
                                            <Button iconRight style={{ width: 140, height: 110, borderRadius: 10, backgroundColor: '#612F90', marginLeft: 25, marginTop: -10 }}
                                                onPress={this.handler.bind(this, "B")} >
                                                <Text style={{ marginLeft: 20 }}>Nov 25th</Text>
                                            </Button>}
                            </Body>
                        </ListItem>

                        <ListItem>
                            <Left style={{ flexDirection: 'column', }}>
                                {this.state.correctC ?

                                    <Button iconRight style={{ width: 140, height: 110, borderRadius: 10, position: 'relative', backgroundColor: '#19D617', marginLeft: 25, marginTop: -10 }}
                                        onPress={this.handler.bind(this, "C")}>
                                        <Image source={require('./images/checkmark.png')} style={{ height: 85, width: 90, opacity: 0.4, position: 'absolute', marginLeft: 20 }} />

                                        <Text style={{ marginLeft: 20 }}>Nov 14th</Text>
                                    </Button> :
                                    this.state.wrongC ?
                                        <Button iconRight style={{ width: 140, height: 110, borderRadius: 10, backgroundColor: '#F72F2F', marginLeft: 25, marginTop: -10 }}
                                            onPress={this.handler.bind(this, "C")} >
                                            <Text>Nov 14th</Text>
                                        </Button> :
                                        this.state.wrongSelectedC ?
                                            <Button iconRight style={{ width: 140, height: 110, borderRadius: 10, backgroundColor: '#FB3134', marginLeft: 25, marginTop: -10, position: 'relative' }}
                                                onPress={this.handler.bind(this, "C")} >
                                                <Image source={require('./images/x.png')} style={{ height: 85, width: 90, opacity: 0.4, position: 'absolute', marginLeft: 20 }} />

                                                <Text style={{ position: 'absolute', marginLeft: 20 }}>Nov 14th</Text>
                                            </Button>
                                            :
                                            <Button iconRight style={{ width: 140, height: 110, borderRadius: 10, backgroundColor: '#5E9134', marginLeft: 25, marginTop: -10 }}
                                                onPress={this.handler.bind(this, "C")} >
                                                <Text style={{ marginLeft: 20 }}>Nov 14th</Text>
                                            </Button>}
                            </Left>
                            <Body style={{ flexDirection: 'column', }}>
                                {this.state.correctD ?
                                    <Button style={{ width: 140, height: 110, borderRadius: 10, backgroundColor: '#19D617', position: 'relative', marginTop: -10, marginLeft: 25 }}
                                        onPress={this.handler.bind(this, "D")}>
                                        <Image source={require('./images/checkmark.png')} style={{ height: 85, width: 90, opacity: 0.4, position: 'absolute', marginLeft: 20 }} />

                                        <Text style={{ marginLeft: 20 }}> Nov 24th</Text>
                                    </Button> :
                                    this.state.wrongD ?
                                        <Button iconRight style={{ width: 140, height: 110, borderRadius: 10, backgroundColor: '#F72F2F', marginLeft: 25, marginTop: -10 }}
                                            onPress={this.handler.bind(this, "D")} >
                                            <Text style={{ marginLeft: 20 }}>Nov 24th</Text>
                                        </Button> :
                                        this.state.wrongSelectedD ?
                                            <Button iconRight style={{ width: 140, height: 110, borderRadius: 10, backgroundColor: '#FB3134', marginLeft: 25, marginTop: -10, position: 'relative' }}
                                                onPress={this.handler.bind(this, "D")} >
                                                <Image source={require('./images/x.png')} style={{ height: 85, width: 90, opacity: 0.4, position: 'absolute', marginLeft: 20 }} />

                                                <Text style={{ position: 'absolute', marginLeft: 20 }}>Nov 24th</Text>
                                            </Button>
                                            :
                                            <Button iconRight style={{ width: 140, height: 110, borderRadius: 10, backgroundColor: '#DEC629', marginLeft: 25, marginTop: -10 }}
                                                onPress={this.handler.bind(this, "D")} >
                                                <Text style={{ marginLeft: 20 }}>Nov 24th</Text>
                                            </Button>}
                            </Body>
                        </ListItem>


                    </List>

                </Content>


            </Container >



        );
    }
}



const styles = StyleSheet.create({
    container: {
        // flex: 3, 
        // flexDirection: 'row',
        position: 'absolute',
        // padding: 20,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    map: {
        // position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        flex: 1,
        width: '100%',
        height: Dimensions.get('window').height
    }
});