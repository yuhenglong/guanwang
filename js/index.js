//banner
$('.index_banner').slick({
    autoplay: true,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    fade: true,
    responsive: [{
        breakpoint: 992,
        settings: {
            dots: true
        }
    }]
});


$('.index_banner').init(function(slick) {
    $('.index_banner .item.slick-current').addClass('active').siblings().removeClass('active')
})
$('.index_banner').on('afterChange', function(slick, currentSlide) {
    $('.index_banner .item.slick-current').addClass('active').siblings().removeClass('active');
    var _index = $('.index_banner').slick('slickCurrentSlide')
    $('.section1 .number span').eq(_index).addClass('active').siblings().removeClass('active')
})
$('.section1 .number span').click(function() {
    var _index = $(this).index();
    $('.index_banner').slick('slickGoTo', _index);
    $(this).addClass("active").siblings().removeClass("active")
});
$('.section1 .prev').click(function() {
    $('.index_banner').slick('slickPrev')
})
$('.section1 .next').click(function() {
    $('.index_banner').slick('slickNext');
});

//导航
//超过一定高度导航添加类名
var nav = $("header"); //得到导航对象  
var win = $(window); //得到窗口对象  
var sc = $(document); //得到document文档对象。  
win.scroll(function() {
    if (sc.scrollTop() >= 100) {
        nav.addClass("on");
    } else {
        nav.removeClass("on");
    }
})

//移动端展开nav
$('#navToggle').on('click', function() {
        $('.m_nav').addClass('open');
    })
    //关闭nav
$('.m_nav .top .closed').on('click', function() {
    $('.m_nav').removeClass('open');
})

//二级导航  移动端
$(".m_nav .ul li").click(function() {
    $(this).children("div.dropdown_menu").slideToggle('slow')
    $(this).siblings('li').children('.dropdown_menu').slideUp('slow');
});

// swiper 案例分享代码
var swiperOne = new Swiper('.section3 .swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// swiper 新闻列表
var swiperTwo = new Swiper('.swiper-container-two', {
    slidesPerView: 3,
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination-two',
        clickable: true,
    },
});
// 数字清零
function clearNum() {
    $(".counterOne").html("0");
    $(".counterTwo").html("0");
    $(".counterThr").html("0");
}
// 数字增加
function count(dom, counterNum, time, diejia) {
    var num = 0;
    var countTime = time * 1000 / counterNum;
    var countOne = setInterval(function() {
        num += diejia;
        $(dom).html(num);
        if (num == counterNum) {
            clearInterval(countOne);
        }
    }, countTime);
}

// 设置bottom的高度
function domBottom(dom) {
    var pm_height = $(dom).height();
    if (pm_height > 563) {
        var mar_bottom = (pm_height - 785) / 2 + 195;
        $(".index_main .posi_sect").css("bottom", mar_bottom);
    }
}

// LOGO图切换
function changeLogo(index) {
    var logo = $('.logo');
    if (index == 1) {
        logo.attr('src', 'image/logo_white.png');
    } else {
        logo.attr('src', 'image/logo.png');
    }
}

//全屏滚动
$('#index_main').fullpage({
    'navigation': true,
    slidesNavigation: true,
    controlArrows: false,
    continuousHorizontal: true,
    scrollingSpeed: 1000,
    showActiveTooltip: true,
    anchors: ['hero', 'one', 'two', 'three'],
    loopHorizontal: true,
    afterLoad: function(anchorLink, index) {
        var html = `
            <a href="javascript:void(0)" class="animated bounceInUp dis_in posi_one">
                <h2>品牌升级</h2>
                <p>独具裸眼3D效果，让广告不再是平面</p>
                <div class='hry'></div>
            </a>
            <a href="javascript:void(0)" class="dis_in posi_sec animated bounceInUp" style="animation-delay:0.5s;-webkit-animation-delay:0.5s;">
                <h2>人脸识别</h2>
                <p>人脸识别技术收录消费者信息大数据库</p>
                <div class='hry'></div>
            </a>
            <a href="javascript:void(0)" class="dis_in posi_thr animated bounceInUp" style="animation-delay:1s;-webkit-animation-delay:1s;">
                <h2>大数据</h2>
                <p>获取用户数据并提高投放广告的准确度</p>
                <div class='hry'></div>
            </a>`;
        var html_t = `
                <div class="honer">
                <div class="num_hon animated bounceInUp" style="animation-delay:1s;-webkit-animation-delay:1.5s;">
                    <p><span class="counterOne">0</span><span class='text_num'>年</span></p>
                    <p class="ti_num">服务经验</p>
                </div>
                <div class="num_hon animated bounceInUp"  style="animation-delay:1s;-webkit-animation-delay:2s;">
                    <p><span class="counterTwo">0</span><span class='text_num'>+</span></p>
                    <p class="ti_num">合作广告客户</p>
                </div>
                <div class="num_hon animated bounceInUp"  style="animation-delay:1s;-webkit-animation-delay:2.5s;">
                    <p><span class="counterThr">0</span><span class='text_num'>项</span></p>
                    <p class="ti_num">行业殊荣</p>
                </div>
            </div>`;
        if (index == 1) {
            $('header').removeClass('on');
            $(".section2 .inte_box").html('');
            $(".section2 .container .honer").remove();
            changeLogo(index);
            clearNum();
            domBottom(".section1");
        }
        if (index == 2) {
            $('header').addClass('on');
            changeLogo(index);
            $(".section2 .inte_box").append(html);
            $(".section2 .container").append(html_t);
            setTimeout(function() {
                count(".counterOne", 20, 2, 1);
                count(".counterTwo", 1400, 2, 4);
                count(".counterThr", 128, 2, 1);
            }, 3500)

            clearNum();
            domBottom(".section2");
        }
        if (index == 3) {
            $('header').addClass('on');
            $(".section2 .inte_box").html('');
            $(".section2 .container .honer").remove();
            changeLogo(index);
            // count(".counterOne", 20, 2, 1);
            // count(".counterTwo", 1400, 2, 5);
            // count(".counterThr", 128, 2, 1);
            domBottom(".section3");
            // 获取页面节点的高度
            var setHeight = $(".section3").height();
            console.log(setHeight);
            if (setHeight > 730) {
                $(".section3").addClass("anli_mar");
            }
        }
        if (index == 4) {
            $('header').addClass('on');
            $(".section2 .inte_box").html('');
            $(".section2 .container .honer").remove();
            clearNum();
            changeLogo(index);
            domBottom(".section4");
        }
    },
    onLeave: function(index, direction) {}
})