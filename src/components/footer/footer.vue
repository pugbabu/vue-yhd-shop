<template>
  <div class="footer">
    <mu-bottom-nav :value="bottomNav" @change="handleChange">
      <mu-bottom-nav-item v-for="(v, i) in navData" :value="v.name" :key="i" class="nav" :to="v.url">
        <span class="icon" :style="bgStyle(v)"></span>
      </mu-bottom-nav-item>
    </mu-bottom-nav>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        bottomNav: sessionStorage.getItem('navName') || "首页",
        navData: [{
            url: "/index",
            name: "首页",
            icon: require("../../assets/images/icon/home.png"),
            active: require("../../assets/images/icon/home-active.png")
          },
          {
            url: "/category",
            name: "分类",
            icon: require("../../assets/images/icon/category.png"),
            active: require("../../assets/images/icon/category-active.png")
          },
          {
            url: "/cart",
            name: "购物车",
            icon: require("../../assets/images/icon/cart.png"),
            active: require("../../assets/images/icon/cart-active.png")
          },
          {
            url: "/my",
            name: "我的",
            icon: require("../../assets/images/icon/mine.png"),
            active: require("../../assets/images/icon/mine-active.png")
          }
        ]
      }
    },
    methods: {
      handleChange(v) {
        sessionStorage.setItem('navName', v)
        this.bottomNav = v
      },
      bgStyle(v) {
        let res = ''
        res = v.name === this.bottomNav ? v.active : v.icon
        return `background-image: url(${res}) `
      }
    }
  }

</script>
<style>
  .footer {
    width: 100%;
    height: 0.98rem;
    position: fixed;
    bottom: 0;
    margin: 0 auto;
    border-top: 1px solid #eeeeee;
    background: #ffffff;
    z-index: 9999;
  }
  .icon {
  margin: -3px auto 0;
  display: block;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 0.88rem;
  height: 0.88rem;
}
.footer .nav.active span.name {
  color: #cc47f8;
}
</style>
