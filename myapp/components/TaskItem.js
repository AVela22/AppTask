import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const TaskItem = ({task, handleDelete}) => {

  const navigation = useNavigation ()

  return (
    <View style={styles.itemContainer}>
      
      <TouchableOpacity onPress={() => navigation.navigate('TaskFormScreen', {id:task.id})}>
            <Text style={styles.itemTitle}>{task.title}</Text>
            <Text style={styles.itemTitle}>{task.description}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.updBtn}>
        <Text>Update</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.deleteBtn} onPress={() => handleDelete(task.id)}>
        <Text>Delete</Text>
      </TouchableOpacity>

    </View>
  )
};

const styles = StyleSheet.create ({
    itemContainer:{
        backgroundColor:"gray",
        flexDirection:'row',
        padding:20,
        borderRadius:10,
        width:"100%",
        marginVertical:7,
        justifyContent:'space-between'
    },
    itemTitle: {
        color:"#ffffff"
    },
    updBtn:{backgroundColor:'orange',padding:8, borderRadius:6, right:-78},
    deleteBtn:{backgroundColor:'red',padding:8, borderRadius:6}
})

export default TaskItem