import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Card, CardItem, Body } from 'native-base'

export default class SigninPage extends Component {

    constructor(){
        super()
        this.state = {
            email: ''
        }
    }

    render() {
        return (
            <Container>  
                {/* <Header /> */}
                <Content>

                    <Card>
                        <CardItem>
                            <Body>
                                
                                <Item floatingLabel>
                                    <Label>Email</Label>
                                    <Input onChangeText={ e => {this.setState({email:e});console.log('press',e)}} />
                                </Item>
                                <Item floatingLabel>
                                    <Label>Password</Label>
                                    <Input secureTextEntry={true} />
                                </Item>
                                <Button primary block rounded onPress = {() => this.props.navigation.navigate("home")}>
                                    <Text>Signin </Text>
                                </Button>
                                <Button warning block rounded onPress = {() => this.props.navigation.navigate("signup")}>
                                    <Text>Don't have account? Signup </Text>
                                </Button>

                            </Body>
                        </CardItem>
                    </Card>



                </Content>
            </Container>
        );
    }
}

