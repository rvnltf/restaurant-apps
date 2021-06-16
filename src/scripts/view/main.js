import data from "../../DATA.json";

const main = () => {
    document.addEventListener("DOMContentLoaded", ()=>{
        const mainContent = document.querySelector('main-content');
        mainContent.restaurant = data;
    })
}
export default main;

