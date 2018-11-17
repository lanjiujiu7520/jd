window.addEventListener('load', function () {
    //左侧滑动初始化
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'vertical', // 垂直切换选项  
        //必不可少的条件
        slidesPerView: 'auto',
        //弹性滑动效果
        freeMode: true,

    });
    //右侧滑动初始化
    var mySwiper = new Swiper('.category-right .swiper-container', {
        direction: 'vertical', // 垂直切换选项
        slidesPerView: 'auto',
        freeMode: true,
        //滚动条
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        mousewheel: true,
    });
    // //获取所有的li标签
    // var lis = document.querySelectorAll(".category-left ul li");
    // var left = document.querySelector('.category-left');
    // var box = document.querySelector('.swiper-wrapper');
    // //循环遍历每个li标签
    // for (var i = 0; i < lis.length; i++) {
    //     //给每个li添加一个索引 值就是当前循环的i
    //     lis[i].index = i;
    //     //给每个li标签添加点击事件
    //     lis[i].addEventListener('click', function () {
    //         //获取索引
    //         var index = this.index;
    //         //获取当前li标签的高度
    //         var liHeight = this.offsetHeight;
    //         //计算要往上走的值
    //         var translateY = -index * liHeight;
    //         //计算最小位移值，也就是父盒子的底部和子盒子底部的重合位置
    //         var minTranslateY = left.offsetHeight - this.parentNode.offsetHeight;
    //         //判断 如果当前计算的位移值的值 大于最小位移值 可以滑动 小于最小位移值就不能滑动 设置了最小位移值
    //         if (translateY < minTranslateY) {
    //             translateY = minTranslateY;
    //         };
    //         //判断好 设置位移
    //         box.style.transform = 'translate3d(0px, ' + translateY + 'px, 0px)';
    //         box.style.transtion = 'all 0.3s';
    //         //循环遍历li标签设置当前类
    //         for (var i = 0; i < lis.length; i++) {
    //             lis[i].classList.remove('active');
    //         };
    //         this.classList.add('active');
    //     })
    // }

    //获取元素
    var lis = document.querySelectorAll(".category-left ul li");
    var left = document.querySelector(".category-left");
    var box = document.querySelector(".swiper-wrapper");
    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;
        lis[i].addEventListener("click", function () {
            var index = this.index;
            var liHeight = this.offsetHeight;
            var juli = -index * liHeight;
            var min = left.offsetHeight - this.parentNode.offsetHeight;
            if (juli < min) {
                juli = min;
            }
            box.style.transform = 'translate3d(0px,' + juli + 'px,0px)';
            box.style.transtion = 'all 0.3s';
            for (var i = 0; i < lis.length; i++) {
                lis[i].classList.remove("active");
            }
            this.classList.add("active");
        })
    }
})