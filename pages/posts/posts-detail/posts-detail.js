// pages/posts/posts-detail/posts-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    poster: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000lCG1q4EGdV4.jpg?max_age=2592000',
    name: '惊鸿一面',
    author: '许嵩',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    // this.audioCtx = wx.createAudioContext('myAudio')
    // // this.audioCtx.setSrc('http://220.181.91.158/amobile.music.tc.qq.com/C400004Q419j1mysZ2.m4a?guid=8271537401&amp;vkey=1C042093B0BD529371C5A0FA701E191089E1FA7A692BF6BF66877335E97194BD663186E9307156347653BA45F9616E465FF4B084A7EB36BD&amp;uin=0&amp;fromtag=66');
    // this.audioCtx.setSrc('http://220.181.91.161/amobile.music.tc.qq.com/C4000009tjjx3rYlLo.m4a?guid=8271537401&vkey=0295E6DF739E8B256622147E146DA8534E8A7A8FC4B3F34FB056A2E58075577E897630B2CD50F48627049B89B2D6003EE58DFCE80DC26D32&uin=0&fromtag=66');
    
    // this.audioCtx.play()

    //创建新的音频上下文
    this.InnerAudioContext = wx.createInnerAudioContext();
    this.InnerAudioContext.autoplay = true;
    this.InnerAudioContext.startTime = 10;
    //开始播放语音
    this.InnerAudioContext.src = 'http://220.181.91.161/amobile.music.tc.qq.com/C4000009tjjx3rYlLo.m4a?guid=8271537401&vkey=0295E6DF739E8B256622147E146DA8534E8A7A8FC4B3F34FB056A2E58075577E897630B2CD50F48627049B89B2D6003EE58DFCE80DC26D32&uin=0&fromtag=66';
    this.InnerAudioContext.play();
  },

  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  },
  funplay: function () {
    console.log("audio play");
  },
  funpause: function () {
    console.log("audio pause");
  },
  // funtimeupdate: function (u) {
  //   console.log(u.detail.currentTime);
  //   console.log(u.detail.duration);
  // },
  funended: function () {
    console.log("audio end");
  },
  funerror: function (u) {
    console.log(u.detail.errMsg);
  },
  onMusicTap: function(event) {
    console.log("点击播放器");
    let innerAudioContext = wx.createInnerAudioContext();
    wx.playVoice({
      filePath: 'https://music.163.com/outchain/player?type=2&id=28854182&auto=1&height=66',
    })
    // let BackgroundAudioManager = wx.getBackgroundAudioManager();
    // BackgroundAudioManager.webUrl = 'https://music.163.com/outchain/player?type=2&id=28854182&auto=1&height=66';
    // BackgroundAudioManager.play();
    // this.AppMusic.play();
    // BackgroundAudioManager.onPlay(function(){
    //   console.log("正在播放");
    // });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})