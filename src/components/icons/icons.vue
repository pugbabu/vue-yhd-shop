<template>
  <div class="icon-wrapper">
    <div class="icon-item" v-for="(item, index) in iconList" :key="index">
      <a :href="item.link">
          <img :src="item.src" class="image" width="40" height="40" />
          <p class="title">{{item.title}}</p>
      </a>
      
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        iconList: [{
            src: 'https://img20.360buyimg.com/img/jfs/t16420/274/631248429/7657/80b128e6/5a38d7dfN90f674dc.png',
            link: 'https://t.m.yhd.com/',
            title: '1号团'
          },
          {
            src: 'https://img30.360buyimg.com/img/jfs/t15505/354/642029247/8206/12023bdd/5a38d322N9c3d0987.png',
            link: 'https://t.m.yhd.com/',
            title: '饮食宝箱'
          },
          {
            src: 'https://img20.360buyimg.com/img/jfs/t15613/227/656860313/8652/854bc1d4/5a38d862Nc1600652.png',
            link: 'https://t.m.yhd.com/',
            title: '1号榜单'
          },
          {
            src: 'https://img13.360buyimg.com/img/jfs/t14806/241/769879949/8653/80848d97/5a38d3b4Nf3a15e1a.png',
            link: 'https://t.m.yhd.com/',
            title: '1号生鲜'
          },
          {
            src: 'https://img30.360buyimg.com/img/jfs/t16324/101/575926154/7859/1660b0bb/5a38d895Nc96d57c9.png',
            link: 'https://t.m.yhd.com/',
            title: '全球进口'
          },
          {
            src: 'https://img10.360buyimg.com/img/jfs/t21535/136/208866769/8714/57b00bf1/5b03d141N10690e76.png',
            link: 'https://t.m.yhd.com/',
            title: '1号闪购'
          },
          {
            src: 'https://img11.360buyimg.com/img/jfs/t14686/87/2244691386/5822/54a5dc17/5a7ac675N9d339fb0.png',
            link: 'https://t.m.yhd.com/',
            title: '充值中心'
          },
          {
            src: 'https://img30.360buyimg.com/img/jfs/t14443/352/809655512/6855/e29f4459/5a38d4cdNa99ac4fc.png',
            link: 'https://t.m.yhd.com/',
            title: '领券中心'
          },
          {
            src: 'https://img20.360buyimg.com/img/jfs/t12691/339/2290211649/10390/b0c5fd84/5a38d509N9ca10fc9.png',
            link: 'https://t.m.yhd.com/',
            title: '领金币'
          },
          {
            src: 'https://img13.360buyimg.com/img/jfs/t17926/357/648044158/6641/9a7a897/5a9d5b61N7c992a44.png',
            link: 'https://t.m.yhd.com/',
            title: '个人中心'
          },
        ]
      }
    },
    methods: {
      bgStyle(item) {
        let image = item.src
        return `background-image:url(${image})`
      }
    }
  }

</script>
<style scoped>
  .icon-wrapper {
    width: 100%;
    display: flex;
    position: relative;
    flex-wrap: wrap;
    flex-direction: row;
    background: #fff;
    padding: 0.08rem 0;
  }

  .icon-item {
    width: 20%;
    padding: 0.05rem 0;
  }
  .icon-item a {
    display: block;
    width: 100%;
  }
  .title {
    font-size: 0.12rem;
    color: #757575;
    padding-top: 0.06rem;
    line-height: 16px;
  }

</style>
