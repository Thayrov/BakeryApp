import {
    Button,
    KeyboardAvoidingView,
    Platform,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

import { THEME } from '../../constants/theme';
import { styles } from './styles';
import { useState } from 'react';

const Auth = ({ navigation }) => {
    const [isLogin, setIsLogin] = useState(true);
    const title = isLogin ? 'Login' : 'Register';
    const message = isLogin ? "Don't have an account?" : 'Already have an account?';
    const messageButton = isLogin ? 'Login' : 'Register';

    return (
        <KeyboardAvoidingView
            style={styles.keyboardContainer}
            behavior={Platform.OS === 'android' ? 'height' : 'padding'}
            enabled>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="e-mail"
                        placeholderTextColor={THEME.colors.NeutralColor}
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={() => {}}
                    />
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="password"
                        placeholderTextColor={THEME.colors.NeutralColor}
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={() => {}}
                        secureTextEntry
                    />
                    <View style={styles.buttonContainer}>
                        <Button
                            title={messageButton}
                            color={THEME.colors.PrimaryColor}
                            onPress={() => {}}
                        />
                        <View style={styles.prompt}>
                            <TouchableOpacity
                                style={styles.promptButton}
                                onPress={() => setIsLogin(!isLogin)}>
                                <Text style={styles.promptMessage}>{message}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

export default Auth;
