//获取应用实例
var util = require('../../../../utils/util.js')
Page({
  data: {
    progect: "",
    time: "",
    date: "",
    message: ""
  },
  onLoad: function (options) {
    let date = "";
    var data_time = util.formatTime(new Date());
    var dt = data_time.split(" ");
    var _data = dt[0].split("/");
    for (var i = 0; i < _data.length; i++) {
      if (i === _data.length - 1) {
        date += _data[i]
      } else {
        date += _data[i] + "-"
      }
    }
    var time = dt[1].substring(0, 5);

    this.setData({
      time: time,
      date: date
    })
  },
  summit: function (e) {
    let data = e.detail.value;
    if (data.progect === null || data.progect === "") {
      wx.showToast({
        title: "请输入服务的项目名称",
        icon: "none"
      })
      return;
    }
    let appointment = wx.getStorageSync("appointment");
    appointment.push(data)
    wx.setStorageSync("appointment", appointment);
    wx.showToast({
      title:"预约成功"
    })
    this.setData({
      progect:"",
      message:""
    })
  },
})