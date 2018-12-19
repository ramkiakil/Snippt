/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Dimensions,SafeAreaView,ScrollView,Button,TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const width = Dimensions.get('window').width
const height= Dimensions.get('window').height


export default class Search extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
         
 
          <View style={{flex:10,flexDirection:'row',alignItems:'center',}}>
             <View style={{flex:25,alignItems:'center'}}>
             <Icon name="menu" color="#ee5253" size={35} onPress={()=>this.props.navigation.openDrawer()}/>

             </View>
             <View style={{flex:75,}}>
               <Text style={{color:'#ee5253',alignItems:'center',fontSize:18,fontWeight:'bold'}}>Home</Text>
               
              </View>
          </View>

      <View style={{flex:20,flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:'#f44336',marginLeft:10,marginRight:10,paddingHorizontal:15,paddingVertical:15,opacity:0.9}}>
                  <TouchableHighlight style={{backgroundColor:'#ffffff',borderRadius:10,paddingHorizontal:5,width:200,}}>
                         <Text style={{paddingVertical:5,fontSize:12,paddingHorizontal:10,}}>Search</Text>
                      </TouchableHighlight>
          </View>
          <View style={[styles.circle,{flex:10,opacity:0.9}]}></View>


          <View  style={{flex:60,marginLeft:20,marginRight:20,paddingVertical:15,}}>
              <View style={{flex:20,flexDirection:'row'}}>
                  <View style={{flex:20,width:50,height:80,alignItems:'center',justifyContent:'center',    borderColor:'#000000',borderwidth:1,elevation: 2,borderRadius:5,}}>
                        <TouchableHighlight  style={{paddingHorizontal:5,}}>
                            <Text style={{paddingVertical:5,fontSize:12}}>Opthalmology</Text>
                          </TouchableHighlight>

                    </View>
                    <View style={{flex:10,}}></View>
                    <View style={{flex:20,width:50,height:80,alignItems:'center',justifyContent:'center',    borderColor:'#000000',borderwidth:1,elevation: 2,borderRadius:5,}}>
                        <TouchableHighlight  style={{paddingHorizontal:5,}}>
                            <Text style={{paddingVertical:5,fontSize:12}}>Dental</Text>
                          </TouchableHighlight>

                    </View>



              </View>

                  <View style={{flex:20,flexDirection:'row'}}>
                  <View style={{flex:20,width:50,height:80,alignItems:'center',justifyContent:'center',    borderColor:'#000000',borderwidth:1,elevation: 2,borderRadius:5,}}>
                        <TouchableHighlight  style={{paddingHorizontal:5,}}>
                            <Text style={{paddingVertical:5,fontSize:12}}>Cardiology</Text>
                          </TouchableHighlight>

                    </View>
                    <View style={{flex:10,}}></View>
                    <View style={{flex:20,width:50,height:80,alignItems:'center',justifyContent:'center',    borderColor:'#000000',borderwidth:1,elevation: 2,borderRadius:5,}}>
                        <TouchableHighlight  style={{paddingHorizontal:5,}}>
                            <Text style={{paddingVertical:5,fontSize:12}}>Neurology</Text>
                          </TouchableHighlight>

                    </View>



              </View>
              
              <View style={{flex:20,flexDirection:'row'}}>
                  <View style={{flex:20,width:50,height:80,alignItems:'center',justifyContent:'center',    borderColor:'#000000',borderwidth:1,elevation: 2,borderRadius:5,}}>
                        <TouchableHighlight  style={{paddingHorizontal:5,}}>
                            <Text style={{paddingVertical:5,fontSize:12}}>Dermatology</Text>
                          </TouchableHighlight>

                    </View>
                    <View style={{flex:10,}}></View>
                    <View style={{flex:20,width:50,height:80,alignItems:'center',justifyContent:'center',    borderColor:'#000000',borderwidth:1,elevation: 2,borderRadius:5,}}>
                        <TouchableHighlight  style={{paddingHorizontal:5,}}>
                            <Text style={{paddingVertical:5,fontSize:12}}>Pediatric</Text>
                          </TouchableHighlight>

                    </View>



              </View>


           
         
         

          </View>


      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  
  },
  circle: {
    marginLeft:10,
    marginRight:10,
    borderBottomLeftRadius:50,
    borderBottomRightRadius:50,
    backgroundColor:'#f44336',
}

});
