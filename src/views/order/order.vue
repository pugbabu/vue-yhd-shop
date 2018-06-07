<template>
  <div class="order">
    <header>
      <i class="icon" @click="goTo"></i>
      我的订单
      <i class="share" @click="showTheBox"></i>
    </header>
    <div class="tab-list">
      <div class="tab-item"  v-for="(item, index) in navList" :key="index">
        <p :class="{'active-item': index === ind}" @click="changeStatus(item, index)">{{item.name}}</p>
      </div>
    </div>
    <v-touch @swipeleft="onSwipeLeft" @swiperight="onSwipeRight">
        <order-all v-if="ind === 0"></order-all>
        <wait-pay v-if="ind === 1"></wait-pay>
        <wait-deliver v-if="ind === 2"></wait-deliver>
        <wait-receive v-if="ind === 3"></wait-receive>
        <order-done v-if="ind === 4"></order-done>
    </v-touch>
    <transition
     name="slideLeft"
     enter-active-class="animated bounceInUp"
     leave-active-class="animated bounceOutRight"
     >
      <div class="share-box" v-if="showbox">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </transition>
    <transition
      enter-active-class="animated slideInUp"
      leave-active-class="animated slideOutDown"
      
    >
      <div class="mask" v-if="showMask" @click="showTheBox">
        <div class="box"></div>
      </div>
    </transition>
        

   
  </div>
</template>
<script>
  import orderAll from './orderAll.vue'
  import waitDeliver from './waitDeliver.vue'
  import waitPay from './waitPay.vue'
  import waitReceive from './waitReceive.vue'
  import orderDone from './orderDone.vue'
  import CircleMenu from 'vue-circle-menu'
  export default {
    data() {
      return {
        ind: 0,
        navList: [{
            name: '全部',
            id: '1'
          },
          {
            name: '待付款',
            id: '2'
          },
          {
            name: '待发货',
            id: '3'
          },
          {
            name: '待收货',
            id: '4'
          },
          {
            name: '已完成',
            id: '5'
          },
        ],
        showbox: false,
        showMask: false
      }
    },
    components: {
      orderAll,
      waitDeliver,
      waitPay,
      waitReceive,
      orderDone,
      CircleMenu
    },
    created() {
      this.$store.commit('setShowFoot', false)
    },
    beforeRouteLeave(to, from, next) {
      this.$store.commit('setShowFoot', true) 
      next()     
    },
    methods: {
      goTo() {
        this.$router.go(-1)
      },
      changeStatus(item, index) {
        this.ind = index
      },
      onSwipeLeft() { // 向左滑动
        if (this.ind === 4) return
        this.ind++
        console.log('left')
      },
      onSwipeRight() { // 向右滑动
        if (this.ind === 0) return
        this.ind--
        console.log('right')
      },
      showTheBox() {
        // this.showbox = !this.showbox
        this.showMask = !this.showMask
      }
    }
  }

</script>
<style scoped>
  /* .slideLeft-enter{
    bottom: -20px;
    opacity: 0;
  }
  .slideLeft-leave-to{
    bottom: -20px;
    opacity: 0;
  } */
  /* .slideLeft-enter-active{
    animation: bounce-in 0.5s;
  }
  .slideLeft-leave-active{
    animation: bounce-in 0.5s reverse;
  } */
  header {
    height: 0.8rem;
    background: #6495ED;
    color: #fff;
    line-height: 0.8rem;
    position: relative;
  }
  header .icon{
    position: absolute;
    left: 0.1rem;
    top: 50%;
    transform: translateY(-50%);
    width: 0.36rem;
    height: 0.36rem;
    background: url('../../assets/images/arrowLeft.png') no-repeat center;
    background-size:cover; 
  }
  .share{
    position: absolute;
    right: 0.2rem;
    top: 50%;
    transform: translateY(-50%);
    width: 0.36rem;
    height: 0.36rem;
    background: url('../../assets/images/share.png') no-repeat center;
    background-size:cover; 
  }
  .tab-list{
    height: 0.88rem;
    display: flex;
    background: #fff;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 0 0.2rem;
    overflow-x: auto;
    overflow-y: hidden;
    font-size: 0.24rem;
    justify-content: space-between;
  }
  .tab-item p{
    height: 0.4rem;
    margin-top: 0.22rem;
    
  }
  .active-item{
    color: #6495ED;
    border-bottom: 1px solid #6495ED;
  }
  .share-box{
    width: 100%;
    position: fixed;
    top: 50px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-around;
    animation-name: slideInLeft;
  }
  .share-box div{
    margin: 0 5px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    line-height: 50px;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
  }
  .mask{
    background:rgba(0,0,0,0.9);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .mask .box{
    height: 2rem;
    background: #fff;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .animated {
    -webkit-animation-duration: 0.5s;
    animation-duration: 0.5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
.bounceInUp {
  -webkit-animation-name: bounceInUp;
  animation-name: bounceInUp;
}
.bounceOutUp {
  -webkit-animation-name: bounceOutUp;
  animation-name: bounceOutUp;
}
.bounceOutRight {
  -webkit-animation-name: bounceOutRight;
  animation-name: bounceOutRight;
}
 @-webkit-keyframes bounceInUp {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 3000px, 0);
    transform: translate3d(0, 3000px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -5px, 0);
    transform: translate3d(0, -5px, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes bounceOutRight {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(-20px, 0, 0);
    transform: translate3d(-20px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }
}
@keyframes bounceOutUp {
  20% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }

  40%,
  45% {
    opacity: 1;
    -webkit-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }
}
@keyframes slideInUp {
  from {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.slideInUp {
  -webkit-animation-name: slideInUp;
  animation-name: slideInUp 0.5s;
}
@keyframes slideOutDown {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}

.slideOutDown {
  -webkit-animation-name: slideOutDown;
  animation-name: slideOutDown 0.5s;
}

</style>
