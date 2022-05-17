import GetData from "../helpers/getData.js";
import { PALETAS } from "../helpers/urls.js";
import ShowCard from "../modules/showCard.js";

const templateFragment = document.querySelector('#template').content;
const container = document.getElementById('containerCards');

document.addEventListener('DOMContentLoaded', async () => {

   const { data } = await axios.get(PALETAS);
   
   // const dataPaleta = await GetData(PALETAS)

 

   ShowCard(templateFragment, container, data)

})

