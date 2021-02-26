// app.js

App({
  onLaunch() {
    // 获取用户信息
    wx.getSetting({
      success: res => {
        // 如果已经授权，可以直接调用 getUserInfo 获取用户信息，不会弹框
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              this.globalData.userInfo = res.userInfo
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
