import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { View } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Card, CardItem, Body, Toast } from 'native-base'
import { signupAction, } from '../store/action/action';


class SignupPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            text:"",
            error:''
        }
    }
    // _onChangeHandler(ev){
    //     this.setState({
    //         [ev.target.name]:ev.target.value
    //     })
    // }

    _signup() {
        // let email = this.state.email 
        // let password = this.state.password 
        // console.log('signup called', email)
        // console.log('signup called', password)
        let user = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.signupToState(user)
        this.setState({error:this.props.error})
        console.log("chek",this.state.error)

        // this.props.navigation.navigate("signin")
        // Toast.show({
        //     text: "this.props.error",
        //     textStyle: { color: "red" },
        //     buttonText: "Okay"
        //   })
   
    }

    render() {
        // console.log("error msg",this.props.error)
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
                                    <Input secureTextEntry={true} onChangeText = {(passwordText)=> {this.setState({password : passwordText})}}

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
        error: state.root.errorMsg

    })
}
function mapDispatchToProp(dispatch) {
    return ({


        signupToState: (user) => { dispatch(signupAction(user)) },

    })
}
// export default SignupPage
export default connect(mapStateToProp, mapDispatchToProp)(SignupPage)
