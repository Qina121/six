$(document).ready(function() {
  //定义变量
  var navItem = $(".nav_item");
  var header = $(".y-header");
  var applyBlock = $(".y-applys .block");
  var autoMarketing = $(".auto_marking");
  var win_state = true;
  var consult = $(".y-consult");
  var consultWin = $(".consult_win");
  var emailInput = $(".email");
  var phoneInput = $(".phone");
  var block = $(".y-applys .model .block");
  var functionBlock = $(".function_block");
  var matte = $(".matte");
  var yes = $(".yes");
  var childNav = $(".y-header .child_nav_2");
  var childNava = childNav.find("a");
  var yAbout = $(".y-about");
  var scaleItem = yAbout.find("li");
  var cardRight = $(".email-product .show-card .right");
  var cardLeft = $(".email-product .show-card .left");
  var emailInformation = $('.y-more-information .item');
  var applyH = $('.y-apply-h .block a');
  var titleProduct  = $('.provide-solution .title div');
  var contentSolution = $('.provide-solution .content .example');
  var solutionTriangle = $('.provide-solution .triangle');
  var solutionInfoText = $('.provide-solution .text div');
  var titleCase = $('.example-case .title .case');
  var contentCase = $('.example-case .content');
  var contentExample = $('.example-case .content .block');
  var triangle = $('.example-case .triangle');
  var infoText = $('.example-case .print div');
  var suitText = $('.example-case .suit div');
  var Case_example = $('.example-case .Case_example');
  var provide_example = $('.provide-solution .solution_example');
  var caseTitle = $('.y-example .case .success .successCase');
  var caseBanner = $('.y-example .case .success div');
  var caseNav = $('.y-example .case .success .title div');
  var subNav = $('.y-example .subNav div');
  var noteNum = 0;
  var noteTimer = 0;
  var noteProduct = $('.note-product');
  var productBox = $('.note-product .product .box');
  var productBoxItem = $('.note-product .product .box .item');
  var descBox = $('.note-product .desc .box');
  var signLi = $('.note-product .sign li');
  var bannerText = $('.y-banner .content .text');
  var bannerModel = $('.y-banner .content .model');
  var bannerBlock = $('.y-banner .content .block');
  var bannerDetail = $('.y-banner .content .detail');
  var comming = $('.y-banner .comming-soon');
  var url = location.search;
  var W = $(window).width() + "px";
  var H = $(window).height() + "px";
  var Width = $(window).width();
  var Height = $(window).height();
  var yesT = (Height - $(".yes").height()) / 2 + "px";
  var yesL = (Width - $(".yes").width()) / 2 + "px";
  var textTop = (Height-bannerText.height())/2-30;
  var modelTop = (Height-bannerModel.height())/2-10;
  var commingTop = (Height-comming.height())/2;
  var switchNum = 0;
  var timer = 0;
  
  
  //定义函数
  function slide() {
    applyBlock.stop().animate({ marginTop: "0" }, 600);
  }

  function imgScale(picture) {
    picture.css({ transform: "scale(1.1,1.1)", transition: "0.3s" });
  }
  function imgScale_samll(picture) {
    picture.css({ transform: "scale(1,1)", transition: "0.3s" });
  }

  function countDown() {
    //倒计时
    var endTime = new Date().getTime() + 60 * 1000;
    var timer = 0;
    timer = setInterval(function() {
      var start = new Date().getTime();
      var time = endTime - start;
      if (time <= 0) {
        time = 0;
        clearInterval(timer);
      }

      //秒：
      var s = parseInt((time % (60 * 1000)) / 1000);
      console.log(s);
      $(".code_button").html(s + "s");
      $(".code_button_mf").html(s + "s");
      if (s <= 1) {
        console.log(s);
        $(".code_button").removeAttr("disabled");
        $(".code_button").html("点击获取验证码");
        $(".code_button_mf").removeAttr("disabled");
        $(".code_button_mf").html("点击获取验证码");
      } else {
        $(".code_button").html(s + "s");
        $(".code_button").attr("disabled", "disabled");
        $(".code_button_mf").html(s + "s");
        $(".code_button_mf").attr("disabled", "disabled");
      }
    }, 1000);
  }

  //如果是当前的页面，导航下划线没有移出事件
  function current() {
    var url = window.location.pathname;
    //转换成字符串
    url = url.toString();
    var array = new Array(); //用来存放分分割后的字符串
    array = url.split("/");
    for (var i = 0; i < navItem.length; i++) {
      navItem
          .eq(i)
          .find(".line")
          .stop()
          .animate({ width: "0px", opacity: 0 }, 200);
      if (navItem.eq(i).attr("mark") == array[1]) {
        $(this)
            .find(".line")
            .stop()
            .animate({ width: "0px", opacity: 0 }, 200,function(){
              console.log(1111)
            });
        navItem
          .eq(i)
          .find(".scope")
          .css("color", "#07c6fc");
      } else {
        navItem.eq(i).mouseleave(function() {
          $(this)
            .find(".line")
            .stop()
            .animate({ width: "0px", opacity: 0 }, 200);
          $(this)
            .find(".scope")
            .css("color", "#666");
        });
      }
    }
  }

  function emailZe(s) {
    var val = s.val();
    var re = /(^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+)|(^$)/;
    if (re.test(val)) {
      s.css("border", "1px solid #ccc");
    } else {
      s.css("border", "1px solid red");
    }
  }

  function phoneZe(s) {
    var val = s.val();
    //console.log(val);
    if (val) {
      var t = /^1[345789]\d{9}$/;
      if (t.test(val)) {
        //console.log(11);
        s.css("border", "1px solid #ccc");
      } else {
        //console.log(222);
        s.css("border", "1px solid red");
      }
    }
  }

  function shadow(clock) {
    clock.mouseenter(function() {
      $(this).css("boxShadow", "0px 0px 10px #ccc");
    });
    clock.mouseleave(function() {
      $(this).css("boxShadow", "none");
    });
  }

  function show(item){
    item.mouseenter(function(){
      $(this).find(".information").css('display','flex');
    })
    item.mouseleave(function(){
      $(this).find(".information").css('display','none');
    })
  }
  
  //短信产品切换
  function noteqie(){
    
    noteTimer = setInterval(function(){
      
      if(noteNum>=signLi.length-1){
        noteNum=0;
        productBox.stop().animate({ "marginLeft": -200*signLi.length+'px'}, 300,function(){
          productBox.css("marginLeft",0+'px');
        });
        descBox.stop().animate({ "marginLeft": -300*signLi.length+'px'}, 300,function(){
          descBox.css("marginLeft",0+'px');
        });
      }else{
        noteNum++;
        productBox.stop().animate({ "marginLeft": -200*noteNum+'px'}, 300);
        descBox.stop().animate({ "marginLeft": -300*noteNum+'px'}, 300);
      }
      for(var i=0;i<productBoxItem.length-1;i++){
        signLi.eq(i).css('backgroundColor','#fff');
      }
      signLi.eq(noteNum).css('backgroundColor','#666');
    },2500)
  }

  //成功案例banner
  function caseEnter(_this){
    _this.css({ transform: "scale(1.2,1.2)", transition: "0.3s" });
  }
  function caseLeave(_this){
    _this.css({ transform: "scale(1,1)", transition: "0.3s" });
  }
  caseBanner.mouseenter(function(){
    _this = $(this);
    caseEnter(_this);
    
  });
  caseBanner.mouseleave(function(){
    _this = $(this);
    caseLeave(_this);
  });

  caseBanner.on("click",function(){

  });
  //点击切换
  function exampleSwitch(title,content,mark,desc,suit){
    title.on('click',function(){
      var index = $(this).index();
      switchNum = index;
      for(var i=0;i<title.length;i++){
        title.eq(i).css({"color":"#fff","backgroundColor":"#26c3f2"});
        desc.eq(i).css('display','none');
        if(suit){
          suit.eq(i).css('display','none');
        }
      }
      title.eq(switchNum).css({"color":"#26c3f2","backgroundColor":"#fff"});
      content.stop().animate({ "marginLeft": -1080*switchNum+'px'}, 300);
      desc.eq(switchNum).css('display','block');
      if(suit){
        suit.eq(switchNum).css('display','block');
      }
      
    })
  }
  //气泡点击切换
  function caseSwitch(title,content,mark,desc,suit,sub){
    title.on('click',function(){
      // $(window).scrollTop(430);
      $('body,html').animate({'scrollTop':460},300);
      var index = $(this).index();
      switchNum = index;
      for(var i=0;i<title.length;i++){
        desc.eq(i).css('display','none');
        if(suit){
          suit.eq(i).css('display','none');
        }
        if(sub){
          sub.eq(i).css({ transform: "scale(1,1)", transition: "0.3s" ,backgroundColor:"#fff"});
        }
      }
      content.stop().animate({ "marginLeft": -1080*switchNum+'px'}, 300);
      desc.eq(switchNum).css('display','block');
      if(suit){
        suit.eq(switchNum).css('display','block');
      }
      if(sub){
        sub.eq(switchNum).css({ transform: "scale(1.3,1.3)", transition: "0.3s" ,backgroundColor:"#f2f2f2"});
      }
      
    })
  }
  //成功案例气泡的单个点击事件
  caseTitle.on("click",function(){
    $('body,html').animate({'scrollTop':460},300);
      switchNum = 0;
      for(var i=0;i<caseNav.length;i++){
        
        infoText.eq(i).css('display','none');
        
        suitText.eq(i).css('display','none');
        subNav.eq(i).css({ transform: "scale(1,1)", transition: "0.3s",backgroundColor:"#fff" });
      }
      
      Case_example.stop().animate({ "marginLeft": -1080*switchNum+'px'}, 300);
      
      infoText.eq(switchNum).css('display','block');
      
        suitText.eq(switchNum).css('display','block');
        console.log(subNav.eq(switchNum))
        subNav.eq(switchNum).css({ transform: "scale(1.3,1.3)", transition: "0.3s",backgroundColor:"#f2f2f2" });
  })

  //案例切换轮播效果
  function autoSwitch(title,content,mark,desc,suit,sub){

    timer = setInterval(function(){
      if(switchNum>=title.length-1){
        switchNum=0;
        content.stop().animate({ "marginLeft": -1080*title.length+'px'}, 300,function(){
          content.css("marginLeft",0+'px');
        });
      }else{
        switchNum++;
        content.stop().animate({ "marginLeft": -1080*switchNum+'px'}, 300);
        }
      for(var i=0;i<title.length;i++){
        title.eq(i).css({"color":"#fff","backgroundColor":"#26c3f2"});
        // mark.eq(i).css('display','none');
        desc.eq(i).css('display','none');
        if(suit){
          suit.eq(i).css('display','none');
        }
        if(sub){
          sub.eq(i).css({ transform: "scale(1,1)", transition: "0.3s",backgroundColor:"#fff" });
        }
      }
      title.eq(switchNum).css({"color":"#26c3f2","backgroundColor":"#fff"});
      desc.eq(switchNum).css('display','block');
      if(suit){
        suit.eq(switchNum).css('display','block');
      }
      if(sub){
        sub.eq(switchNum).css({ transform: "scale(1.3,1.3)", transition: "0.3s",backgroundColor:"#f2f2f2" });
      }
      
    },3500);
    
  }
  
  //判断表单内容是否有空值
  function cmd(formInput) {
    var ipt = formInput.find("input"); //查找divbox这个div里的所有文本框
   
    for (var i = 0; i < ipt.length; i++) {
      //循环
      if (ipt[i].value.length == 0) {
        //如果其中一个文本框没有填写
        ipt[i].focus();
        return false; //返回false
      }
    }
    return true; //都已经填写，返回true
  }

  //提交表单
  function test(formId) {
    //验证是否注册成功
    var form = new FormData(formId);
    //             var req = new XMLHttpRequest();
    //             req.open("post", "${pageContext.request.contextPath}/public/testupload", false);
    //             req.send(form);
    $.support.cors = true;
    $.ajax({
      url: "https://wellemail.com/Service/SolutionsConsulting",
      type: "post",
      data: form,
      processData: false,
      contentType: false,
      success: function(data) {
        console.log(data.Accepted);
        if (data.Accepted) {
          $(".matte").css("display", "block");
          var len = $(formId).find("input").length;
          for (var i = 0; i < len; i++) {
            $(formId)
              .find("input")
              .eq(i)
              .attr("value", "");
          }
        } else {
          alert("验证码错误或失败，请重新填写提交！");
        }
      },
      error: function(e) {
        alert("错误！！");
      }
    });
  }

  function random(formId) {
    //验证随机码是否正确
    var form = new FormData(formId);
    //随机码验证
    $.ajax({
      url: "https://wellemail.com/Service/SendMobileCode",
      type: "post",
      data: form,
      processData: false,
      contentType: false,
      success: function(data) {
        console.log("成功！！");
        console.log(data);
        if (data.Accepted) {
          console.log(1111);
          countDown(); //倒计时
        } else {
          alert("随机码输入错误！！！！！");
        }
      },
      error: function(e) {
        console.log(222222);
        alert("错误！！");
      }
    });
  }

  //调用函数
 
    $('.y-banner .content').css('height',Height-70+"px");    
    bannerText.css('paddingTop',textTop+'px');
    bannerModel.css('paddingTop',modelTop+'px');    
    comming.css('paddingTop',commingTop+'px');
    //二级导航的宽度等同于屏幕宽度
    childNav.css("width", W);

  window.onresize=function(){
    var W = $(window).width() + "px";
    var Height = $(window).height();
    $('.y-banner .content').css('height',Height-70+"px");
    var textTop = (Height-bannerText.height())/2-30;
    var modelTop = (Height-bannerModel.height())/2-10;
    bannerText.css('paddingTop',textTop+'px');
    bannerModel.css('paddingTop',modelTop+'px');

    //二级导航的宽度等同于屏幕宽度
    childNav.css("width", W);
    //comming 的top
    var commingTop = (Height-comming.height())/2;
    comming.css('paddingTop',commingTop+'px');
  }
  
bannerBlock.mouseenter(function() {
  var index = $(this).index();
  bannerBlock.stop().animate({ opacity: "0" }, 200,function(){
    bannerBlock.css('display','none');
   
    bannerDetail.eq(index).css('display','block');

    bannerDetail.eq(index).stop().animate({ "opacity": "1" }, 200);
  });

});

bannerDetail.mouseleave(function() {
  var index = $(this).index();
  console.log(index);
  $(this).stop().animate({ opacity: "0" }, 300,function(){
    $(this).css('display','none');

    bannerBlock.css('display','block');

    bannerBlock.stop().animate({ opacity: "1" },300);
  });
});

$('.y-banner .content .model').mouseleave(function(){
  bannerDetail.stop().animate({ opacity: "0" }, 300,function(){
    bannerDetail.css('display','none');

    bannerBlock.css('display','block');

    bannerBlock.stop().animate({ opacity: "1" },300);
  });
})
  current();
  navItem.mouseenter(function() {
    $(this)
         .find(".line")
         .stop()
         .animate({ width: "100px", opacity: "1" }, 300);

      $(this)
    .find(".scope")
    .css("color", "#07c6fc");

    $(this).find(".nav_sub").css("display", "block");
    $(this)
      .find(".nav_sub")
      .eq(0)
      .stop()
      .animate(
        { opacity: "1", height:'245px' },
        200
      );
  });
  navItem.eq(3).mouseenter(function(){
    $(this)
      .find(".nav_sub")
      .eq(0)
      .stop()
      .animate(
        { opacity: "1", height:'162px' },
        200
      );
  })
  navItem.mouseleave(function() { 
    $(this)
      .find(".nav_sub")
      .eq(0)
      .stop()
      .animate(
        { opacity: "0", height: "0px"},
        200,function(){
          $(this).css("display", "none");
        }
      );
  });

$('.y-header nav .nav_sub a').mouseenter(function(){
  $(this).css({'backgroundColor':'#07c6fc','color':'#fff'});
})
$('.y-header nav .nav_sub a').mouseleave(function(){
  $(this).css({'backgroundColor':'#fff','color':'#000'});
})

  //监测滚动条大于零时，导航添加下阴影
  $(window).scroll(function() {
    if ($(window).scrollTop() > 0) {
      header.css({ "box-shadow": "0px 0px 2px 2px #ccc" });
    } else {
      header.css({ "box-shadow": "none" });
    }
  });
  //页面加载之后执行三个小block下滑突出的效果
  slide();

  //首页的人工咨询
  consult.on("click", function(event) {
    if (win_state) {
      consultWin
        .stop()
        .animate({ opacity: "1", height: "344px", width: "270px" }, 300);
      win_state = false;
    } else {
      consultWin
        .stop()
        .animate({ opacity: "0", height: "0px", width: "0px" }, 300);
      win_state = true;
    }

    event.stopPropagation();
  });
  consultWin.on("click", function(event) {
    event.stopPropagation();
  });

  $(document).on("click", function() {
    consultWin
      .stop()
      .animate({ opacity: "0", height: "0px", width: "0px" }, 300);
    win_state = true;
  });

  //邮件正则
  emailInput.blur(function() {
    emailZe($(this));
  });
  //手机正则
  phoneInput.blur(function() {
    phoneZe($(this));
  });

  //apply移入效果
  block.mouseenter(function() {
    $(this)
      .find(".desc")
      .css({ display: "block", transition: "1s" });
    $(this)
      .find(".desc")
      .stop()
      .animate({ height: "80px", opacity: "1" }, 300);
  });
  block.mouseleave(function() {
    $(this)
      .find(".desc")
      .stop()
      .animate({ height: "0px", opacity: "0" }, 600, function() {
    
      });
  });

  //蒙版的宽高
  matte.css({ width: W, height: H });
  yes.css({ top: yesT, left: yesL });

  $('.email-product .show-card .left').click(function(){
    var T = $(this);
    view(T);
  })
  $('.email-product .show-card .right').click(function(){
    var T = $(this);
    view(T);
  })

  
  $('.view').click(function(event){
    event.stopPropagation();
    unview();
  })
  //出现蒙版
  function view(T){
    var imgT = (Height - $(".view img").height()) / 2 +$(window).scrollTop()-300+ "px";
    var imgL = (Width - $(".view img").width()) / 2 + "px";
    console.log($(document).scrollTop());
    console.log(imgT)
    console.log(T)
    T.find(".view").css("display",'block');
    $(".view").find('.center').css({ top: imgT, left: imgL });
    $("body").css("overflow","hidden");
  }
  //蒙版消失
  function unview(){
    $('.view').css("display",'none');
    $("body").css("overflow","auto");
  }

  console.log( $('.email-product .view').height())
  

  //导航的小iocn放大缩小
  childNava.mouseenter(function() {
    $(this).css({ transform: "scale(1.1,1.1)", transition: "0.6s" });
  });
  childNava.mouseleave(function() {
    $(this).css({ transform: "scale(1,1)", transition: "0.6s" });
  });

  noteqie();
  productBox.mouseenter(function(){
    clearInterval(noteTimer);
  });
  productBox.mouseleave(function(){
    noteqie();
  });
  descBox.mouseenter(function(){
    clearInterval(noteTimer);
  });
  descBox.mouseleave(function(){
    noteqie();
  });

  //关于我们的页面
  scaleItem.mouseenter(function() {
    imgScale($(this));
  });
  scaleItem.mouseleave(function() {
    imgScale_samll($(this));
  });
  console.log(scaleItem)
  applyH.mouseenter(function() {
    imgScale($(this).find("img"));
  });
  applyH.mouseleave(function() {
    imgScale_samll($(this).find("img"));
  });
  $(".order").click(function() {
    if (cmd($("#formBox"))) {
      test($("#tf")[0]);
    } else {
      alert("请将表单填写完整");
    }

    return false;
  });

  $(".tryOne").click(function() {
    console.log(3333);
    if (cmd($("#mfFull"))) {
      test($("#mf")[0]);
    } else {
      alert("请将表单填写完整");
    }

    return false;
  });

  $(".code_button").click(function(e) {
    e.preventDefault();
    random($("#tf")[0]); //获取短信验证码
  });
  $(".code_button_mf").click(function(e) {
    e.preventDefault();
    random($("#mf")[0]); //获取短信验证码
  });

  //点击OK清除浮层
  $(".OK").click(function() {
    $(".matte").css("display", "none");
    $('#tf')[0].reset();
  });

  //点击刷新更换随机码
  $(".redraw").click(function(e) {
    e.preventDefault();
    $(".random")
      .find(".randomImg")
      .attr(
        "src",
        "https://wellemail.com/Service/CheckCodeImage?" + new Date().getTime()
      );
  });

  shadow(cardRight);
  shadow(cardLeft);
  
  //关于我们
  shadow(scaleItem);
  shadow(scaleItem);
  
  exampleSwitch(titleCase,Case_example,triangle,infoText,suitText);
  exampleSwitch(titleProduct,provide_example,solutionTriangle,solutionInfoText);
  autoSwitch(titleCase,Case_example,triangle,infoText,suitText,subNav);
  caseSwitch(caseNav,Case_example,triangle,infoText,suitText,subNav);
  caseSwitch(subNav,Case_example,triangle,infoText,suitText,subNav);
  contentCase.mouseenter(function(){
    clearInterval(timer);
  })
  contentCase.mouseleave(function(){
    autoSwitch(titleCase,Case_example,triangle,infoText,suitText,subNav);
  })
  
});

