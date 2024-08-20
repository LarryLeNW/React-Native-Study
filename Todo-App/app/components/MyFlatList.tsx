import { FlatList, Text, View } from "react-native";

function MyFlatList() {
    
    const users = [
        {name: 'John Doe', age: 25},
        {name: 'Jane Smith', age: 30},
        {name: 'Alice Johnson', age: 28},
    ]
    
    return <View>
        <FlatList data={users} keyExtractor={item => item.name}  renderItem={({item}) => {
            return (
                <View style={{
                    padding : 30, 
                    backgroundColor : "blue" , 
                    marginVertical : 20, 
                }}>
                    <Text>{item.name}</Text>
                </View>
            )
        }}  /> 
    </View>
        
}

export default MyFlatList;