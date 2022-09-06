import { StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React, { useNavigation } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, setName } from '../../redux/reducer/counter'
const Main = ({ navigation }) => {
    const count = useSelector((state) => state.counter.userInfo.name);
    const dispatch = useDispatch();

    return (
        <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
            <View style={styles.container}>
                <Text onPress={() => {
                    dispatch(increment())
                }}>Increment</Text>
                <Text>{count}</Text>
                <Text
                    onPress={() => {
                        dispatch(setName("Shivam"))
                    }}
                >ChangeName</Text>
            </View>
            <TouchableOpacity onPress={() => { navigation.navigate("About") }}>
                <Text>Go to About Page</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Main

const styles = StyleSheet.create({
    container:
    {
        flexDirection: "row",
        alignSelf: "center",

        width: "100%", justifyContent: "space-around"
    }
})