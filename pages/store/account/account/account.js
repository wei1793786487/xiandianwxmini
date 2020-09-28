Page({
  data: {
    money:0
  },
  onLoad: function (options) {
   let money=  wx.getStorageSync("money");
   this.setData({
     money:money
   })
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
  comein:function(){
    wx.navigateTo({url:"/pages/store/account/income/income"})
  }
})