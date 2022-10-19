import { useEffect, useState } from "react";
import {Image, Text, View } from "react-native";
import { ipspring } from "../../../Config/ip";



export default function Content(){

const [produtos ,setProdutos] = useState ([{
    idproduto: "",
    nomeprodutos: "",
    preco:"",
    foto1:"foto.jpg"
}]);

useEffect(()=>{
fetch(`${ipspring}/api/produtos/listar`)
.then((response)=>response.json())
.then((rs)=>setProdutos(rs))
.catch((erro)=> console.error(`Erro ao executar a api -> ${erro}`));
}, []);

return(
    <View>
        <Text>Conteúdo</Text>
        {
            produtos.map((itens,ix)=>(
<View key={ix}>
    <Image source={{uri:`${itens.foto1}`}} style={{width: 200, height: 200}}/>
    <Text>{itens.nomeprodutos}</Text>
    <Text>{itens.preco}</Text>
</View> ))
        }
   
    </View>
        );
}