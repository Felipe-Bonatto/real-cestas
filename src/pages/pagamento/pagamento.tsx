import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { style } from "./styles";
import Logo from "../../../assets/logo-real-cestas.png";
import { Picker } from "@react-native-picker/picker";
import { themas } from "../../global/themes";
import { Link, router, useRouter } from "expo-router";

export default function Pagamento() {
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
        <Text style={style.titlePrincipal}>Pagamento</Text>
      </View>

      <View style={style.ViewInputs}>
        <Text style={style.textoLabel}>Nome Completo:</Text>
        <TextInput style={style.inputs} />
      </View>
      <View style={style.ViewInputs}>
        <Text style={style.textoLabel}>CPF:</Text>
        <TextInput style={style.inputs} />
      </View>

      <View>
        <Text style={style.textoLabel}>
          Para qual instituição deseja fazer a doação?:
        </Text>
        <Picker>
          <Picker.Item label="Selecione" value="Selecione" />
          <Picker.Item label="Instituto Amigos do Bem" value="opcao1" />
          <Picker.Item label="Instituto AACD" value="opcao2" />
          <Picker.Item label="Instituto Abraço Solidário" value="opcao3" />
        </Picker>
      </View>

      <View style={style.ViewInputs}>
        <Text style={style.textoLabel}>Número cartão:</Text>
        <TextInput style={style.inputs} />
      </View>
      <View style={style.ViewInputs}>
        <Text style={style.textoLabel}>Vencimnto do cartão:</Text>
        <TextInput style={style.inputs} />
      </View>
      <View style={style.ViewInputs}>
        <Text style={style.textoLabel}>Código de segurança:</Text>
        <TextInput style={style.inputs} />
      </View>
      <View style={style.ViewButton}>
        <TouchableOpacity
          style={style.buttonComprar}
          onPress={() => router.navigate("/(app)/finalizarCompra")}
        >
          <Text style={style.textoButton}>Comprar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
