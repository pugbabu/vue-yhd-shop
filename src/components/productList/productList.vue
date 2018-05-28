<template>
  <div class="product-list">
    <div class="content">
      <div class="product-item" v-for="(item, index) in loadList" :key="index">
        <img v-lazy="item.GoodsImage" class="image" width="160" height="160"/>
        <p class="title">{{item.GoodsName}}</p>
        <div class="price">
          <span>¥{{item.GoodsPrice}}</span>
        </div>
      </div>
    </div>
    <div class="loading" v-show="loading">
      <img src="../../assets/images/loading.gif" width="26" height="26"/>
      <p>正在加载中，请稍后</p>
    </div>
    <div class="loading-end" v-show="loadingEnd">我是有底线的~</div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        productList: [],
        loadList: [],
        num: 6,
        loading: false,
        pageTotal: 1,
        pageNum: 0,
        loadingEnd: false
      }
    },
    created () {
      this.getList()
    },
    methods: {
      getList() {
        this.$http.get('/api/products').then(res => {
          this.productList = res.data.data
          let len = this.productList.length
          if (!len) return
          if (this.num <= len) {
            this.loadList = this.productList.slice(0, this.num)
          }
          this.pageTotal = Math.round(len / this.num)
          console.log(this.productList.length)
        })
      },
      loadMore() {
        if (this.pageNum >= this.pageTotal) {
          this.loadingEnd = true
          return
        }
        let clientHeight = document.documentElement.clientHeight || document.body.clientHeight
        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
        let pageHeight =  Math.max(document.body.scrollHeight, document.body.offsetHeight)
        if (clientHeight + scrollTop >= pageHeight) {
          this.loading = true
          setTimeout(() => {
            this.pageNum++
            let start = this.num * this.pageNum
            let end = this.num * (this.pageNum + 1)
            let arr = this.productList.slice(start, end)
            this.loadList = this.loadList.concat(arr)
            this.loading = false            
          }, 500)
        }
      }
    },
    mounted () {
      window.addEventListener('scroll', this.loadMore, false)
    }
  }

</script>
<style scoped>
.product-list{
  width: 100%;
  background: #fff;
}
.content{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow: hidden;
  text-align: left;
}
.product-item{
  width: 50%;
  padding: 0 0.2rem;
}
.title{
  height: 0.4rem;
  line-height: 0.4rem;
  color: #555555;
}
.price{
  text-align: left;
}
.price span{
  font-size: 0.3rem;
  color: red;
  font-weight: bold;
}
.loading-end{
  line-height: 0.6rem;
  padding: 0.1rem 0;
}
</style>
