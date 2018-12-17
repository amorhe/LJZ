//定时器
exports.install = function (Vue, options) {
  Vue.prototype.timers = function (callback) {
    let timer = null;
    let s = 60;
   timer = setInterval(function () {
      s--;
      if(s<=0){
        clearInterval(timer)
      }
      callback(s)
    },1000);
  }
};


