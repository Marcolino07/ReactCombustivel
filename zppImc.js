import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState("");
	
	function limpar() {
		setResultado("");
		setAltura("");
		setPeso("");
	}

  function imCalc(){

	  let imc = (parseFloat(peso) / (parseFloat(altura) * parseFloat(altura)));
	  
	  imc = imc.toFixed(2);

	  let result = "";

	  if (imc < 16.9) {
		  result = "Muito abaixo do peso \n IMC: " + imc;
	  }
	  else if ((imc >= 17) && (imc <= 18.4)) {
		  result = "Abaixo do peso. \n IMC: " + imc;
	  }
	  else if ((imc >= 18.5) && (imc <= 24.9)) {
		  result = "Peso normal. \n IMC: " + imc;
	  }
	  else if ((imc >= 25) && (imc <= 29.9)) {
		  result = "Acima do Peso. \n IMC: " + imc;
	  }
	  else if ((imc >= 30) && (imc <= 34.9)) {
		  result = "Obesidade grau I \n IMC: " + imc;
	  }
	  else if ((imc >= 35) && (imc <= 40)) {
		  result = "Obesidade grau II \n IMC: " + imc;
	  }
	  else if ((imc > 40)) {
		  result = "Obesidade grau III \n IMC: " + imc;
	  }
	  setResultado(result);
  }

  return (
    <View style={styles.body}>

		  <View style={styles.header}>
			  <Text style={styles.titulo}>IMC Calculator</Text>
		  </View>

		  <Image
				style={styles.imagem}
				source={require('./assets/imc.png')}
				//uri: 'https://reactnative.dev/img/tiny_logo.png',
			/>


		  	<View style={styles.inputBox} >

				<Text style={styles.label}>Peso: </Text>

				<TextInput
					style={styles.input}
				  	value={peso}
				  	onChangeText={(valor)=>setPeso(valor)}
				  	inputMode='numeric'
				  	keyboardType='numeric'

				/>

				<Text style={styles.label} >Altura: </Text>

				<TextInput
				  style={styles.input}
				  value={altura}
				  onChangeText={(valor)=>setAltura(valor)}
				  inputMode='numeric'
				  keyboardType='numeric'
				/>
			</View>


		  <View style={styles.bloco}>
		  	<Text style={styles.result}>{resultado}</Text>
		  </View>

		  <View style={styles.btnBox}>
			  
			<TouchableOpacity style={styles.btn} onPress={limpar}>
				<Text style={styles.btnTxt}>Limpar</Text>
			</TouchableOpacity>

		  	<TouchableOpacity style={styles.btn} onPress={imCalc}>
				  <Text style={styles.btnTxt}>Resultado</Text>
			  </TouchableOpacity>
		  </View>


    </View>

  );
}


const styles = StyleSheet.create({

    body: {
		width: '100%',
		backgroundColor:'#007fff',
	},

	header:{
		height: '10%',
		textAlign: 'center',
		justifyContent: 'center',
		backgroundColor: 'yellow'
	},

	titulo:{
		textAlign: 'center',
		fontSize: '1rem',
		color: 'red',
		fontWeight: 'bold',
	},

	//blocoImagem:{},

	imagem:{
		width: 90,
		height: 90,
		margin: 'auto',
		marginTop: '1rem',
	},

	bloco1:{
		width: 100,
		height: 100,
		margin: 'auto',
		marginTop: '1rem',
		backgroundColor: 'yellow',
	},

	inputBox:{
		textAlign: 'center',
		width: '100%',
		margin: 'auto',
		backgroundColor: 'yellow'
	},

	input:{
		width: '80%',
		margin: 'auto',
		marginBottom: '1rem',
		border: '1px solid red',
		backgroundColor: '#fff',
	},

	label:{
		marginTop: '1rem',
	},

	btnBox:{
		justifyContent: 'space-around',
		flexDirection: 'row',
		backgroundColor: 'aqua',
		width:'100%',
	},

	btn:{
		borderRadius: 6.3,
		textAlign: 'center',
		backgroundColor: '#ffa500',
		width:'40%',
		padding: '.2rem'
	},

	btnTxt:{
		color: 'white',
		padding: '1rem',
	},

    result:{
		color: 'white',
		fontWeight: 'bold',
		fontSize: '1.2rem',
		height: '3rem',
		textAlign: 'center',
		marginBottom: 20,
	}
});


//echo "# Reactec" >> README.md
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
