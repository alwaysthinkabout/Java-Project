﻿<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>店面已审核信息详情</title>
</head>
<body>
    <div id="wrapper">
        <div class="row">
         	<div class="col-md-12">
             	<div class="panel panel-default">
	                 <div class="panel-heading">
	                     <h3><b>店面信息</b></h3>
	                 </div>
	                 <div class="panel-body" id="noStoreInfoBody">
			             <h4 style="color:red;">没有已审核的店面信息！</h4>  
	                 </div>
	                 <div class="panel-body" id="storeInfoBody">
	                     <div class="form-group row">
		                   <div class="col-md-2">
		                       <label style="font-weight:bold;">店面名称：</label>
		                   </div>
		                   <div class="col-md-4">
		                       <label id="store_Name"></label>
		                   </div>
		                   
		                   <div class="col-md-2">
		                       <label style="font-weight:bold;">经营品类：</label>
		                   </div>
		                   <div class="col-md-4">
		                       <label id="category"></label>
		                   </div>
		                 </div>
	               
		               <div class="form-group row">
		                   <div class="col-md-2">
		                       <label style="font-weight:bold;">联系人姓名：</label>
		                   </div>
		                   <div class="col-md-4">
		                       <label id="contact_Name"></label>
		                   </div>
		                   <div class="col-md-2">
		                       <label style="font-weight:bold;">联系人电话：</label>
		                   </div>
		                   <div class="col-md-4">
		                       <label id="contact_Phone"></label>
		                   </div>
		               </div>
	               
		               <div class="form-group row">
		                   <div class="col-md-2">
		                       <label style="font-weight:bold;">店面关键词：</label>
		                   </div>
		                   <div class="col-md-4">
		                      <label id="keyWord"></label>
		                   </div>
		                   <div class="col-md-2">
		                       <label style="font-weight:bold;">地址：</label>
		                   </div>
		                   <div class="col-md-4">
		                       <label id="storeAddress"></label>
		                   </div>
		               </div>
	               
		               <div class="form-group row">
		                   <div class="col-md-2">
		                       <label style="font-weight:bold;">店面简介：</label>
		                   </div>
		                   <div class="col-md-4">
		                       <label id="introduction" ></label>
		                   </div>
		                   <div class="col-md-2">
		                       <a onclick="previewStoreLogo()"><label style="font-weight:bold;">店面LOGO  >></label></a>
		                   </div>
		                   <div class="col-md-4">
		                       <label id="store_Logo" ></label>
		                   </div>
		               </div>
	               </div>
               </div>
               
               <div class="panel panel-default">
	                 <div class="panel-heading">
	                     <h3><b>资质信息</b></h3>
	                 </div>
	                 <div class="panel-body" id="noQualificationInfoBody">
			             <h4 style="color:red;">没有已审核的资质信息！</h4>  
	                 </div>
	                 <div class="panel-body" id="qualificationInfoBody">
	                     <div class="form-group row">
		                   <div class="col-md-2">
		                       <label style="font-weight:bold;">身份证姓名：</label>
		                   </div>
		                   <div class="col-md-4">
		                       <label id="identity_Name"></label>
		                   </div>
		                   
		                   <div class="col-md-2">
		                       <label style="font-weight:bold;">身份证号码：</label>
		                   </div>
		                   <div class="col-md-4">
		                       <label id="identity_Num"></label>
		                   </div>
		                 </div>
	               
		               <div class="form-group row">
		                   <div class="col-md-2">
		                        <a onclick="previewIdentityPhoto()"><label style="font-weight:bold;">身份证照片  >></label></a>
		                   </div>
		                   <div class="col-md-4">
		                       <label id="identity_Photo"></label>
		                   </div>
		               </div>
	               
		               <div class="form-group row">
		                   <div class="col-md-2">
		                       <label style="font-weight:bold;">执照类型：</label>
		                   </div>
		                   <div class="col-md-4">
		                      <label id="license_Type"></label>
		                   </div>
		                   <div class="col-md-2">
		                       <label style="font-weight:bold;">执照名称：</label>
		                   </div>
		                   <div class="col-md-4">
		                       <label id="license_Name""></label>
		                   </div>
		               </div>
	               
		               <div class="form-group row">
		                   <div class="col-md-2">
		                       <label style="font-weight:bold;">执照编号：</label>
		                   </div>
		                   <div class="col-md-4">
		                       <label id="license_Num" ></label>
		                   </div>
		                   <div class="col-md-2">
		                       <label style="font-weight:bold;">执照有效期：</label>
		                   </div>
		                   <div class="col-md-4">
		                       <label id="license_ExpiryDate" ></label>
		                   </div>
		               </div>
		               
		               <div class="form-group row">
		                   <div class="col-md-2">
		                       <label style="font-weight:bold;">执照注册地址：</label>
		                   </div>
		                   <div class="col-md-4">
		                       <label id="license_Address"></label>
		                   </div>
		               </div>
		               
		               <div class="form-group row">
		                   <div class="col-md-2">
		                       <a onclick="previewLicensePhoto()"><label style="font-weight:bold;">执照图片  >></label></a>
		                   </div>
		                   <div class="col-md-4">
		                       <label id="license_Photo"></label>
		                   </div>
		               </div>
		               
		               <div class="form-group row">
		                   <div class="col-md-2">
		                       <label style="font-weight:bold;">许可证名称：</label>
		                   </div>
		                   <div class="col-md-4">
		                      <label id="permit_Name"></label>
		                   </div>
		                   <div class="col-md-2">
		                       <label style="font-weight:bold;">许可证编号：</label>
		                   </div>
		                   <div class="col-md-4">
		                       <label id="permit_Num""></label>
		                   </div>
		               </div>
	               
		               <div class="form-group row">
		                   <div class="col-md-2">
		                       <label style="font-weight:bold;">许可证有效期：</label>
		                   </div>
		                   <div class="col-md-4">
		                       <label id="permit_ExpiryDate" ></label>
		                   </div>
		                   <div class="col-md-2">
		                       <label style="font-weight:bold;">许可证注册地址：</label>
		                   </div>
		                   <div class="col-md-4">
		                       <label id="permit_Address" ></label>
		                   </div>
		               </div>
		               
		               <div class="form-group row">
		                   <div class="col-md-2">
		                       <a onclick="previewPermitPhoto()"><label style="font-weight:bold;">许可证图   >></label></a>
		                   </div>
		                   <div class="col-md-4">
		                       <label id="permit_Photo"></label>
		                   </div>
		               </div>
	               </div>
               </div>
               
               <!-- <div class="panel panel-default">
	                 <div class="panel-heading">
	                     <h3><b>配送信息</b></h3>
	                 </div>
	                 <div class="panel-body">
	                     <div class="form-group row">
		                   <div class="col-md-2">
		                       <label>店面名称：</label>
		                   </div>
		                   <div class="col-md-4">
		                       <label id="store_Name"></label>
		                   </div>
		                   
		                   <div class="col-md-2">
		                       <label>经营品类：</label>
		                   </div>
		                   <div class="col-md-4">
		                       <label id="category"></label>
		                   </div>
		                 </div>
	               
		               <div class="form-group row">
		                   <div class="col-md-2">
		                       <label>联系人姓名：</label>
		                   </div>
		                   <div class="col-md-4">
		                       <label id="contact_Name"></label>
		                   </div>
		                   <div class="col-md-2">
		                       <label>联系人电话：</label>
		                   </div>
		                   <div class="col-md-4">
		                       <label id="contact_Phone"></label>
		                   </div>
		               </div>
	               
		               <div class="form-group row">
		                   <div class="col-md-2">
		                       <label>店面关键词：</label>
		                   </div>
		                   <div class="col-md-4">
		                      <label id="keyWord"></label>
		                   </div>
		                   <div class="col-md-2">
		                       <label>地址：</label>
		                   </div>
		                   <div class="col-md-4">
		                       <label id="storeAddress"></label>
		                   </div>
		               </div>
	               
		               <div class="form-group row">
		                   <div class="col-md-2">
		                       <label>店面简介：</label>
		                   </div>
		                   <div class="col-md-4">
		                       <label id="introduction" ></label>
		                   </div>
		                   <div class="col-md-2">
		                       <label>店面LOGO：</label>
		                   </div>
		                   <div class="col-md-4">
		                       <label id="store_Logo" ></label>
		                   </div>
		               </div>
	               </div>
               </div> -->
               
               <div class="panel panel-default">
	                 <div class="panel-heading">
	                     <h3><b>收款信息</b></h3>
	                 </div>
	                 <div class="panel-body" id="noCollectionInfoBody">
			             <h4 style="color:red;">没有已审核的收款信息！</h4>  
	                 </div>
		             <div class="panel-body" id="collectionInfoBody">
			               <div class="form-group row">
			                   <div class="col-md-2">
			                       <label style="font-weight:bold;">开户行：</label>
			                   </div>
			                   <div class="col-md-4">
			                       <label id="account_Bank"></label>
			                   </div>
			                   <div class="col-md-2">
			                       <label style="font-weight:bold;">开户支行：</label>
			                   </div>
			                   <div class="col-md-4">
			                       <label id="account_SubBank"></label>
			                   </div>
			               </div>
	                     <div class="form-group row">
		                   <div class="col-md-2">
		                       <label style="font-weight:bold;">账户类型：</label>
		                   </div>
		                   <div class="col-md-4">
		                       <label id="account_Type"></label>
		                   </div>
		                   
		                    <div class="col-md-2">
		                       <label style="font-weight:bold;">账号：</label>
		                   </div>
		                   <div class="col-md-4">
		                      <label id="account_Num"></label>
		                   </div>
		                 </div>
	               
		               <div class="form-group row">
		                   <div class="col-md-2">
		                       <label style="font-weight:bold;">开户名：</label>
		                   </div>
		                   <div class="col-md-4">
		                       <label id="account_Name"></label>
		                   </div>
		               </div>
	               </div>
               </div>
               
                <div class="form-group row">
	            	<div class="col-md-2"><label  style="font-weight:bold;">操作人:</label></div>
	            	<div class="col-md-4"><label id="oper_user_name" style=" text-align:left;"></label></div>
	            	<div class="col-md-2"><label style="font-weight:bold;">操作时间:</label></div>
	            	<div class="col-md-4"><label id="oper_time" style=" text-align:left;"></label></div>
			     </div>
		     	 
		     	 <div class="form-group row">
	            	<div class="col-md-2"><label  style="font-weight:bold;">审核人:</label></div>
	            	<div class="col-md-4"><label id="audit_user_name" style=" text-align:left;"></label></div>
	            	<div class="col-md-2"><label style="font-weight:bold;">审核时间:</label></div>
	            	<div class="col-md-4"><label id="audit_time" style=" text-align:left;"></label></div>
			     </div>
			       
			     <div class="form-group row">
	            	<div class="col-md-2"><label style="font-weight:bold;">审核结果:</label></div>
	            	<div class="col-md-4"><label id="audit_result" style="text-align:left;color:red;"></label></div>
			     </div>
			             
		         <div class="form-group row">
		        	<div class="col-md-2"><label style="font-weight:bold;">审核内容:</label></div>
		        	<div class="col-md-4"><label id="content" style="text-align:left;"></label></div>
		        	<div class="col-md-2"><label style="font-weight:bold;">审核理由:</label></div>
		        	<div class="col-md-4"><label id="audit_reason" style=" text-align:left;"></label></div>
		         </div>
		     	 
				 <div class="row">
				      <label style="width:45%"> </label>
				  		 <button type="button" class="btn btn-info btn-sm" onclick="goBack()">返回</button>
				 </div>
               
         </div>
     </div>
     
     <div class="modal fade" id="LOGOPreviewModel" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
		<div class="modal-dialog" >
			<div class="modal-content"> 					
				<div class="modal_form_content" id="LOGOPreviewContent">
				</div>
			</div>
		</div>	
	</div>
	
	<div class="modal fade" id="IDCardPreviewModel" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
		<div class="modal-dialog" >
			<div class="modal-content"> 					
				<div class="modal_form_content" id="IDCardPreviewContent">
				</div>
			</div>
		</div>	
	</div>
	
	<div class="modal fade" id="licensePhotoPreviewModel" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
		<div class="modal-dialog" >
			<div class="modal-content"> 					
				<div class="modal_form_content" id="licensePhotoPreviewContent">
				</div>
			</div>
		</div>	
	</div>
	
	<div class="modal fade" id="permitPhotoPreviewModel" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
		<div class="modal-dialog" >
			<div class="modal-content"> 					
				<div class="modal_form_content" id="permitPhotoPreviewContent">
				</div>
			</div>
		</div>	
	</div>
	
    </div>
    <script src="../../assets/js/ve1.js"></script>
	<script src="../../assets/js/veHelper.js"></script>
    <script src="../../assets/js/grid.locale-cn.js"></script>
    <script src="../../assets/js/jquery.jqGrid.min.js"></script>
    <script src="../../assets/js/simpleUtil.js"></script>
	<script src="../../assets/js/myjs/storeInfo/storeInfoAuditedDetailPage.js"></script>
</body>
</html>