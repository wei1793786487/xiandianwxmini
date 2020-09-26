App({
  onLaunch: function () {
    let shops = wx.getStorageSync("shop");
   let money = wx.getStorageSync("money");
    if (shops === null||shops==="") {
      wx.setStorageSync("shop", [])
    }
      if (money === null||money==="") {
      wx.setStorageSync("money", 0)
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