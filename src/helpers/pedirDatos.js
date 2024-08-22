import data from "../data/productos.json"

export const pedirDatos = () =>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(data);
    }, 500)  
  })
}

export const pedirItemId = (id) => {
  return new Promise((resolve,reject) => {
    const item = data.find((el) => el.id === id);
    if(item) {
      resolve(item)
    } else {
      reject({
        error: "Producto no encontrado"
        
      })
    }
  })
} 