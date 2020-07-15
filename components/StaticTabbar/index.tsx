import * as React from "react";
import {
  View, StyleSheet, TouchableWithoutFeedback, Animated, Dimensions,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

// import { Container } from './styles';
const { width } = Dimensions.get("window");

interface Tab {
    name: string;
}   

interface StaticTabbarProps {
    tabs: Tab[]
}

const StaticTabbar: React.FC = ({tabs, value}) => {

    const onPressAnimate = (index) => {
        const tabWidth = width / tabs.length;
        Animated.spring(value, {
            toValue: tabWidth * index,
            useNativeDriver: true,
        }).start();
        //console.log(tabWidth * index)
    }

  return (
      <View  style={styles.container} >
        {
            tabs.map(({name}, index) => (
                <TouchableWithoutFeedback key={index} onPress={ () => onPressAnimate(index) } >
                    <View style={styles.tab} >
                      <Icon size={20} name={name} /> 
                    </View>
                </TouchableWithoutFeedback>
            ))
        }
      </View>
  );
}

export default StaticTabbar;

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
    },
    tab:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: 64,
    }
  });