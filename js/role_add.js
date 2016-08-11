$(document).ready(function() {

    var user_name = $.cookie("username_tmp");
    // $("#UserName").addClass("fa fa-user fa-fw");
    $("#UserName").text(user_name);

    // role_add loading pages
      $.ajax({
        type: "POST",
        url: "../classes/class.func.php",
        dataType: "json",
        data: {
            search_con: $('#search_con').val()
        }, 
        success: function (ret) {
            if(ret){
              $("#role_func_div").html("");//清空info内容
              $("#role_func_div").append('<label style="width:70%;">权限<span class="span-red">*</span></label>');
              $.each(ret.data, function(i, item) {
                  //alert(item.FUNC_ID);
                  //清空info内容
                  // var checkBox=document.createElement("input");
                  // checkBox.setAttribute("type","checkbox");
                  // checkBox.setAttribute("id", item.FUNC_ID);
                  // checkBox.setAttribute("name", item.FUNC_NAME);
                  // $("#role_func_div").append("<label class='checkbox-inline'><input type='checkbox' value="+ item.FUNC_ID +">"+ item.FUNC_NAME +"</label>");
                  $("#role_func_div").append('<label><input type="checkbox" class="checkbox" value="'+ item.FUNC_ID +'">'+ item.FUNC_NAME +'</label>');

                  //$('#role_func_div').append(checkBox);
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

    // //func_add
    // $("#func_add_submit").click(function(){
    //   // alert("hello:"+$("#func_form").serialize());
    //   //
    //   if($("#action_type").val()=="create"){
    //     $.ajax({
    //         type: "POST",
    //         url: "../classes/class.func.php",
    //         //dataType: "json",
    //         data:  $("#func_form").serialize(),
    //         success: function (data) {
    //             if(data){
    //               if(data=="2"){
    //                 alert("权限编码或权限名称已经存在!");
    //                 exit();
    //               }
    //               //_table.ajax.reload();
    //               window.location.reload()
    //             }else{
    //               alert("添加失败!" + data);
    //             }
                
    //         },
    //         error: function(result){
    //           //请求失败之后的操作
    //           alert("添加失败!" + result);
    //           // console.log("添加失败" + data);
    //        }
    //     });
    //   }else if($("#action_type").val()=="update"){
    //     $.ajax({
    //         type: "POST",
    //         url: "../classes/class.func.php",
    //         //dataType: "json",
    //         data:  $("#func_form").serialize(),
    //         success: function (data) {
    //             if(data){
    //               //_table.ajax.reload();
    //               window.location.reload()
    //             }else{
    //               alert("修改失败!"+ data);
    //             }
                
    //         },
    //         error: function(result){
    //           //请求失败之后的操作
    //           alert("修改失败!" + result );
    //           // console.log("添加失败" + data);
    //        }
    //     });
    //   }
    //   return false;
    // });

    $('#btnTop').click( function () {
      _table.ajax.reload();
    });

    $("#search_con").keypress(function(event){
        if(event.keyCode == 13){
            //这里写你要执行的事件;
            //alert('你输入的内容为：' + $('#search_con').val());
            _table.ajax.reload();
            event.preventDefault();
        }
    });

    $("#role_add_cancel").on("click", function(){
      window.location.href="role.html"; 
    });

    //解决表单验证
    $("#role_form").submit(function(ev){ev.preventDefault();});
    $('#role_add_submit').click( function () {
       var bootstrapValidator = $("#role_form").data('bootstrapValidator');
       bootstrapValidator.validate();
       alert(bootstrapValidator.validate());
       if(bootstrapValidator.isValid()){
         $("#role_form").submit();
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


    $('#role_form').bootstrapValidator({
　　　message: 'This value is not valid',
    　feedbackIcons: {
        　　　　　　　　valid: 'glyphicon glyphicon-ok',
        　　　　　　　　invalid: 'glyphicon glyphicon-remove',
        　　　　　　　　validating: 'glyphicon glyphicon-refresh'
                    },
      fields: {
          role_code: {
              message: '角色编码验证失败',
              validators: {
                  notEmpty: {
                      message: '角色编码不能为空'
                  }
              }
          },
          role_name: {
              message: '角色名称验证失败',
              validators: {
                  notEmpty: {
                      message: '角色名称不能为空'
                  }
              }
          },
          role_note: {
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