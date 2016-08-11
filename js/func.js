$(document).ready(function() {

    var user_name = $.cookie("username_tmp");
    // $("#UserName").addClass("fa fa-user fa-fw");
    $("#UserName").text(user_name);

    $.cookie("func_data", "");

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
        url: "../classes/class.func.php",
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
          "data": "FUNC_CODE" 

        },
        { 
          "class": "col_3_class",
          "data": "FUNC_NAME" 
        },
        { "data": "NOTE" },
        { "class": "col_center_class",
          "data": null,
          "defaultContent": "<img src='../images/mis_icon_01.png' id='updRow'><img src='../images/mis_icon_02.png' id='infoRow'>"
        },
        { 
          "visible": false,
          "data": "UPDATE_DATE"
        },
        { 
          "visible": false,
          "data": "FUNC_ID"
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
         "targets": 2,
         "sWidth": "15%"
      },
      {
         "targets": 3,
         "sWidth": "15%"
      },
      {
        "orderable": false,
         "targets": 4,
         "sWidth": "50%"
      },
      {
        "orderable": false,
        "targets": 5,
       /* "render" : function(data, type,row) {
            var id = '"' + row.id + '"';
            var html = "<a href='javascript:void(0);'  class='delete btn btn-default btn-xs'  ><i class='fa fa-times'></i> 查看</a>"
            html += "<a href='javascript:void(0);' class='up btn btn-default btn-xs'><i class='fa fa-arrow-up'></i> 编辑</a>"
            html += "<a href='javascript:void(0);'   onclick='deleteThisRowPapser("+ id + ")'  class='down btn btn-default btn-xs'><i class='fa fa-arrow-down'></i> 删除</a>"
            return html;
            }
*/
      }
     ],//第一列与第二列禁止排序
      "order": [
         [0, null],
         [6, "desc"]
      ],//第一列排序图标改为默认

       // initComplete: function () {//列筛选
       //     var api = this.api();
       //     api.columns().indexes().flatten().each(function (i) {
       //         if (i != 0 && i != 1) {//删除第一列与第二列的筛选框
       //             var column = api.column(i);
       //             var $span = $('<span class="addselect">▾</span>').appendTo($(column.header()))
       //             var select = $('<select><option value="">All</option></select>')
       //                     .appendTo($(column.header()))
       //                     .on('click', function (evt) {
       //                         evt.stopPropagation();
       //                         var val = $.fn.dataTable.util.escapeRegex(
       //                                 $(this).val()
       //                         );
       //                         column
       //                                 .search(val ? '^' + val + '$' : '', true, false)
       //                                 .draw();
       //                     });
       //             column.data().unique().sort().each(function (d, j) {
       //                 function delHtmlTag(str) {
       //                     return str.replace(/<[^>]+>/g, "");//去掉html标签
       //                 }

       //                 d = delHtmlTag(d)
       //                 select.append('<option value="' + d + '">' + d + '</option>')
       //                 $span.append(select)
       //             });

       //         }
       //     });

       // },
      // "sDom": '<"top">rt<"bottom"ip><"clear">'
      // dom: 'T<"clear">lfrtip',
      // tableTools: {
      //     "aButtons": [ "copy", "print" ]
      // }
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

    //单机行，中修改按钮
    $('#dataTables-example tbody').on( 'click', 'img', function (event) {
      var imgId = $(this).prop("id");
      var obj_data = _table.row($(this).parents('tr')).data();
      var data = {
            IMGID: imgId,
            DT_ROWID: obj_data.DT_RowId,
            FUNC_ID: obj_data.FUNC_ID,
            FUNC_CODE: obj_data.FUNC_CODE,
            FUNC_NAME: obj_data.FUNC_NAME,
            NOTE: obj_data.NOTE
          };
      var str = JSON.stringify(data);

      $.cookie("func_data", str);
      window.location.href="func_add.html"; 

      event.stopImmediatePropagation();
    });

    /**
     * 删除
     */
    $('img#updRow').click(function () {
        var data = _table.row($(this).parents('tr')).data();
        alert("删除："+data[1] +","+ data[2] );
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
    // $("#func_chk_list").click(function(e){
    //   // e.preventDefault();
    //   e.stopPropagation();
    //   return false;
    // });

   $('#addRow').click( function () {

      window.location.href="func_add.html"; 
      // $.ajax({
      //   type:"post",
      //   url:"func_add.html",
      //   ceach: false,
      //   data:"",
      //   success:function(html){
      //     // alert("跳转成功");
      //     // $("#page-wrapper").empty();
      //     // $("#page-wrapper").html(html);
      //     window.location.href="func_add.html"; 
      //   },
      //   error: function(result){
      //       //请求失败之后的操作
      //       console.log("失败" + result);
      //    }
      // });
      
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
          dataArr.push(value.FUNC_ID); 
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
          dataType: "json",
          data: {
              action_type: "remove",
              func_ids: dataArr
          }, 
          success: function (msg) {
              if(msg.data){
                alert(msg.data);
                _table.ajax.reload();
              }else{
                alert("删除失败!" + msg.data);
              }
              
          },
          error: function(XMLHttpRequest, textStatus, errorThrown){
            //请求失败之后的操作
            alert("error:删除失败!" + textStatus);
         }
      });
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

});