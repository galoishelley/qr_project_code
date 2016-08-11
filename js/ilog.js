$(document).ready(function() {

  var d = new Date()
  var vYear = d.getFullYear()
  var vMon = d.getMonth() + 1
  var vDay = d.getDate()
  var h = d.getHours(); 
  var m = d.getMinutes(); 
  var se = d.getSeconds(); 
  var date_time=vYear+'-'+(vMon<10 ? "0" + vMon : vMon)+'-'+(vDay<10 ? "0"+ vDay : vDay)+' '+(h<10 ? "0"+ h : h)+':'+(m<10 ? "0" + m : m)+':'+(se<10 ? "0" +se : se);
  var vDate_F= vYear+'-'+(vMon<10 ? "0" + vMon : vMon)+'-'+(vDay<10 ? "0"+ vDay : vDay)+' 00:00';
  var vDate_T= vYear+'-'+(vMon<10 ? "0" + vMon : vMon)+'-'+(vDay<10 ? "0"+ vDay : vDay)+' 23:59';
  //document.write(data_time);//输出时间

  $("#begin_time").val(vDate_F);
  $("#end_time").val(vDate_T);

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
    "iDisplayLength": 13,  //确定选择每页展示个数列表和默认每页展示个数设置
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
      url: "../classes/class.ilog.php",
      //dataType: "json",

      data: function ( d ) {
          d.begin_time = $('#begin_time').val();
          d.end_time =  $('#end_time').val();
          // d.begin_time:$('#begin_time').val(),
          // d.end_time:$('#end_time').val()

      }
    },
    // "ajax": "../classes/class.b_roles.php", 
    // "order": "",
    "columns": [
      {
        "class": "col_0_class",
        "data": null,
      },
      { 
        "class": "col_2_class",
        "data": "CREATE_DATE" 

      },
      { 
        "class": "col_3_class",
        "data": "CREATE_USER" 
      },
      { "data": "OPR_CONTENT" },
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
         "sWidth": "2%"
         
      },
      {
         "orderable": true,
         "targets": 1,
         "sWidth": "8%"
      },
      {
        "orderable": false,
         "targets": 2,
         "sWidth": "5%"
      },
      {
        "orderable": false,
         "targets": 3,
         "sWidth": "30%"
      }
     ],//第一列与第二列禁止排序
    "order": [
       [0, null],
       [1, "desc"]
    ],
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
        _table.column(0, {
            search: 'applied',
            order: 'applied'
        }).nodes().each(function(cell, i) {
            cell.innerHTML = i + 1;
        });
    }).draw();

  $('#search_ok').click(function(){
    _table.ajax.reload();
    event.preventDefault();
  });

  $('.form_datetime').datetimepicker({
    //language:  'zh-CN',
    format: "yyyy-mm-dd hh:ii",
    // weekStart: 1,
    todayBtn:  1,
    autoclose: 1,
    todayHighlight: 1,
    startView: 2,
    // forceParse: 0,
        
  });

});