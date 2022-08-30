import { Image, View } from "react-native";

export default function Panel(){
    return(
        <View style={{height: "45%"}}>
            <Image source={{uri:"https://d1a5vuhmdbnak9.cloudfront.net/defesanet/site/upload/news_image/2012/12/11440.jpg"}} 
            style={{width: "100%", height: "100%", resizeMode: "cover"}}/>
        </View>
    )
}