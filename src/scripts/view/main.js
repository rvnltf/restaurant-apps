import data from "../../DATA.json";

const main = () => {
    document.addEventListener("DOMContentLoaded", ()=>{
        let i = 1;
        data.restaurants.forEach(restaurant=>{
            if(i%2===0){
                const evenItem = document.querySelector('even-item');
                evenItem.restaurant = restaurant;
                document.appendChild(evenItem);
                // console.log(restaurant);
            } else {
                const oddItem = document.querySelector('odd-item');
                oddItem.restaurant = restaurant;
                document.appendChild(oddItem);
                // console.log(restaurant);
            }
            i++;
        });
    })
}
export default main;

