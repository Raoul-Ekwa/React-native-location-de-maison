import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import LastPublicationItem from "./LastpublicationItem";
import LastPublicationItem2 from "./LastpublicationItem2";

const LastPublication = () => {
    return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.root}>
                <Text style={{fontSize: 25}}>Dernières Publications</Text>
        </View>

        <LastPublicationItem2 />
        <LastPublicationItem />
        
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    root: { 
        marginLeft: 10, 
        marginBottom: 27
    },
    scrollViewContent: {
        padding: 10, // Ajoute de l'espacement interne
    },

    
});

export default LastPublication;
