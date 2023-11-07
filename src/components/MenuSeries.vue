<template>
  <div class="fixed-top text-start">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img :src="logo" width="30" />
          Series</router-link
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/createpersonaje"
                >Crear Personaje</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/updatepersonaje"
                >Modificar Personaje</router-link
              >
            </li>
            <li class="nav-item dropdown">
              <button
                class="btn dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Series
              </button>
              <ul class="dropdown-menu">
                <li v-for="serie in series" :key="serie">
                  <router-link
                    class="dropdown-item"
                    :to="'/serie/' + serie.idSerie"
                    >{{ serie.nombre }}</router-link
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
  
  <script>
import logo from "../assets/logo.png";
import ServiceSeries from "../services/ServiceSeries";
const service = new ServiceSeries();

export default {
  name: "MenuSeries",
  data() {
    return {
      logo: logo,
      series: [],
      status: false,
    };
  },
  mounted() {
    service.getSeries().then((result) => {
      this.series = result;
      this.status = true;
    });
  },
};
</script>
  