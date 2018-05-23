<template>
  <swiper :options="swiperOption" class="slide-box">
    <swiper-slide v-for="(slide, index) in bannerList" :key="index" class="slide-main">
      <a :href="slide.link" :style="bgStyle(slide)" class="image"></a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination" style="bottom: 0.1rem"></div>
  </swiper>
</template>
<script>
  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper'
  export default {
    name: 'banner',
    data() {
      return {
        swiperOption: {
          pagination: {
            el: ".swiper-pagination"
          },
          loop: true,
          autoplayDisableOnInteraction: false,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          }
        },
        bannerList: [
         {
            "src": "https://img13.360buyimg.com/img/jfs/t21937/110/217013121/95688/f89a9f16/5b03ca27N3a4c097f.jpg",
            "link": "https://pro.yhd.com/yhd/active/4Rjd6dtrsDbhMPS74ABvK1J2AEC6/index.html",
          },
          {
            "src": "https://img10.360buyimg.com/img/jfs/t17371/3/2658432700/119414/24312cd0/5b03dd04N44cfc977.jpg",
            "link": "https://pro.yhd.com/yhd/active/QM2j8u5jbU2nVFxuH4WDnUyPL6w/index.html",
          },
          {
            "src": "https://img10.360buyimg.com/img/jfs/t18028/34/2663906388/101307/fc4f3472/5b03dd5dN0126e1da.jpg",
            "link": "https://pro.yhd.com/yhd/active/2k6u92sjgYMz5f3SE62NdNwGkGBQ/index.html",
          },
          {
            "src": "https://img12.360buyimg.com/img/jfs/t17374/81/2662667470/81817/9e69637d/5b03e24cNc5ceb39f.jpg",
            "link": "https://pro.yhd.com/yhd/active/39xjePzrKfM7QC3NscU4BdkFwLqQ/index.html",
          },
          {
            "src": "https://img10.360buyimg.com/img/jfs/t17902/361/2734032259/111334/2f780871/5b03d045N18c74e8f.jpg",
            "link": "https://pro.yhd.com/yhd/active/8t4Fz3SwBU4P7Swenwbo3ZBN5PP/index.html",
          },
          {
            "src": "https://img12.360buyimg.com/img/jfs/t20371/208/199935724/171250/cd80b98a/5b03e222Naf4a5c52.jpg",
            "link": "https://pro.yhd.com/yhd/active/2QdwHzMe1hLcX3bcVSimqYWWjYhC/index.html",
          },
          {
            "src": "https://img20.360buyimg.com/img/jfs/t17320/120/2604414886/119995/d09d51b3/5b03cb9cN261355b9.jpg",
            "src3x": "",
          },
          {
            "src": "https://img12.360buyimg.com/img/jfs/t16639/237/2635600145/149765/ab8e8781/5b03cc09Nd8313824.jpg",
            "link": "https://pro.yhd.com/yhd/active/NDM4jArxq4U8whZ66rCyXsZcitR/index.html",
          }
        ]
      }
    },
    components: {
        swiper,
        swiperSlide 
    },
    methods: {
        bgStyle(item) {
            let image = item.src
            return `background-image: url(${image})`
        }
    }

  }

</script>
<style scoped>
  .slide-box {
    width: 100%;
    height: 3.2rem;
    position: relative;
  }

  .slide-main {
    width: 100%;
    height: 3.2rem;
    /* background: #ffffff; */
  }

  .image{
      display: block;
      width: 100%;
      height: 100%;
      float: left;
      background-repeat: no-repeat;
      background-position: center;  
      background-size: 100%; 
  }

</style>
