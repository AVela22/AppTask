
import React, {useEffect, useState} from 'react'; 


//IMPORTAMOS ELEMENTOS Y COMPONENTES DE OTRAS CARPETAS
import TaskList from '../components/TaskList';
import Layout from '../components/Layout';



const HomeScreen = () => {

  return (
    //EN LUGAR DE VIEW PONEMOS LAYOUT, PORQUE YA VIENE DESDE LAYOIUT CON EL VIEW ESTILIZADO
    //Traemos la Lista de Tareas, desde TaskList
    <Layout>
      <TaskList/>
    </Layout>
  )
}

export default HomeScreen