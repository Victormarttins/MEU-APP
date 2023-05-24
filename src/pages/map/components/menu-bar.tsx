import { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native/types";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
export default class menu extends Component {
    private  styles = StyleSheet.create({
        container: {
          flex: 1,
        },
        map: {
          width: '100%',
          height: '100%',
        },
        searchBar: {
          position: 'absolute',
          top: 100,
          left: 20,
          right: 20,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'rgb(226,227,229)',
          borderRadius: 30,
          padding: 5,
          elevation: 4,
        },
        search: {
          position: 'absolute',
      
          alignItems: 'center',
      
          padding: 20,
      
        },
      
        input: {
          flex: 1,
          height: 40,
        },
      
        searchButton: {
          marginLeft: 8,
          padding: 5,
      
          borderRadius: 8,
        },
        searchmenu: {
          top: 45,
          left: 20,
          right: 20,
        },
        searchpaper: {
          top: 25,
          left: 300,
          right: 20,
        },
        searchfilter: {
          top:1,
          left: 350,
          right: 20,
        },
    })
    
    render() {
        function handleSearch(event: GestureResponderEvent): void {
            throw new Error("Function not implemented.");
        }

        function setSearchText(text: string): void {
            throw new Error("Function not implemented.");
        }

        return (
         
         
      <><View style={this.styles.search}>

                <TouchableOpacity style={this.styles.searchmenu} onPress={handleSearch}>
                    <MaterialIcons name="menu" size={24} />
                </TouchableOpacity>
                <TouchableOpacity style={this.styles.searchpaper} onPress={handleSearch}>
                    <FontAwesome5 name="paper-plane" size={20} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={this.styles.searchfilter} onPress={handleSearch}>
                    <AntDesign name="filter" size={24} color="black" />
                </TouchableOpacity>

                <Text
                    style={this.styles.input}

                     />

            </View>
            <View style={this.styles.searchBar}>

                    <TouchableOpacity style={this.styles.searchButton} onPress={handleSearch}>
                        <MaterialIcons name="search" size={24} />
                    </TouchableOpacity>
                   

                </View>
  </View>
        );
    }
}

