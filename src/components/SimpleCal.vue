<template>
    <div class="about">
        <p :style="{'font-size': '40px' , 'color' : 'gray'}">Simple Calculater</p>
        <v-divider></v-divider>
        <v-card elevation="3" :style="{'margin-top' : '4rem', 'padding': '12px'}">
            <v-text-field class="centered_input_one" :flat="true" v-model="value"  solo></v-text-field>
            <v-text-field class="centered_input_two" :flat="true" v-model="result" solo></v-text-field>
            <v-row>
                <v-col cols="3">
                    <v-btn @click="clear()" :style="{'color':'cadetblue'}">AC</v-btn>
                </v-col>
                <v-col cols="3" >
                    <v-btn @click="del()"><v-icon>mdi-keyboard-backspace</v-icon></v-btn>
                </v-col>
                <v-col cols="3">
                    <v-btn @click="addExpresion('%')"><v-icon>mdi-percent-outline</v-icon></v-btn>
                </v-col>
                <v-col cols="3">
                    <v-btn @click="addExpresion('/')"><v-icon>mdi-slash-forward</v-icon></v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="3">
                    <v-btn @click="addExpresion(7)">7</v-btn>
                </v-col>
                <v-col cols="3">
                    <v-btn @click="addExpresion(8)">8</v-btn>
                </v-col>
                <v-col cols="3">
                    <v-btn @click="addExpresion(9)">9</v-btn>
                </v-col>
                <v-col cols="3">
                    <v-btn @click="addExpresion('*')"><v-icon>mdi-close</v-icon></v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="3">
                    <v-btn @click="addExpresion(4)">4</v-btn>
                </v-col>
                <v-col cols="3">
                    <v-btn @click="addExpresion(5)">5</v-btn>
                </v-col>
                <v-col cols="3">
                    <v-btn @click="addExpresion(6)">6</v-btn>
                </v-col>
                <v-col cols="3">
                    <v-btn @click="addExpresion('-')"><v-icon>mdi-minus</v-icon></v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="3">
                    <v-btn @click="addExpresion(1)">1</v-btn>
                </v-col>
                <v-col cols="3">
                    <v-btn @click="addExpresion(2)">2</v-btn>
                </v-col>
                <v-col cols="3">
                    <v-btn @click="addExpresion(3)">3</v-btn>
                </v-col>
                <v-col cols="3">
                    <v-btn @click="addExpresion('+')"><v-icon>mdi-plus</v-icon></v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="6">
                    <v-btn @click="addExpresion(0)">0</v-btn>
                </v-col>
                <v-col cols="3">
                    <v-btn @click="addExpresion('.')"><v-icon :style="{'color':'black'}">mdi-circle-small</v-icon></v-btn>
                </v-col>
                <v-col cols="3">
                    <v-btn @click="getResult()"><v-icon>mdi-equal</v-icon></v-btn>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<script>
export default {
    name:'SimpleCal',
    data(){
        return{
            value:'',
            result:''
        }
    },

    methods:{
    
        addExpresion(e) {
            if ( Number.isInteger(this.value) )
                this.value = ' '; 
                this.value += e;
        },

        clear() {
            this.value = '';
            this.result = '';
        },

        del:function(item) {
            this.value = this.value.slice(item, -1);
        },
        
        getResult() {
            this.result = eval(this.value);
        },
    }
}
</script>

<style scoped>
.v-btn{
    border: none;
    cursor: pointer;
    width: 100%;
    font-size: 1rem;
    box-shadow:none;
    font-size: 1.4rem;
}
.col-3{
    align-self: center;
        padding: 0 !important;
}
.col-6{
    padding: 0;
}
.v-btn:not(.v-btn--round).v-size--default {
    height: 60px;
    min-width: 64px;
    padding: 0 16px;
    border-radius: inherit;
    background: white;
}
.centered_input_one{
    margin-bottom : 2rem;
    font-weight: lighter;
    font-size: 2.3rem;
}
.centered_input_two{
    margin-bottom : 1rem;
    font-weight: lighter;
    font-size: 2.6rem;
}
.centered_input_one >>> input {
      text-align: right;
    }
.centered_input_two >>> input {
      text-align: right;
      color: cadetblue;
    }

.v-btn > .v-btn__content .v-icon {
    color: cadetblue;
}

</style>