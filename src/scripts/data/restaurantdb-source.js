import API_ENDPOINT from '../globals/api-endpoints';

class RestaurantDbSource {
  static async restaurantList() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }
}

export default RestaurantDbSource;
