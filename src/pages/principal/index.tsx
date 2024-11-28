import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { style } from "./styles";
import Logo from "../../../assets/logo-real-cestas.png";
import { MaterialIcons } from "@expo/vector-icons";
import { themas } from "../../global/themes";
import { Link, router, useRouter } from "expo-router";

export default function Principal() {
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
        <Text style={style.titlePrincipal}>Real Cestas!</Text>
        <Text style={style.textoGeral}>
          Oferecemos soluções em benefícios que elevam os padrões de qualidade.
          Nossas Cestas de Alimentos, Higiene/Limpeza e de Natal atendem às
          demandas dos clientes com excelência e um atendimento excepcional.
        </Text>
      </View>
    </View>
  );
}
