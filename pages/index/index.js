// index.js
Page({
  data: {
    searchShow: true, // 搜索图标
    pageIndex: 0, // 首页滑动index
    swiperCurrentClass: 'swiperRecommend', // swiper当前类
    swiperClasss: ['swiperRecommend', 'swiperProject', 'swiperPath', 'swiperActivity'],
    topNavigation: [{ // 导航
      imgUrl: '../../resources/tbNavigation/recommend.png',
      text: '推荐',
      type: 'recommend', // 类名
      index: 0
    }, {
      imgUrl: '../../resources/tbNavigation/project.png',
      text: '实战',
      type: 'project',
      index: 1
    }, {
      imgUrl: '../../resources/tbNavigation/path.png',
      text: '路径',
      type: 'path',
      index: 2
    }, {
      imgUrl: '../../resources/tbNavigation/activity.png',
      text: '活动',
      type: 'activity',
      index: 3
    }],
  },
  // 搜索： 显示/隐藏
  handleSearchShow(e) {
    let searchList = [];
    switch (this.data.pageIndex) {
      case 0:
        searchList = this.data.recommend.filter((value, index, array) => {
          return value.title.indexOf(e.detail.value) !== -1
        });
        break;
      case 1:
        searchList = this.data.project.filter((value, index, array) => {
          return value.title.indexOf(e.detail.value) !== -1
        });
        break;
      case 2:
        searchList = this.data.path.filter((value, index, array) => {
          return value.title.indexOf(e.detail.value) !== -1
        });
        break;
      case 3:
        searchList = this.data.activities.filter((value, index, array) => {
          return value.title.indexOf(e.detail.value) !== -1
        });
        break;
      default:
        console.log('lqs');
    };
    this.setData({
      searchShow: e.detail.value ? false : true,
      searchList,
    });
  },
  // unline 显示
  handleUnlineShow(e) {
    this.setData({
      // 同步当前页 添加swiper当前类
      pageIndex: parseInt(e.target.dataset.index),
      swiperCurrentClass: this.data.swiperClasss[e.target.dataset.index]
    });
  },
  // 滑动
  handlePageTouch(e) {
    this.setData({
      // 同步当前页 添加swiper当前类
      pageIndex: parseInt(e.detail.current),
      swiperCurrentClass: this.data.swiperClasss[e.detail.current]
    })
  },
  // 请求首页数据
  onLoad() {
    wx.request({
      url: 'https://www.fastmock.site/mock/d2122846b26705f336756703ae23a031/lqs329/lqs/index',
      success: (res) => {
        const {
          data: {
            data: {
              swiperList,
              recommend,
              project,
              activities,
              path
            }
          }
        } = res;
        // this -- 箭头函数
        this.setData({
          swiperList,
          recommend,
          project,
          activities,
          path
        });
      }
    })
  }
})