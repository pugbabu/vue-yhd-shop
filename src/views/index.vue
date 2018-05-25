<template>
  <div class="app-home">
    <banner-slide></banner-slide>
    <icon-tab></icon-tab>
    <head-notice></head-notice>
    <div class="floor-pic"></div>
    <rush-buy></rush-buy>
    <buy-benefit></buy-benefit>
  </div>
</template>
<script>
  import bannerSlide from '@/components/banner/banner'
  import iconTab from '@/components/icons/icons'
  import headNotice from '@/components/headNotice/headNotice'
  import rushBuy from '@/components/rushBuy/rushBuy'
  import buyBenefit from '@/components/buyBenefit/buyBenefit'
  export default {
    data() {
      return {

      }
    },
    components: {
      bannerSlide,
      iconTab,
      headNotice,
      rushBuy,
      buyBenefit
    },
    created() {
      this.$http.get('/api/bannerdata').then(res => {
        console.log(res, '!!!')
      })
    }
  }

</script>
<style>
  .floor-pic {
    width: 100%;
    background: url('../assets/images/act1.jpg') no-repeat center;
    height: 100px;
    background-size: cover;
  }

</style>
