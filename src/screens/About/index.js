import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const AboutPage = () => {
    const name = useSelector((state) => state.counter.userInfo.name);
    return (
        <View>
            <Text>{name}</Text>
        </View>
    )
}

export default AboutPage

const styles = StyleSheet.create({})