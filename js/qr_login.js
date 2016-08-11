$(function() {

	 if ($.cookie("rmbUser") == "true") {
        $("#ck_rmbUser").attr("checked", true);
        $("#user_name").val($.cookie("username"));
        $("#pwd").val($.cookie("password"));
    }

	//记住用户名密码
    function Save() {
    	var str_username = $("#user_name").val();
         var str_password = $("#pwd").val();
        if ($("#ck_rmbUser").attr("checked")) {
            $.cookie("rmbUser", "true", { expires: 7 }); //存储一个带7天期限的cookie
            $.cookie("username", str_username, { expires: 7 });
            $.cookie("password", str_password, { expires: 7 });
        }
        else {
            $.cookie("rmbUser", "false", { expire: -1 }); //保存半小时
            $.cookie("username", "", { expires: -1 });
            $.cookie("password", "", { expires: -1 });
        }

        $.cookie("username_tmp", "", { expires: -1 });
        $.cookie("username_tmp", str_username, { expires: 5 });
    };


	$("#login").click(function(){
			//alert("hello");
		 var user_info = {
							user_name:$("#user_name").val(),
							pwd:$("#pwd").val(),
						};
				
			$.ajax({
				url : "../classes/class.login.php",
				data: user_info,
				type : "POST",
				dataType : "JSON",
				error : function(XMLHttpRequest, textStatus, errorThrown) {
					alert(textStatus);
					// alert("login.js: ajax error"+XMLHttpRequest.status);
					// alert("login.js: ajax error"+XMLHttpRequest.readyState);
					// alert(textStatus);
				},
				success: callbackFun
			});
		return false;
	});
	
	function callbackFun(msg){
		iFlag = parseInt(msg.iCount);
		if(! iFlag){
			$("#warning").html(" 账户密码错误");
			$("#warning").addClass("fa fa-minus-circle");
		}else{
			
			//$("#warning").html(" 登录成功");
			location.href="../pages/qr_index.html";
			Save();
		}
	};
	
	$("#menu-toggle").click(function(e) {
		e.preventDefault();
		$("#wrapper").toggleClass("toggled");
	});

});
