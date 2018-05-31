<template lang="pug">
  section.hero.is-fullheight.scanpad
    .container
      .pricing-table
        .pricing-plan.is-primary
          .plan-header
            | Básico
          p.detail
            small Eventos de 1 a 3 días
          .plan-price
            span.plan-price-amount
              span.plan-price-currency UF
              | 8
          .plan-items
            .plan-item 0 - 200 Invitados
            .plan-item Mail masivo hasta 200 Invitados
            .plan-item Reporte asistencia por módulos
            .plan-item -
            .plan-item -
          .plan-footer
            button.button.is-fullwidth Contratar
        .pricing-plan.is-warning
          .plan-header
            | Pro
          p.detail
            small Eventos de 1 a 3 días
          .plan-price
            span.plan-price-amount
              span.plan-price-currency UF
              | 12
          .plan-items
            .plan-item 201 - 500 Invitados
            .plan-item Mail masivo hasta 500 Invitados
            .plan-item Reporte asistencia por módulos
            .plan-item -
            .plan-item -
          .plan-footer
            button.button.is-fullwidth Contratar
        .pricing-plan.is-danger
          .plan-header
            | Enterprise
          p.detail
            small Eventos hasta de 5 días
          .plan-price
            span.plan-price-amount
              span.plan-price-currency UF
              | 18
          .plan-items
            .plan-item 501+ Invitados
            .plan-item Mail masivo ilimitado
            .plan-item Reporte asistencia por módulos
            .plan-item Reporte tiempo real
            .plan-item Asistencia técnica en terreno
          .plan-footer
            button.button.is-fullwidth Contratar
</template>

<style lang="scss">
  @import '../assets/sass/scanpad.scss';
</style>

<script>
export default {
  name: 'Scanpad',
  data () {
    return {
      isActive: false
    }
  }
}
</script>
