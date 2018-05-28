<template>
  <div class="my-wrapper">
    <div class="info">
      <img class="photo" src="../assets/images/github.png" width="90" height="90" />
      <p>天龙巴布</p>
    </div>
    <div class="floor personal">个人信息
      <i class="icon"></i>
    </div>
    <div class="floor order" @click="toOrder">我的订单
        <i class="icon"></i>      
    </div>
    <div class="floor address">我的地址
        <i class="icon"></i>      
    </div>
    



  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    toOrder() {
      this.$router.push('/order')
    }
  }
}
</script>
<style scoped>
.my-wrapper{
  background: #f5f5f5;
}
.info{
  background: #6495ED;
  height: 4rem;
  position: relative;
}
.photo{
 margin-top: 0.5rem;
}
.info p{
  font-size: 16px;
  line-height: 24px;
  height: 24px;
  color: #fff;
  margin-top: 0.3rem;
}
.floor{
  height: 0.8rem;
  background: #fff;
  margin-bottom: 0.4rem;
  color: #575757;
  line-height: 0.8rem;
  text-indent: 0.4rem;
  text-align: left;
  position: relative;
}
.icon{
  background: url('../assets/images/arrowRight.png') no-repeat center;
  position: absolute;
  right: 0;
  top: 50%;
  width: 0.48rem;
  height: 0.48rem;
  background-size:cover; 
  transform: translateY(-50%);
}
</style>