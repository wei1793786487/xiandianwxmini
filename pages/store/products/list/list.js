Page({
  data: {
    goods: [{
        id: 1,
        title: "openstack课程",
        price: "120",
        img: "/res/manager/tabs/bg1.jpg"
      },
      {
        id: 2,
        title: "云计算课程",
        price: "120",
        img: "/res/manager/tabs/bg2.jpg"
      },
      {
        id: 3,
        title: "如何让富婆开心",
        price: "666",
        img: "/res/manager/tabs/fupo.jpg"
      },
    ],
    imgUrls: [{
      url: '/res/manager/tabs/bg1.jpg'
    }, {
      url: '/res/manager/tabs/bg2.jpg'
    }],
    icons: [{
        img: "/res/icons/1.png",
        name: "账户余额",
        link: "accounts"
      },
      {
        img: "/res/icons/2.png",
        name: "充值记录",
        link: "payin"
      },
      {
        img: "/res/icons/3.png",
        name: "消费记录",
        link: "payin"
      },
      {
        img: "/res/icons/4.png",
        name: "个人资料",
        link: "user"
      }
    ],

  },
  onLoad: function (options) {
    console.log("onLoad")
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
  detail: (e) => {
    wx.navigateTo({url:"/pages/store/products/detail/detail?id="+e.target.dataset.id})
  }

});