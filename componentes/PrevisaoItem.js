import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Cartao from './Cartao';


const PrevisaoItem = (props) => {
    return (
        <Cartao estilos={estilos.cartao}>
            <View style={estilos.tela}>
                
                <View>

                <Text style={estilos.resultado}>
                <Image style={estilos.imagem}
                 source={require('./Icones/up.png')}/>&nbsp;&nbsp;&nbsp;&nbsp;
                Nascer do Sol:{new Date(props.previsao.sys.sunrise *1000).toLocaleTimeString()}   
                </Text>

                <Text style={estilos.resultado}>
                <Image style={estilos.imagem}
                 source={require('./Icones/down.png')}/>&nbsp;&nbsp;&nbsp;&nbsp;
                Pôr do Sol: {new Date(props.previsao.sys.sunset *1000).toLocaleTimeString()}
                </Text> 

                <Text style={estilos.resultado}>
                <Image style={estilos.imagem} 
               source={require('./Icones/temp.png')}/>&nbsp;&nbsp;&nbsp;&nbsp;
                Temperatura:{props.previsao.main.feels_like + " \u00B0" + "C"}
                </Text>
                

             </View>
            </View>
        </Cartao>
    )
}

const estilos = StyleSheet.create({
    cartao: {
        marginBottom: 5
    },
    tela: {
        flexDirection: 'row'
    },
    imagem: {
        width: 50,
        height: 50
    },
    resultado: {
        marginTop: 10,
        marginHorizontal: 2,
        flexDirection: 'column',
        fontWeight:'bold',
        alignItems: 'flex-start',
        textAlign:'left',
		borderTopWidth: 1,
       borderTopColor: '#DDD'
        
    },

});

export default PrevisaoItem;