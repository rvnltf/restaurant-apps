import data from "../../DATA.json";

const main = () => {


    const getData = async()=>{
        try {
            const response = await fetch(data);
            const responseJson = await response.json();
            renderData(responseJson);
        } catch {
            showResponseMessage();
        }
    }

    const renderData = async restaurants=>{
        const restaurantElement = document.querySelector('main-content');
        restaurantElement.restaurants = restaurants;
    }

    const showResponseMessage = (message = "Check your data!") => {
        alert(message);
    }

    document.addEventListener("DOMContentLoaded", ()=>{
        getData();
    })
}

export default main;

