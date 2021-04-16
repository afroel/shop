 <template>
     <div class="text-center">
         <v-menu offset-y open-on-hover>
             <template v-slot:activator="{ on, attrs }">
                 <v-btn text color="black" dark v-bind="attrs" v-on="on">
                     Home
                 </v-btn>
             </template>
             <v-list dense>
                 <v-subheader>REPORTS</v-subheader>
                 <v-list-item-group v-model="item" color="primary">
                     <v-list-item v-for="(item, i) in items" :key="i">
                         <v-list-item-content>
                             <v-list-item-title v-text="item.title"></v-list-item-title>
                         </v-list-item-content>
                     </v-list-item>
                 </v-list-item-group>
             </v-list>
         </v-menu>
     </div>
 </template>