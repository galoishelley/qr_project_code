$(document).ready(function() {

    var user_name = $.cookie("username_tmp");
    $("#UserName").text(user_name);

    var str = $.cookie("func_data");
    //处理浏览 修改
    if(str != ""){
      var json_value = JSON.parse(str);
      $("#func_code").val(json_value.FUNC_CODE);
      $("#func_name").val(json_value.FUNC_NAME);
      $("#func_note").val(json_value.NOTE);

      if(json_value.IMGID == "updRow"){
        $("#func_id").val(json_value.FUNC_ID);
        $("#action_type").val("update");
        $(".panel-title").html("修改权限");
      }else if(json_value.IMGID == "infoRow")
      {
        $('#func_code').attr("readonly",true);
        $('#func_name').attr("readonly",true);
        $('#func_note').attr("readonly",true);
        $('#func_add_submit').hide();
        $(".panel-title").html("浏览权限");
      }      
    }

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

    //form序列化为json
    $.fn.serializeObject = function()    
    {    
       var o = {};    
       var a = this.serializeArray();    
       $.each(a, function() {    
           if (o[this.name]) {    
               if (!o[this.name].push) {    
                   o[this.name] = [o[this.name]];    
               }    
               o[this.name].push(this.value || '');    
           } else {    
               o[this.name] = this.value || '';    
           }    
       });    
       return o;    
    };  

    //解决表单验证
    $("#func_form").submit(function(ev){ev.preventDefault();});

    $('#func_add_submit').click( function () {
       var bootstrapValidator = $("#func_form").data('bootstrapValidator');
       bootstrapValidator.validate();
       if(bootstrapValidator.isValid()){
         $("#func_form").submit();

         //form序列化成json
         var json_func_form = $("#func_form").serializeObject();
         // var newJson='{"name":"liubei","sex":"男"}';
         // json_func_form.push(JSON.parse(newJson));

        var j =[{"name":"caocao","sex":"男"}];
var newJson='{"name":"liubei","sex":"男"}';
 
j.push(JSON.parse(newJson));
 
alert(JSON.stringify(j));

         alert(JSON.stringify(json_func_form));
         if($("#action_type").val()=="create"){
        
            $.ajax({
                type: "POST",
                url: "../classes/class.func.php",
                dataType: "json",
                data:  json_func_form,
                success: function (msg) {
                    // alert("js:"+msg.data);
                    if(msg.data){
                      if(msg.data=="2"){
                        alert("权限编码或权限名称已经存在!");
                        return;
                      }
                      
                      window.location.href="func.html";
                      //_table.ajax.reload();
                      //window.location.reload()
                    }else{
                      alert("添加失败!" + msg.data);
                    }
                    
                },
                error: function(XMLHttpRequest, textStatus, errorThrown){
                  //请求失败之后的操作
                  alert("添加失败!" + textStatus);
                  // alert(XMLHttpRequest.status);
                  // alert(XMLHttpRequest.readyState);
               }
            });
          }else if($("#action_type").val()=="update"){
            $.ajax({
                type: "POST",
                url: "../classes/class.func.php",
                dataType: "json",
                data: json_func_form,
                success: function (msg) {
                    if(msg.data){
                      //_table.ajax.reload();
                      window.location.href="func.html";
                    }else{
                      alert("修改失败!"+ msg.data);
                    }
                    
                },
                error: function(XMLHttpRequest, textStatus, errorThrown){
                  //请求失败之后的操作
                  alert("修改失败!" + textStatus );
               }
            });
          }
       }
      return false;
    });

    $("#func_add_cancel").click(function(){
      $.cookie("func_data", null);
      window.location.href="func.html"; 
    });

     $('#func_form').bootstrapValidator({
　　　message: 'This value is not valid',
    　feedbackIcons: {
        　　　　　　　　valid: 'glyphicon glyphicon-ok',
        　　　　　　　　invalid: 'glyphicon glyphicon-remove',
        　　　　　　　　validating: 'glyphicon glyphicon-refresh'
                    },
      fields: {
          func_code: {
              message: '权限编码验证失败',
              validators: {
                  notEmpty: {
                      message: '权限编码不能为空'
                  }
              }
          },
          func_name: {
              validators: {
                  notEmpty: {
                      message: '权限名称不能为空'
                  }
              }
          },
          func_note: {
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