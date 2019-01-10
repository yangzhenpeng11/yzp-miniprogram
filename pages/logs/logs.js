//logs.js
const util = require('../../utils/util.js')
//逆着光行走人风吹雨打
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  onShow:function(){
    console.log('创建logs页的onShow()方法');
  },
  onReady:function(){

  },
  onHide:function(){

  },
  onUnload:function(){}
})
