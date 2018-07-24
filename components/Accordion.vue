<template>
    <v-flex sm12 md5 mb-3 justify-content-center="true" class="mx-auto">
      <v-container fluid>
        <div class="op0">
            <h1 class="text-xs-center">Nate Denys</h1>
        </div>
        <v-expansion-panel popout class="op0">
            <v-expansion-panel-content :ripple="{ class: 'black--text' }" hide-actions lazy class="deep-orange white--text">
                <div slot="header" class="title about-tab">About</div>
                <v-card class="pa-5">
                    <v-card-text class="black--text">I'm a <i>bookworm, outdoorsman, sushi lover</i>, and <b>Front-End Developer</b> who enjoys working with <b>VueJS libraries, Nuxt, NodeJS with all its modules, Javascript, Bootstrap, Bulma, HTML5, and CSS3.</b> With everything being open sourced, I'm continually brainstorming new ways to improve my life with technology and everyday I'm fascinated with the possibilities we can achieve. So, my goal is to learn how to utilize it, even if it meant starting at the bottom.</v-card-text>
                </v-card>
            </v-expansion-panel-content>
            <v-expansion-panel-content :ripple="{ class: 'black--text' }" hide-actions lazy class="deep-orange white--text">
                <div slot="header" class="title about-tab">Experience</div>
                <v-card class="white--text pa-5">
                    <v-card-text class="black--text">In my time as a Web Developer, I've gone from creating full MPA websites consisting of pure HTML, CSS, and JS, to developing SPA's and PWA's, understanding and utilizing the entire Vue ecosystem. I've displayed integrity, adaptability, and a positive work ethic in all my past work experiences, from moving up as a dishwasher to waiter and host at a fast paced japanese restaurant, to wearing multiple hats as an office administrator for an insurance brokerage, or leading small teams as the alcohol section leader for my local grocery store.</v-card-text>
                </v-card>
            </v-expansion-panel-content>
            <v-expansion-panel-content :ripple="{ class: 'black--text' }" hide-actions lazy class="deep-orange white--text">
                <div slot="header" class="title about-tab">Contact</div>
                <v-card>
                <v-container fluid>
                    <v-layout row wrap>
                    <v-flex xs12>
                        <v-form ref="form" v-model="valid" action="https://formspree.io/nate_denys@yahoo.com" method="POST">
                        <v-text-field
                        type="text"
                        v-model="name"
                        :rules="nameRules"
                        :counter="30"
                        label="Name"
                        name="name"
                        required
                        ></v-text-field>
                        <v-text-field
                        type="email"
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        name="_replyto"
                        required
                        ></v-text-field>
                        <v-text-field
                        type="text"
                        v-model="message"
                        label="Message"
                        name="message"
                        :rules="messageRules"
                        required
                        ></v-text-field>
                        <v-btn
                        :disabled="!valid"
                        value="Send"
                        type="submit"
                        >
                        submit
                        </v-btn>
                        <v-btn @click="clear">clear</v-btn>
                        </v-form>
                    </v-flex>
                    </v-layout>
                </v-container>
                </v-card>
            </v-expansion-panel-content>
            <v-expansion-panel-content :ripple="{ class: 'black--text' }" hide-actions lazy class="deep-orange white--text">
                <div slot="header" class="title about-tab"><nuxt-link class="white--text" to="/Résumé-NateDenys.pdf" target="_blank">Resume</nuxt-link></div>
            </v-expansion-panel-content>    
        </v-expansion-panel>
      </v-container>
    </v-flex>
</template>

<script>
export default {
  name: 'Accordion',
  data () {
    return {
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 30 || 'Name must be less than 30 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      message: '',
      messageRules: [
        v => !!v || 'What can I help you with?'
      ]
    }
  },
  methods: {
    clear () {
      this.name = ''
      this.email = ''
      this.message = ''
    }
  }
}
</script>

<style scoped>
h1 {
  font-family: 'Spectral', serif!important;
}
</style>
