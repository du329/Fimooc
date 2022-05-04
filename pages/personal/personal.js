Page({

  data: {
  },
  onLoad() {
    wx.request({
      url: 'https://www.fastmock.site/mock/d2122846b26705f336756703ae23a031/lqs329/lqs/my',
      success: (response) => {
        console.log(response);
        const {
          data: {
            data: {
              personal
            }
          }
        } = response;
        this.setData({personal});
      }
    })
  },
})