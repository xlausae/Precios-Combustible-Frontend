<template>
  <div id="app" class="app">
    <!-- id = cual es la aplicación -->
    <div class="header">
      <h1>Base de Datos de Combustibles</h1>
      <nav>
        <button v-if="is_auth" v-on:click="loadHome">Inicio</button>
        <button v-if="is_auth" v-on:click="loadDepartamento">Departamento</button>
        <button v-if="is_auth" v-on:click="loadMunicipio">Municipio</button>
        <button v-if="is_auth" v-on:click="loadTipoProducto">Tipo de Procuto</button>
        <button v-if="is_auth" v-on:click="logOut">Cerrar Sesión</button>
        <button v-if="!is_auth" v-on:click="loadLogIn">Iniciar Sesión</button>
        <button v-if="!is_auth" v-on:click="loadSignUp">Registrarse</button>
        

      </nav>
    </div>

    <div class="main-component">
      <!-- funciones a travez de las cuales los hijos van a comunicarse con el padre -->
      <!-- se implementan en export default -->
      <router-view
        v-on:completedLogIn="completedLogIn"
        v-on:completedSignUp="completedSignUp"
        v-on:logOut="logOut"
      >
      </router-view>
    </div>

    <div class="footer">
      <h2>Misión TIC 2022</h2>
    </div>
  </div>
</template>

<script>
//http://127.0.0.1:8000/ link del Backend
//
export default {
  name: "App", // nombre del componente
  data: function () {
    // informacion que va a tener el componente y que se va apoder mostrar dentro el template
    return {
      is_auth: false,
    };
  },
  components: {}, //componentes con los que se va a comunicar
  methods: {
    // metodos que definen el comportamiento que tendrá la aplicación
    verifyAuth: function () {
      this.is_auth = localStorage.getItem("isAuth") || false;

      if (this.is_auth == false) this.$router.push({ name: "logIn" });
      else this.$router.push({ name: "home" });
    },
    loadLogIn: function () {
      this.$router.push({ name: "logIn" });
    },
    loadSignUp: function () {
      this.$router.push({ name: "signUp" });
    },
    completedLogIn: function (data) {
      localStorage.setItem("isAuth", true);
      localStorage.setItem("username", data.username);
      localStorage.setItem("token_access", data.token_access);
      localStorage.setItem("token_refresh", data.token_refresh);
      alert("Autenticación Exitosa");
      this.verifyAuth();
    },
    completedSignUp: function (data) {
      alert("Registro Exitoso");
      this.completedLogIn(data);
    },
    loadHome: function () {
      this.$router.push({ name: "home" });
    },
    loadDepartamento: function () {
      this.$router.push({ name: "Departamento" });
    },
    loadMunicipio: function () {
      this.$router.push({ name: "Municipio" });
    },
    loadTipoProducto: function () {
      this.$router.push({ name: "TipoProducto" });
    },

    logOut: function () {
      localStorage.clear();
      alert("Sesión Cerrada");
      this.verifyAuth();
    },
    
    
  },
  created: function () {
    // funciones que se ejecutan cada vez que se ejecuta el componente
    this.verifyAuth();
  },
};
</script>

<style>
body {
  margin: 0 0 0 0;
}
.header {
  margin: 0%;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;
  background-color: #05630d;
  color: #ecdd09;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header h1 {
  width: 50%;
  text-align: center;
}
.header nav {
  height: 100%;
  width: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
}
.header nav button {
  color: #e5e7e9;
  background: #045a08;
  border: 1px solid #e5e7e9;
  border-radius: 5px;
  padding: 10px 20px;
}
.header nav button:hover {
  color: #283747;
  background: #e5e7e9;
  border: 1px solid #e5e7e9;
}

.main-component {
  height: 75vh;
  margin: 0%;
  padding: 0%;
  background: #fdfefe;
}
.footer {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;
  background: #045a08; 
  color: #e5e7e9;
}
.footer h2 {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>