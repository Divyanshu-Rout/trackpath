import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Text, Input, Button } from '@rneui/themed'
import Spacer from '../../components/Spacer'

const SignUpScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3 > Sign Up for Tracker</Text>
            </Spacer>
            <Spacer />
            <Input
                label="Email"
                value={email}
                onChangeText={(newEmail) => setEmail(newEmail)}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer />
            <Input
                label="Password"
                value={password}
                onChange={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
            />
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