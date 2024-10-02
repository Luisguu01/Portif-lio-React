import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, StyleSheet, Text, View, Image, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();
const logo = require('./assets/luis.jpeg'); // Altere o caminho para a sua imagem

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image} />
      <Text style={styles.text}>Luis Gustavo Queiroz</Text>
      <View style={styles.socialButtons}>
        <Button
          title="LinkedIn"
          onPress={() => Linking.openURL('http://linkedin.com/in/luis-gustavo-queiroz-10888b265')}
        />
        <br />
        <Button
          title="GitHub"
          onPress={() => Linking.openURL('https://github.com/Luisguu01')}
        />
        <br />
        <Button
          title="Email"
          onPress={() => Linking.openURL('mailto:luisguutr16@gmail.com')}
        />
        <br />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Ir para Home Secundaria"
          onPress={() => navigation.navigate('HomeSecundaria')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Sobre Mim"
          onPress={() => navigation.navigate('SobreMim')}
        />
      </View>
    </View>
  );
}

function HomeSecundaria({ navigation }) {
  return (
    <View style={styles.container2}>
      <Image source={logo} style={styles.image} />
      <Text style={styles.text}>Luis Gustavo Queiroz</Text>
      <Text style={styles.text}>Minhas Habilidades:</Text>
      <View style={styles.skillsContainer}>
        <SkillBox skill="HTML" />
        <SkillBox skill="CSS" />
        <SkillBox skill="React" />
        <SkillBox skill="PHP" />
      </View>
      <View style={styles.buttonContainer2}>
        <Button
          title="Fale Comigo!"
          onPress={() => Linking.openURL('https://wa.me/+5543999773588')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Voltar para Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
}

function SobreMim({ navigation }) {
  return (
    <View style={styles.sobreMimContainer}>
      <Text style={styles.text}>Sobre Mim</Text>
      <Text style={styles.text2}>
        Sou desenvolvedor apaixonado por tecnologia e estou sempre aprendendo novas habilidades. 
        Gosto de trabalhar em projetos desafiadores e de colaborar com outras pessoas.
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Voltar"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
}

const SkillBox = ({ skill }) => (
  <View style={styles.skillBox}>
    <Text style={styles.text2}>
      {skill}: 
      <Icon name="star" size={30} color="#FFD700" />
      <Icon name="star" size={30} color="#FFD700" />
      <Icon name="star" size={30} color="#FFD700" />
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'paleturquoise',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: 'paleturquoise',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 24,
  },
  text2: {
    color: 'black',
    fontSize: 24,
  },
  image: {
    width: 210,
    height: 210,
    marginBottom: 20,
    borderRadius: 100,
  },
  buttonContainer: {
    marginTop: 10,
  },
  socialButtons: {
    marginTop: 15,
  },
  buttonContainer2: {
    marginTop: 20,
  },
  skillBox: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    width: '90%', // Ajuste a largura aqui
  },
  sobreMimContainer: {
    flex: 1,
    backgroundColor: 'paleturquoise',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="HomeSecundaria" component={HomeSecundaria} />
        <Stack.Screen name="SobreMim" component={SobreMim} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
