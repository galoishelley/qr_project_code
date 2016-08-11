$(document).ready(function() {

    var user_name = $.cookie("username_tmp");
    // $("#UserName").addClass("fa fa-user fa-fw");
    $("#UserName").text(user_name);

    var _table = $('#dataTables-example').DataTable({
      "bDestroy": true,
      "responsive": true,
      "bPaginate": true,//分页按钮
      "bLengthChange" : false,//每行显示记录数
      "bFilter": false,//搜索栏
      "bSort": true,//排序
      "bInfo": true,//Showing 1 to 10 of 23 entries 总记录数没也显示多少等信息
      "bAutoWidth": false,
      "bDeferRender": true,
      "bSortClasses": false,
      // "sPaginationType": "full_numbers", //用于指定分页器风格
      "sPaginationType": "full_numbers",
      //"aLengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
      "iDisplayLength": 14,  //确定选择每页展示个数列表和默认每页展示个数设置
      // "pagingType": "scrolling",
       // "sPaginationType": "jPaginator",
      //"serverSide": true,
      // bProcessing: true,
      // bScrollInfinite: true,
      // bSortClasses: false, //不清楚是做什么用的，如果处理大量数据时，必须关闭

      //sScrollX: "100%",
      //bScrollCollapse: true,

      // sScrollY: "200px",
      // bPaginate: false,
      // "ajax": {
      //   url: "../ajax/data/role.json",
      // },
      "ajax": {
        //url: "../ajax/data/role_demo.json",
        type: "POST",
        url: "../classes/class.user.php",
        //dataType: "json",

        data: function ( d ) {
            d.search_con =  $('#search_con').val();
        }
      },
      // "ajax": "../classes/class.b_roles.php", 
      // "order": "",
      "columns": [
        {
          "class": "col_0_class",
          "data": null,
          "defaultContent": "<input type='checkbox' id='func_chk_list' name='func_chk_list'>"
        },
        {
          "class": "col_1_class",
          "data": null,
        },
        // { "data": "order_id" },
        { 
          "class": "col_2_class",
          "data": "LOGIN_NAME" 

        },
        { 
          "class": "col_3_class",
          "data": "LOGIN_PWD" 
        },
        { "data": "USER_NAME" },
        { 
          "class": "col_center_class",
          "data": "USER_GENDER" 
        },
        { "data": "USER_TEL" },
        { 
          "class": "col_center_class",
          "data": "ROLE_NAME" 
        },
        { "data": "USER_ADDR" },
        { "class": "col_center_class",
          "data": null,
          "defaultContent": "<img src='../images/mis_icon_01.png' id='table_info'><img src='../images/mis_icon_02.png' id='table_update'><img src='../images/mis_icon_02.png' id='table_update'>"
        },
        { 
          "visible": false,
          "data": "UPDATE_DATE"
        }

      ],

      "oLanguage": {
         "oAria": {
             "sSortAscending": " - click/return to sort ascending",
             "sSortDescending": " - click/return to sort descending"
         },
         "sLengthMenu": "显示 _MENU_ 记录",
         "sZeroRecords": "对不起，查询不到任何相关数据",
         "sEmptyTable": "未有相关数据",
         "sLoadingRecords": "正在加载数据-请等待...",
         "sInfo": "当前显示 _START_ 到 _END_ 条,共 _TOTAL_ 条记录",
         "sInfoEmpty": "当前显示0到0条，共0条记录",
         "sInfoFiltered": "（数据库中共为 _MAX_ 条记录）",
         "sProcessing": "<img src='../resources/user_share/row_details/select2-spinner.gif'/> 正在加载数据...",
         "sSearch": "模糊查询：",
         "sUrl": "",
         //多语言配置文件，可将oLanguage的设置放在一个txt文件中，例：Javascript/datatable/dtCH.txt
         "oPaginate": {
             "sFirst": "首页",
             "sPrevious": " << ",
             "sNext": " >> ",
             "sLast": " 尾页 "
         }
      },

      "columnDefs": [
        {
           "orderable": false,
           "targets": 0,
           "sWidth": "5%"
           
        },
        {
           "orderable": false,
           "targets": 1,
           "sWidth": "5%"
        },
        {
          "orderable": false,
           "targets": 2,
           "sWidth": "10%"
        },
        {
          "orderable": false,
           "targets": 3,
           "sWidth": "10%"
        },
        {
          "orderable": false,
           "targets": 4,
           "sWidth": "5%"
        },
        {
          "orderable": false,
          "sWidth": "5%",
          "targets": 5
        },
        {
          "orderable": false,
           "targets": 6,
           "sWidth": "10%"
        },
        {
          "orderable": false,
           "targets": 7,
           "sWidth": "10%"
        },
        {
          "orderable": false,
           "targets": 8,
           "sWidth": "25%"
        },
        {
          "orderable": false,
          "targets": 9,
          "sWidth": "20%"
        }
       ],//第一列与第二列禁止排序
      "order": [
         [0, null]
      ],

      //"dom": '<"top">rt<"bottom"iflp><"clear">'
      "dom": '<"top">rt<"table_bottom"ip<"#goon">><"clear">'

    });

    $("div#goon").html('<input type="text" name="jumpgo" id="jumpgo"/><button class="btn btn-default" id="btn_jumpgo">确认</button>');
    $("div.table_bottom").addClass('col-md-12');
    $("div#dataTables-example_info").addClass('col-md-3');
    $("div#dataTables-example_paginate").addClass('col-md-7');
    $("div#goon").addClass('dataTables_paginate col-md-2');
    
    //添加索引列
    _table.on('order.dt search.dt',
      function() {
          _table.column(1, {
              search: 'applied',
              order: 'applied'
          }).nodes().each(function(cell, i) {
              cell.innerHTML = i + 1;
          });
      }).draw();

    //单机行，选中复选框
    $('#dataTables-example tbody').on( 'click', 'tr', function (event) {
      $(this).toggleClass('selected');
      var p = this;
        $($(p).children()[0]).children().each(function(){
          if(this.type=="checkbox"){
            if(!this.checked){
              this.checked = true;
            }else{
              this.checked = false;
            }
          }
        });
    });

     //单机行，选中复选框
    $('#dataTables-example tbody').on( 'click', 'input', function (event) {
      if($(this).prop("checked")){
        $(this).closest("tr").addClass('selected');
      }else
      {
        $(this).closest("tr").removeClass('selected');
      }

      event.stopImmediatePropagation();
    });

    //全选
    $("#func_chk_all").click(function(){
      if($(this).prop("checked"))
      {
        $("input[name=func_chk_list]").closest("tr").addClass('selected');
      }else
      {
         $("input[name=func_chk_list]").closest("tr").removeClass('selected');
      }

      $("input[name=func_chk_list]").prop("checked",$(this).prop("checked"));
    });


    //阻止冒泡
    $("#func_chk_list").click(function(e){
      e.stopPropagation();
      return false
    });


    // function loadInfo() {
    //     $.getJSON("loadInfo", function(data) {
    //         $("#info").html("");//清空info内容
    //         $.each(data.comments, function(i, item) {
    //             $("#info").append(
    //                     "<div>" + item.id + "</div>" + 
    //                     "<div>" + item.nickname    + "</div>" +
    //                     "<div>" + item.content + "</div><hr/>");
    //         });
    //         });
    // }
    

    $('#addRow').click( function () {

      $.ajax({
        type:"post",
        url:"user_add.html",
        ceach: false,
        data:"",
        success:function(html){
          // alert("跳转成功");
          // $("#page-wrapper").empty();
          // $("#page-wrapper").html(html);
          window.location.href="user_add.html"; 
        },
        error: function(result){
            //请求失败之后的操作
            console.log("失败" + result);
         }
      });

      

    });


    $('#updRow').click( function () {
      var sel = _table.rows('.selected').data().length;
      if(!sel){
        alert("请选择要修改的数据");
        return;
      }
      if(sel>=2){
        alert("修改只能选择一条数据!");
        return;
      }

      var rowIdx = _table.row('.selected').index();
      var func_code = _table.cell( rowIdx, 2 ).data();
      var func_name = _table.cell( rowIdx, 3 ).data();
      var note = _table.cell( rowIdx, 4 ).data();

      $.ajax({
        type:"post",
        url:"func_add.html",
        ceach: false,
        data:"",
        success:function(html){
          // alert("跳转成功");
          $("#page-wrapper").empty();
          $("#page-wrapper").html(html);
          $(".panel-heading").html("修改权限");
          $("#func_code").val(func_code);
          $('#func_code').attr("readonly",true);
          $("#func_name").val(func_name);
          $("#note").val(note);
          $("#func_add_reset").attr("readonly",true);
          $("#action_type").val("update");
          // $("#page-wrapper").on("click","#func_add_cancel",function(event){
          //   event.preventDefault(); 
          // });  
        },
        error: function(result){
            //请求失败之后的操作
            console.log("修改跳转失败" + result);
         }
      });
    });

    $('#delRow').click( function () {

      //alert( _table.rows('.selected').data().length +' row(s) selected' );

      var dataArr = [];
      var rows = $('tr.selected');
      var rowData = _table.rows(rows).data();
      
      var sel = rowData.length;
      if(!sel){
        alert("请选择要删除的数据");
        return;
      }else{
        var r=confirm("确定要删除数据");
        if (!r) return;
      }

      $.each(rowData,function(key,value){
          dataArr.push(value.FUNC_CODE); 
      });
      //console.log(dataArr);

      // var sel = _table.rows('.selected').data().length;
      // if(!sel){s
      //   alert("请选择要删除的数据");
      //   return;
      // }

      // var rowIdx = _table.row('.selected').index();
      // var cellData = _table.cell( rowIdx, 2 ).data();
      
      // var r=confirm("确定要删除 ROLE_ID:"+cellData);
      // if (!r) return;

      $.ajax({
          type: "POST",
          url: "../classes/class.func.php",
          //dataType: "json",
          data: {
              action_type: "remove",
              func_codes: dataArr
          }, 
          success: function (data) {
              if(data){
                _table.ajax.reload();
              }else{
                alert("删除失败!" + data);
              }
              
          },
          error: function(result){
            //请求失败之后的操作
            alert("error:删除失败!" + result);
         }
      });
    });
    
    //func_add
    $("#page-wrapper").on("click","#func_add_submit",function(){
      alert("hello:"+$("#func_form").serialize());
      //
      if($("#action_type").val()=="create"){
        $.ajax({
            type: "POST",
            url: "../classes/class.func.php",
            //dataType: "json",
            data:  $("#func_form").serialize(),
            success: function (data) {
                if(data){
                  if(data=="2"){
                    alert("权限编码或权限名称已经存在!");
                    exit();
                  }
                  //_table.ajax.reload();
                  window.location.reload()
                }else{
                  alert("添加失败!" + data);
                }
                
            },
            error: function(result){
              //请求失败之后的操作
              alert("添加失败!" + result);
              // console.log("添加失败" + data);
           }
        });
      }else if($("#action_type").val()=="update"){
        $.ajax({
            type: "POST",
            url: "../classes/class.func.php",
            //dataType: "json",
            data:  $("#func_form").serialize(),
            success: function (data) {
                if(data){
                  //_table.ajax.reload();
                  window.location.reload()
                }else{
                  alert("修改失败!"+ data);
                }
                
            },
            error: function(result){
              //请求失败之后的操作
              alert("修改失败!" + result );
              // console.log("添加失败" + data);
           }
        });
      }
      return false;
    });

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

    $("#page-wrapper").on("click","#func_add_reset",function(){
      $("form :input").val("");
    });

    $("#page-wrapper").on("click","#func_add_cancel",function(){
      window.location.reload();
    });

    
});