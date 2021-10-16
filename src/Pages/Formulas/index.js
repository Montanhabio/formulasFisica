import React, {Component} from "react";
import { View, Text, Image, StyleSheet } from "react-native";


export default class Formulas extends Component{
    render(){
        return(
            <View style={styles.listformula}>
                <Image style={styles.avatarFormula} source={require('../../../assets/image/cinematica.png')} />
                <Text style={styles.nomeFormula}>{this.props.data.nomeFormula}</Text>
                <Image
                source={{uri: item.avatarFormula}}
                style={styles.avatarFormula}
              />
            </View>
        )
    }
}



const styles = StyleSheet.create({
container:{
    flex: 1,
},
listformula:{
    flex: 1,
    flexDirection: 'row',
    marginTop: 30,
},

campoFormula:{

},

nomeFormula:{
    padding: 10,
    marginTop: 0,
    fontSize: 14,
    marginLeft: 10,
    fontWeight: 'bold',
},

descriptionFormula:{

},

imageFormula:{
    width: 120,
    height: 150,
},

avatarFormula:{
    position: 'relative',
    width: 30,
    height: 30,
}

});