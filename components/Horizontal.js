import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Dimensions,
} from 'react-native';


export default class Horizontal extends Component {
    
    render() {
        return (
            <ScrollView 
                style={styles.container} 
                horizontal={true} 
                pagingEnabled={true} 
            >
                <View style= {styles.outer}>
                    <Text style={ styles.innerText}>I am shyam from tuticorin</Text>
                </View>
                <View style= {[styles.outer,styles.outer1]}>
                    <Text style={ styles.innerText}>I am shyam </Text>
                </View>
                <View style= {[styles.outer,styles.outer2]}>
                    <Text style={ styles.innerText}>I am shyam Developer</Text>
                </View>
            </ScrollView>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        
    },
    outer:{
        backgroundColor:'red',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    },
    outer1:{
        backgroundColor:'blue',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    },
    outer2:{
        backgroundColor:'green',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    },
    innerText:{
        color:'#fff',
        fontSize:25,
        fontWeight:'bold',

    }
});
