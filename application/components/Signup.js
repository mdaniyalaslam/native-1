import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { View } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Card, CardItem, Body } from 'native-base'
import { signupAction, } from '../store/action/action';


class SignupPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            text:""
        }
    }
    // _onChangeHandler(ev){
    //     this.setState({
    //         [ev.target.name]:ev.target.value
    //     })
    // }

    _signup() {
        let email = this.state.email 
        let password = this.state.password 
        // console.log('signup called', email)
        // console.log('signup called', password)
        this.props.signupToState(email,password)
        // this.props.navigation.navigate("home")
   
    }

    render() {
        return (

            <Container>
                <Header />
                <Content>

                    <Card>
                        <CardItem>
                            <Body>
                                <Item floatingLabel>
                                    <Label>Emails</Label>
                                    <Input onChangeText={(emailText)=> {this.setState({email : emailText})}} />
                                </Item>
                                <Item floatingLabel>
                                    <Label>Password</Label>
                                    <Input onChangeText = {(passwordText)=> {this.setState({password : passwordText})}}

                                    />
                                </Item>

                                <Button warning block rounded
                                    // onPress = {() => this.props.navigation.navigate("login")}>
                                    onPress={this._signup.bind(this)}
                                    >
                                    <Text>Signup </Text>
                                </Button>

                            </Body>
                        </CardItem>
                    </Card>



                </Content>
            </Container>



        );
    }
}



function mapStateToProp(state) {
    return ({
        userName: state.root.userName,
        stateTodos: state.root.todos
    })
}
function mapDispatchToProp(dispatch) {
    return ({


        signupToState: (email, password) => { dispatch(signupAction(email,password)) },

    })
}
// export default SignupPage
export default connect(mapStateToProp, mapDispatchToProp)(SignupPage)
