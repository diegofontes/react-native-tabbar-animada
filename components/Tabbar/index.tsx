import React from 'react';
import {
    Text, SafeAreaView, StyleSheet, Dimensions, View, Animated,
  } from "react-native";
  import * as shape from "d3-shape";
  import Svg, { Path } from 'react-native-svg';
  

const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const { width } = Dimensions.get("window");

import StaticTabbar from '../StaticTabbar';


const height = 100;
//const { Path } = Svg;
const tabs = [
    {
      name: "grid",
    },
    {
      name: "list",
    },
    {
      name: "repeat",
    },
    {
      name: "map",
    },
    {
      name: "user",
    },
  ];

const tabWidth = width / tabs.length;
const backgroundColor = "#fdfdfd";

//
// Curva para baixo
//

// const getPath = (): string => {
//     const left = shape.line().x(d => d.x).y(d => d.y)([
//       { x: 0, y: 0 },
//       { x: 0, y: height  },
//     ]);
//     const tab = shape.line().x(d => d.x).y(d => d.y).curve(shape.curveBasis)([
//       { x: width, y: 0 },
//       { x: width + 5, y: 0 },
//       { x: width + 10, y: 10 },
//       { x: width + 15, y: height / 2 },
//       { x: width + tabWidth - 15, y: height /2 },
//       { x: width + tabWidth - 10, y: 10 },
//       { x: width + tabWidth - 5, y: 0 },
//       { x: width + tabWidth, y: 0 },
//     ]);

//     const right = shape.line().x(d => d.x).y(d => d.y)([
//       { x: width * 3, y: 0 },
//       { x: width * 3, y: height },
//       { x: 0, y: height },
//       { x: 0, y: 0 },
//     ]);
//     // return `${left} ${tab} ${right}`;
//     return `${left} ${tab} ${right} `;
//   };


// const left = shape.line().x(d => d.x).y(d => d.y)([
//   {y: height / 2 , x: 0  },
//   {y: ( height / 2 ) / 2, x: tabWidth / 2 },
//   {y: height / 2 , x: tabWidth },

//   {y: height / 2 , x: width },
//   {y: height, x: width },
//   {y: height, x: 0 },
// ]);


//
// Curva para cima
//

  const getPath = (): string => {
      const left = shape.line().x(d => d.x).y(d => d.y)([
          {y: height / 2 , x: 0  },
          {y: height / 2 , x: width  },
      ]);

      const tab = shape.line().x(d => d.x).y(d => d.y).curve(shape.curveBasis)([
        {y: height / 2 , x: width  },
        {y: (height / 2) / 2 - 35, x: width + tabWidth / 2 },
        {y: height / 2 , x: width + tabWidth  },
      ]);

      const right = shape.line().x(d => d.x).y(d => d.y)([
        {y: height / 2 , x: width + tabWidth  },
        {y: height / 2 , x: width * 2 },
        {y: height / 2 , x: width * 3 },
        {y: height , x: width * 3 },
        {y: height , x: width * 2 },
        {y: height , x: width },
        {y: height , x: 0 },
        {y: height / 2 , x: 0  },
      ]);
    return `${left} ${tab} ${right}`;
  };


const d = getPath();
interface TabbarProps {}

//console.log(d);
const Tabbar: React.FC = () => {

    const value = new Animated.Value(0);
    const translateX = value.interpolate({
        inputRange: [0, width],
        outputRange: [-width, 0],
      });
      
  return (
    <View  style={{ height: height, width: width }} >
        {/* <AnimatedSvg width={width} {...{ height }} > */}
        <AnimatedSvg width={width * 3} {...{ height }} style={{ transform: [{ translateX }] }}>
            <Path fill={backgroundColor}  {...{ d }} />
        </AnimatedSvg>
        <View style={StyleSheet.absoluteFill}>
            <StaticTabbar {...{ tabs, value }} /> 
        </View>
    </View>
  );
}

export default Tabbar;

const styles = StyleSheet.create({
    container: {
      backgroundColor,
    },
  });