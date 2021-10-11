<template>
  <div>
    <div>
      <v-text-field
        label="Consulta tu receta"
        placeholder="Placeholder"
      ></v-text-field>

      <v-btn depressed> Consultar </v-btn>
    </div>

    <div id="resultado">
      <v-row>
        <v-col v-for="recipe in recipes" :key="recipe._id">
          <!--ANTES:<v-col v-for="n in 10" :key="n">-->
          <v-card class="mx-auto my-12" max-width="374">
            <v-img height="250" :src="recipe.photoReceta"></v-img>
            <v-card-title>{{ recipe.nameReceta }} </v-card-title>

            <v-card-text>
              <div
                v-for="(ingrediente, counter) in recipe.listaIngredientes"
                :key="counter"
                class="my-4 text-subtitle-1"
              >
                {{`${ingrediente.ingre}  - ${ingrediente.cant}`}}
              </div>
              <div>{{ recipe.descReceta }}</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>Receta</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <div>
      PRUEBAS DE MUESTRA DE registros
      <v-row>
        <v-col v-for="reg in registros" :key="reg.name">
          {{ reg.name }}
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
//import recipes from "../dummy/recipes.json";
import SignUp from "../pages/SignUp.vue";
import { getAllRecetas } from "../services/RecetaServices";

export default {
  name: "recipeConsult",
  //dummy: {recipes},
  props: {
    msg: String,
  },

  pages: {
    SignUp,
  },

  // ============== PRUEBAS BASE DE DATOS ==================
  data() {
    return {
      // Llamado para recojer Datos usuarios registrados
      registros: [],
      loading: false,
      recipes: [
        // {id: "2e41fee0-1837-11ec-9621-0242ac130002",
        // createdUser: "5c7e06e6-1837-11ec-9621-0242ac130002",
        // title: "Pastas de la abuela",
        // base: "Plato tipico de abuela tradicional italiana.",
        // image: "https://www.goya.com/media/3854/southwestern-chicken-and-rice.jpg",
        // },
        // {id: "2e41fee0-1837-11ec-9621-0242ac130002",
        // createdUser: "5c7e06e6-1837-11ec-9621-0242ac130002",
        // title: "Sancocho",
        // base: "Caldo tipico en las tierras del valle del cauca -col.",
        // image: "https://media-cdn.tripadvisor.com/media/photo-s/16/8b/be/32/sancocho-valluno-de-gallina.jpg",
        // },
        // {id: "2e41fee0-1837-11ec-9621-0242ac130002",
        // createdUser: "5c7e06e6-1837-11ec-9621-0242ac130002",
        // title: "Bandeja Paisa",
        // base: "Bandeja caracteristica de la region antioqueña.",
        // image: "http://c.files.bbci.co.uk/DBBF/production/_105055265_bandejapaisa.jpg",
        // }
      ],
    };
  },
  async mounted() {
    this.loading = true;
    let userList = JSON.parse(localStorage.getItem("userList"));
    if (userList != undefined) {
      this.registros = userList;
    }
    const { data } = await getAllRecetas();
    this.recipes = data;
    this.loading = false;
  },
  //, //methods:{
  //mostrarEnPantalla(){
  //}
  //}
};
</script>

<style>
</style>