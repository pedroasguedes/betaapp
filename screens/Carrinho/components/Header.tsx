import { AntDesign } from "@expo/vector-icons"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { styles } from "../css/Styles"

export default function Header (props:any) {
    return (
        <View style={styles.header}>
            <Image source={{uri:"https://static.wikia.nocookie.net/metalgear/images/c/c0/Art-mgsv-logo-xof-s.jpg/revision/latest/scale-to-width-down/200?cb=20141002031515"}} style={styles.logo} />
            <Text style={styles. titulo}> Loja XOF </Text>
            <TouchableOpacity onpress={()=>{
                props.tela.navigate("Carrinho")
            }}>
            <AntDesign name="shoppingcart" size={24} color="white" />
            </TouchableOpacity>
        </View>
    )
}