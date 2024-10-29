import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import Layout from '../components/Layout'
import { saveTask, getTask1, updateTask } from '../api'

const TaskFormScreen = ({navigation, route}) => {

  //se crea un Estado para guardar los valores que se pasan 
  //en la funcion handleChange
  const [task, setTask] = useState ({  title:'',  description:''  });
  const [editing, setEditing] = useState (false); 
    //Mantiene temoralmente los valores
  const handleChange = (name, value) => setTask({ ...task, [name]: value });

 /*Guarda en Dd, usando la funcion save que esta en api.js 
  pasando task, que es el que guarda los valotes  */
  const handleSubmit =  async () =>{
    try {
      
      if (!editing) {
        await saveTask(task); 
      } else {
       await  updateTask(route.params.id, task);
      }
      navigation.navigate('HomeScreen')

    } catch (error) {
      console.log(error)
    }
  }
 
//recibimos el id para edicion
useEffect ( () =>{

  if (route.params && route.params.id) {
    navigation.setOptions ({headerTitle:'Updating a Task'});
    setEditing(true);

   // todo este rollo es para ejecutar la funcion como async
 ( async () =>{ 
  //recibimos una sola tarea
  const task = await getTask1(route.params.id) 
  console.log(task)
  setTask ({title:task.title, description:task.description})
  }) ();
  }  
}, [])


  return (
    <Layout>
       <TextInput style={styles.input} placeholder='Writte a Title' 
       onChangeText={ (text) => handleChange ('title',text)} value={task.title}></TextInput>

       <TextInput style={styles.input} placeholder='Writte a Desce' 
       onChangeText={ (text) => handleChange ('description',text)} value={task.description}></TextInput>

        {
          !editing?(
            <TouchableOpacity style={styles.btnSave} onPress={handleSubmit}>
          <Text  style={styles.btnSaveText}>GuRADR</Text>
        </TouchableOpacity>

          ):(
            <TouchableOpacity style={styles.btnSave} onPress={handleSubmit}>
          <Text  style={styles.btnSaveText}>eDITAR</Text>
        </TouchableOpacity>

          )
        }
    </Layout>
  )
}

const styles = StyleSheet.create ({
  input:{width:'90%',color:'red', borderColor:'#000',backgroundColor:'orange' , marginTop:12, borderRadius:9},
  btnSave:{marginTop:12, display:'block', color:'red',backgroundColor:'#1d861f', width:'60%', padding:12, borderRadius:8},
  btnSaveText:{margin:'auto', display:'block', color:'black'}
})
export default TaskFormScreen