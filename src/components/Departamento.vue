<template>
  <h1 class="title">Crear Departamento</h1>
  <div class="departamento_create">
    <div class="container_departamento_create">
      <form v-on:submit.prevent="processCreateDepartamento">

        <!-- TITULO PUBLICACIÓN-->
        <input type="text" v-model="departamento.nom_departamento" placeholder="Nombre del Departamento" maxlength="36" required />
        <button type="submit">Crear</button>
      </form>

    </div>

  </div>

</template>

<!--------------- JAVASCRIPT-------------->
<script>
import jwt_decode from "jwt-decode";
import axios from "axios";
export default {
  name: "CreateDep",
  data: function () {
    return {
      departamento: {
        nom_departamento: "",

      },
    };
  },

  methods: {
    processCreateDepartamento: async function () {
      axios
        .post(
          `http://127.0.0.1:8000/departamento/`,
          this.departamento,
        )
        .then((result) => {
          alert("Departamento Creado");
          this.loaded = true; //booleano que se utiliza para renderizar la información del usuario únicamente cuando ya se ha consultado al componente lógico
        })
        .catch((error) => {
          console.log(error)
        });
    },


    





  },
  created: async function () {
    
  },
};
</script>

<style>
.departamento_create {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 70px;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f1f8ff;
}

.title {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 40px !important;
  text-align: center;
}

.container_departamento_create {
  border: 3px solid #283747;
  border-radius: 10px;
  width: 25%;
  height: 60%;
  background-color: #e3e7ec;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}









.departamento_create h2 {
  color: #283747;
}
.departamento_create form {
  width: 70%;
}
.departamento_create input {
  height: 40px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 20px;
  margin: 5px 0;
  border: 1px solid #283747;
}
.departamento_create button {
  width: 100%;
  height: 40px;
  color: #e5e7e9;
  background: #389c2f;
  border: 1px solid #e5e7e9;
  border-radius: 5px;
  padding: 10px 25px;
  margin: 5px 0 25px 0;
  font-size: 18px;
}
.departamento_create button:hover {
  color: #ffffff;
  background: #38aa2e;
  border: 1px solid #283747;
  cursor: pointer;
  font-size: 20px;
}






@media (max-width: 760px) {
  .container_departamento_create {
    width: 80%;
    height: fit-content;
  }
}
</style>