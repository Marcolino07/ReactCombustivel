import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [alcoholPrice, setAlcoholPrice] = useState('');
  const [gasolinePrice, setGasolinePrice] = useState('');
  const [result, setResult] = useState('');

  const calculateFuel = () => {
    if (alcoholPrice && gasolinePrice)
	{
      const alcohol = parseFloat(alcoholPrice);
      const gasoline = parseFloat(gasolinePrice);
      const ratio = alcohol / gasoline;
      
      if (ratio < 0.7)
	  {
        setResult('Abasteça com Álcool');
      }
	  else
	  {
        setResult('Abasteça com Gasolina');
      }
    }
	else
	{
      setResult('Digite os valores do Álcool e da Gasolina em Reais');
    }
  };

  return (
    <View style={styles.container}>
		<View style={styles.header}>
			<Text style={styles.titulo}>Calculadora de Combustível</Text>
		</View>
		  
		<Image
			style={styles.imagem}
			source={require('./assets/combustivel.jpg')}
		/>
		  
		 <Text style={styles.result}>{result}</Text>
		  
		<View style={styles.body}>
			
			<View style={styles.row}>
				<Text style={styles.label}>Preço do Álcool:</Text>
		  		<Text style={styles.label}>Preço da Gasolina:</Text>
			</View>
			
			
			<View style={styles.row}>
			<TextInput
				style={styles.input}
				keyboardType="numeric"
				value={alcoholPrice}
				onChangeText={text => setAlcoholPrice(text)}
			/>
				
			<TextInput
			    style={styles.input}
				keyboardType="numeric"
				value={gasolinePrice}
				onChangeText={text => setGasolinePrice(text)}
			/>
			</View>
			
			<TouchableOpacity style={styles.calc} onPress={calculateFuel}>
      			<Text style={styles.calcText}>CALCULAR</Text>
			</TouchableOpacity>
	
		</View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
		width: '100%',
    },
	header: {
		height: '10%',
		marginBottom: 50,
		textAlign: 'center',
		justifyContent: 'center',
		backgroundColor: 'yellow',
	},
	titulo: {
		textAlign: 'center',
		fontSize: '1.4rem',
		color: 'red',
		fontWeight: 'bold',
	},
	imagem:{
		width: 90,
		height: 90,
		margin: 'auto',
		marginTop: '1rem',
	},
	body: {
		padding: 20,
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
    label: {
		fontWeight: 'bold',
		width: '40%',
		color: 'blue',
    	fontSize: 16,
    	marginBottom: 8,
    },
  	input: {
    	height: 40,
		width: '40%',
    	borderColor: 'gray',
    	borderWidth: 1,
    	marginBottom: 16,
    	paddingHorizontal: 8,
		borderRadius: 6,
  	},
	calc: {
		padding: 5,
		width: '100%',
		height: '3rem',
		borderRadius: 6,
		backgroundColor: 'lime',
	},
	calcText: {
		textAlign: 'center',
		color: '#fff',
		width: '100%',
		height: '2rem',
		fontWeight: 'bold',
		borderRadius: 6,
		backgroundColor: 'green',
	},
    result: {
    	marginTop: 16,
   		fontSize: 20,
		textAlign: 'center',
    	fontWeight: 'bold',
    },
});


//git init
//git add README.md
//git commit -m "first commit"
//git branch -M main
//git remote add origin https://github.com/Marcolino07/Reactec.git
//git push -u origin main

//add novo repos depois de criado
//git remote add origin https://github.com/Marcolino07/Reactec.git

//add todos os arquivos no commit
//git add .


//verifica o status dos arq a serem commitados
//git status

//
//git commit -m "comentario do commit"

//empurrar o codigo no repos
//git push ou
//git push -u origin2 master

//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