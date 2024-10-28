
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import appartementData from '@/assets/datas/datas-appartements.json'; // Chemin vers le fichier JSON

const App = () => {
  return (
    <View style={styles.container}>
      {appartementData.map((appartement) => (
        <View key={appartement.id}>
          <Image
            source={{ uri: appartement.cover_image_url }}
            style={styles.coverImage}
          />
          <Text style={styles.title}>{appartement.name}</Text>
          <Text style={styles.price}>Prix mensuel : {appartement.month_price} €</Text>
          
          <Text style={styles.subtitle}>Commodités :</Text>
          <View style={styles.commoditiesContainer}>
            {appartement.commodities.map((commodity, index) => (
              <View style={styles.commodityItem} key={index}>
                <Text style={styles.commodityText}>{commodity}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  coverImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  commoditiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Pour permettre le passage à la ligne
    gap: 8, // Espacement entre les éléments
  },
  commodityItem: {
    backgroundColor: '#e0e0e0', // Fond gris clair
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  commodityText: {
    fontSize: 14,
    color: '#333',
  },
});

export default App;
