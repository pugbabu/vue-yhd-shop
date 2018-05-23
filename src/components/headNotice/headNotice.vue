<template>
  <div class="notice-wrapper">
    <div class="notice-box">
        <div class="icon"></div>
        <div class="slide-box">
          <swiper :options="swiperOption">
            <swiper-slide>初夏尚品 大牌1元起秒杀</swiper-slide>
            <swiper-slide>清凉水饮团 每满199减100 pick一下</swiper-slide>
            <swiper-slide>换季清洁大作战 满199减100</swiper-slide>    
          </swiper>
        </div>
    </div>   
  </div>
</template>
<script>
  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper'
  export default {
    data() {
      return {
        swiperOption: {
          loop: true,
          height: 50,
          speed: 1000,
          autoplayDisableOnInteraction: false,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
          direction : 'vertical',
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }

</script>
<style scoped>
  .notice-wrapper{
    width: 100%;
    padding: 0 0.15rem;
    margin: 0.1rem 0;
    height: 0.52rem;
    line-height: 0.52rem;  
    background: #fff;
  }
  .notice-box{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    overflow: hidden;
    border: 1px solid #eee;
    border-radius: 30px;
    height: 100%;
  }
  .icon{
    margin-left: 10px;
    background: url('../../assets/images/notice.png') no-repeat 1px -73px;
    background-size:76px 92px;
    width: 1.5rem;
  }
  .slide-box{
    flex-grow: 1;
    height: 100%;
    overflow: hidden;
    font-size: 14px;
  }

</style>
