import API_ENDPOINT from '../globals/api-endpoints';

class RestaurantDbSource {
  static async home() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = response.json();
    return responseJson.restaurants;
  }
}

export default RestaurantDbSource;
