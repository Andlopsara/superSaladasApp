import {View,Text,TextInput,StyleSheet}from 'react-native';
import Fonts from '../../constants/Fonts';
import Colors from '../../constants/Colors';

export default function FormItem({label}){
return(
    <View style={styles.container}>
        {label && <Text style={styles.label}>{label}</Text>}
        <TextInput style={styles.input}/>
    </View>
);
};
const styles = StyleSheet.create({
    container: {
     marginBottom: 10,
     width:'100%',
     paddingTop:45,
    },
    label: {
      color: '#013424',
      fontSize:20,
      fontFamily: 'Montserrat_500Medium',
      textAlign: 'center',
    },
    input: {
      borderBottomColor: '#013424',
      borderBottomWidth: 2,
      color:'#e9fff9',
      fontSize:Fonts.size.normal,
      paddingBottom:18,
      paddingTop:5,
    },
  });