// Api.js
const API_URL = 'http://192.168.100.2:3000/tasks';

export const getTaskss = async () => {
  const res = await fetch(API_URL); 
  return await res.json();  
};

export const getTask1 = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  return await res.json();  
};


export const saveTask =   async(newTask)  => {
const res = await fetch(API_URL,{
  method:'POST',
  headers:{Accept:"application/json","Content-Type":"application/json"},
  body:JSON.stringify(newTask)
});
return res.json();
} 



export const updateTask =   async(id, newTask)  => {
 const res = await fetch(`${API_URL}/${id}`,{
    method:'PUT',
    headers:{Accept:"application/json","Content-Type":"application/json"},
    body:JSON.stringify(newTask)
  });
  return res;
  } 

 
  export const deleteTask = async(id) => {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
  };