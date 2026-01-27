import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/components/CustomButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Feibu!</Text>
      <StatusBar style="auto" />
      <CustomButton/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5cdce8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
