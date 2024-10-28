import { View, Text, StyleSheet} from 'react-native';
import PostListDatas from '@/assets/datas/datas-post.json';
import PostItem from './PostItem';

const PostList = () => {
    return(
        <View style={styles.root}>
            <Text style={styles.title}>Dernieres Publications</Text>

            {/* C'est ainsi qu'une liste d'éléments (dans ce cas, des publications) est rendue dynamiquement dans une interface utilisateur. */}
            {PostListDatas.map((post) => (
                <PostItem postData={post} key={post.id}/>
             ))}
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        marginTop: 30,
        margin: 15,
       
        
    },
    title: {
        fontSize: 25,
        marginBottom: 20
    }
})
export default PostList;