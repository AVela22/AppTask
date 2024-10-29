import {connect} from '../database';

//Funcin para Ver todos registros
export const getTasks = async (req, res) => {
const db = await connect();
const [rows] = await db.query ('SELECT * FROM tasks'); 
res.json(rows)
}

//Funcin para Ver un registros

export const getTask = async (req, res) => {
   const connection =await connect();
   const [rows] = await connection.query('SELECT * FROM tasks WHERE id = ?'
,[req.params.id])
res.json(rows[[0]])
}

//Funcin para contar registros 
export const getTaskCount = async (req, res) => {
    const connection =await connect();
    const [rows] = await connection.query('SELECT COUNT (*) FROM tasks')
    res.json(rows[0]["COUNT (*)"])
};

//Funcin para Ver guardar  registro 
export const saveTask = async (req, res) => {
    const connection = await connect();
    const result = await connection.query('INSERT INTO tasks(title,description) VALUES (?,?)',[
        req.body.title,
        req.body.description
    ])
    console.log(result)
};

export const deleteTask = async (req, res) => {
    const connection =await connect();
    const result = await connection.query('DELETE FROM tasks WHERE id = ?'
 ,[req.params.id])
 console.log(result)
};

export const updateTask = async (req, res) => {
    const connection = await connect();
    const result = await connection.query('UPDATE tasks SET ? WHERE id = ?' ,[
        req.body,
        req.params.id
    ])
    console.log(result)
}