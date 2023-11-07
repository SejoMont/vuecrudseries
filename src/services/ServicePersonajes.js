import Global from "@/Global";
import axios from "axios";

export default class ServicePersonajes {
  getPersonajes(id) {
    return new Promise(function (resolve) {
      var request = "/api/Series/PersonajesSerie/"+id;
      var url = Global.urlApiSeries + request;
      var personajes = [];

      axios.get(url).then((response) => {
        personajes = response.data;
        resolve(personajes);
      });
    });
  }
}
