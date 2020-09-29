// pages/detail/detail.js
Page({
    data: {
        currentTab: 0,
        order_list: [],
        pay_list: [],
        unpay_list: []
    },
    onLoad: function (options) {
        // 页面初始化 options为页面跳转所带来的参数
        let order_list = wx.getStorageSync("order_list");
        let pay_list = []
        let unpay_list = []
        order_list.forEach(function (element) {
            if (element.is_pay) {
                pay_list.push(element)
            } else {
                unpay_list.push(element)
            }
        });
        this.setData({
            order_list: order_list,
            pay_list: pay_list,
            unpay_list: unpay_list
        })
    },
    //滑动切换
    swiperTab: function (e) {
        var that = this;
        that.setData({
            currentTab: e.detail.current
        });
    },
    //点击切换
    clickTab: function (e) {
        var that = this;
        if (this.data.currentTab === e.target.dataset.current) {
            return false;
        } else {
            that.setData({
                currentTab: e.target.dataset.current
            })
        }
    },
    detail: function (e) {
        wx.redirectTo({ url: "/pages/store/order/detail/detail?id=" + e.currentTarget.dataset.id + "&" + "type=1" })
    }
})