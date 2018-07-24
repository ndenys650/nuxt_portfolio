<template>
    <v-bottom-nav height="80" class="deep-orange" :value="true">
        <v-spacer></v-spacer>
        <v-tooltip top>
            <v-btn flat slot="activator" href="https://github.com/ndenys650" target="_blank">
              <i class="fab fa-github fa-3x white--text"></i>
            </v-btn>
            <span>Github</span>            
        </v-tooltip>
        <v-tooltip top>
            <v-btn flat slot="activator" href="https://www.linkedin.com/in/nathan-denys/" target="_blank">
              <i class="fab fa-linkedin fa-3x white--text"></i>
            </v-btn>
            <span>Linkedin</span>            
        </v-tooltip>
        <v-spacer></v-spacer>
        <v-tooltip top>
            <v-btn slot="activator" href="#">
                <span class="brand">Nate Denys</span>
            </v-btn>
            <span>Copyright © natedenys.com</span>
        </v-tooltip>
        <v-spacer></v-spacer>
    </v-bottom-nav>
</template>

<script>
export default {
  name: 'BottomNav'
}
</script>

<style scoped>
.brand {
  font-family: 'Great Vibes', cursive!important;
  font-size: 30px!important;
  color: white;
}

.v-bottom-nav .v-btn {
  opacity: 1;
}
</style>
