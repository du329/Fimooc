Page({
  data: {
    checkAll: false,
    total:0
  },
  // 单个选择项
  handleSuccessTap(e) {
    // 临时变量
    let carData = this.data.carData;
    let checkAll = null;
    // 取反
    carData[parseInt(e.currentTarget.dataset.id)].checked = !carData[parseInt(e.currentTarget.dataset.id)].checked
    // 全选按钮状态index
    let flag = true;
    for (let index = 0; index < carData.length; index++) {
      if (carData[index].checked === false) {
        flag = false;
        break;
      }
    }
    this.setData({
      carData,
      checkAll:flag
    });
    this.handlePrice()
  },
  // 全选
  handleSuccessTapAll() {
    this.setData({
      checkAll: !this.data.checkAll
    });
    let carData = this.data.carData;
    for (let index = 0; index < carData.length; index++) {
      carData[index].checked = this.data.checkAll;
    };
    this.setData({
      carData
    });
    this.handlePrice()
  },
  // 删除
  handleDel(e) {
    let carData = this.data.carData;
    carData = carData.filter((value,index) => {
      return value.id !== e.target.dataset.id
    })
    if(!carData.length){
      this.setData({carData,checkAll:false});
    }else{
      this.setData({carData});
    }
    this.handlePrice();
  },
  // 价格计算
  handlePrice(){
    let total = 0;
    for (let index = 0; index < this.data.carData.length; index++) {
      if(this.data.carData[index].checked === true){
        total += parseInt(this.data.carData[index].price)
      }
    }
    this.setData({total});
  },

  onLoad() {
    wx.request({
      url: 'https://www.fastmock.site/mock/d2122846b26705f336756703ae23a031/lqs329/lqs/carData',
      success: (response) => {
        var {
          data: {
            data: {
              carData
            }
          }
        } = response;
        this.setData({
          carData,
        })
      }
    })
  }
})