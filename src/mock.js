//引入mockjs
const Mock = require('mockjs')
//使用mockjs模拟数据
Mock.mock('/api/products', (req, res) => {
  let data = [
    {
      GoodsId: '1',
      GoodsName: '大胡子烧烤味薯片',
      GoodsPrice: 28,
      GoodsImage: 'https://img10.360buyimg.com/n1/s220x220_jfs/t7978/152/4305366450/581025/3f999bc/5a070493N39b15da2.jpg'
    },
    {
      GoodsId: '1',
      GoodsName: '大胡子烧烤味薯片',
      GoodsPrice: 28,
      GoodsImage: 'https://img10.360buyimg.com/n1/s220x220_jfs/t7978/152/4305366450/581025/3f999bc/5a070493N39b15da2.jpg'
    },
    {
      GoodsId: '1',
      GoodsName: '大胡子烧烤味薯片',
      GoodsPrice: 28,
      GoodsImage: 'https://img10.360buyimg.com/n1/s220x220_jfs/t7978/152/4305366450/581025/3f999bc/5a070493N39b15da2.jpg'
    },
    {
      GoodsId: '1',
      GoodsName: '大胡子烧烤味薯片',
      GoodsPrice: 28,
      GoodsImage: 'https://img10.360buyimg.com/n1/s220x220_jfs/t7978/152/4305366450/581025/3f999bc/5a070493N39b15da2.jpg'
    },
    {
      GoodsId: '1',
      GoodsName: '大胡子烧烤味薯片',
      GoodsPrice: 28,
      GoodsImage: 'https://img10.360buyimg.com/n1/s220x220_jfs/t7978/152/4305366450/581025/3f999bc/5a070493N39b15da2.jpg'
    },
    {
      GoodsId: '1',
      GoodsName: '大胡子烧烤味薯片',
      GoodsPrice: 28,
      GoodsImage: 'https://img10.360buyimg.com/n1/s220x220_jfs/t7978/152/4305366450/581025/3f999bc/5a070493N39b15da2.jpg'
    },
    {
      GoodsId: '1',
      GoodsName: '大胡子烧烤味薯片',
      GoodsPrice: 28,
      GoodsImage: 'https://img10.360buyimg.com/n1/s220x220_jfs/t7978/152/4305366450/581025/3f999bc/5a070493N39b15da2.jpg'
    },
    {
      GoodsId: '1',
      GoodsName: '大胡子烧烤味薯片',
      GoodsPrice: 28,
      GoodsImage: 'https://img10.360buyimg.com/n1/s220x220_jfs/t7978/152/4305366450/581025/3f999bc/5a070493N39b15da2.jpg'
    },
    {
      GoodsId: '1',
      GoodsName: '大胡子烧烤味薯片',
      GoodsPrice: 28,
      GoodsImage: 'https://img10.360buyimg.com/n1/s220x220_jfs/t7978/152/4305366450/581025/3f999bc/5a070493N39b15da2.jpg'
    },
    {
      GoodsId: '1',
      GoodsName: '大胡子烧烤味薯片',
      GoodsPrice: 28,
      GoodsImage: 'https://img10.360buyimg.com/n1/s220x220_jfs/t7978/152/4305366450/581025/3f999bc/5a070493N39b15da2.jpg'
    },
    {
      GoodsId: '1',
      GoodsName: '大胡子烧烤味薯片',
      GoodsPrice: 28,
      GoodsImage: 'https://img10.360buyimg.com/n1/s220x220_jfs/t7978/152/4305366450/581025/3f999bc/5a070493N39b15da2.jpg'
    },
    {
      GoodsId: '1',
      GoodsName: '大胡子烧烤味薯片',
      GoodsPrice: 28,
      GoodsImage: 'https://img10.360buyimg.com/n1/s220x220_jfs/t7978/152/4305366450/581025/3f999bc/5a070493N39b15da2.jpg'
    },
    {
      GoodsId: '1',
      GoodsName: '大胡子烧烤味薯片',
      GoodsPrice: 28,
      GoodsImage: 'https://img10.360buyimg.com/n1/s220x220_jfs/t7978/152/4305366450/581025/3f999bc/5a070493N39b15da2.jpg'
    },
    {
      GoodsId: '1',
      GoodsName: '大胡子烧烤味薯片',
      GoodsPrice: 28,
      GoodsImage: 'https://img10.360buyimg.com/n1/s220x220_jfs/t7978/152/4305366450/581025/3f999bc/5a070493N39b15da2.jpg'
    },
  ]
  return {data: data}
})
