import { View, StyleSheet, Text, Image } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


const LastPublicationItem2 = () => {
    return (
        <View style={styles.main}>

            <View style={styles.publish}>
                <Image 
                    source={require('@/assets/images/maphoto.png')} 
                    style={styles.userImage} 
                />
                <View style={styles.nameItem}>
                    <Text style={{fontSize: 20, fontWeight:'bold'}}>Tempete Bratane le sorcier</Text>
                    <Text>il y a 15 min</Text>
                </View>
            </View>

            <View>
                <Text style={{margin: 10}}>
                    le monde evolue avec le temps car malgre le vent dounener in jfklidh 
                    fugfuiebf ukhcuiofgifbjbncsukvguivbiohvbeiovbiuvhivbdjkfhevnbjkv 
                    buiffeugveovioifvkj
                </Text>
            </View>

            <View style={styles.emogiItem}>
               <AntDesign name="heart" size={24} color="pink" />
               <FontAwesome5 name="comments" size={24} color="black" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
    userImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginBottom: 10,
        resizeMode: 'cover'
    },
    publish: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop: 15
    },
    nameItem:{
        marginBottom: 30,
        paddingLeft: 15
    },
    scrollViewContent: {
        padding: 10, // Ajoute de l'espacement interne
    },
    emogiItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    main: {
        backgroundColor: '#fbfcfc',
        shadowColor: 'black', // Couleur de l'ombre
        shadowOffset: { width: 10, height: 5 }, // Décalage de l'ombre
        shadowOpacity: 0.9, // Opacité de l'ombre
        shadowRadius: 15, // Rayon de flou de l'ombre
        elevation: 5, // Nécessaire pour Android pour générer l'ombre
        borderRadius: 20,
        marginBottom: 15
    }
    
});

export default LastPublicationItem2;