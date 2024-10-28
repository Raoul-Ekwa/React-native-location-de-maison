import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { StyleSheet, ImageBackground, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { View, Image, Text } from "react-native";
import houseList from '@/assets/datas/datas-appartements.json';
import HomeDescriptionItem from './HomeDescriptionItem';
import { useLocalSearchParams, router } from 'expo-router';




const page = () => {
    const {id} = useLocalSearchParams(); //recupere les donnees de params dans appartementItem.js
    const house = houseList.find((houseItem) => houseItem.id === parseInt(id))

    if (!house) {
        return;
    }

    const goBack = () => {
        if (router.canGoBack) { // si il y'a une page precedente alors tu peux retourner sur cette derniere
            router.back()
        }
    }

    return (
       <SafeAreaView style={styles.root}>
         <ScrollView showsVerticalScrollIndicator = {false}>
            <ImageBackground 
                source={{
                    uri: house.cover_image_url,
                }}
                resizeMode='cover' // on veut que l'image prenne tout l'espace dispo
                style={styles.mainImage}
                >
                <TouchableOpacity style={styles.roundedButton} onPress={goBack}>
                    <AntDesign name='arrowleft' size={24} color={'white'}/>
                </TouchableOpacity>

            </ImageBackground>

            <View>
                <Text style={styles.houseName}>{house.name}</Text>
            </View>
         </ScrollView>
       </SafeAreaView>
);
}


const styles = StyleSheet.create({
    root: {
        flex: 1,
    },

    mainImage: {
        aspectRatio: 4  / 3,
        padding: 15
    },

    roundedButton: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: '#4e5ac8',
        justifyContent:'center',
        alignItems: 'center',
        
    },

    housename: {
        fontSize: 25,

    }

})

export default page;