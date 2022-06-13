import { makeAutoObservable } from "mobx";
import axios from "axios";


class ZooStore {
  constructor() {
    makeAutoObservable(this);
    // this will turn our class into a mobx store and all components can observe the changes that happen in the store
  }
  animals = [];
  fetchProducts = async () => {
    try {
      const response = await axios.get("https://zoo-animal-api.herokuapp.com/animals/rand/7");
      this.animals = response.data;
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };

}

const zooStore = new ZooStore();
zooStore.fetchProducts();
// It will only call this function when the app first starts

export default zooStore;

// axios.METHOD(URL, BODY)
