import { useState, useEffect } from "react";

export function useFetch(url) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
      setLoading(true)
      fetch(url)
      .then((response)=> response.json())
      .then((data)=> setData(data.results))
      //.then((data)=>{
      //setData(data.results);
      //console.log(data);
      //  }); importante, para que se muestre el console debe estar dentro de la función then
      .finally(()=> setLoading(false));   
    },[url]);
return { data, loading }; //retornamos como objeto, pero tbm puede ser return (data) que retorna solo la data
                        //ya luego el loading podría usar otro useState en app, pero se ve mejor así como está
                        //hacer el loading aqui y en app usarlo directamente
}