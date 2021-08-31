import React, { Component } from 'react';
import{Button,View,Text} from 'react-native';
class Button1 extends Component{
  displayAlert=function(){
    alert ("Play Sound!!")
  }
render(){
return(
  <Button color ="red" title="Sound 1"
  onPress={this.displayAlert}/>
)

}
}
class Button2 extends Compnoent{
  displayAlert=function(){
    alert("play Sound!!")
  }
  render(){

    return(
      <Button color ="blue" title="Sound2"
      onPress={this.displayAlert}/>
    )
  }
}
class Button3 extends Compnoent{
  displayAlert=function(){
    alert("play Sound!!")
  }
  render(){

    return(
      <Button color ="purple" title="Sound3"
      onPress={this.displayAlert}/>
    )
  }
}
class Button4 extends Compnoent{
  displayAlert=function(){
    alert("play Sound!!")
  }
  render(){

    return(
      <Button color ="green" title="Sound4"
      onPress={this.displayAlert}/>
    )
  }
}
class Button5 extends Compnoent{
  displayAlert=function(){
    alert("play Sound!!")
  }
  render(){

    return(
      <Button color ="dark blue" title="Sound5"
      onPress={this.displayAlert}/>
    )
  }
}
export default class App extends Component{
  render(){
    return(
      <View style={{
        width:200 ,
        height:100,
        marginLeft:70,
        marginTop:80
        }}>
        <View style={{
          width:200,
        height:50,
        marginTop:-40,
        marginLeft:20}}>
        <Text>DJ AUDIO MIXER APP</Text>
        </View>
<View>
<Button1 color="purple"/>
</View>
<View style={{mardinTop:50}}>
<Button2/>
</View>
<View style ={{marginTop:50}}>
<Button3/>
</View>
<View style ={{marginTop:50}}>
<Button4/>
</View>
<View style ={{marginTop:50}}>
<Button5/>
</View>

<View style={{width:300,height:50,marginTop:40,marginLeft:5}}>
<Text>DJ MIXER APP STAGE 1</Text>
</View>
</View>
    )
  }
}

















