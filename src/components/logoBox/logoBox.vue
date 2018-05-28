<template>
  <transition name="fade" mode="">
    <div class="logo" v-show="showLogo">
      <i class="close-icon" @click="hideLogo"></i>
      <img src="../../assets/images/logo1.png" class="image" width="30" height="30" />
      <p class="text">使用1号店APP购物</p>
      <div class="open-btn" @click="open">打开</div>
    </div>
  </transition>
  
</template>
<script>
export default {
  data() {
    return {
      showLogo: true
    }
  },
  methods: {
    hideLogo() {
      this.showLogo = false
    },
    open() {
      window.open('https://m.yhd.com/downloadApp.html?no-uni=1&flag=1611066532')
    }
  }
}

</script>
<style scoped>
.fade-enter, .fade-leave-active{
  opacity: 0;
}
.fade-enter-active, .fade-leave-active{
  transition: opacity 0.8s;
}
.logo{
  position: fixed;
  z-index: 50;
  width: 100%;
  top: 0;
  height: 0.88rem;
  background: rgba(244,94,94,0.9);
}
.close-icon{
  position: absolute;
  z-index: 51;
  width: 0.28rem;
  height: 0.28rem;
  background: url('../../assets/images/close1.png') no-repeat center;
  background-size: cover; 
  left: 0.2rem;
  top: 50%;
  transform: translate3d(0, -50%, 0);
}
.image{
  position: absolute;
  z-index: 51;
  left: 0.7rem;
  top: 50%;
  transform: translate3d(0, -50%, 0);  
}
.text{
  position: absolute;
  z-index: 51;
  height: 100%;
  color: #fff;
  font-size: 0.26rem;
  font-weight: 600;
  left: 1.4rem;
  line-height: 0.88rem;
}
.open-btn{
  width: 1rem;
  height: 0.48rem;
  line-height: 0.48rem;
  color: #f45e5e;
  background: #fff;
  position: absolute;
  z-index: 51;
  right: 0.2rem;
  top: 50%;
  transform: translate3d(0, -50%, 0);
  font-size: 0.2rem;
  border-radius: 0.1rem

}
</style>
