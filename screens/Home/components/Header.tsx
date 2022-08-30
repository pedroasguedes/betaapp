import { AntDesign } from "@expo/vector-icons";
import { View , Image , Text } from "react-native";
import {styles} from "../css/Styles";   

export default function Header(){
    return (
        <View style={styles.header}>
            <Image source={{uri:"https://static.wikia.nocookie.net/metalgear/images/c/c0/Art-mgsv-logo-xof-s.jpg/revision/latest/scale-to-width-down/200?cb=20141002031515"}} style={styles.logo} />
            <Text style={styles.titulo}>Loja XOF </Text>
            <AntDesign name="shoppingcart"size={24} color="black"/>
        </View>
    )
}