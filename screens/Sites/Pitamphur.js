import React, { Component } from 'react'
import { Text, StyleSheet, View , ScrollView, Dimensions} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Image from 'react-native-image-progress';
import Progress from 'react-native-progress';
export default class Pitamphur extends Component {
  render() {
    return (
      <View style={styles.container}>
         <ScrollView>
                <Text style={{ fontSize: 40, fontWeight: "bold", paddingTop: 30, color:"white" }}>
                    Pitamphur Site
               </Text>
                <Text style={{ fontSize: 20, fontWeight: "bold", padding: 15, color:"red" }}>
                      Summary
               </Text>
               <Text style={{ fontSize: 20, padding: 10 , color:"white"}}>
               • Total Land Area – 14 acres
               </Text>
               <Text style={{ fontSize: 20, padding: 10, color:"white" }}>
               • Type of Usage- Warehousing
               </Text>
               <Text style={{ fontSize: 20,  padding: 10 , color:"white"}}>
               • Total Leasable Area – 300,000 sqft
               </Text>
               <Text style={{ fontSize: 20, padding: 10 , color:"white"}}>
               • Micro-market – Pithampur
               </Text>
               <Text style={{ fontSize: 20,  padding: 10 , color:"white"}}>
               • Google coordinates - 22.621660, 75.625908
               </Text>
               <Text style={{ fontSize: 20,  padding: 10 , color:"white"}}>
                • Site address – Plot no 13-B, Sector-3, Kheda Industrial Growth centre, Pithampur, MP.
               </Text>
               <Text style={{ fontSize: 20, fontWeight: "bold", padding: 15, color:"red" }}>
                        Site Location
               </Text>
               <Image source={require('../../img/pitamap.jpg')} style={{   alignSelf: 'center', height: 250,
    width: Dimensions.get('window').width}}   resizeMode="contain"
    defaultSource={{uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200}}
    indicator={Progress.Pie}
    indicatorProps={{
      size: 80,
      borderWidth: 0,
      color: 'rgba(150, 150, 150, 1)',
      unfilledColor: 'rgba(200, 200, 200, 0.2)'
    }}
    />

               <Text style={{ fontSize: 20, fontWeight: "bold", padding: 15, color:"red" }}>
                        Current work
               </Text>
               <Image source={require('../../img/pitaphoto1.jpg')} style={{   alignSelf: 'center', height: 250,
    width: Dimensions.get('window').width}}   resizeMode="contain" 
    defaultSource={{uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200}}
    indicator={Progress.Pie}
    indicatorProps={{
      size: 80,
      borderWidth: 0,
      color: 'rgba(150, 150, 150, 1)',
      unfilledColor: 'rgba(200, 200, 200, 0.2)'
    }}
    />
               <Image source={require('../../img/pitaphoto2.jpg')} style={{   alignSelf: 'center', height: 250,
    width: Dimensions.get('window').width}}   resizeMode="contain"
    defaultSource={{uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200}}
    indicator={Progress.Pie}
    indicatorProps={{
      size: 80,
      borderWidth: 0,
      color: 'rgba(150, 150, 150, 1)',
      unfilledColor: 'rgba(200, 200, 200, 0.2)'
    }}
    />

            
          </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
