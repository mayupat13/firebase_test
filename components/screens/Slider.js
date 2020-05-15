import React, { Component } from 'react'
import { 
  StatusBar,
  Image,
  Dimensions,
  SafeAreaView,
  Text, StyleSheet,View
} 
from 'react-native'
import Slider from "@react-native-community/slider";
const {width,height} = Dimensions.get('window');




class Splashscreen extends React.Component {


  constructor(props) {
      super(props);
      this.state = {
        value: 0.2,
      };

    }


render() {
  
    return(
      
      <SafeAreaView style={{flex:1,backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}>
        <View style={styles.container}>
          <Slider
            value={26}
                    minimumValue={0}
                    maximumValue={60}
                    step={1}
                    onValueChange={(sliderValue) => console.log('onValueChange',sliderValue)}
                    onSlidingStart={(sliderValue) => console.log('start',sliderValue)}
                    onSlidingComplete={(sliderValue) => console.log('end',sliderValue)}
                    minimumTrackTintColor={'#E60041'}
                    maximumTrackTintColor={'#363636'}
                    thumbTintColor={'#FFFFFF'}
                    thumbStyle={styles.thumb}
                    trackStyle={styles.track}
                    style={styles.sliderStyle}
                    debugTouchArea={true}
                    thumbTouchSize={{width: 80, height: 80}}
                     />
          <Text>Value: {this.state.value}</Text>
        </View>
      </SafeAreaView>
    );
  }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'skyblue'
  },
      sliderStyle:{
        alignItems: 'stretch', width:width,
        padding:0,
        marginLeft:-20
        // transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }]
    },
  track: {
    height: 4,
    borderRadius: 2,

  },
  thumb: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: 'white',
    borderColor: '#30a935',
    borderWidth: 2,
  }
});



export default Splashscreen;