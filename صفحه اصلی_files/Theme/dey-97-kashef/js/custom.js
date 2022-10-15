$(document).ready(function () {
    /*menu-left*/
    $(".section-left .part-left .SiPo-Menu *").removeAttr("style");
    $(".section-left .part-left .SiPo-Menu style").remove();
    var pdiv_right = $(".section-left .part-left .SiPo-Menu .imsubc");
    var pTags_right = $(".section-left .part-left .SiPo-Menu  ul");
    if (pdiv_right.parent().is("div")) { pTags_right.unwrap(); }
    if (pTags_right.parent().is("div")) { pTags_right.unwrap(); }
    $(".section-left .part-left .SiPo-Menu").css("display", "block");
    $(".section-left .part-left .SiPo-Menu ul li").find("ul:first").parent("li").addClass("border-bottom-arrow");
    $(".section-left .part-left .SiPo-Menu ul li a").click(function (e) {
        if ($(this).parent().find("ul:first").length > 0) {
            e.preventDefault();
            if ($(this).parent().find("ul:first").hasClass("open-menu")) {
                $(this).parent("li").removeClass("active-menu");
                $(this).parent().find("ul:first").removeClass("open-menu").slideUp("fast");
            } else {
                $(this).parent().find("ul:first").addClass("open-menu").slideDown("slow");
                $(this).parent("li").addClass("active-menu");
                $(".section-left .part-left .SiPo-Menu ul li ul").not($(this).parents("li").find("ul:first")).removeClass("open-menu").slideUp("fast");
                $(".section-left .part-left .SiPo-Menu ul li").not($(this).parents("li")).removeClass("active-menu");
            }
        }
    });

    $(".SearchText").attr("placeholder", " جستجو  ...");//Check to see if the window is top 
    $(window).scroll(function () { if ($(this).scrollTop() > 100) { $('.scroll-top,.sticky-right').fadeIn(); } else { $('.scroll-top,.sticky-right').fadeOut(); } });//Click  to scroll to top
    $('.scroll-top').click(function () { $('html, body').animate({ scrollTop: 0 }, 800); return false; });//form-join
    $('.part-slider .dynamic-form-button-finishcomplete').insertAfter('.part-slider .dynamic-form-textbox'); $('.part-form-join .dynamic-form-button-finishcomplete,.part-slider .dynamic-form-button-finishcomplete').val('عضو شدن');
    //$('.part-sendreport .dynamic-form-button-finishcomplete').val('ارسال گزارش رخداد');//$('.part-slider .FormField.dynamic-form-td').prependTo('.part-left-banner .part-search');
    $('.part-sendreport #WebPart_f410c16d_1480_42f8_abe3_abed348aaab4_EF0_FormWizard_CaptchaControl_CaptchaImage').addClass('lock-form'); $('.RefreshStyle,#WebPart_f410c16d_1480_42f8_abe3_abed348aaab4_EF0_FormWizard_CaptchaControl_InputTextBox').wrapAll("<div class='sipo-lock-form'></div>"); $('.sipo-lock-form input').addClass('capcha'); $(".sipo-pencil-form").attr("placeholder", "موضوع گزارش"); $(".sipo-lines-form").attr("placeholder", "شرح گزارش"); $(".sipo-user-form").attr("placeholder", "نام و نام خانوادگی"); $(".sipo-phone-fomr").attr("placeholder", "تلفن همراه"); $(".capcha").attr("placeholder", "کد امنیتی");
    //****************scroll menu fix
    $(window).bind('scroll', function () {
        var scrollTop = $(window).scrollTop();//console.log(scrollTop)
        if (scrollTop > 50) { $('.row-one , .row-two').addClass('fixed'); } else { $('.row-one , .row-two').removeClass('fixed'); } if (scrollTop > 280) { $('.part-slider .FormField.dynamic-form-td').prependTo('.part-left-banner .part-search'); } else { $('.part-left-banner .part-search .FormField.dynamic-form-td').appendTo('.part-slider .dynamic-form-table tr:last'); }
    });
    //**********scroll section
    $('.li-root a').attr('data-scroll', ''); $(".li-root a").on('click', function () {//if (this.hash !== "" && $(hash).length>0) {//e.preventDefault();//var hash = this.hash;
        var outer = $('.row-one').outerHeight(); var outer2 = $('.row-two').outerHeight();//var headers = $('.fixed').outerHeight(); 
        var sumout = outer + outer2;//var margintop = $("#row-six").css({"padding-top":"8em"});
        $('html, body').animate({ scrollTop: $(this).offset().top - sumout - 120 }, 900, function () {//window.location.hash = hash;
        });//}
    }); $('.NavigationCurrent').text('', ''); $('.icon-top').appendTo('.part-right');
    //====================
    (function ($) {
        $.fn.charcount = function (options) {//create m.taheri
            var settings = $.extend({ classname: 'title', min: '40', max: '45' }, options);//Apply options
            return this.each(function () { for (var RecordCount = 0 ; RecordCount < $('.' + settings.classname).length; RecordCount++) { var TitleLengthslider = $('.' + settings.classname).eq(RecordCount).text().length; if (TitleLengthslider > settings.min) { var TitleLastSpaceslider = $('.' + settings.classname).eq(RecordCount).text().lastIndexOf(" ", settings.max); var TitleTextslider = $('.' + settings.classname).eq(RecordCount).text(); var TitleTextslider = $('.' + settings.classname).eq(RecordCount).text().substring(0, TitleLastSpaceslider); $('.' + settings.classname).eq(RecordCount).text(TitleTextslider + "..."); } } })
        };
    }(jQuery));
    //ripple mmt//$(".material-ripple").click(function (a) { var i = $(this); 0 == i.find(".material-ink").length && i.prepend("<div class='material-ink'></div>"); var t = i.find(".material-ink"); if (t.removeClass("animate"), !t.height() && !t.width()) { var e = Math.max(i.outerWidth(), i.outerHeight()); t.css({ height: e, width: e }) } var r = a.pageX - i.offset().left - t.width() / 2, h = a.pageY - i.offset().top - t.height() / 2, l = i.data("ripple-color"); t.css({ top: h + "px", left: r + "px", background: l }).addClass("animate") });//--------megamenu---------//$(".collapse-button").on("click", function () {//    $(".mega-menu").slideToggle("slow", function () {//        $(".mega-menu").css({//            "margin-top": "0px"//        })//    })//}), $(".mega-menu .imcm").addClass("cbp-hrmenu"), $(".mega-menu .imsc").addClass("cbp-hrsub"), $(".mega-menu .imsubc").addClass("cbp-hrsub-inner"), $(".mega-menu .Menu >span>div>.imcm > ul > li").each(function () {//    $(this).hover(function () {//        $(".mega-menu .Menu >span>div>.imcm > ul > li").removeClass("cbp-hropen"), $(this).toggleClass("cbp-hropen")//    }), $(this).mouseleave(function () {//        $(".mega-menu .Menu >span>div>.imcm > ul > li").removeClass("cbp-hropen")//    })//}), $(function () {//    cbpHorizontalMenu.init()//}), $(".search-box-img").click(function () {//    $("#Row-One #search-box").slideToggle("slow")//}), $("img.imefixh").attr({//    width: "10",//    height: "10"//}), $("img.imefix").attr({//    width: "10",//    height: "10"//});
});