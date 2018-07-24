<template>
<v-app>
  <v-container fill-height fill-width>
      <v-layout row wrap align-center>
          <Accordion class="hidden-accordion"/>
          <Portfolio class="hidden-portfolio"/>
      </v-layout>
    </v-container>
    <BottomNav class="hidden-nav" />
  </v-app>
</template>

<script>
import BottomNav from '../components/BottomNav'
import Accordion from '../components/Accordion'
import Portfolio from '../components/Portfolio'

export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Nate Denys'
    }
  },
  components: {
    Accordion,
    Portfolio,
    BottomNav
  },
  created () {
    if (process.browser) {
      window.onNuxtReady((app) => {
        this.$children[0].$children[1].$el.classList.replace('hidden-portfolio', 'open-portfolio')
        this.$children[0].$children[0].$el.classList.replace('hidden-accordion', 'open-accordion')
        this.$children[0].$children[2].$el.classList.replace('hidden-nav', 'open-nav')
      })
    }
  }
}
</script>

<style scoped>
.container {
  padding: 0;
}
.open-nav {
  opacity: 1;
  transition: all 1.5s;
  transform-origin: center -20%;
}
.hidden-nav {
  opacity: 0;
  transform: translateY(50px);
}
.open-accordion {
  opacity: 1;
  transition: all 1.5s;
  transform-origin: left -40%;
}
.hidden-accordion {
  opacity: 0;
  transform: translateX(-200px);
}
.open-portfolio {
  opacity: 1;
  transition: all 1.5s;
  transform-origin: right 40%;
}
.hidden-portfolio {
  opacity: 0;
  transform: translateX(200px);
}
</style>
