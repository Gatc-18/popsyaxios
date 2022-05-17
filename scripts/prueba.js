document.addEventListener('DOMContentLoaded', async () => {

    const { data } = await axios.get("http://localhost:3000/paletas");



    console.log(data)

})