import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/components/CustomButton';

export default function App() {
  const handleOnLogin = () => {
    console.log("prueba login desde app");
    alert("Alerta login desde app");
  }

  const handleOnLogout = () => {
    alert("Alerta logout desde app");
  }

  return (
    <View style={styles.container}>
      <Text>Open up App</Text>
      <StatusBar style="auto" />
      <View style={styles.buttonsWrapper}>
        <View style={styles.card}>
        <CustomButton 
            title={'Login'} 
            onClick={handleOnLogin} 
            />
        <CustomButton 
            title={'Salir'}
            onClick={handleOnLogout}
            variant={'secondary'} 
            />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card:{
    width: "80%",
    height: "80%",
    borderRadius: 15,
    backgroundColor:'#f3f4f6',
    alignItems: "center",
    justifyContent: "space-around",
  },
  buttonsWrapper:{
    
    marginTop: 15,
    width: "80%",
    height: "30%",
    alignItems: "center",

  },
});