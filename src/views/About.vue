<template>
  <div class="about">
    <v-app>
      <v-main>
        <v-container fluid>
          <v-row class="text-center">
            <v-col cols="3" offset-md="4" :style="{'magin' : '0rem 2rem'}">
                <SimpleCal/>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
    
  </div>
</template>

<script>
import SimpleCal from "@/components/SimpleCal.vue";
export default {
  name:'about',
  components:{
    SimpleCal,
  }
}
</script>
 <style scoped>
 .about{
   margin: 0rem 1.6rem;
 }
 </style>>