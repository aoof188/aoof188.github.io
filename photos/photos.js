var render = function(page, data){
	var img = "";
	for (var i = 0; i < data.length; i++) {
		img += '<li><div class="img-box">' + '<a class="img-bg " rel="noopener" data-fancybox="images" href="https://image.aoof188.cn/' + data[i] + '" target="_blank"></a>' + '<img class="lazy" data-original="https://image.aoof188.cn/' + data[i] + '">'  + '</div></li>';
	}
	$(".img-box-ul").append(img);
	$(".img-box-ul").lazyload();
	$("a[rel=example_group]").fancybox();
}
