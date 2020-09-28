var util = require('../../../../utils/util.js')
Page({
  data: {
    //  支付方式 0为快捷支付 1为银联支付 3为微信支付
    pay_way: 0,
    pay_money: 0,
    income_log:[]
  },
  onLoad: function (options) {
     let income_log = wx.getStorageSync("income_log");
     this.setData({
       income_log:income_log
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
  generateUuid: function (length = 5) {
    return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36);
  },
  chance: function (options) {
    this.setData({
      pay_way: options.detail.value
    })

  },
  summit: function () {
    if (this.data.pay_money === 0) {
      wx.showToast({
        title: "金额为0,禁止支付.",
        icon: "none"
      })
      return;
    }
    let that = this;
    let title = "";
    let pay_way = this.data.pay_way;
    if (pay_way === 0) {
      title = "模拟快捷支付"
    } else if (pay_way === 0) {
      title = "模拟银联支付"
    } else {
      title = "模拟微信支付"
    }
    wx.showLoading({
      title: title
    })
    setTimeout(function () {
      let old_money = wx.getStorageSync("money");
      let money = old_money+parseInt(that.data.pay_money);
      console.log(money)
      wx.setStorageSync("money", money);
      wx.hideLoading()
      wx.showToast({
        title: "支付成功"
      })
    }, 2000);

    let income_log=this.data.income_log;
    income_log.push({
      date:util.formatTime(new Date()),
      money:this.data.pay_money,
      pay_type:pay_way,
      id:this.generateUuid()
    })
    wx.setStorageSync("income_log",income_log)
  },
  bindblurHandle: function (even) {
    this.setData({
      pay_money: even.detail.value
    })
  }
})