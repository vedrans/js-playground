$(document).ready(function() {
			$('input[name="name"]').focus();  
			$("#contFrm").validate({
			 submitHandler: function(form) {
			   $('[name="send"]').attr("disabled","disabled");
				 var postTo = 'send.php';
				 var n = $('[name=name]').val();
			     var e = $('[name=email]').val();
			     var s = $('[name=subject]').val();
			     var m = $('[name=message]').val();
			     var a = true;
				 $('#contFrm').attr("style","display: none;");
				 $('#status').html('Connecting...');
				 $('[name="send"]').attr("disabled","disabled");
				 $.post(postTo,{name: n, email: e,subject: s, message:m, ajax:a} ,
				 function(data) {
				 	if(data.success) {
						$('#status').html(data.message);				 
				 		$('[name="send"]').removeAttr("disabled");
					} else {
					    $('#status').html(data.message);				 
				 		$('[name="send"]').removeAttr("disabled");
						$('#contFrm').removeAttr("style");
					}				
				 },'json');
			 }
			});
			
			 jQuery(function($){
		        $(".tweet").tweet({
		            username: "VedranStankovic",
		            join_text: "auto",
		            avatar_size: 32,
		            count: 1,
		            auto_join_text_default: "said,", 
		            auto_join_text_ed: "is",
		            auto_join_text_ing: "we were",
		            auto_join_text_reply: "we replied to",
		            auto_join_text_url: "has shared this:",
		            loading_text: "loading tweets..."
		        });
		    });
		});