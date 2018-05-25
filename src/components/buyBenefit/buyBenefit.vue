<template>
  <div class="benefit-wrapper">
    <h3 class="head">
      <i class="icon"></i>
      购·实惠
    </h3>
    <div class="product-list">
      <div class="product-item" v-for="(val, index) in list" :key="index">
        <div class="text-box">
          <div class="text">
            <div class="main-text">{{val.mainTitle}}</div>
            <div class="sub-text">{{val.subTitle}}</div>
          </div>
        
        </div>
        <img :src="val.pic" width="89" height="90"/>
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

  }

</script>
<style scoped>
.head{
  padding: 9px 0;
  font-size: 14px;
}
.head .icon{
  background: url('../../assets/images/notice.png') no-repeat -25px -22px;
  background-size: 76px 86px;
  width: 16px;
  height: 16px;
  display: inline-block;
  transform: translate3d(0, 2px, 0);
  margin-right: 5px;
}
.product-list{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.product-item{
  width: 50%;
  display: flex;
}
.text-box{
  flex-grow: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
}
.text{
  position: absolute;
  width: 100%;
  left: 0;
  top: 50%;
  transform: translate3d(0, -50%, 0);
}
.main-text{
  color: #212121;
  font-size: 17px;
  font-weight: 600;
}
.sub-text{
  font-size: 12px;
  color: #b1483f;
}
</style>