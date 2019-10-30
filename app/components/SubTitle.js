import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//arrow function
const SubTitle = ({title}) => (
    <View>
        <Text style={styles.SubTitleText}>{title}</Text>
    </View>
);

const styles = StyleSheet.create({
    SubTitleText: {
        color: "#000",
        
    }
})

export default SubTitle;