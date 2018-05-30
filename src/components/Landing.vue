<template lang="pug">
  section.hero.is-fullheight.landing.is-desktop(v-bind:style="{ backgroundImage: `url(${require('../assets/img/bg_top.jpg')})` }")
    .hero-body
      .container.has-text-centered
        .columns.is-desktop.is-centered.is-vcentered
          .column
            img.main-logo(src='../assets/logos/front.svg')
            h1.title _front
            h2.subtitle Soluciones
            p.is-centered.buttons
              a.button.is-primary(href='mailto:marcos@front.cl')
                span.icon
                  i.far.fa-paper-plane
                span Contáctanos
        .columns.inner.is-mobile.is-centered.is-vcentered
          .column.is-one-quarter-mobile
            img.logo(src='../assets/logos/vue.svg', alt='Vue')
          .column.is-one-quarter-mobile
            img.logo(src='../assets/logos/meteor.svg', alt='Meteor')
          .column.is-one-quarter-mobile
            img.logo(src='../assets/logos/ember.svg', alt='Ember')
          .column.is-one-quarter-mobile
            img.logo(src='../assets/logos/angular.svg', alt='Angular')
          .column.is-one-quarter-mobile
            img.logo(src='../assets/logos/react.svg', alt='React')
</template>

<style lang="scss">
  @import '../assets/sass/landing.scss';
</style>

<script>
export default {
  name: 'Landing'
}
</script>
