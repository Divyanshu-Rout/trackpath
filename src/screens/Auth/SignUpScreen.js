import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Text, Input, Button } from '@rneui/themed'
import Spacer from '../../components/Spacer'

const SignUpScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3 > Sign Up for Tracker</Text>
            </Spacer>
            <Spacer />
            <Input label="Email" />
            <Spacer />
            <Input label="Password" />
            <Spacer />
            <Spacer>
                <Button title="Sign Up" />
            </Spacer>
        </View>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        paddingBottom: 200
    }
})