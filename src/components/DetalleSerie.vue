<template>
  <div>
    <h1>{{ serie.nombre }}</h1>
    <img :src="serie.imagen" style="width: 70%;"/>
    <h2>Puntuacion: {{ serie.puntuacion }}</h2>
    <h2>Año: {{ serie.anyo }}</h2>
    <router-link :to="'/personajes/'+serie.idSerie">Personajes</router-link>
  </div>
</template>

<script>
import ServiceSeries from "../services/ServiceSeries";
const service = new ServiceSeries();

export default {
  name: "DetalleSerie",
  data() {
    return {
      serie: [],
    };
  },
  methods: {
    findSerie() {
      var id = this.$route.params.id;
      service.findSerie(id).then((result) => {
        this.serie = result;
      });
    },
  },
  mounted() {
    this.findSerie();
  },
  watch: {
    "$route.params.id"(nextVal, oldVal) {
      if (nextVal != oldVal) {
        this.findSerie();
      }
    },
  },
};
</script>