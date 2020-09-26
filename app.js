App({
  onLaunch: function () {
    let shops = wx.getStorageSync("shop");
    console.log(shops)
    if (shops === null||shops==="") {
      wx.setStorageSync("shop", [])
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