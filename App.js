import React, {useState, useEffect} from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";


export default function App ({navigation}){
  const [filterData, setfilterData] = useState([]);
  const [masterData, setmasterData] = useState([]);
  const [search, setsearch] = useState('');

  useEffect(() =>{
    fetch('https://gist.github.com/Montanhabio/4a4cb82713c2eec1e3032d3da97862d4'
    ,{
    
      method:'POST',
      header : {
      Accept: 'application/json',
      'Content-Type': 'application/json',
        
      },
    })
      
      .then((response) => response.json())
      .then((response) =>{
        setfilterData(response.dados);
        setmasterData(response.dados);
      }).catch((error) =>{
        console.error(error);
      })
    return()=>{
    }
  }, [])

  const searchFilter = (text) => {
    if(text){
      const newData = masterData.filter((item) => {
        const itemData = item.nomeFormula ? 
          item.nomeFormula.toUpperCase() 
          : ''.toUpperCase();
      const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
    });
    setfilterData(newData);
    setsearch(text);
    } else {
      setfilterData(masterData);
      setsearch(text);
    }
  }

  const ItemView = ({item}) =>{
    return(
      <TouchableOpacity 
      style={styles.line}
      onPress={()=> {navigation.navigate('Details',
      {itemId: item.id, 
       itemNome: item.nomeFormula, 
       itemCampo: item.areaFormula, 
       itemDescription: item.descriptionFormula,
       itemImage: item.imageFormula }
      
      )}}>
        <Image
                source={{uri: item.imageFormula}}
                style={styles.avatar}
              />
        <View style={styles.info}>
                  <Text style={styles.name}>
                  {item.nomeFormula}</Text>
              </View>
      </TouchableOpacity>
      
    )
  }

  const ItemSeparatorView = () => {
    return(
      <View 
        style={{height: 0.5, width: '100%', backgroundColor: '#c8c8c8'}}
      />
    )
  }

  return(
    <SafeAreaView style={{felx:1}}>
      <View>
        <View style={styles.viewHeader}>
          <Text style={styles.textHeader}>Fórmulas de Física</Text>
        </View>
      <View style={styles.container}>
        <TextInput style={styles.textInputStyle}
        value={search}
        placeholder="Pesquise a Fórmula aqui"
        underlineColorAndroid="transparent"
        onChangeText={(text) => searchFilter(text)}
        />
        <FlatList 
          data={filterData}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
           />
      </View>
    </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff',
  },
  viewHeader:{
    width: '100%',
    marginTop: 30,
    backgroundColor: '#1E90FF',
  },
  textHeader:{
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },

itemStyle:{
  padding: 15,
},
textInputStyle:{
  height: 40,
  borderWidth: 1,
  paddingLeft: 20,
  margin: 25,
  borderColor: '#009688',
  backgroundColor: '#fff',
},
line:{
  marginLeft: 10,
  height: 50,
  flexDirection: 'row',
  borderBottomColor: '#ccc',
  borderBottomWidth: 1,
},
avatar:{
  width: 40,
  height: 40,
  borderRadius: 50,
  marginRight: 10,
  alignSelf: 'center',
},
info:{
  flexDirection: 'column',
  justifyContent: 'flex-start',
},
name:{
  fontSize: 12,
},
email:{
  fontSize: 14,
  fontWeight: 'bold',
},

});

