//index.js
//获取应用实例
//openId:o3FoA0eHrrSGvKhIz2sOfFYPnZXA
//也曾指尖弹出盛夏。。。。
const app = getApp()
const TOKEN_URL = 'token/add';
//晚风吹起你斌简的白发，画中的你低着头说话，我也曾感叹世界之大
Page({
  data: {
    motto: 'Hello',
    userInfo: {},
    hasUserInfo: false,
    canIUse: true
  },
  //事件处理函数
  bindViewTap: function() { 
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      console.log(1);
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
      console.log(app.globalData);
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        console.log(2);
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        // wx.login({
        //   timeout:10000,
        //   success:function(res){
        //     console.log("返回的code:"+res.code);
        //     console.log("用户信息是")
        //     console.log(app.globalData.userInfo);
        //     wx.request({
        //       url: TOKEN_URL,
        //       success:function(res){
        //         console.log("返回的token");
        //         console.log(res);
        //       }
        //     })
        //   }
        // })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          console.log(3);
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  onSubmit: function (event) {
    console.log(event);
  },
  onUnload:function(){
    console.log('创建index页面的onUnload()方法');
  },
  //提示
  toast:function(hint){
    wx.showToast({
      icon:'none',
      title: hint,
    })
    let timer = setTimeout(function(){
      wx.hideLoading();
      clearTimeout(timer);
    },1000);
  }
})
