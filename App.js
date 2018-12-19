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
import DoctorScreen from './Doctor';
import SearchScreen from './Search';
import ListingScreen from './Listing';
import { createDrawerNavigator ,createAppContainer,DrawerItem } from 'react-navigation'

toggleDrawer=()=>{    
  this.props.navigationProps.toggleDrawer();
}

//  class App1 extends Component {
//   render() {
//     return (
//       <SafeAreaView style={styles.container}>
//           <ScrollView contentContainerStyle={styles.contentContainer}>
 
//           <View style={{flex:9,flexDirection:'row',alignItems:'center',}}>
//              <View style={{flex:25,alignItems:'center'}}>
//              <Icon name="menu" color="#ee5253" size={35} />

//              </View>
//              <View style={{flex:75,}}>
//                <Text style={{color:'#ee5253',alignItems:'center',fontSize:18,fontWeight:'bold'}}>Doctor's Profile</Text>
               
//               </View>
              
//           </View>
//           <View elevation={3} style={{flex:1,flexDirection:'row',borderBottomColor:'#404040',borderBottomWidth:1,marginLeft:20,marginRight:20,marginBottom:10, shadowColor: '#000000',
//     shadowOffset: {
//       width: 0,
//       height: 3
//     },
//     shadowRadius: 5,
//     shadowOpacity: 1.0}}>

//           </View>
          
//           <View style={{flex:30,flexDirection:'row',paddingLeft:15,paddingRight:5,paddingTop:5,paddingBottom:10,}}>
//               <View style={{flex:40,flexDirection:'row',backgroundColor:'#ee5253',borderRadius:5,paddingVertical:5,padding:25,height:'100%'}}>
//                 <Icon name="star" color="#fad87c" size={20} />
//                 <Text style={{fontSize:15,paddingLeft:5,fontWeight:'normal',color:'black',letterSpacing:0.5}}>4.5/5.0</Text>

//               </View>
//               <View style={{flex:60,marginLeft:10,}}>
//                    <Text style={{fontSize:13,fontWeight:'bold',color:'black'}}>Dr.John Deo </Text>
//                    <Text style={{fontSize:13,fontWeight:'normal',color:'black',letterSpacing:0.5}}>Dentist</Text>
//                    <Text style={{fontSize:13,fontWeight:'normal',color:'black',letterSpacing:0.5}}>BDM, MBBS</Text>
//                    <Text style={{fontSize:13,fontWeight:'normal',color:'black',letterSpacing:0.2}}>5 years of experience</Text>
//                    <Text style={{fontSize:13,fontWeight:'normal',color:'black',letterSpacing:0.3}}>120 Consultations</Text>
//                    <Text style={{fontSize:13,fontWeight:'normal',color:'#00a662',letterSpacing:0.3}}>XYZ Hospital</Text>
//                    <Text style={{fontSize:12,fontWeight:'normal',color:'black',letterSpacing:0.4}}>Vasant Vihar,Delhi</Text>
//                    <View style={{flexDirection:'row'}}>
//                    <FontAwesome name="calendar" color="#00a662" size={15} />
//                   <Text style={{fontSize:13,fontWeight:'normal',color:'black',letterSpacing:0.8,marginLeft:5,}}>28/10/2018</Text> 
//                    </View>
//                    <View style={{flexDirection:'row',}}>
//                    <FontAwesome name="rupee" color="#00a662" size={18} />
//                   <Text style={{fontSize:13,fontWeight:'normal',color:'black',letterSpacing:0.8,marginLeft:5,}}>700</Text> 
//                    </View>
//               </View>
         
//           </View>
//           <View style={{flex:20,paddingLeft:10,paddingRight:10,paddingBottom:5,paddingBottom:10,}}>
//               <View style={{flex:10}}></View>
//               <View style={{flex:10,paddingLeft:10,paddingRight:10,}}>
//               <Text style={{color:'#ee5253',alignItems:'center',fontSize:18,fontWeight:'bold'}}>About the hosiptal</Text>
//               </View>
//               <View style={{flex:5}}></View>
//               <View style={{flex:75,paddingLeft:10,paddingRight:10,}}>

//                 <Text style={{fontSize:12,fontWeight:'700',color:'black'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</Text>

//               </View>
         
//           </View>

//              <View style={{flex:20,paddingLeft:20,paddingRight:10,paddingBottom:5,paddingBottom:10,}}>
//               <View style={{flex:10}}></View>
//               <View style={{flex:10,}}>
//               <Text style={{color:'#ee5253',alignItems:'center',fontSize:18,fontWeight:'bold'}}>XYZ Hosiptal</Text>
//               </View>
//               <View style={{flex:20}}></View>
//               <View style={{flex:60,flexDirection:'row',justifyContent: 'space-between',paddingTop:5,}}>

//                    <View style={{width:60,height:60,backgroundColor:'#ee5253',borderRadius:5,}}></View>
//                    <View style={{width:60,height:60,backgroundColor:'#ee5253',borderRadius:5,}}></View>
//                    <View style={{width:60,height:60,backgroundColor:'#ee5253',borderRadius:5,}}></View>
//                    <View style={{width:50,height:60,backgroundColor:'#ee5253',borderRadius:5,}}></View>
               

//               </View>
         
//           </View>

//           <View style={{flex:20,paddingLeft:20,paddingRight:10,paddingBottom:5,paddingBottom:10,}}>
//               <View style={{flex:10}}></View>
//               <View style={{flex:10,padding:5,}}>
//               <Text style={{color:'#ee5253',alignItems:'center',fontSize:18,fontWeight:'bold'}}>Reviews</Text>
//               </View>
//               <View style={{flex:5}}>
//                   <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
//                   <View style={{flex:20,width:60,height:60,backgroundColor:'#ee5253',borderRadius:50,alignItems:'center'}}>

//                   </View>
//                   <Text style={{flex:80,paddingLeft:10,color:'black',fontSize:15,}}>
//                     XYZ Person
//                   </Text>
//                </View>
              
//               </View>
//               <View style={{flex:75,padding:10,}}>

//                 <Text style={{fontSize:12,fontWeight:'700',color:'black'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</Text>

//               </View>
         
//           </View>
//           <View elevation={5} style={{flex:1,flexDirection:'row',borderBottomColor:'#404040',borderBottomWidth:1,marginLeft:20,marginRight:20,marginBottom:10, shadowColor: '#000000',
//     shadowOffset: {
//       width: 0,
//       height: 3
//     },
//     shadowRadius: 5,
//     shadowOpacity: 1.0}}>

//           </View>

//           <View  style={{flex:9,paddingLeft:20,alignItems:'flex-start',paddingRight:5,paddingBottom:5,}}>
//                <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
//                    <TouchableHighlight style={{backgroundColor:'#f44336',borderRadius:10,paddingHorizontal:5,}}>
//                          <Text style={{paddingVertical:5,color:'white',fontSize:12}}> Book Online Consultation</Text>
//                       </TouchableHighlight>

//                           <TouchableHighlight style={{backgroundColor:'#f44336',borderRadius:10,paddingHorizontal:5,marginLeft:20,}}>
//                          <Text style={{paddingVertical:5,color:'white',fontSize:12}}> Book Direct Visit</Text>
//                       </TouchableHighlight>
//                </View>

                
               
                     
//           </View>
            
//           </ScrollView>
//       </SafeAreaView>
//     );
//   }
// }


const MyDrawerNavigator = createDrawerNavigator({
  Doctor: {
    screen: DoctorScreen,
  },
  Search: {
    screen: SearchScreen,
  },
  Listing: {
    screen: ListingScreen,
  },
},{
  initialRouteName:'Doctor',
  drawerWidth:width-150,
  contentOptions:{
    activeTintColor:'orange',
    inactiveTintColor:'#ccccef',

  },
  drawerOpenRoute:'DrawerOpen',
  drawerCloseRoute:'DrawerClose',
  drawerToggleRoute:'DrawerToggle'
  

});

const MyApp = createAppContainer(MyDrawerNavigator);

export default class  App extends Component{
  render(){
    return(
      <MyApp/>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  contentContainer: {
    paddingVertical: 20
  },
});
