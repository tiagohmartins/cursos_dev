var trs = document.getElementsByTagName("tr");

percorreArray(trs, function (tr) {
	tr.addEventListener("mouseover",function(tr){
		this.setAttribute("bgcolor", "grey");
	})
});