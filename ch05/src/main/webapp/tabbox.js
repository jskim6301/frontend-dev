var TabBox = {
	init: function(){
		window.addEventListener('load', this._onWindowLoad); //여기에 this는 Tabbox
	},		
	_onWindowLoad: function(){
		var divTabBox = document.getElementsByClassName('tab-box')[0];
		var ulTabBox = divTabBox.childNodes[1]
	 	var liTabs = ulTabBox.getElementsByTagName('li');
		
	 	for(var i=0;i< liTabs.length;i++){
			liTabs[i].addEventListener('click',TabBox._onTabClicked); //여기서 this를 쓰면 window  그렇기때문에 TabBox.onTabclicked를 한다
		}
	},
	_onTabClicked : function onTabClicked(){

		var list_Selected = document.getElementsByClassName('selected');

		console.log(list_Selected.length);//0
		(list_Selected.length == 1) && (list_Selected[0].className='');
		
		
		this.className='selected';
		console.log(list_Selected.length);//1
	} 
}