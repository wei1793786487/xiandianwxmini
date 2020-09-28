App({
  onLaunch: function () {
    let shops = wx.getStorageSync("shop");
    let money = wx.getStorageSync("money");
    let pay_log = wx.getStorageSync("pay_log")
    let income_log = wx.getStorageSync("income_log")
    let order_list = wx.getStorageSync("order_list")
    if (shops === null || shops === "") {
      wx.setStorageSync("shop", [])
    }
    if (money === null || money === "") {
      wx.setStorageSync("money", 0)
    }
    if (pay_log === null || pay_log === "") {
      wx.setStorageSync("pay_log", [])
    }
    if (income_log === null || income_log === "") {
      wx.setStorageSync("income_log", [])
    }
    if(order_list===null||order_list===""){
      wx.setStorageSync("order_list", [])
    }
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
  globalData: {
    hasLogin: false
  }
})