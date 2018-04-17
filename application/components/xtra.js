import React,{Component} from 'react';
import { StyleSheet, Text,View,FlatList} from 'react-native';
import {
  Container,
  Content,
  Button,
 Header,
 Form, Item, Input, Label,
 List, ListItem,
} from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
     input:'',
     messages:['ss','ssp'],
     check:''
    }
  }

  // onMessageSend(){
  //   const {input , messages} = this.state
  //   // messages.push(input);
  //   // this.state.check='Working func'
  //   this.setState({ 
  //     check:'func working',
  //     messages:this.state.messages.push(input)

     
  //   })
  // }
  render() {
    var messages = this.state.messages
    var input = this.state.input
    return (
      // <KeyboardAwareScrollView>
      <Container>
        <Content style={styles.containers}>
        <Text>Heel {this.state.input}</Text>
        {/* <List>
          dataSource={messages}
           renderRow={data =>
              <ListItem>
                <Text> {data} </Text>
              </ListItem>}
        </List> */}
        {/* <FlatList data={messages}
        renderItem={(messages)=><Text>{messages}</Text>}
        /> */}
        <List dataArray={messages}
            renderRow={(messages) =>
              <ListItem>
                <Text>{messages}</Text>
              </ListItem>
            }>
          </List>
        <Form>
        <Item floatingLabel>
              <Label>Username</Label>
              <Input onChangeText={(val)=>this.setState({input:val})}/>
            </Item>
            <Button style={styles.sendMessagebtn} onPress={()=>{
            //   this.setState({
            //   messages:messages.push(input)
            // })
            messages.push(input)
            this.setState({
              // check:'allright',
              messages
            })
          }}><Text style={{color:'#fff'}}>Send Message NOw</Text></Button>
        </Form>
        
        <Text>Hii {this.state.messages}</Text>
        <Text>This is check {this.state.check}</Text>
        </Content>
      </Container>
      // </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  sendMessagebtn:{
    paddingLeft:5,
    paddingRight:5,
    width:110,
    color:'#fff',
  }
});