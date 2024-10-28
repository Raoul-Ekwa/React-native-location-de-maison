import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StyleSheet, TouchableOpacity } from "react-native";
import { View, ImageBackground, Text, Alert } from "react-native";
import { router } from "expo-router";


const AppartementItem = ({ item }) => {
    const handleTouchImage = () => {
        //router.replace("/Houses")
        // [id] on utilise des crochets pour des redirections dynamiques 

        router.navigate({
            pathname: "/Houses/[id]",
            params: { id: item.id },
        });

        // Les methodes du 'router' les plus utilisees: 
        /* -replace: l'url actuel et il le remplace par le nouveau */
        /* -Push: ajoute la nouvelle url au dessus de l'ancienne */
        /* -Navigate: conserve l'url précédente et va a l'url demandé */
    };
    return (
        <>
            <TouchableOpacity style={styles.imageBlock} onPress={handleTouchImage}>
                <ImageBackground source={{
                    uri: item.cover_image_url,
                }} resizeMode = "cover" 
                
                style={styles.ImageBackground}
                >
                <View style={{flexDirection:'row'}}>
                        <View style={styles.tag}>
                            <Text style={styles.tagText}>Enregistrez Nouvellement</Text>
                        </View>  
                </View>

                </ImageBackground>
                <View style={styles.rowBetween}>
                    <Text style={{fontSize:25}}>{item.location_city}</Text>
                    <View style={styles.tagContainer}>
                        <FontAwesome name="star" size={20} color="orange" />
                        <Text style={styles.tagNoteText}>5.0</Text>
                    </View>
                </View>

                <View style={styles.rowBetween}>
                    <Text style={{fontSize:20, color:'grey'}}>{item.month_price}$ / mois</Text>
                    <View style={styles.tagContainer}>
                        <Ionicons name="person-outline" size={20} color="orange" />
                        <Text style={styles.tagNoteText}>3 visiteurs</Text>
                
                    </View>
                </View>

            </TouchableOpacity>

        </>

        
        

            

        
    );
};
const styles = StyleSheet.create({

    ImageBackground: {
        height: 200,
        borderRadius: 30, //En utilisant overflow: 'hidden', le contenu de la View (ici l'image) sera coupé 
        overflow: "hidden", //pour s'ajuster aux coins arrondis de la View. Cela garantit que l'image sera confinée à l'intérieur des limites du conteneur avec des bords arrondis.
        padding: 15
    },
    imageBlock: {
        
        width: 320,
        margin: 15
        
    },
    tag: {
        padding: 15,
        backgroundColor: '#4e5ac8',
        borderRadius: 30,
        opacity: 0.9
    },
    tagText: {
        padding: 4,
        color: "white"
    },
    tagNoteText: {
        padding: 4,
        color: "black",
        fontSize: 20,
        
    },
    rowBetween: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        margin: 10
    },
    tagContainer: {
        backgroundColor: 'gray',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        borderRadius: 5,
    },
    imageBlock: {
        width: 320,
        gap: 10,
    }
    

});
export default AppartementItem;