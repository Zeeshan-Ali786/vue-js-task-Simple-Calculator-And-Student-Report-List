<template>
  <div>
    <v-row>
        <v-col cols="3">
          <v-card elevation="5" :style="{'margin-bottom' : '1rem'}">
           <v-card-text :style="{'font-size': '26px' , 'font-weight': '200' , 'color': 'steelblue'}">
                Report Input
           </v-card-text>
               <v-row>
                  <v-col cols="10" offset-md="1">
              <!--Form Validation-->
                <validation-observer ref="observer" v-slot="{ invalid }">
                  
              <!--FORM-->      
                <v-form v-model="valid">

              <!--FIRST NAME with validation-->
                    <validation-provider v-slot="{ errors }" name="First Name" rules="required|max:15|min:3">
                        <v-text-field :error-messages="errors" label="First Name" placeholder="First Name" v-model="editedItem.fname" 
                                      :counter="15"  required>
                        </v-text-field>
                    </validation-provider>
              
              <!--LAST NAME with Validation-->
                    <validation-provider v-slot="{ errors }" name="Last Name" rules="required|max:15|min:3">
                        <v-text-field :error-messages="errors" label="Last Name" placeholder="Last Name" v-model="editedItem.lname" 
                                      :counter="15"  required>
                        </v-text-field>
                    </validation-provider>
              
              <!--FATHER NAME with Validation-->
                    <validation-provider v-slot="{ errors }" name="Father Name"  rules="required|max:15|min:3">
                        <v-text-field :error-messages="errors" label="Father Name" placeholder="Father Name" v-model="editedItem.faname" 
                                      :counter="15"  required>
                        </v-text-field>
                    </validation-provider>
              
              <!--IMAGE-->
                        <v-file-input chips accept="image/*" label="Image" v-model="editedItem.file" @change="display_image(editedItem)">
                        </v-file-input>
                        <!-- <v-img  :src="editedItem.url" :style="{'width':'100px','height':'100'}"></v-img> -->

              <!--DATE-->
                        <v-menu :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field v-model="editedItem.date" clearable label="Date of Birth" v-bind="attrs" v-on="on" 
                                              prepend-icon="mdi-calendar">
                                </v-text-field>
                            </template>
                            <v-date-picker v-model="editedItem.date">{{editedItem.date}}</v-date-picker>
                        </v-menu>

              
              <!--GENDER--> 
                        <v-radio-group v-model="editedItem.selected"  row mandatory> 
                          <v-col cols="5"><v-radio  label="Male" value="male"></v-radio></v-col> 
                          <v-col cols="5"><v-radio  label="Female" value="female"></v-radio></v-col>
                        </v-radio-group>
              
              <!--EMAIL-->
                        <v-text-field label="Email" placeholder="Email" v-model="editedItem.email"></v-text-field>
              
              
              <!--ADDRESS with Validation-->
                    <validation-provider v-slot="{ errors }" name="Address" rules="required|max:100">
                        <v-text-field :error-messages="errors"  label="Address" placeholder="Address" v-model="editedItem.address"  
                                      :counter="100"  required>
                        </v-text-field>
                    </validation-provider>          
              
              <!--PROVINCE with Validation-->
                    <validation-provider v-slot="{ errors }" name="provice" rules="required">
                        <v-select  :error-messages="errors" :items="province_items" v-model="editedItem.defaultSelected"
                                    @change="changeItem(editedItem.defaultSelected)" label="Provice"  required><p>{{editedItem.defaultSelected}}</p>
                        </v-select>
                    </validation-provider>
              <!--CITY with Validation-->
                    <validation-provider v-slot="{ errors }" name="City" rules="required">
                        <v-select  :error-messages="errors" :items="selected" label="City" v-model="editedItem.city_selected"  required>
                          <p>{{editedItem.city_selected}}</p>
                        </v-select>
                    </validation-provider>
              <!--HOBBY-->        
                        <h3 :style="{'text-align': 'left','color': 'slategrey','font-weight': '400'}">Hobby : </h3>
                        <v-checkbox label="Cricket" value="Cricket" v-model="editedItem.hobby"></v-checkbox>
                        <v-checkbox label="Hockey"  value="Hockey" class="v-checkbox" v-model="editedItem.hobby"></v-checkbox>
                        <v-checkbox label="Snooker" value="Snooker" class="v-checkbox" v-model="editedItem.hobby"></v-checkbox>
                        <v-checkbox label="kabbadi" value="kabbadi" class="v-checkbox" v-model="editedItem.hobby"></v-checkbox>

              <!--BUTTONS-->
                        <v-row>
                            <v-col cols="6"><v-btn color="grey" type="reset" elevation="2" @click="clearForm">Reset</v-btn></v-col>
                            <v-col cols="6"><v-btn color="primary" type="button" :disabled="invalid" elevation="2" @click="onSubmit">Submit</v-btn></v-col>
                        </v-row>
                    </v-form>
              </validation-observer>
                  </v-col>
                </v-row>  
        </v-card> 
        </v-col>
        <v-col cols="9">
        <!--Call DataTable Component As a Child component-->

            <Datatable :row_data="rowData" @edit_data="pickEditValue" @edit_index="pickEditIndex"/>
        </v-col>
    </v-row>
  </div>
</template>

<script>

import Datatable from "./Datatable";
import { required, max, min } from 'vee-validate/dist/rules'
import { extend, setInteractionMode } from 'vee-validate'
setInteractionMode('eager')
extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })
extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
  })
extend('min', {
    ...min,
    message: '{_field_} may not be Less than {length} characters',
  })




export default {
  name: "MainComponent",
  data(){
      return{
        valid:true,
        rowData:[],
        province_items: ['Punjab' , 'Sindh', 'Khyber Pakhtunkhwa', 'Balochistan'],
        province_cities : {
          'Punjab':['Lahore','Sialkot','Sahiwal'],
          'Sindh' :['Karachi','Larkana','Sukkar'],
          'Khyber Pakhtunkhwa' :['Balakot','Ghanool','Gulzar'], 
          'Balochistan':['Quetta','Chaman','Sibi']
          },
          selected:[],
          editedIndex: -1,
          editedItem: { fname:'', url:null, lname:'',  faname:'', date:null, file:null,  email:'',  address:'',
                        selected: null, defaultSelected:null, city_selected:null, hobby:[],
                      },
          defaultItem: {  fname:'',  url:null,  lname:'',  faname:'', date:null, file:null,  email:'',  address:'',
                          selected: null, defaultSelected:null, city_selected:null, hobby:[],
                        },
      }
    },
    methods:{
      
    changeItem: function(selected_province) {
      this.selected = this.province_cities[selected_province]
    },

    display_image(editedItem) {
      if (!editedItem.file) return;
      editedItem.url =  URL.createObjectURL(editedItem.file);
      // console.log(editedItem.url)
    },
      
    pickEditValue(params){
        this.editedItem = params;
    },
    pickEditIndex(params){
        this.editedIndex = params;
    },
    
    onSubmit(){
        if (this.editedIndex > -1) {
          Object.assign(this.rowData[this.editedIndex], this.editedItem)
        } else {
          this.rowData.push(this.editedItem)
        }
        this.close()       
    },
      
    clearForm() {
        this.editedItem.fname = '', 
        this.editedItem.lname = '',  
        this.editedItem.faname = '',
        this.editedItem.date = null,
        this.editedItem.file = null,
        this.editedItem.email = '',
        this.editedItem.address = '',
        this.editedItem.selected =  null, 
        this.editedItem.defaultSelected = '', 
        this.editedItem.city_selected = null, 
        this.editedItem.hobby = [],
        this.$refs.observer.reset()
    },
      
    close() {    
        this.valid = false    
        setTimeout(() => {      
        this.editedItem = Object.assign({}, this.defaultItem)      
        this.editedIndex = -1 
        
        this.clearForm();   
        }, 200)  
    },

  },
  
  components:{
      Datatable
  }
}
</script>

<style scoped>
.v-checkbox{
    margin-top: -10px;
    padding: 0px;
}
</style>

