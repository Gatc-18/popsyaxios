const PostData = async (url, object = {}) => {

    try {
        //Post con fetch 
        // let res = await fetch(url, {
        //     method: 'POST',
        //     body: JSON.stringify(object),
        //     headers: {
        //         "Content-type": "application/json; charset=utf-8"
        //     }
        // })

        // let data = await res.json();
        await axios.post(url, object)

        
        alert("Información creada")
    } catch (error) {
        alert("Hubo un error", error)
    }


}

export default PostData;