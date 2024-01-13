$(function () {

    var widthCont = 110;
    var slider = $('.slider');
    var login = $('.login');
    var signup = $('.signup');
    $('.container').css('width', widthCont + 'rem');
    var sliderMargin = widthCont / 4;
    var sliderWidth = $('.slider').css('width').replace('px', '');
    slider.css('transform', 'translateX(-' + sliderWidth / 2 + 'px)');


    slider.css('margin-left', sliderMargin + "rem");

    $('.signUpForm').hide();

    login.slideUp();
    login.stop().click(function () {

        $('.loginForm').fadeToggle(700);
        $('.signUpForm').fadeToggle(700);
        slider.css("transition", "all .3s cubic-bezier(.87,.32,.79,.6)");
        slider.css('margin-left', sliderMargin + "rem");
        slider.css("height", "40rem");
        login.slideUp();
        signup.slideDown();
    });
    signup.stop().click(function () {
        $('.loginForm').fadeToggle(700);
        $('.signUpForm').fadeToggle(700);
        slider.css("transition", "all .5s cubic-bezier(.87,.32,.79,.6)");
        slider.css('margin-left', sliderMargin * 3 + "rem");
        signup.slideUp()
        login.slideDown();
        slider.css("height", "45rem");
        $("input").css('margin','2.5rem 0');
    });


    //Validation

    var luserName = $("#luserName");
    var lpassword = $("#lpassword");
    var susername = $("#suserName");
    var spassword = $("#spassword");
    var sEmail = $("#email");

    $('input:text,input:password').focus(function () {

        $(this).css("border-bottom", "1.5px solid #ad0000");

    });
    var flagLUserName = -1;
    var flagLPassword = -1;
    var flagSUserName = -1;
    var flagSEmail = -1;
    var flagSPassword = -1;


    luserName.keyup(function () {
        var value = luserName.val();
        if (value.length > 3) {
            luserName.css("border-bottom", "1.5px solid #00e51a");
            flagLUserName = 1;
        } else {
            luserName.css("border-bottom", "1.5px solid #ad0000");
            flagLUserName = -1;
        }
    });

    lpassword.keyup(function () {
        var value = lpassword.val();
        if (value.length > 3) {
            lpassword.css("border-bottom", "1.5px solid #00e51a");
            flagLPassword = 1;
        } else {
            lpassword.css("border-bottom", "1.5px solid #ad0000");
            flagLPassword = -1;
        }

    });

    $(".loginForm").submit(function (event) {
        if (flagLUserName == -1) {
            $(".lUserNameDetail").text("Username Incorrect");
        } else {

            $("lUserNameDetail").empty();
        }
        if (flagLPassword == -1) {
            $(".lPasswordDetail").text("Password Incorrect");
        } else {
            $(".lPasswordDetail").empty();
        }


        if (flagLUserName == -1 || flagLPassword == -1) {
            event.preventDefault();
        } else {

        }

    });

    susername.keyup(function () {
        var value = susername.val();
        if (value.length > 3) {
            flagSUserName = 1;
            susername.css("border-bottom", "1.5px solid #00e51a");
        } else {
            flagSUserName = -1;
            susername.css("border-bottom", "1.5px solid #ad0000");
        }

    });

    var upperCase = new RegExp('[A-Z]');
    var lowerCase = new RegExp('[a-z]');
    var numbers = new RegExp('[0-9]');
    var emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    spassword.keyup(function () {
        var value = spassword.val();
        if (value.length > 3 && value.match(numbers) && value.match(upperCase) && value.match(lowerCase)) {
            flagSPassword = 1;
            spassword.css("border-bottom", "1.5px solid #00e51a");
        } else {
            flagSPassword = -1;
            spassword.css("border-bottom", "1.5px solid #ad0000");
        }

    });


    sEmail.keyup(function () {
        var value = sEmail.val();
        if (emailRegex.test(value)) {
            flagSEmail = 1;
            sEmail.css("border-bottom", "1.5px solid #00e51a");
        } else {
            flagSEmail = -1;
            sEmail.css("border-bottom", "1.5px solid #ad0000");
        }

    });



    $(".signUpForm").submit(function (event) {
        if (flagSUserName == -1) {
            $(".sUserNameDetails").text("User name is not valid!");
        } else {
            $(".sUserNameDetails").empty();
        }

        if (flagSPassword == -1) {
            $(".sPasswordDetails").text("Password must contain a number, a capital letter and length must be greater than 3");
        } else {
            $(".sPasswordDetails").empty();
        }
        if (flagSEmail == -1) {
            $(".sEmailDetails").text("Email is not valid!");
        } else {
            $(".sEmailDetails").empty();
        }
        if (flagSEmail == -1 || flagSPassword == -1 || flagSUserName == -1) {
            event.preventDefault();
        } else {
            //formSubmitted
        }

    });



});
