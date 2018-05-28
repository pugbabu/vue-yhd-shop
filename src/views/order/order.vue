<template>
  <div class="order">
    <header>
      <i class="icon" @click="goTo"></i>
      我的订单
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
        

   
  </div>
</template>
<script>
  import orderAll from './orderAll.vue'
  import waitDeliver from './waitDeliver.vue'
  import waitPay from './waitPay.vue'
  import waitReceive from './waitReceive.vue'
  import orderDone from './orderDone.vue'
  
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
        ]
      }
    },
    components: {
      orderAll,
      waitDeliver,
      waitPay,
      waitReceive,
      orderDone
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
      }
    }
  }

</script>
<style scoped>
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
</style>
