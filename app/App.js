import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Geolocation from '@react-native-community/geolocation'

import MapView from 'react-native-maps'

const App = () => {

    const [position, setPosition] = useState({})

    useEffect(() => {
        console.log("useEffect.....................")

        Geolocation.getCurrentPosition((data) => {
            console.log("start --------------------------------")
            console.log(data)
            setPosition(data.coords)
        }, 
        error => {
            console.log(err)
        },
        {
            enableHighAccuracy: true,
            distanceFilter: 100,
            interval: 5000,
            fastestInterval: 2000,
        }
        )

        let id = Geolocation.watchPosition((data) => {
                console.log("watch --------------------------------")
                console.log(data)
                setPosition(data.coords)
        })
    },[])


    return ( 
        <View style = {style.container}>

            <View style= {style.map}>

            <MapView 
                style = {{flex:1}}
                initialRegion = {{
                    latitude: 37.570671,
                    longitude:126.983449,
                    latitudeDelta: 0.00922,
                    longitudeDelta: 0.00421
                }}
                >
            </MapView>

            </View>

            <View style={style.text}>

            </View>

        </View>
    )

}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'powderblue'
    }
    ,
    map: {
        flex: 1,
        backgroundColor:'red'
    }
    ,
    text: {
        flex: 1,
        backgroundColor:'green'
    }
})

export default App

