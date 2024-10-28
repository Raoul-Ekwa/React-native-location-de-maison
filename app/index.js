import AppartementList from '@/components/Home/AppartementList'; 
import { View, ScrollView, Text } from "react-native"; // Ajout de ScrollView ici
import { StyleSheet } from "react-native"; 
import GreetingUser from '@/components/UI/GreetingUser';
import Users from '../components/Home/Users';
import LastPublication from '../components/Home/LastPublication';
import PostList from '../components/Post/PostList';

const App = () => {
    return (
        <View style={styles.appContainer}>
            <GreetingUser />
            <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}> 
                <AppartementList />
                <Users />
                <PostList />
             </ScrollView> 
        </View>
    );
};

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
    },
    scrollViewContent: {
        paddingBottom: 20, // Ajoute de l'espace en bas pour éviter que les derniers éléments soient trop proches du bord
    },
});

export default App;
