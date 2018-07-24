<template>
  <v-flex xs12 md7 mb-3 justify-content-center="true" class="mx-auto">
    <v-container fluid grid-list-lg>
      <div class="op0">
        <h1 class="text-xs-center">Portfolio</h1>
      </div>
      <v-layout row wrap class="mx-auto">
        <v-flex
            v-for="cards in computedCards"
            v-bind="{ [`sm${cards.flex}`]: true }"
            :key="cards.id"
          >
          <v-card>
            <v-card-media
              :src="cards.src"
              height="300px"
            >
            </v-card-media>
            <v-card-title>
              <h3 class="headline mb-0" v-text="cards.title"></h3>
              <v-card-text v-text="cards.content">
              </v-card-text>
            </v-card-title>
            <v-card-actions>
              <v-card-actions>
                <v-btn flat color="deep-orange" :href="cards.href" target="_blank">Explore</v-btn>
              </v-card-actions>
              
            </v-card-actions>
          </v-card>
          
        </v-flex>
      </v-layout>
      <div class="text-xs-center">
          <v-pagination v-model="currentPage" :length="cards.length" color="deep-orange"></v-pagination>
        </div>
    </v-container>
  </v-flex>
</template>

<script>
export default {
  name: 'Portfolio',
  data: () => ({
    currentPage: 1,
    perPage: 2,
    cards: [
      {
        id: 1,
        title: 'DenysGram',
        content: 'Light Instagram clone using Axios, Unsplash API for photos, Vue CLI 3 and a Vuex store',
        src: '/denysgram.jpeg',
        flex: 6,
        href: 'https://denysgram93.firebaseapp.com/'
      },
      {
        id: 2,
        title: 'News PWA',
        content: 'My first build and deployment of a Progressive Web App utilizing Nuxt, Webpack, Axios, DotEnv, BulmaCSS, and Firebase.',
        src: '/newspwa.jpeg',
        flex: 6,
        href: 'https://pwa-news-e981a.firebaseapp.com/'
      },
      {
        id: 3,
        title: 'ProFitOro',
        content: 'Pomodoro based application utilizing Webpack, NodeJS, Nuxt, VueJS, Vue-Router, Vuex, Firebase for database/deployment, and Bootstrap',
        src: '/profitoro.jpeg',
        flex: 6,
        href: 'https://profitoro-366b2.firebaseapp.com/'
      },
      {
        id: 4,
        title: 'Simple Coin Cap',
        content: 'Coin Market Cap application utilizing Webpack, VueJS, Vue Router, Vuex, Axios, Heroku for deployment, and Semantic UI',
        src: '/CoinCap.jpeg',
        flex: 6,
        href: 'https://neds-simple-coin-cap.herokuapp.com/'
      },
      {
        id: 5,
        title: 'Oh Baby! Sushi',
        content: 'Sushi Restaurant project utilizing Webpack, NodeJS Modules, VueJS with Vue-Router, the Google Maps API with custom styles, and Bootstrap',
        src: '/ohbaby.jpeg',
        flex: 6,
        href: 'http://oh-baby.surge.sh/'
      },
      {
        id: 6,
        title: 'Melon\'s Bar & Restaurant',
        content: 'Bar & Restaurant project utilizing Webpack, NodeJS Modules, VueJS with Vue-Router, the Google Maps API with custom styles, and BulmaCSS',
        src: '/melons.jpeg',
        flex: 6,
        href: 'http://melons.surge.sh/'
      }
    ]
  }),
  methods: {
    setPage (n) {
      this.currentPage = n
    }
  },
  computed: {
    offset () {
      return ((this.currentPage - 1) * this.perPage)
    },
    limit () {
      return (this.offset + this.perPage)
    },
    numOfPages () {
      return Math.ceil(this.cards.length / this.perPage)
    },
    computedCards () {
      return this.cards.slice(this.offset, this.limit)
    }
  }
}
</script>

<style scoped>
h1 {
  font-family: 'Spectral', serif!important;
}
</style>
