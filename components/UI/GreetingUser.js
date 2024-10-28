import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';


const GreetingUser = () => {
    return (
        <View style={styles.greetingContainer}>
            <Text style={styles.greetingText}>Découvrir</Text>
            <FontAwesome name="search" size={24} color="blue" />
        </View>
    );
};

const styles = StyleSheet.create ({
    greetingContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginHorizontal: 15,
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 30
    },
    greetingText: {
        fontWeight: 'semibold',
        fontSize: 30,
        color: "blue"
    },
})

export default GreetingUser;