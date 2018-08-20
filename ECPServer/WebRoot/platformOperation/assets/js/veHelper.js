//EIO 抽注
var cVe= new EIO.ve();
var cVei = new EIO.vei();
var cVeUti = new EIO.veUti();
var cVeName="VeDemo1";//定义本应用的Ve引擎名称，用户自定义，用作服务按的消息处理调度
var cServerUri="/ECPServer/EIOServletMsgEngine";
var cMsgConfigure;
var pageSize = 15;

var webSocketIp = "222.201.145.241";
//var webSocketIp = "192.168.0.108";//websocket连接的服务器地址
var fileDownloadIp = "222.201.145.241";//系统全局文件下载Ip
var fileDownloadPort = "8888";//目前本系统在服务器上使用的端口号
var outTime = 3600000;//超时限制，单位是毫秒
var curUrl = window.location.pathname.split("/");//判断当前是否进入系统内部，若进入，判断是否有权限。
//添加了weChatRegister页面--linziyue
if(curUrl[curUrl.length-1]!="../../login.jsp"&&curUrl[curUrl.length-1]!="login.jsp"&&curUrl[curUrl.length-1]!="userRegisterPage.jsp")
{
	//监听鼠标是否点击
	$("body").click(function(){
		var now = new Date().getTime();
		//alert(cVeUti.Cookie.getCookie("lastOperTime"));
		var lastOperTime = parseInt(cVeUti.Cookie.getCookie("lastOperTime"))+parseInt(outTime);		
		if(now>lastOperTime)
		{
			
			cVeUti.Cookie.delCookie("userId");
			cVeUti.Cookie.delCookie("lastOperTime");
			alert("您已超时，请点击确定重新登录。");
			window.location.href="../../login.jsp";
		}else
			{
				cVeUti.Cookie.setCookie("lastOperTime",new Date().getTime());
			}		
		
	});
	//监听鼠标是否移动
	onmousemove = function(){
		//alert("鼠标移动");
		var now = new Date().getTime();
		var lastOperTime = parseInt(cVeUti.Cookie.getCookie("lastOperTime"))+parseInt(outTime);
		if(now>lastOperTime)
		{
			cVeUti.Cookie.delCookie("userId");
			cVeUti.Cookie.delCookie("lastOperTime");
			alert("您已超时，请点击确定重新登录。");
			window.location.href="../../login.jsp";
		}else
			{
				cVeUti.Cookie.setCookie("lastOperTime",new Date().getTime());
			}
	};	
	//监听是否有按键按下
	onkeypress  = function(){		
		var now = new Date().getTime();
		var lastOperTime = parseInt(cVeUti.Cookie.getCookie("lastOperTime"))+parseInt(outTime);
		if(now>lastOperTime)
		{
			cVeUti.Cookie.delCookie("userId");
			cVeUti.Cookie.delCookie("lastOperTime");
			alert("您已超时，请点击确定重新登录。");
			window.location.href="../../login.jsp";
		}else
			{
				cVeUti.Cookie.setCookie("lastOperTime",new Date().getTime());
			}
	};
}

/*window.onload=function hasPermission()
{
	var curUrl = window.location.pathname.split("/");
	if(curUrl[curUrl.length-1]!="login.jsp"&&curUrl[curUrl.length-1]!="userRegisterPage.jsp"&&curUrl[curUrl.length-1]!="weChatRegister.jsp")
	{
		if(cVeUti.Cookie.getCookie("userId")=="")
			
		{
			alert("没有访问权限，请先登录");
			window.location.href="login.jsp";
		}	
    }
};*/
function hasPermission()
{

		if(cVeUti.Cookie.getCookie("userId")=="")			
		{
			//alert("没有访问权限，请先登录");
			window.location.href="../../login.jsp";
		}	
}


function exText(id){
	return $("#"+id).val();
}

function inText(id, value){
	$("#"+id).val(value);
}

function exRadio(name){
	var result =$("input[name='"+name+"']:checked").val();
	if(result==undefined) result = "";
	return result;
}

function inRadio(name, value){
	$("input[name='"+name+"'][value='"+value+"']").attr("checked",true);
}

function exSelect(id){
	/*if($("#"+id).val()==='') return "";*/
	return $("#"+id).val();
}

function inSelect(id, value){
	$("#"+id+" option[value='"+value+"']").attr("selected",true);
}

function exCheckbox(name){
	var result="";
	$("input[name='"+name+"']:checked").each(
		function(){ 
			result+=$(this).val()+","; 
		}
	);
	if(result!="") result=result.substring(0, result.length-1);
	return result;

}

function inCheckbox(name,value){
	var vals = value.split(",");
	for(var key in vals){
		var val = vals[key];
		$("input[name='"+name+"'][value='"+val+"']").attr("checked",true);
	}
}

function parseDate(ds){
	ds= ds.split(".")[0];
	ds = ds.replace(/-/g, '/');
	ds = ds.replace('T', ' ');
	ds = ds.replace(/(\+[0-9]{2})(\:)([0-9]{2}$)/, ' UTC\$1\$3');
	d = new Date(ds);
	return d;
}

function exDate(id){
	if($("#"+id).val() == "") return "";
	var date = parseDate($("#"+id).val());
	return date.Format("yyyy-MM-dd hh:mm:ss");
}

function inDate(id, value){
	$("#"+id).val(parseDate(value).Format("yyyy-MM-dd"));
	$("#"+id+"_picker").datetimepicker("update");
}

function inDatetime(id, value){
	$("#"+id).val(parseDate(value).Format("yyyy-MM-dd hh:mm:ss"));
	$("#"+id+"_picker").datetimepicker('update');
}

function getParam() {
	var url = location.search; //获取url中"?"符后的字串
	var theRequest = {};
	if (url.indexOf("?") != -1) {
		var str = url.substr(1);
		strs = str.split("&");
		for(var i = 0; i < strs.length; i ++) {
			theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
		}
	}
	return theRequest;
}

function getUserId(){
	var cLoginPermission =cVeUti.readLoginPermit();
	return cLoginPermission["cUserid"];
}

function getUserName(){
	var cLoginPermission =cVeUti.readLoginPermit();
	return cLoginPermission["cUsername"];
}


function confirmClose(){
	$("#curtain").css("display","none");
	$("#changePassword").css("display","none");
	cVeUti.Cookie.delCookie('VeLoginPermit');
	$.cookie("lastOperTime","",{ expires: -1 });
	window.location.href="/Fastcard/index.html";
 }
function scheduledLogout(){
	var url = location.href;
	var temps = url.split("/Fastcard/html/");
	if(temps.length<2) return;
	else url=temps[1];
	if(url=="common/login.html") return;
	var min=JSON.parse(cVeUti.Cookie.getCookie("param")).session_expire;
	if(!min) min=30;
	if(!cVeUti.Cookie.getCookie("lastOperTime") || new Date().getTime()-cVeUti.Cookie.getCookie("lastOperTime")<(min*60* 1000)){
		cVeUti.Cookie.setCookie("lastOperTime",new Date().getTime());
	}else{
		msgbox("提示",2,"登陆超时，请重新登录");
		setTimeout(logout,1500);
	}
}

//消息弹出框
$("body").append('<div id="msgbox"></div>');
$("body").append('<div class="msgbox"></div>');
function msgbox(title,type,message){//title:alert框标题（统一用”提示“）；type 1：操作成功，2：操作失败，3：警告；message:内容（比如：制卡成功)
	 $(".msgbox").empty();
	 if(type == 1){
		   srcName="assets/img/alertSuccess.png";
	   }else if(type == 2){
		   srcName="assets/img/alertFail.png";
	   }else if(type == 3){
		   srcName="assets/img/alertWarn.png";
   }else{
	   return;
	   }
	$(".msgbox").append('<div class="modal-dialog  modal-dialog-width" role="document">'+
				'<div class="modal-header alert-title">'+title+'：</div>'+
				'<div class="modal_form_content">'+
				'<div>'+
					'<p class="alert-content"><img class="img" src="'+srcName+'"/><span class="alert-msg">'+message+'</span></p>'+
					'</div>'+
					'<button type="button" class="alert-modal-close btn  btn-primary my-msgbox-closeButton" onclick="msgboxClose();">确定</button>'+
					'</div>'+
		'</div>');
	$("#msgbox").css("display","block");
	$(".msgbox").css("display","block");
}





	
function msgboxClose(){
	$("#msgbox").css("display","none");
	$(".msgbox").css("display","none");
}
//msgbox("提示",1,"操作成功");
//msgbox("提示",2,"操作失败");
//msgbox("提示",3,"请至少选择一条操作记录");



//输入合法性检测方法--只能输入数字、字母和汉字  和空格
//@author--lwj
function inputLegitimacy(id){
	var pattern = new RegExp(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5\ ]/g);
	var value = $("#"+id).val();
//	value = value.replace(/\s/g,"");//去掉所有空格
	if( pattern.test( value ) ){
		msgbox("提示","3","不能输入特殊字符！");
	}
	value=value.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5\ ]/g,'');
	$("#"+id).val( value );
}

//输入合法性检测方法--只能输入数字、字母和汉字 和这些符号（。，、；：？！“”） 以及空格
//@author--lwj
function inputLegitimacy_symbol(id){
	var pattern = new RegExp(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5\.\,\;\:\?\!\"\"\。\，\；\：\？\！\“\”\、\s]/g);
	var value = $("#"+id).val();
//	value = value.replace(/\s/g,"");//去掉所有空格
	if( pattern.test( value ) ){
		msgbox("提示","3","不能输入特殊字符！");
	}
	value=value.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5\.\,\;\:\?\!\"\"\。\，\；\：\？\！\“\”\、\s]/g,'');
	$("#"+id).val( value );
}

//输入合法性检测方法--只能输入数字、字母和空格
//@author--lwj
function inputNumberString(id){
	var pattern = new RegExp(/[^\a-\z\A-\Z0-9\ ]/g);
	var value = $("#"+id).val();
//	value = value.replace(/\s/g,"");//去掉所有空格
	if( pattern.test( value ) ){
		msgbox("提示","3","只能输入数字和字母！");
	}
	value=value.replace(/[^\a-\z\A-\Z0-9\ ]/g,'');
	$("#"+id).val( value );
}


//输入合法性检测方法--input只能输入数字、字母和汉字 ,textarea只能输入数字、字母和汉字 和这些符号（。，、；：？！“”）
//@author--hj
function inputLegitimacy_hj(id,id2){
	if(typeof $("input[id="+id+"]").val()!=="undefined"){//如果是input输入
		var pattern = new RegExp(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g);
		var value = $("#"+id).val();
		value = value.replace(/\s+/g,"");//去掉所有空格
		if( pattern.test( value ) ){
			$("#"+id2).css("display","block");
			return 0;
		}else{
			$("#"+id2).css("display","none");
			return 1;
		}
	}else if(typeof $("textarea[id="+id+"]").val()!=="undefined"){//如果是textarea文本输入
		var pattern = new RegExp(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5\.\,\;\:\?\!\"\"\。\，\；\：\？\！\“\”\、]/g);
		var value = $("#"+id).val();
		value = value.replace(/\s+/g,"");//去掉所有空格 
		if( pattern.test( value ) ){
			$("#"+id2).css("display","block");
			return 0;
		}else{
			$("#"+id2).css("display","none");
			return 1;
		}
	}		
}


//输入合法性检测方法--只能输入数字
//@author--hj
function inputNumber_hj(id,id2){
	var pattern = new RegExp(/[^0-9]/g);
	var value = $("#"+id).val();
	value = value.replace(/\s+/g,"");//去掉所有空格
	if( pattern.test( value ) ){
		$("#"+id2).css("display","block");
		return 0;
	}else{
		$("#"+id2).css("display","none");
		return 1;
	}
}

/*         ------------以下双创平台招聘端js---------

//好友聊天样式回归正常
function setCss()
{
	$("#messageCounter").css("display","none");
	 document.getElementById("messageCounter").innerHTML = "";
 //	this.css("color","#00A2F4");

}


var org_id = cVeUti.Cookie.getCookie("org_id");
var preUrl = document.referrer;//获取上一级页面url
var curUrl = window.location.pathname;//获取当前页面的url

//打开Socket 
if(org_id!="")
{
	var socket = new WebSocket('ws://'+webSocketIp+':8889');
	socket.onopen = function(event) { 
		//发送一个初始化消息
		    socket.send('open_name:'+cVeUti.Cookie.getCookie("org_id"));
		};  
}
var a = document.getElementById("li1").getElementsByTagName("span");
alert(a[0].id);
socket.onclose = function(event) { 
	// 发送一个初始化消息
  //var user_id = cVeUti.Cookie.getCookie("org_id");
  //socket.send('close_name:'+user_id);
};
var user_id = "";
var url = window.location.pathname;
var jsp = url.split("/");
if(jsp[jsp.length-1]!="chat.jsp"&&jsp[jsp.length-1]!="applyInfo.jsp")
	{
		var orgMsgCounters = cVeUti.Cookie.getCookie("msgCounters");
		if(orgMsgCounters!=""&&orgMsgCounters>0)
			{
			 $("#messageCounter").css("display","inline-block");
			 document.getElementById("messageCounter").innerHTML = orgMsgCounters;	
			}else
				{
					$("#messageCounter").css("display","none");
					// document.getElementById("messageCounter").innerHTML = "";
				}
	}else if(jsp[jsp.length-1]=="applyInfo.jsp")
	{
	   //当前界面处于求职信息详情界面
	   if(document.getElementById("user_id").value!=retDataObj.user_id)//该求职用户不是发送消息的用户
	    {
		   var orgMsgCounters = cVeUti.Cookie.getCookie("msgCounters");
			if(orgMsgCounters!=""&&orgMsgCounters>0)
				{
				 $("#messageCounter").css("display","inline-block");
				 document.getElementById("messageCounter").innerHTML = orgMsgCounters;	
				}else
					{
						$("#messageCounter").css("display","none");
						 document.getElementById("messageCounter").innerHTML = "";
					}
	    }
    }

if(org_id!="")
socket.onmessage = function(event)
{
	var retData = event.data;
	var retDataObj=JSON.parse(retData);
	cVeUti.Cookie.setCookie("msgCounters",retDataObj.msgCounters);//当前招聘端所有未读信息条数
	cVeUti.Cookie.setCookie("msgCounter",retDataObj.msgCounter);//当前单个求职者与当前招聘端所有未读信息
	var url = window.location.pathname;
	var jsp = url.split("/");
	if(jsp[jsp.length-1]!="chat.jsp"&&jsp[jsp.length-1]!="applyInfo.jsp")
	{
		//当前界面不处于聊天界面的时候
		//setTimeout(setColor,500);
		 $("#messageCounter").css("display","inline-block");
		 document.getElementById("messageCounter").innerHTML = cVeUti.Cookie.getCookie("msgCounters");
	}else if(jsp[jsp.length-1]=="chat.jsp")
		{
		     //当前界面处于列表聊天界面   
		    if(document.getElementById("user_id").value==retDataObj.user_id)//若正在和该用户聊天
	    	{
		    	$("#messageList").append(
						'<li style="list-style-type: none" id="myLi'+messageNum+'"><p class="time"><span id="time'+messageNum+'"></span></p>'+
                      '<div class="main"><img class="avatar" width="30" height="30" src="assets/img/chatImage/candidate.jpg">'+                        
                      '<div class="leftText"><div class="leftArrow"></div><p style="line-height:20px;margin-top:5px;margin-bottom:0px;margin-right:0px;"id="chatItem'+messageNum+'"></p>'+
                       '</div>'+
                  '</div>'+
            '</li>');
			   document.getElementById('chatItem'+messageNum+'').innerHTML=retDataObj.msg;
			   document.getElementById('time'+messageNum+'').innerHTML=getNowFormatDate();
			   messageNum++;
			   setChat_recordStatus(retDataObj.user_id);//将该条聊天记录置为已读
			   var e=document.getElementById("messageBox");//使滚动条置底
				e.scrollTop=e.scrollHeight;
				var curCounter = cVeUti.Cookie.getCookie("msgCounter");
				var allCounter = cVeUti.Cookie.getCookie("msgCounters");
				var n = allCounter - curCounter;
				//alert(curCounter+": "+allCounter+": " +n);
				if(n>=0){
					cVeUti.Cookie.setCookie("msgCounters",n);
				}else{
					cVeUti.Cookie.setCookie("msgCounters","");
				}
			   
	    	}else if(typeof $("#"+retDataObj.user_id+"").html()!="undefined")//没有和该用户聊天，但好友列表里面有该用户
	    		{
	    		    //将该好友从列表中放到第一个的位置
	    			var tag_span = document.getElementById(retDataObj.user_id).getElementsByTagName("span");//获取当前好友的未读提示的id
	    			var tag_p = document.getElementById(retDataObj.user_id).getElementsByTagName("p");//获取当前好友的未读提示的id
	    			var name = document.getElementById(tag_p[0].id).innerHTML;
	    			$("#"+retDataObj.user_id+"").remove();
	    			$("#friendsList").prepend(
							'<li class="active" id = "'+retDataObj.user_id+'" onclick="getRecord(this.id)">'+
							    '<img class="avatar" width="30" height="30"  src="assets/img/chatImage/candidate.jpg">'+ 
							        '<p class="name" id="'+tag_p[0].id+'"></p>'+
							        '<span class="per-counter"id="'+tag_span[0].id+'" style="display:none;"></span>'+
							'</li>');
	    		   // $("#"+retDataObj.user_id+"").css("background","#88CACB");		    		
		    		$("#"+tag_span[0].id+"").css("display","inline-block");
		    		document.getElementById(tag_span[0].id).innerHTML = cVeUti.Cookie.getCookie("msgCounter");
		    		document.getElementById(tag_p[0].id).innerHTML = name;
	    		}else//好友列表里面没有该用户
	    			{
		    			friendsNum++;
						$("#friendsList").prepend(
								'<li class="active" id = "'+retDataObj.user_id+'" onclick="getRecord(this.id)">'+
								    '<img class="avatar" width="30" height="30"  src="assets/img/chatImage/candidate.jpg">'+ 
								        '<p class="name" id="friend'+friendsNum+'"></p>'+
								        '<span class="per-counter"id="messageCounter'+friendsNum+'" style="display:none;"></span>'+
								'</li>');
						if(cVeUti.Cookie.getCookie("msgCounter")>0)
						{
						    $("#'messageCounter"+friendsNum+"'").css("display","inline-block");
						    document.getElementById('messageCounter'+friendsNum+'').innerHTML = cVeUti.Cookie.getCookie("msgCounter");
						}
						document.getElementById('friend'+friendsNum+'').innerHTML=retDataObj.name;
						$("#"+retDataObj.user_id+"").css("background","#88CACB");
	    			}
		}else if(jsp[jsp.length-1]=="applyInfo.jsp")
			{
			   //当前界面处于求职信息详情界面
			   if(document.getElementById("user_id").value==retDataObj.user_id)//该求职用户就是发送消息的用户
			    {
				   if(document.getElementById("textRect").style.display=="none")//会话界面未打开
				   {
					   setTimeout(setSessionButtonColor,500);//变换会话按钮
				   }else//会话界面已打开
					   {
						   $("#chatContent").append(
									'<li style="list-style-type: none" id="myLi'+messageNum+'"><p class="time"><span id="time'+messageNum+'"></span></p>'+
		                            '<div class="main"><img class="avatar" width="30" height="30" src="assets/img/chatImage/candidate.jpg">'+                        
		                            '<div class="leftText"><div class="leftArrow"></div><p style="line-height:20px;margin-top:5px;margin-bottom:0px;margin-right:0px;"id="chatItem'+messageNum+'"></p>'+
		                             '</div>'+
		                        '</div>'+
		                  '</li>');
						   document.getElementById('chatItem'+messageNum+'').innerHTML=retDataObj.msg;
						   document.getElementById('time'+messageNum+'').innerHTML=getNowFormatDate();
						   messageNum++; 
						   setChat_recordStatus(retDataObj.user_id);//将该条聊天记录置为已读
						   var e=document.getElementById("chatContent");//使滚动条置底
							e.scrollTop=e.scrollHeight;
					   }
			    }else//该求职用户不是聊天用户
			    	{
			    	//setTimeout(setColor,500);
				    	 $("#messageCounter").css("display","inline-block");
						 document.getElementById("messageCounter").innerHTML = cVeUti.Cookie.getCookie("msgCounters");
			    	}
			}
 
};
//设置导航栏的好友聊天选项的颜色
function setColor(){
	$("#chatJsp").css("border-radius","10px");
  $("#chatJsp").css("background","#50bc00");
  $("#chatJsp").css("width","100px");
  $("#chatJsp").css("margin-left","30px");
	 setTimeout(setColor1,500);
}
function setColor1(){
  $("#chatJsp").css("background","#00A2F4");
  $("#chatJsp").css("border-radius","10px");
 //console.log("结束");
 setTimeout(setColor2,500);
}
function setColor2(){
	$("#chatJsp").css("border-radius","10px");
  $("#chatJsp").css("background","#50bc00");
  $("#chatJsp").css("width","100px");
  $("#chatJsp").css("margin-left","30px");
  setTimeout(setColor3,1000);
}
function setColor3(){
  $("#chatJsp").css("background","#00A2F4");
  $("#chatJsp").css("border-radius","10px");
 setTimeout(setColor4,1000);
}
function setColor4(){
	$("#chatJsp").css("border-radius","10px");
  $("#chatJsp").css("background","#50bc00");
  $("#chatJsp").css("width","100px");
  $("#chatJsp").css("margin-left","30px");
}
//设置会话按钮的颜色
function setSessionButtonColor(){
  $("#sessionButton").css("background","#50bc00");
	 setTimeout(setSessionButtonColor1,500);
}
function setSessionButtonColor1(){
 // $("#sessionButton").css("background","#00A2F4");
	$("#sessionButton").css("background","#fff");
 setTimeout(setSessionButtonColor2,500);
}
function setSessionButtonColor2(){
  $("#sessionButton").css("background","#50bc00");
  setTimeout(setSessionButtonColor3,1000);
}
function setSessionButtonColor3(){
  $("#sessionButton").css("background","#fff");
 setTimeout(setSessionButtonColor4,1000);
}
function setSessionButtonColor4(){
  $("#sessionButton").css("background","#50bc00");
}

function setChat_recordStatus( id )
{
	   user_id = id;
	   cVe.startReqByMsgHandle(cVeName,'','','reqSetChat_recordStatus','resSetChat_recordStatus','ECP.handle.WebChatRecordHandle.handleMsg');	
}

function reqSetChat_recordStatus()
{
	var req = {};
	req["op"] = "setChat_recordStatus";
	req["user_id"] = user_id;
	req["org_id"] = cVeUti.Cookie.getCookie("org_id");
	cVe.setConn(cServerUri,"POST", true, JSON.stringify(req)); 
}

function resSetChat_recordStatus()
{
	var retData =cVe.XHR.responseText;
	var retDataObj=JSON.parse(retData);
	var retData=retDataObj[cVe.cEioVeDataId];
	if(retData.result!="0")
		{
		    alert("状态更新失败");
		}
}
//设置欢迎您后面的称呼
if(curUrl[curUrl.length-1]!="login.jsp"&&curUrl[curUrl.length-1]!="userRegisterPage.jsp")
{
	var uid = cVeUti.Cookie.getCookie("userId");//招聘端的uid
	var nick_name = cVeUti.Cookie.getCookie("nick_name");//招聘端的nick_name
	if(nick_name!="")
		{
			document.getElementById('navUser_call').innerHTML = nick_name;
		}else
		    {
				document.getElementById('navUser_call').innerHTML = uid;
		    }
}

//获取当前日期
function getNowFormat_Date() {
    var date = new Date();
    var seperator1 = "-";
    //var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
    return currentdate;
}

//获取当前时间
function getNowFormat_time() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
    return currentdate;
}
*/