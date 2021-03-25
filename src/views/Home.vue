<template>
  <div class="home">
    <v-app>
      <v-main>
        <v-container fluid>
          <v-row class="text-center">
            <v-col cols="12">
                <MainComponent/>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>
  

<script>
import MainComponent from "@/components/MainComponent.vue";

export default {
  name: "Home",
  components: {
    MainComponent,
  },
};
</script>
