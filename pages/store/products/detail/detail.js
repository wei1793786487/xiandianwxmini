Page({
  data: {
    id: "",
    buy_num: 0,
    buy_all_price: 0,
    data: [
      {
        "id": 1,
        "title": "openstack课程",
        "price": "120",
        "img": "/res/manager/tabs/bg1.jpg",
        "des": "Openstack是一个云平台管理的项目，它不是一个软件。这个项目由几个主要的组件组合起来完成一些具体的工作。Openstack是一个旨在为公共及私有云的建设与管理提供软件的开源项目。它的社区拥有超过130家企业及1350位开发者，这些机构与个人将 Openstack作为基础设施即服务资源的通用前端。Openstack项目的首要任务是简化云的部署过程并为其带来良好的可扩展性。本文希望通过提供必要的指导信息，帮助大家利用 Openstack前端来设置及管理自己的公共云或私有云。"
      },
      {
        "id": 2,
        "title": "云计算课程",
        "price": "120",
        "img": "/res/manager/tabs/bg2.jpg",
        "des": "云计算（cloud computing）是分布式计算的一种，指的是通过网络“云”将巨大的数据计算处理程序分解成无数个小程序，然后，通过多部服务器组成的系统进行处理和分析这些小程序得到结果并返回给用户。云计算早期，简单地说，就是简单的分布式计算，解决任务分发，并进行计算结果的合并。因而，云计算又称为网格计算。通过这项技术，可以在很短的时间内（几秒种）完成对数以万计的数据的处理，从而达到强大的网络服务"
      },
      {
        "id": 3,
        "title": "如何让富婆开心",
        "price": "666",
        "img": "/res/manager/tabs/fupo.jpg",
        "des": "学完了他,直接走上人生巅峰。"
      },
    ],
    chooseData: ""
  },
  onLoad: function (options) {
    //获取然后渲染
    this.setData({
      id: options.id
    })
    let _this = this;
    this.data.data.forEach(function (element) {
      console.log(_this.data.id === element.id + "")
      if (element.id + "" === _this.data.id) {
        _this.setData({
          chooseData: element
        })
        return;
      }
    });
    // 获取购物车
    let shops = wx.getStorageSync("shop")
    let price = 0;
    shops.forEach(function (element) {
      price += parseInt(element.price);
    });
    this.setData({
      buy_num: shops.length,
      buy_all_price: price
    })
    // console.log(this.data.chooseData)
  },
  onReady: function () {
    console.log("onReady")
  },
  onShow: function () {
    console.log("onShow")
  },
  onHide: function () {
    console.log("onHide")
  },
  onUnload: function () {
    console.log("onUnload")
  },
  onPullDownRefresh: function () {
    console.log("onPullDownRefresh")
  },
  onReachBottom: function () {
    console.log("onReachBottom")
  },
  onShareAppMessage: function () {
    console.log("onShareAppMessage")
  },
  buy: function () {
    //将购买的放入储存
    let shops = wx.getStorageSync("shop");
    shops.push(this.data.chooseData);
    wx.setStorageSync("shop", shops)
    // 刷新购物车
    //重复代码，需优化
    let price = 0;
    shops.forEach(function (element) {
      price += parseInt(element.price);
    });
    this.setData({
      buy_num: shops.length,
      buy_all_price: price
    })
    
  }
})