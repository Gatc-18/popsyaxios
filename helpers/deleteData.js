const DeleteData = async (url) => {

    try {
        //Peticion con fetch
        // let res = await fetch(url, {
        //     method: 'DELETE',
        //     headers: {
        //         "Content-type": "application/json; charset=utf-8"
        //     }
        // })

        // peticion con axios 
        await axios.delete(url);

       
    } catch (error) {
      console.log("error")
    }


}

export default DeleteData;