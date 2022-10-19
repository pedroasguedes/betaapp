import { ScrollView, View } from "react-native";
import Content from "./components/Content";
import Header from "./components/Header";
import Panel from "./components/Panel";

export default function Home(){
    return(
        <View>
            <ScrollView horizontal={false}>
             <Content/>
            <Header/>
            <Panel/>
            </ScrollView>
        </View>
    )
}