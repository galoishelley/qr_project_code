$(document).ready(function() {

    var user_name = $.cookie("username_tmp");
    // $("#UserName").addClass("fa fa-user fa-fw");
    $("#UserName").text(user_name);

    // user_add loading pages
    $.ajax({
      type: "POST",
      url: "../classes/class.role.php",
      dataType: "json",
      data: {
          search_con: $('#search_con').val()
      }, 
      success: function (ret) {
          if(ret){
            $("#user_role").html("");//清空info内容
            $.each(ret.data, function(i, item) {
                $("#user_role").append("<option value='"+ item.ROLE_ID +"'>" + item.ROLE_NAME + "</option>");
            });
          }else{
            alert("select失败!"+ data);
          }
          
      },
      error: function(result){
        //请求失败之后的操作
        alert("查询role失败!" + result );
      }
    });

    $("#user_add_cancel").on("click", function(){
      window.location.href="user.html"; 
    });

    //解决表单验证
    $("#user_form").submit(function(ev){ev.preventDefault();});
    $('#user_add_submit').click( function () {
       var bootstrapValidator = $("#user_form").data('bootstrapValidator');
       bootstrapValidator.validate();
       alert(bootstrapValidator.validate());
       if(bootstrapValidator.isValid()){
         $("#user_form").submit();
         // if($("#action_type").val()=="create"){
        
         //    $.ajax({
         //        type: "POST",
         //        url: "../classes/class.func.php",
         //        //dataType: "json",
         //        data:  $("#func_form").serialize(),
         //        success: function (data) {
         //            if(data){
         //              if(data=="2"){
         //                alert("权限编码或权限名称已经存在!");
         //                return;
         //              }
         //              window.location.href="func.html";
         //              //_table.ajax.reload();
         //              //window.location.reload()
         //            }else{
         //              alert("添加失败!" + data);
         //            }
                    
         //        },
         //        error: function(result){
         //          //请求失败之后的操作
         //          alert("添加失败!" + result);
         //          // console.log("添加失败" + data);
         //       }
         //    });
         //  }else if($("#action_type").val()=="update"){
         //    $.ajax({
         //        type: "POST",
         //        url: "../classes/class.func.php",
         //        //dataType: "json",
         //        data:  $("#func_form").serialize(),
         //        success: function (data) {
         //            if(data){
         //              //_table.ajax.reload();
         //              window.location.reload()
         //            }else{
         //              alert("修改失败!"+ data);
         //            }
                    
         //        },
         //        error: function(result){
         //          //请求失败之后的操作
         //          alert("修改失败!" + result );
         //          // console.log("添加失败" + data);
         //       }
         //    });
         //  }
       }
      return false;
    });

    $("#user_map").click(function(){
      window.location.href="user_map.html"; 
    });

    $('#user_form').bootstrapValidator({
　　　message: 'This value is not valid',
    　feedbackIcons: {
        　　　　　　　　valid: 'glyphicon glyphicon-ok',
        　　　　　　　　invalid: 'glyphicon glyphicon-remove',
        　　　　　　　　validating: 'glyphicon glyphicon-refresh'
                    },
      fields: {
          login_name: {
              message: '用户名验证失败',
              validators: {
                  notEmpty: {
                      message: '用户密码不能为空'
                  }
              }
          },
          user_mal: {
              message: '用户名验证失败',
              validators: {

              }
          },
          login_pwd: {
              validators: {
                  notEmpty: {
                      message: '密码不能为空'
                  }
              }
          },
          user_tel1: {
              validators: {

              }
          },
          login_confirm_pwd: {
              validators: {
                  notEmpty: {
                      message: '确认密码不能为空'
                  }
              }
          }, 
          user_tel2: {
              validators: {

              }
          },
          user_name: {
              validators: {
                  notEmpty: {
                      message: '用户姓名不能为空'
                  }
              }
          },         
          user_role: {
              validators: {
                  notEmpty: {
                      message: '用户角色不能为空'
                  }
              }
          },
          user_cardid: {
              validators: {

              }
          },  
          user_contant: {
              validators: {
                
              }
          },
          user_map: {
              validators: {
                
              }
          },
          user_note: {
              validators: {
                  stringLength: {
                      max: 100,
                      message: '长度不能超过100个汉字'
                   }
              }
          } 
        }
    });
  
});