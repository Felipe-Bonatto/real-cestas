import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { style } from "./styles";
import Logo from "../../../assets/logo-real-cestas.png";
import { MaterialIcons } from "@expo/vector-icons";
import { themas } from "../../global/themes";
import { Link, router, useRouter } from "expo-router";

export default function Sobre() {
  return (
    <View style={style.container}>
      <View>
        <View style={style.viewLogo}>
          <Image source={Logo} resizeMode="contain" style={style.imagemLogo} />
        </View>
        <View style={style.naveGator}>
          <TouchableOpacity onPress={() => router.navigate("/(app)/home")}>
            <Text style={style.naviText}>Home</Text>
          </TouchableOpacity>
          <Text>|</Text>
          <TouchableOpacity onPress={() => router.navigate("/(app)/sobre")}>
            <Text style={style.naviText}>Quem Somos</Text>
          </TouchableOpacity>
          <Text>|</Text>
          <TouchableOpacity onPress={() => router.navigate("/(app)/cestas")}>
            <Text style={style.naviText}>Doe Cestas</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.principal}>
        <Text style={style.titlePrincipal}>Quem Somos</Text>
        <Text style={style.textoSecundario}>
          NOSSA CULTURA É A CHAVE DO NOSSO SUCESSO.
        </Text>
        <Text style={style.textoGeral}>
          Eventos Sociais e Corporativos: Num momento de celebração e alegria,
          há uma oportunidade única de estender a mão aos que mais necessitam.
          Imagine um evento social, onde cada sorriso compartilhado é também uma
          chance de fazer a diferença na vida de alguém. Enquanto celebramos
          momentos felizes, podemos também unir forças para doar cestas de
          alimentos e limpeza, levando conforto e esperança a quem enfrenta
          dificuldades.Além disso, a generosidade não precisa se limitar a um
          único evento. Seja apoiando uma instituição de caridade local, um
          projeto comunitário ou um grupo, cada gesto conta. Juntos, podemos
          transformar pequenos atos de bondade em grandes impactos, tornando o
          mundo um lugar mais solidário e acolhedor para todos.
        </Text>
      </View>
    </View>
  );
}
