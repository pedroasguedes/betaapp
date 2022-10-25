import { AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { ipnode, ipspring } from "../../../config/ip";
import { styles } from "../css/Styles";

export default function Content(props: any) {
  const { idusuario } = props;

  const [carregando, setCarregando] = useState(true);

  const [produtos, setProdutos] = useState([{
            idcarrinho:"",
            idusuario: "",
            chavecarrinho:"",
            idproduto: "",
            nomeproduto:"",
            preco:"",
            quantidade:"",
            subtotal:""
  }]);

  useEffect(() => {
    fetch(`${ipnode}/api/usuarios/carrinho/2`)
      .then((response) => response.json())
      .then((rs) => {
        setProdutos(rs.output);
        setCarregando(false);
        console.log(rs);
      })
      .catch((erro) => console.error(`Erro ao executar a api -> ${erro}`));
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
      {carregando ? (
        <ActivityIndicator size={100} color="#f00" />
      ) : (
        <View>
          <ScrollView horizontal={false}>
            
         {
            produtos.map((itens, ix)=>(
      
          <View key={ix} style={{ flex: 1, justifyContent: "center" }}>
           
             <Text style={styles.produto}>
               {itens.nomeproduto}
             </Text>
             <Text style={styles.preco}>
               {itens.preco}
             </Text>
             <Text style={styles.quantidade}>
               {itens.quantidade}
             </Text>
             <Text style={styles.preco}>
               {itens.subtotal}
             </Text>


            <TouchableOpacity
              style={styles.btnremovercarrinho}
              onPress={() => alert("oi")}
            >
              <Text style={styles.txtcarrinho}>
                <AntDesign name="delete" size={24} color="white"/>
                Remover</Text>
            </TouchableOpacity>
          </View>

        ))}


          <TouchableOpacity onPress={()=>alert("Fechar")}
          style={styles.fecharpedido}>
            <Text style={styles.txtfecharpedido}>
              Fechar o pedido
            </Text>
          </TouchableOpacity>


          </ScrollView>


        </View>
      )}
    </View>
  );
}