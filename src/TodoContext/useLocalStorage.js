import React, {useEffect} from "react";


function useLocalStorage(itemName, initialValue) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    // Guardamos nuestros TODOs del localStorage en nuestro estado
    const [item, setItem] = React.useState(initialValue);
  
    useEffect(() => {
      setTimeout(()=> {
      try {
  
          const localStorageItem = localStorage.getItem(itemName);
    
      let parsedItem; //le envio todo lo que este en esta variable para que el user pueda visualizarla cuando entre
    
      if(!localStorageItem) {
        // Si el usuario es nuevo no existe un item en localStorage, por lo tanto guardamos uno con un array vacío
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem= initialValue;
    
      } else { 
        // Si existen TODOs en el localStorage los regresamos como nuestros todos 
        parsedItem = JSON.parse(localStorageItem);
      }
    
        setItem(parsedItem)
        setLoading(false);
        
        } catch(error) {
          setError(error);
        }
      }, 1000)
    }, []);
  
  
  
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
  
      } catch(e) {
        setError(e)
      }
    };
  
    return{
      error,
      loading,
      item,
      saveItem
    }
  };

  export { useLocalStorage }