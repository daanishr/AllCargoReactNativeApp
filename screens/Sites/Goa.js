import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ScrollView, ActivityIndicator, Dimensions } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import PinchZoomView from 'react-native-pinch-zoom-view';

export default class Goa extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }
    static navigationOptions = ({ navigation }) => {
        return {
            headerStyle: {
                backgroundColor: 'white',
                elevation: null
            },
            title: "All Cargo Logistics (Goa)",
            headerLeft: (
                <View style={{ padding: 10 }}>
                    <Ionicons name="md-menu" size={34} onPress={() => navigation.openDrawer()} />
                </View>
            )
        }
    }
    render() {
        return (
            <View style={styles.container}>
                {this.state.loading ? <View style={[styles.container, styles.horizontal]}>
                    <ActivityIndicator size="large" color="red" />
                </View> : null
                }
                <ScrollView pinchGestureEnabled={true} minimumZoomScale={1} maximumZoomScale={5} >
                    <Text style={{ fontSize: 40, fontWeight: "bold", paddingTop: 30, color: "white" }}> Verna (GOA) SITE
                     </Text>
                    <Text style={{ fontSize: 20, fontWeight: "bold", padding: 10, color: "red" }}> Summary
                     </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        • Total Land Area – 5.5 acres
                   </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        • Type of Usage- Warehousing & Industrial
                   </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        • Phase 1 Warehouse Area – 5438 sq m.
                   </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        • Phase 2 Warehouse Area – 4307 sq m
                   </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        • Area of land – 22418 sq m
                   </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        • Location – Verna Industrial Estate, Verna, Goa
                   </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        • Google coordinates - 15.3627195,73.9457063
                   </Text>
                    <Text style={{ fontSize: 20, fontWeight: "bold", padding: 10, color: "red" }}> Site Location
                    </Text>
                    <PinchZoomView>

                    <Image source={require('../../img/goamap1.jpg')} style={{
                        alignSelf: 'center', height: 250,
                        width: Dimensions.get('window').width
                    }} resizeMode="contain"
                        defaultSource={{ uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200 }}
                        onLoadStart={(e) => this.setState({ loading: true })}
                        onLoadEnd={(e) => this.setState({ loading: false })}
                    />
                    </PinchZoomView>
                    <PinchZoomView>

                    <Image source={require('../../img/goamap2.jpg')} style={{
                        alignSelf: 'center', height: 250,
                        width: Dimensions.get('window').width
                    }} resizeMode="contain"
                        defaultSource={{ uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200 }}
                        onLoadStart={(e) => this.setState({ loading: true })}
                        onLoadEnd={(e) => this.setState({ loading: false })}
                    />
                            </PinchZoomView>

                    <Text style={{ fontSize: 20, fontWeight: "bold", padding: 10, color: "red" }}> Pictures of site
                    </Text>

                    <Image source={require('../../img/goa1.jpg')} style={{
                        alignSelf: 'center', height: 250,
                        width: Dimensions.get('window').width
                    }} resizeMode="contain"
                        defaultSource={{ uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200 }}
                        onLoadStart={(e) => this.setState({ loading: true })}
                        onLoadEnd={(e) => this.setState({ loading: false })}
                    />
                    <Image source={require('../../img/goa3.jpg')} style={{
                        alignSelf: 'center', height: 250,
                        width: Dimensions.get('window').width
                    }} resizeMode="contain"
                        defaultSource={{ uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200 }}
                        onLoadStart={(e) => this.setState({ loading: true })}
                        onLoadEnd={(e) => this.setState({ loading: false })}
                    />
                    <Image source={require('../../img/goa2.jpg')} style={{
                        alignSelf: 'center', height: 250,
                        width: Dimensions.get('window').width
                    }} resizeMode="contain"
                        defaultSource={{ uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200 }}
                        onLoadStart={(e) => this.setState({ loading: true })}
                        onLoadEnd={(e) => this.setState({ loading: false })}
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
