
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Dimensions,SafeAreaView,ScrollView,Button,TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const width = Dimensions.get('window').width
const height= Dimensions.get('window').height


export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
          <ScrollView contentContainerStyle={styles.contentContainer}>
 
          <View style={{flex:9,flexDirection:'row',alignItems:'center',}}>
             <View style={{flex:25,alignItems:'center'}}>
             <Icon name="menu" color="#ee5253" size={35} onPress={()=>this.props.navigation.openDrawer()} />

             </View>
             <View style={{flex:75,}}>
               <Text style={{color:'#ee5253',alignItems:'center',fontSize:18,fontWeight:'bold'}}>Search</Text>
               
              </View>
              
          </View>
          <View elevation={3} style={{flex:1,flexDirection:'row',borderBottomColor:'#404040',borderBottomWidth:1,marginLeft:20,marginRight:20,marginBottom:10, shadowColor: '#000000',shadowOffset: {width: 0,
      height: 3}, shadowRadius: 3,shadowOpacity: 1.0}}>

          </View>

          <View style={{flex:20,flexDirection:'row',paddingLeft:10,paddingRight:10,}}>
                <View style={{flex:20,alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:12,paddingLeft:5,fontWeight:'normal',color:'black',letterSpacing:0.2,marginBottom:15,}}>Sort By Stars</Text>
                <Text style={{fontSize:12,paddingLeft:5,fontWeight:'normal',color:'black',letterSpacing:0.2}}>Sort By Experience</Text>
                </View>
                <View style={{flex:20,alignItems:'center',justifyContent:'center'}}>
                    
                        <TouchableHighlight style={{backgroundColor:'#00a662',borderRadius:10,marginBottom:8,}}>
                                <Text style={{paddingHorizontal:10,paddingVertical:5,color:'white',fontSize:12}}>Ascending</Text>
                            </TouchableHighlight>

                                <TouchableHighlight style={{backgroundColor:'#00a662',borderRadius:10,}}>
                                <Text style={{paddingHorizontal:10,paddingVertical:5,color:'white',fontSize:12}}>Ascending</Text>
                            </TouchableHighlight>
                   

                </View>
                <View style={{flex:20,alignItems:'center',justifyContent:'center'}}>

                       <TouchableHighlight style={{borderColor:'#00a662',borderWidth:1,borderRadius:10,marginBottom:8,}}>
                                <Text style={{paddingHorizontal:10,paddingVertical:5,color:'#00a662',fontSize:12}}>Descending</Text>
                            </TouchableHighlight>

                                <TouchableHighlight style={{borderColor:'#00a662',borderWidth:1,borderRadius:10,}}>
                                <Text style={{paddingHorizontal:10,paddingVertical:5,color:'#00a662',fontSize:12}}>Descending</Text>
                            </TouchableHighlight>
                </View>
          </View>

          <View elevation={3} style={{flex:20,marginTop:10,marginLeft:20,marginRight:20,padding:10,borderRadius:5, shadowColor: '#000000',}}>
              <View style={{flex:20,flexDirection:'row',paddingLeft:10,paddingRight:10,}}>
                 <View style={{flex:20,justifyContent:'center',alignItems:'center'}}>
                     <View style={{backgroundColor:'#ee5253',width:100,height:100,borderRadius:50,}}>

                     </View>

                 </View>

                <View style={{flex:20,marginLeft:8,}}>
                   <Text style={{fontSize:11,fontWeight:'bold',color:'black'}}>Dr.John Deo </Text>
                   <Text style={{fontSize:11,fontWeight:'normal',color:'black',letterSpacing:0.2}}>Dentist(5 Years)</Text>
                   <Text style={{fontSize:11,fontWeight:'normal',color:'black',letterSpacing:0.2,marginBottom:3,}}>MBBS,BDM </Text>
                   
                   <Text style={{fontSize:11,fontWeight:'normal',color:'#00a662',letterSpacing:0.3}}>XYZ Hospital</Text>
                   <Text style={{fontSize:10,fontWeight:'normal',color:'black',letterSpacing:0.2}}>Vasant Vihar,Delhi</Text>
                   

                </View>

                <View style={{flex:20,marginLeft:5,}}>
                     <Text style={{fontSize:10,fontWeight:'bold',color:'black'}}>First Available Date</Text>
                     <View style={{flexDirection:'row'}}>
                   <FontAwesome name="calendar" color="#00a662" size={15} />
                  <Text style={{fontSize:12,fontWeight:'normal',color:'black',letterSpacing:0.2,marginLeft:5,}}>28/10/2018</Text> 
                   </View>
                   <View style={{flexDirection:'row',marginTop:10,}}>
                   <FontAwesome name="rupee" color="#00a662" size={18} />
                  <Text style={{fontSize:12,fontWeight:'normal',color:'black',letterSpacing:0.2,marginLeft:5,}}>700</Text> 
                   </View>

                </View>

              </View>

                 <View style={{flex:40,paddingLeft:20,alignItems:'flex-start',paddingRight:5,paddingBottom:5,paddingTop:10,}}>
                 <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                   <TouchableHighlight style={{backgroundColor:'#f44336',borderRadius:10,paddingHorizontal:5,}}>
                         <Text style={{paddingVertical:5,color:'white',fontSize:12}}> Book Online Consultation</Text>
                      </TouchableHighlight>

                          <TouchableHighlight style={{backgroundColor:'#f44336',borderRadius:10,paddingHorizontal:5,marginLeft:20,}}>
                         <Text style={{paddingVertical:5,color:'white',fontSize:12}}> Book Direct Visit</Text>
                      </TouchableHighlight>
               </View>
                </View>



          </View>

           <View elevation={3} style={{flex:20,marginTop:10,marginLeft:20,marginRight:20,padding:10,borderRadius:5, shadowColor: '#000000',}}>
              <View style={{flex:20,flexDirection:'row',paddingLeft:10,paddingRight:10,}}>
                 <View style={{flex:20,justifyContent:'center',alignItems:'center'}}>
                     <View style={{backgroundColor:'#ee5253',width:100,height:100,borderRadius:50,}}>

                     </View>

                 </View>

                <View style={{flex:20,marginLeft:8,}}>
                   <Text style={{fontSize:11,fontWeight:'bold',color:'black'}}>Dr.John Deo </Text>
                   <Text style={{fontSize:11,fontWeight:'normal',color:'black',letterSpacing:0.2}}>Dentist(5 Years)</Text>
                   <Text style={{fontSize:11,fontWeight:'normal',color:'black',letterSpacing:0.2,marginBottom:3,}}>MBBS,BDM </Text>
                   
                   <Text style={{fontSize:11,fontWeight:'normal',color:'#00a662',letterSpacing:0.3}}>XYZ Hospital</Text>
                   <Text style={{fontSize:10,fontWeight:'normal',color:'black',letterSpacing:0.2}}>Vasant Vihar,Delhi</Text>
                   

                </View>

                <View style={{flex:20,marginLeft:5,}}>
                     <Text style={{fontSize:10,fontWeight:'bold',color:'black'}}>First Available Date</Text>
                     <View style={{flexDirection:'row'}}>
                   <FontAwesome name="calendar" color="#00a662" size={15} />
                  <Text style={{fontSize:12,fontWeight:'normal',color:'black',letterSpacing:0.2,marginLeft:5,}}>28/10/2018</Text> 
                   </View>
                   <View style={{flexDirection:'row',marginTop:10,}}>
                   <FontAwesome name="rupee" color="#00a662" size={18} />
                  <Text style={{fontSize:12,fontWeight:'normal',color:'black',letterSpacing:0.2,marginLeft:5,}}>700</Text> 
                   </View>

                </View>

              </View>

                 <View style={{flex:40,paddingLeft:20,alignItems:'flex-start',paddingRight:5,paddingBottom:5,paddingTop:10,}}>
                 <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                   <TouchableHighlight style={{backgroundColor:'#f44336',borderRadius:10,paddingHorizontal:5,}}>
                         <Text style={{paddingVertical:5,color:'white',fontSize:12}}> Book Online Consultation</Text>
                      </TouchableHighlight>

                          <TouchableHighlight style={{backgroundColor:'#f44336',borderRadius:10,paddingHorizontal:5,marginLeft:20,}}>
                         <Text style={{paddingVertical:5,color:'white',fontSize:12}}> Book Direct Visit</Text>
                      </TouchableHighlight>
               </View>
                </View>



          </View>

           <View elevation={3} style={{flex:20,marginTop:10,marginLeft:20,marginRight:20,padding:10,borderRadius:5, shadowColor: '#000000',}}>
              <View style={{flex:20,flexDirection:'row',paddingLeft:10,paddingRight:10,}}>
                 <View style={{flex:20,justifyContent:'center',alignItems:'center'}}>
                     <View style={{backgroundColor:'#ee5253',width:100,height:100,borderRadius:50,}}>

                     </View>

                 </View>

                <View style={{flex:20,marginLeft:8,}}>
                   <Text style={{fontSize:11,fontWeight:'bold',color:'black'}}>Dr.John Deo </Text>
                   <Text style={{fontSize:11,fontWeight:'normal',color:'black',letterSpacing:0.2}}>Dentist(5 Years)</Text>
                   <Text style={{fontSize:11,fontWeight:'normal',color:'black',letterSpacing:0.2,marginBottom:3,}}>MBBS,BDM </Text>
                   
                   <Text style={{fontSize:11,fontWeight:'normal',color:'#00a662',letterSpacing:0.3}}>XYZ Hospital</Text>
                   <Text style={{fontSize:10,fontWeight:'normal',color:'black',letterSpacing:0.2}}>Vasant Vihar,Delhi</Text>
                   

                </View>

                <View style={{flex:20,marginLeft:5,}}>
                     <Text style={{fontSize:10,fontWeight:'bold',color:'black'}}>First Available Date</Text>
                     <View style={{flexDirection:'row'}}>
                   <FontAwesome name="calendar" color="#00a662" size={15} />
                  <Text style={{fontSize:12,fontWeight:'normal',color:'black',letterSpacing:0.2,marginLeft:5,}}>28/10/2018</Text> 
                   </View>
                   <View style={{flexDirection:'row',marginTop:10,}}>
                   <FontAwesome name="rupee" color="#00a662" size={18} />
                  <Text style={{fontSize:12,fontWeight:'normal',color:'black',letterSpacing:0.2,marginLeft:5,}}>700</Text> 
                   </View>

                </View>

              </View>

                 <View style={{flex:40,paddingLeft:20,alignItems:'flex-start',paddingRight:5,paddingBottom:5,paddingTop:10,}}>
                 <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                   <TouchableHighlight style={{backgroundColor:'#f44336',borderRadius:10,paddingHorizontal:5,}}>
                         <Text style={{paddingVertical:5,color:'white',fontSize:12}}> Book Online Consultation</Text>
                      </TouchableHighlight>

                          <TouchableHighlight style={{backgroundColor:'#f44336',borderRadius:10,paddingHorizontal:5,marginLeft:20,}}>
                         <Text style={{paddingVertical:5,color:'white',fontSize:12}}> Book Direct Visit</Text>
                      </TouchableHighlight>
               </View>
                </View>



          </View>
          
            
          </ScrollView>
      </SafeAreaView>
    );
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
