import React, { useState, useEffect } from "react";
import { FlatList, RefreshControl } from "react-native";
import TaskItem from "./TaskItem";
import { getTaskss, deleteTask } from "../api";

const TaskList = () => {

  //creamos estados para guardar valores
  const [tasks, setTasks] = useState([]);
  const [refreshing, setRefreshing] = useState([false]);


  //cargamos los datos que arojala appi
  const loadTasks = async () => {
    const data = await getTaskss();  
    setTasks(data);
  };

  //cargamos funciones
  useEffect(() => {
    loadTasks();
  }, []);

  const handleDelete = async (id) =>{
    await deleteTask(id);
    await loadTasks();
  }

//renderizamos lo que veremos
  const renderItem = ({ item }) => {
    return <TaskItem task={item} handleDelete={handleDelete} />;
  };

  

const onRefresh  = React.useCallback ( async ()=> {
  setRefreshing(true)
  await loadTasks();
  setRefreshing(false)
})

  return (
    <FlatList
      style={{ width: "100%" }}
      data={tasks}
      keyExtractor={(item) => item.id + ""}
      renderItem={renderItem}
      //Refreshing es para actualizar los datos en pantalla
      refreshing={refreshing}
      refreshControl={
        <RefreshControl 
        onRefresh={ onRefresh }
        />
      }
    />
  );
};

export default TaskList;
