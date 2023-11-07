<template>
  <div>
    <h1>Personajes</h1>
    <table>
      <thead>
        <tr>
          <th>IdPersonaje</th>
          <th>Nombre</th>
          <th>Imagen</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="per in personajes" :key="per">
            <td>{{ per.idPersonaje }}</td>
            <td>{{ per.nombre }}</td>
            <td><img :src="per.imagen" style="width: 200px;"></td>
        </tr>
      </tbody>
    </table>
    
  </div>
</template>

<script>
import ServicePersonajes from "../services/ServicePersonajes";
const service = new ServicePersonajes();

export default {
  name: "PersonajesSerie",
  data() {
    return {
        personajes: [],
    };
  },
  methods: {
    getPersonajes() {
      var idSerie = this.$route.params.idserie;
      service.getPersonajes(idSerie).then((result) => {
        this.personajes = result;
        console.log(this.personajes)
      });   
    },
  },
  mounted() {
    this.getPersonajes();
  }
};
</script>
