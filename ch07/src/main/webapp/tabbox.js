//jQuery 버전
var TabBox = {
	init: function(){
		$(function(){
			var $a = $(".tab-box ul li");//유사 배열

			for(var i=0;i<$a.length;i++){
				var b = $a.get(i);
				$(b).click(TabBox._onTabClicked);				
			}			
		});		
	},		
	_onTabClicked : function onTabClicked(){		

		var _this = $(this);

		var _textContent = this.textContent; //this.innerHTML, this.innerText , textContent 3개 차이?
		
		$(function(){
			$(".tab-box ul li").removeClass("selected");
			_this.addClass("selected");
			
			$(".tab-box div").html("<h1>"+_textContent+"</h1>");
		});
		

	} 
}

