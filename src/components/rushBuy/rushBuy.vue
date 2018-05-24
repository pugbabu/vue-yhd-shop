<template>
  <div class="rush-wrapper">
    <div class="rush-head">
      <i class="icon"></i>1号抢购
    </div>
    <div class="product-list">
      <div class="product-item" v-for="(val, index) in list" :key="index">
        <img :src="val.pic" width="100" height="100"/>
        <div class="item-title">{{val.title | textCut}}</div>
        <div class="item-price">
          <div class="now-price">¥{{val.nowPrice}}</div>
          <div class="reference">
            <div class="reference-box">参考价</div>
            <div class="old-price">￥{{val.oldPrice}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          pic: 'https://m.360buyimg.com/grpbackend/jfs/t17572/101/2613346611/61486/2497eaf1/5b04d29aN18fd7805.jpg',
          title: '新西兰原装进口牛奶 安佳Anchor全脂牛奶UHT纯牛奶250ml*24 ',
          nowPrice: 79,
          oldPrice: 169
        },
        {
          pic: 'https://m.360buyimg.com/mobilecms/s450x450_jfs/t19105/94/769118169/312956/4ee32e27/5aa90e62N1ecd66a0.jpg',
          title: '新西兰原装进口牛奶 安佳Anchor全脂牛奶UHT纯牛奶250ml*24 ',
          nowPrice: 79,
          oldPrice: 169
        },
        {
          pic: 'https://m.360buyimg.com/mobilecms/s450x450_jfs/t4600/341/4655925023/233349/bea4af11/59112ca3N85795e6f.jpg',
          title: '新西兰原装进口牛奶 安佳Anchor全脂牛奶UHT纯牛奶250ml*24 ',
          nowPrice: 139,
          oldPrice: 159
        },
        {
          pic: 'https://m.360buyimg.com/mobilecms/s450x450_jfs/t7471/250/3889161957/616699/deb5fe5d/59face55N181530b6.jpg',
          title: '新西兰原装进口牛奶 安佳Anchor全脂牛奶UHT纯牛奶250ml*24 ',
          nowPrice: 79,
          oldPrice: 169
        },
        {
          pic: 'https://m.360buyimg.com/mobilecms/s450x450_jfs/t9994/15/2621206176/470007/c8225506/59fac844Nbb426533.jpg',
          title: '新西兰原装进口牛奶 安佳Anchor全脂牛奶UHT纯牛奶250ml*24 ',
          nowPrice: 79,
          oldPrice: 169
        },
        {
          pic: 'https://m.360buyimg.com/mobilecms/s450x450_jfs/t19249/40/790718324/344889/a31cbd87/5aa77c68Nfd866683.jpg',
          title: '新西兰原装进口牛奶 安佳Anchor全脂牛奶UHT纯牛奶250ml*24 ',
          nowPrice: 79,
          oldPrice: 169
        },
        {
          pic: 'https://m.360buyimg.com/grpbackend/jfs/t21937/334/226236376/27811/e32e3eab/5b04d4c0N08b13382.jpg',
          title: '新西兰原装进口牛奶 安佳Anchor全脂牛奶UHT纯牛奶250ml*24 ',
          nowPrice: 79,
          oldPrice: 169
        },
        {
          pic: 'https://m.360buyimg.com/grpbackend/jfs/t20038/193/628683165/31704/77a0e2e0/5b04bc3aNb6ae045d.jpg',
          title: '新西兰原装进口牛奶 安佳Anchor全脂牛奶UHT纯牛奶250ml*24 ',
          nowPrice: 79,
          oldPrice: 169
        },
        {
          pic: 'https://m.360buyimg.com/mobilecms/s450x450_jfs/t18517/216/1066571545/233008/a4623362/5ab85a06Ncd01265b.jpg',
          title: '新西兰原装进口牛奶 安佳Anchor全脂牛奶UHT纯牛奶250ml*24 ',
          nowPrice: 79,
          oldPrice: 169
        },
        {
          pic: 'https://m.360buyimg.com/grpbackend/jfs/t17572/101/2613346611/61486/2497eaf1/5b04d29aN18fd7805.jpg',
          title: '新西兰原装进口牛奶 安佳Anchor全脂牛奶UHT纯牛奶250ml*24 ',
          nowPrice: 79,
          oldPrice: 169
        },
      ]
    }
  },
  filters: {
    textCut(v) {
      return v.substr(0, 14)
    }
  }
}
</script>
<style scoped>
.rush-wrapper{
  width: 100%;
  background: #f5f8fb;
  padding-bottom: 10px;
}
.rush-head{
  height: 34px;
  padding: 0 10px;
  line-height: 34px;
  font-size: 14px;
  color: #212121;
  font-weight: bold;
  text-align: left;
}
.rush-head .icon{
  background: url('../../assets/images/notice.png') no-repeat 1px -22px;
  background-size: 76px 86px;
  width: 16px;
  height: 16px;
  display: inline-block;
  transform: translate3d(0, 2px, 0);
  margin-right: 5px;
}
.product-list{
  width: 100%;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden; 
  flex-direction: row;
  justify-content: flex-start;
}
.product-item{
  width: 100px;
  margin-left: 10px;
  text-align: left;
}
.item-title{
  font-size: 14px;
  color: #212121;
}
.item-price{
  overflow: hidden;
}
.now-price{
  float: left;
  color: #ff3c25;
  font-size: 16px;
  padding-top: 8px;
  font-weight: 700;
}
.reference{
  float: right;
  font-size: 12px;
  color: #bbb;
  font-weight: 700;
}
</style>