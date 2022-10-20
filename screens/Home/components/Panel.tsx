import { Image, View } from "react-native";

export default function Panel(){
    return(
        <View style={{height: 320}}>
            <Image source={{uri:"https://www.opovo.com.br/_midias/png/2020/08/25/capturar-13354062.png"}} 
            style={{width: "100%", height: "100%", resizeMode: "cover"}}/>
        </View>
    )
}