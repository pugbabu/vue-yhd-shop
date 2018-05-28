<template>
  <div class="app-home">
    <logo-box></logo-box>
    <banner-slide></banner-slide>
    <icon-tab></icon-tab>
    <head-notice></head-notice>
    <div class="floor-pic"></div>
    <rush-buy></rush-buy>
    <buy-benefit></buy-benefit>
    <buy-quality></buy-quality>
    <product-list></product-list>
  </div>
</template>
<script>
  import logoBox from '@/components/logoBox/logoBox'
  import bannerSlide from '@/components/banner/banner'
  import iconTab from '@/components/icons/icons'
  import headNotice from '@/components/headNotice/headNotice'
  import rushBuy from '@/components/rushBuy/rushBuy'
  import buyBenefit from '@/components/buyBenefit/buyBenefit'
  import buyQuality from '@/components/buyQuality/buyQuality'
  import productList from '@/components/productList/productList'
  export default {
    data() {
      return {
        list: [
          {
            pic: 'https://img10.360buyimg.com/img/jfs/t18625/308/2666564738/11164/7b9b3109/5b03b3abNd9e0b030.jpg',
            mainTitle: '环球美食',
            subTitle: '满199减100'
          },
          {
            pic: 'https://img12.360buyimg.com/img/jfs/t18331/66/2612810528/42895/74817100/5b03b521Ne9a7faaf.jpg',
            mainTitle: '量贩团',
            subTitle: '石库门 黑标'
          },
          {
            pic: 'https://img11.360buyimg.com/img/jfs/t17920/9/2642362444/27989/fad48a19/5b0384e8N63595690.jpg',
            mainTitle: '闪购',
            subTitle: '满199减100'
          },
          {
            pic: 'https://img14.360buyimg.com/img/jfs/t18961/207/2637601446/32699/1a24d7c6/5b052ffcNeea4d76d.jpg',
            mainTitle: '新货来了',
            subTitle: '去屑超能力'
          },
          {
            pic: 'https://img14.360buyimg.com/img/jfs/t17623/345/2579346557/25335/4dda4823/5b03b06bN7c8f8630.jpg',
            mainTitle: '1号榜单',
            subTitle: '清洁用品1.7折起'
          },
          {
            pic: 'https://img14.360buyimg.com/img/jfs/t18385/317/2674147088/19834/297ae67d/5b053bf2N9fad1f2e.jpg',
            mainTitle: '捡便宜',
            subTitle: '2件5折'
          },
        ]
      }
    },
    components: {
      bannerSlide,
      iconTab,
      headNotice,
      rushBuy,
      buyBenefit,
      buyQuality,
      productList,
      logoBox
    },
    created() {
      this.$http.get('/api/bannerdata').then(res => {
        console.log(res, '!!!')
      })
    }
  }

</script>
<style>
  .app-home{
    padding-bottom: 1rem;
  }
  .floor-pic {
    width: 100%;
    background: url('../assets/images/act1.jpg') no-repeat center;
    height: 100px;
    background-size: cover;
  }

</style>
