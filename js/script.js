var banner_swipervar = new Swiper('.banner-swiper');
var section = new Swiper('.content-swiper');
function slideTo(index){ //跳转位置
	section.slideTo(index)
}
$.ajax({
	url:'data/data.json',
	success:function(data){
		var str="",
			str_list="",
			str_lists="",
			lecture="",
			rotate="",
			rubbish="";
		for(var i=0;i<data.img_banner.length;i++){
			str+='<li class="swiper-slide"><img src="'+data.img_banner[i]+'"></li>'
		}
		$(".content-swiper_li>ul").html(str);
		var content_swiper_li=new Swiper(".content-swiper_li",{
			pagination:".swiper-pagination"
		});
		for(var j=0;j<data.doc_img.length;j++){
			str_list+='<div><dl>'+
							'<dt><img src="'+data.doc_img[j].doc_images+'" alt=""></dt>'+
							'<dd>'+
							'<p>'+data.doc_img[j].name+'</p>'+
							'<p>'+data.doc_img[j].p_book+'<span>'+data.doc_img[j].dzh+'</span></p>'+
							'</dd>'+
						'</dl></div>'
		}
		str_lists+='<p class="titles">医生说</p>'+str_list;
		$(".doctor").html(str_lists);
		for(var j=0;j<data.lecture_img.length;j++){
			lecture+=' <div class="swiper-slide"><div class="disease"><dl>'+
						'<dt><img src="'+data.lecture_img[j].url[0]+'" alt=""/></dt>'+
						'<dd>'+data.lecture_img[j].txt[0]+'</dd>'+
						'</dl>'+
						'<dl>'+
						'<dt><img src="'+data.lecture_img[j].url[1]+'" alt=""/></dt>'+
					    '<dd>'+data.lecture_img[j].txt[1]+'</dd>'+
			          '</dl></div></div>'
		}
		$(".swiper-container_03_1>div").html(lecture);
		var swiper_container_03_1=new Swiper(".swiper-container_03_1");
		for( var j=0;j<data.rotate_img.length;j++){
			rotate+='<div class="swiper-slide"><div class="rotate">'+
						'<ul>'+
						'<li><img src="'+data.rotate_img[j].url[0]+'" alt=""/></li>'+
						'<li><img src="'+data.rotate_img[j].url[1]+'" alt=""/></li>'+
						'</ul>'+
					 '</div></div>'
		}
		$(".swiper-container_03_2>div").html(rotate);
		var swiper_container_03_2=new Swiper(".swiper-container_03_2");
		for(var j=0;j<data.rubbish_img.length;j++){
			rubbish+='<dl>'+
						'<dt><img src="'+data.rubbish_img[j].url+'" alt=""/></dt>'+
						'<dd>'+
						'<h3>'+data.rubbish_img[j].tit+'</h3>'+
						'<h4>'+data.rubbish_img[j].txt+'</h4>'+
						'<span>'+data.rubbish_img[j].txt_span[0]+'</span><b>'+data.rubbish_img[j].txt_span[1]+'</b>'+
						'</dd>'+
					 '</dl>'

		}
		$(".lecture>.rubbish_1").html(rubbish)
	}
})
