$(document).ready(function () { $('.part-megamenu .imcm').parent().addClass('menu-container'); $('.part-megamenu .imcm').addClass('menu'); $(".menu li").each(function () { if ($(this).has("ul").length) { $(this).addClass('menu-dropdown-icon'); } }); $('.part-megamenu .cdd0_main_menu ul.cdd0_sub_menu').unwrap(); $('.part-megamenu .cdd0_main_menu ul.cdd0_sub_menu').unwrap(); });
/*global $ mmt*/
$(document).ready(function () {
    "use strict";$(".menu > ul").before("<a href=\"#\" class=\"menu-mobile\">.</a>");$('.menu-mobile').append("<div id='nav-icon3'><span></span><span></span><span></span><span></span></div>");$('#nav-icon3').click(function (e) {$(this).toggleClass('open');e.preventDefault();});$(document).on('click', function (e) {//if ($(window).width() < 943) {
          if (window.matchMedia("(max-width: 992px)").matches) {if ($(e.target).parents('.menu').length === 0) {$("#nav-icon3").removeClass('open');$('.menu-dropdown-icon ul').hide();$(".menu > ul > li .btn-root").removeClass('up-root');$(".menu > ul > li").removeClass('menu-open');}}});$('.menu > ul.cdd0_main_menu').addClass('ul-root');$('.menu > ul > li').addClass('li-root');$('.menu > ul > li').children("ul").addClass('ul-one');$('.menu > ul > li').children("ul").addClass('container');$('.menu > ul > li > ul').children("li").addClass('li-one');//links mmt
    $(".menu .ul-root > li > ul").before("<span href=\"#\" class=\"btn-root\ arrow\ down\">.</span>");$(".menu .ul-one > li > ul").before("<span href=\"#\" class=\"btn-one\ arrow\ down\">.</span>");$(".menu .ul-two > li > ul").before("<span href=\"#\" class=\"btn-two\ arrow\ down\">.</span>");setTimeout(function () {$('.menu > ul > li > ul > li').children("ul").addClass('ul-two');}, 300);$(".menu > ul > li").each(function () {$(this).hover(function (e) {//if ($(window).width() > 943) {
            if (window.matchMedia("(min-width: 993px)").matches) { $(this).find("ul:first").stop(true, true).slideDown(150); }}, function (e) {//if ($(window).width() > 943) {
            if (window.matchMedia("(min-width: 993px)").matches) { $(this).find("ul:first").slideUp(50); }});});//the following hides the menu when a click is registered outside-mmt
    $(document).on('click', function (e) {if ($(e.target).parents('.menu').length === 0);$(".menu > ul").removeClass('show-on-mobile');});$(window).on('load resize', function (e) {//if ($(window).width() > 943) {
        if (window.matchMedia("(min-width: 993px)").matches) {$('.menu').addClass('menu-desktop');} else if (window.matchMedia("(max-width: 992px)").matches) {$('.menu').removeClass('menu-desktop');}});
    //------------ul-one-------------------
    $(".menu > ul > li .btn-root").click(function (e) {//debugger;
        var imsc = $(this).parent().children("ul:first");var previmsc = imsc.css('display');//if ($(window).width() < 943) {
        if (window.matchMedia("(max-width: 992px)").matches) {$(".menu > ul > li > ul").hide(800);if (previmsc !== 'block') {imsc.slideDown(400);$(this).addClass('up-root');$(this).parent().addClass('menu-open');} else {$(this).removeClass('up-root'); $(this).parent().removeClass('menu-open');}} e.preventDefault();});
    //-------------------keypress-----
    //-----------------ul-two------------
    $(".ul-one > li .btn-one").click(function (e) {var imsc2 = $(this).parent().children("ul:first"); var previmsc2 = imsc2.css('display');//if ($(window).width() < 943) {
        if (window.matchMedia("(max-width: 992px)").matches) { $(".ul-one > li > ul").hide(800); if (previmsc2 !== 'block') { imsc2.show(400); $(this).addClass('up-one'); } else { $(this).removeClass('up-one'); } } e.preventDefault();});//buttom close responsive
    $(".menu > ul").css('height', 'auto');$(".menu-mobile").bind('click', function (e) {e.preventDefault();$(".menu > ul").slideToggle('slow');});
    //---resize------
    $(window).on('resize', function () {//if ($(window).width() > 943) {
          if (window.matchMedia("(min-width: 993px)").matches) {$('.menu .ul-one').hide();$(".menu > ul > li .btn-root").removeClass('up-root');$(".menu > ul > li").removeClass('menu-open');//$('.part-megamenu .cdd0_main_menu li').removeClass('ishow');
            $('.menu .ul-one .cdd0_sub_menu').show();}});
    //---------for mobile-------------
    $('.menu-dropdown-icon > a').on('focus', function (e) {$(this).each(function () {$(this).off('keyup'); $(this).keyup(function (e) {var code = (e.keyCode ? e.keyCode : e.which); if (code === 40) {$(this).next().click();//alert(code);
    } else if (code === 38) { $(this).next().click().one(); } e.preventDefault();});}); return true;}); setTimeout(function () {$('.menu .li-root ').each(function () { var i = 0; $(this).find('.ul-one a').attr('tabindex', "-1"); $(this).find('.ul-one  a').each(function () { i++; $(this).attr('index', i); }); if ($(this).hasClass('item5')) { $(this).find('.ul-one ul ul.main').addClass('col_menu'); } else { $(this).find('.ul-one ul').not('.main').children('.title').addClass('col_menu'); } });
        //------------------keyboard-------------------
        var top_level_links = $('.menu-desktop > ul > li > a'); $(top_level_links).keydown(function (event) {if (event.which == 37) {event.preventDefault();// This is the last item
                if ($(this).parent('li').next('li').length == 0) {$(this).parents('ul').find('> li').first().find('a').first().focus();//openmenu;
                } else { $(this).parent('li').next('li').find('a').first().focus(); }// openmenu;
                $(window).resize();} else if (event.which == 38) {event.preventDefault(); if ($(this).parent('li').find('ul').length > 0) { $(this).parent('li').find('ul').find('a').attr('tabIndex', 0).last().focus(); }//openmenu;
                $(this).trigger('mouseover');} else if (event.which == 39) {event.preventDefault();// This is the first item
                if ($(this).parent('li').prev('li').length == 0) { $(this).parents('ul').find('> li').last().find('a').first().focus(); } else { $(this).parent('li').prev('li').find('a').first().focus(); }//	 openmenu;
                $(window).resize();//$(this).trigger('mouseover');
            } else if (event.which == 40) {event.preventDefault(); if ($(this).parent('li').find('ul').length > 0) { $(this).parent('li').find('ul').find('a').attr('tabIndex', 0).first().focus(); }//openmenu;
                $(this).trigger('mouseover');} else if (event.which == 13) {if ($(this).parent().hasClass('navitem')) {event.preventDefault();//openmenu;
                }} else if (event.which == 9) { $(window).resize(); }}); var links = $(top_level_links).parent().find('  li  a'); $(links).keydown(function (event) {if (event.which == 38) {event.preventDefault();// This is the first item
                var Index = $(this).attr('index'); Index--; $(this).closest('.li-root').find('a').each(function () { if ($(this).attr('index') == Index) { $(this).focus(); } }); if (Index == 0) {//closemenu();
                    $(window).resize();}} else if (event.which == 40) {event.preventDefault();//debugger;
                var Index = $(this).attr('index'); Index++; $(this).closest('.li-root').find('a').each(function () { if ($(this).attr('index') == Index) { $(this).focus(); } });} else if (event.which == 37) {event.preventDefault(); if ($(this).closest('.li-one').next('.li-one').length != 0) {// console.log($(this).closest('.li-one').prev('.li-one').find('a').first().text())
                    $(this).closest('.li-one').next('.li-one').find('a').first().focus();} else { $(this).closest('.li-root').find('.ul-one').find('a[index="1"]').focus(); }} else if (event.which == 39) {event.preventDefault(); if ($(this).closest('.li-one').prev('.li-one').length != 0) {//  console.log($(this).closest('.li-one').prev('.li-one').find('a').first().text())
                    $(this).closest('.li-one').prev('.li-one').find('a').first().focus();} else { $(this).closest('.li-root ').find('.ul-one').find('a[index="1"]').focus(); }}});}, 1000);});