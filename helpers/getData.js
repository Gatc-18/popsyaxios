const GetData = async(url) => {
     //Peticion con fetch
    // let res = await fetch(url);
    // let data = await res.json();

    
    //peticion con axios
    const {data} = await axios.get(url);
    

    return data;
}

export default GetData;