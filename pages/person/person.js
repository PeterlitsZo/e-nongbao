// pages/person/person.js
// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  onLoad() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    }
  },

  // 通过参数 userInfo 得到用户信息，被 `./person.wxml` 中登录按钮使用。
  getUserInfo(userInfo) {
    app.globalData.userInfo = userInfo.detail.userInfo
    this.setData({
      userInfo: userInfo.detail.userInfo,
      hasUserInfo: true
    })
  }
})
