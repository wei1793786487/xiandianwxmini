var util = require('../../../../utils/util.js')
Page({
  data: {
    order_id: "66666666666666",
    shop_list: [],
    all_price: 555,
    is_pay: false,
    // 0为会员卡支付，1为微信支付
    payType: "0",
    hava_money: 1,
    pay_log: [],
    oder_list: []
  },

  onLoad: function (options) {
    console.log(options)
    //获取付款日志
    let pay_log = wx.getStorageSync("pay_log")
    //获取订单列表
    let order_list = wx.getStorageSync("order_list")
    //生成uuid
    var uuid = this.generateUuid();
    //获取商品的列表
    var shop = wx.getStorageSync("shop");
    var money = wx.getStorageSync("money");
    var price = 0;
    shop.forEach(function (element) {
      price += parseInt(element.price);
    });
    this.setData({
      order_list:order_list,
      pay_log: pay_log,
      hava_money: money,
      shop_list: shop,
      order_id: uuid,
      all_price: price
    })
    console.log("onLoad")
  },
  generateUuid: function (length = 5) {
    return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36);
  },
  pay: function () {
    if (this.data.is_pay) {
      wx.showToast({
        icon: "none",
        title: "你已经付款了"
      })
      return;
    }
    if (this.data.payType === "1") {
      this.payload(1)
    } else {
      if (this.data.all_price < this.data.hava_money) {
        this.payload(0)
      } else {
        wx.showModal({
          title: "支付失败",
          content: "你的会员卡余额不足,是否前往充值",
          success: (res => {
            if (res.confirm) {
              wx.navigateTo({ url: "/pages/store/account/income/income" })
            }
          })
        })
      }
    }
  },
  radioChange(e) {
    let value = e.detail.value;
    this.setData({
      payType: value
    })
  },
  payload: function (type) {
    let that = this;
    let tilte = ""
    if (type === 0) {
      tilte = "模拟会员卡支付"
    } else {
      tilte = "微信模拟支付"
    }
    wx.showLoading({
      title: tilte,
      mask: true
    })
    setTimeout(function () {
      wx.hideLoading()
      wx.showToast({
        title: "支付成功"
      })
      if (type === 0) {
        let money = that.data.hava_money - that.data.all_price;
        that.setData({
          hava_money: money,
          is_pay: true,
        })
        wx.setStorageSync("money", money)
      }
      that.setData({
        is_pay: true,
      })
    }, 2000);

    //生成支付日志
    let logs = {
      tilte: this.data.shop_list[0].title + "等" + this.data.shop_list.length + "个",
      order_id: this.data.order_id,
      money: this.data.all_price,
      date: util.formatTime(new Date()),
      pay_type: type
    }
    this.data.pay_log.push(logs)
    wx.setStorageSync("pay_log", this.data.pay_log)
    //清空购物 
    wx.setStorageSync("shop", [])

  }

})