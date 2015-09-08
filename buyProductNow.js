window.onload = function(){
	test();
};


function test(){
	
	var btn = document.createElement("div");
	
	btn.setAttribute("value","button");
	btn.setAttribute("type","button");
	btn.style.position = "absolute";
	btn.style.left = "20px";
	btn.style.top  = "100px";
	btn.style.cursor = "pointer";
	btn.style.width = "172px";
	btn.style.height = "66px";
	
	btn.onclick = function() {
        showPopup();
    };
	
	btn.style.backgroundImage = 'url("btn-buy.jpg")';
		
	document.body.appendChild(btn);
	
}


function showPopup(){
	var outer_popup = document.createElement("div");
	
	outer_popup.style.position = "absolute";
	outer_popup.style.width = "100%";
	outer_popup.style.height  = "100%";
	outer_popup.style.background = "rgba(0,0,0,0.38)";

	document.body.appendChild(outer_popup);
	
	
	var model_popup = document.createElement("div");
	
	model_popup.style.position = "absolute";
	model_popup.style.width = "692px";
	model_popup.style.height  = "441px";
	model_popup.style.left  = "300px";
	model_popup.style.background = "#fff";
	model_popup.style.boxShadow = "5px 5px 5px #838383";
	model_popup.style.margin = "30px auto";
	model_popup.style.borderRadius = "6px";
    model_popup.style.backgroundImage = 'url("popup-banner.jpg")';
	outer_popup.appendChild(model_popup);
	
	
	var close_button = document.createElement("div");
	close_button.style.position = "absolute";
	close_button.style.right = "15px";
	close_button.style.top = "10px";
	close_button.style.height = "15px";
	close_button.style.width = "15px";
	
	close_button.onclick = function(){	
		outer_popup.remove();	
	}	
		
	close_button.style.cursor = "pointer";
	close_button.style.backgroundImage = 'url("close.jpg")';
	model_popup.appendChild(close_button);
	
	
	
	
	var btn = document.createElement("div");
	
	btn.style.position = "absolute";
	btn.style.left = "250px";
	btn.style.top  = "370px";
	btn.style.cursor = "pointer";
	btn.style.width = "172px";
	btn.style.height = "50px";
	
	btn.onclick = function() { // Note this is a function
        showPopup();
    };
	btn.style.background = 'url("btn-buy-amazon.jpg") no-repeat';

	model_popup.appendChild(btn);
	
} 