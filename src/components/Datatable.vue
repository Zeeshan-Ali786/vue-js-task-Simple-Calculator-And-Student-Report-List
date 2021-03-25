<template>
        <v-card elevation="5">
           <v-card-text :style="{'font-size': '26px' , 'font-weight': '200' , 'color': 'seagreen'}">
               Report List
            </v-card-text>
            <v-row>
                <v-col cols="12">
                  <!--Using Simple Table of Vuetify For Displaing Data in the Form of Table-->
                         <v-simple-table :items="row_data">
                            <template v-slot:default>
                            <thead>
                                <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Father Name</th>
                                <th>Image</th>
                                <th>D-O-B</th>
                                <th>Gender</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Province</th>
                                <th>City</th>
                                <th>Hobby</th>
                                <th></th>
                                <th></th>
                                </tr>
                            </thead>
                            <tbody>
                              <tr v-for="(data, index) in row_data" :key="index">
                                  <td>{{index + 1}}</td>
                                  <td>{{data.fname}}</td>
                                  <td>{{data.lname}}</td>
                                  <td>{{data.faname}}</td>
                                  <td><v-img :src="data.url" :style="{'width':'40px','height':'40'}"></v-img></td>
                                  <td>{{data.date}}</td>
                                  <td>{{data.selected}}</td>
                                  <td>{{data.email}}</td>
                                  <td>{{data.address}}</td>
                                  <td>{{data.defaultSelected}}</td>
                                  <td>{{data.city_selected}}</td>
                                  <td>{{data.hobby.toString()}}</td>
                                  <td><v-icon color="blue darken-2" @click="edit_row(data)">mdi-account-edit</v-icon></td>
                                  <td><v-icon color="red darken-2" @click="removeRow(index)">mdi-delete</v-icon></td>
                              </tr>
                            </tbody>
                            </template>
                        </v-simple-table> 
          
                </v-col>
              </v-row>
         </v-card>
</template>

<script>
export default {
    name:'Datatable',
    props:['row_data'],
    data(){
        return{
            editedIndex: -1,
            defaultItem:[],
        }
    },
    methods:{
      
      removeRow:function(item){
        confirm('Are you sure you want to delete this item?') && this.row_data.splice(item, 1);
      },

      edit_row(item){
            this.editedIndex = this.row_data.indexOf(item)
            this.defaultItem = Object.assign({}, item) 
        },
    },
    
    watch:{

      defaultItem:function(){
        this.$emit('edit_data', this.defaultItem)
        this.$emit('edit_index' ,this.editedIndex)
      }
    },
    // computed:{
      // record_list:function(){
        
        // return this.rowData.slice()
      // }
  // },
}
</script>
