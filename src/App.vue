   
<template>
  <div id="app">
    <div id="nav">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      app
      dark
    >
    <v-list-item class="px-2" :style="{'padding-left':'10px'}">
        <figure>
          <v-img src="./assets/logo.png" :style="{'height':'33px' , 'width':'33px'}"></v-img>
        </figure>

        <v-list-item-title  :style="{'padding-left':'1.7rem' , 'font-size':'1.2rem'}">Vuetify JS</v-list-item-title>
        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

       <v-list dence>
         
        <router-link to="/"> 
        <v-list-item link>
            <v-list-item-icon>
                  <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                   <v-list-item-title  :style="{'padding-left':'2rem'}">Student Recods</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
       </router-link>
      
      <router-link to="/about">
        <v-list-item link>
            <v-list-item-icon>
                  <v-icon>mdi-calculator-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                   <v-list-item-title :style="{'padding-left':'2rem'}">Simple Calculator</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </router-link>
       </v-list>
    </v-navigation-drawer>
  <router-view/>
  </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
       drawer: true,
       mini: true,
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

#nav {
  // padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration:none;

    // &.router-link-exact-active {
    //   background: #333;
    // }
  }
  
}
</style>

