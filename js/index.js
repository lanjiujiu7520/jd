window.addEventListener('load', function () {
    //头部
    var header = document.getElementById('header');
    //轮播图盒子的高度
    var slideHight = document.getElementById('slide').offsetHeight;
    //滚动事件，一滚动就调用改变透明度的这个函数
    //第二个参数只能定义函数，不可调用函数
    window.addEventListener('scroll', setOpacity);
    //页面一加载就调用这个函数
    setOpacity();

    function setOpacity() {
        //获取滚动距离  短路运算兼容性问题可以解决
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        //计算滚动距离除以高度
        var opacity = scrollTop / slideHight;
        if (opacity <= 1) {
            header.style.backgroundColor = "rgba(222, 24, 27, " + opacity + ")";
        } else {
            header.style.backgroundColor = "rgba(222, 24, 27, 1)";
        }
    }
    //渲染页面的秒杀倒计时
    //定义一个未来时间
    var futureTime = new Date(2018, 10, 15, 17, 00, 00);
    // console.log(futureTime);
    //获取当前时间
    var nowTime = new Date();
    // console.log(nowTime);
    //算出倒计时数  毫秒转秒  因为它获取的时间是毫秒，用来做运算的话是不行的，所有要除以1000转成秒
    var time = Math.floor((futureTime - nowTime) / 1000);
    // console.log(time);
    //获取到页面要渲染的元素
    //类为seckill-time 下面的所有span标签 取到的是一个数组
    var spans = this.document.querySelectorAll(".seckill-time span");
    // console.log(spans);
    //定义一个定时器来用来将这个每1秒减一
    setInterval(function () {

        //每执行一次time就减1
        time--;
        //判断时间是否是过去时间
        if(time <= 0){
            time = 7200;
        }
        // console.log(time);
        //算出要渲染到页面上面的时分秒数
        //总时间(总秒数时长)除以3600得到多少个小时
        var hour = Math.floor(time / 3600); //时
        //总时间(总秒数时长)除以60在模以60得到分钟
        var minute = Math.floor(time / 60 % 60); //分
        //总时间(总秒数时长)模以60得到秒数
        var second = Math.floor(time % 60); //秒

        //开始渲染
        //十位数是除以十  个位数是模以十

        // 小时十位数
        spans[0].innerHTML = Math.floor(hour / 10);
        // 小时个位数
        spans[1].innerHTML = Math.floor(hour % 10);

        // 分钟的十位数
        spans[3].innerHTML = Math.floor(minute / 10);
        // 分钟的个位数
        spans[4].innerHTML = Math.floor(minute % 10);

        // 秒数的十位数
        spans[6].innerHTML = Math.floor(second / 10);
        // 秒数的个位数
        spans[7].innerHTML = Math.floor(second % 10);


    }, 1000);





})