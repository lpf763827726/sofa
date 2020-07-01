$('#chanpin #nrtwo .lunbo>div:first-child').css('display','block')
$('#chanpin #nrtwo .product .botton a').click(function(){
    var page = $(this).index()
    $('#chanpin #nrtwo .product .botton a').removeClass()
    $('#chanpin #nrtwo .product .botton a:nth-child(' + (page+1) + ')').addClass('active')
    $('#chanpin #nrtwo .lunbo>div').css('display','none')
    $('#chanpin #nrtwo .lunbo>div:nth-child(' + (page+1) + ')').css('display','block')
})

$('#fuwu #nrtwo .lunbo>div:first-child').css('display','block')
$('#fuwu #nrtwo .product .botton a').click(function(){
    var page = $(this).index()
    $('#fuwu #nrtwo .product .botton a').removeClass()
    $('#fuwu #nrtwo .product .botton a:nth-child(' + (page+1) + ')').addClass('active')
    $('#fuwu #nrtwo .lunbo>div').css('display','none')
    $('#fuwu #nrtwo .lunbo>div:nth-child(' + (page+1) + ')').css('display','block')
})

$('#index #nrfour .appreciation .piclunbo>div').click(function(){
    var picpage = $(this).index()
    $('#index #nrfour .appreciation .textbox .text').css('display','none')
    $('#index #nrfour .appreciation .textbox .text:nth-child(' + (picpage+1) + ')').css('display','block')
    $('#index #nrfour .appreciation .activepic img').attr('src','img/pic' + (picpage+1) + '.jpg')
})

$('#index #nrfive .lunbo>div:first-child').css('display','block')
$('#index #nrfive .news .botton a').click(function(){
    var page = $(this).index()
    var num
    $('#index #nrfive .lunbo>div').css('display','none')
    $('#index #nrfive .lunbo>div:nth-child(' + (page+1) + ')').css('display','block')
    $('#index #nrfive .news .botton a').removeClass()
    $('#index #nrfive .news .botton a:nth-child(' + (page+1) + ')').addClass('active')
    if (page == 0) {
        num = 103;
    } else if (page == 1){
        num = 370;
    } else {
        num = 637;
    }
    $('#index #nrfive .news .botton .line').css('left',num)
})

$('#index #nrsix .fuwu .fwdiv').hover(
    function(){
        var pic = $(this).index()
        var pnum = ++pic
        $('#index .fwdiv').removeClass('active')
        $('#index .fwdiv').find('span').removeClass()

        $(this).addClass('active')
        if ($(this).hasClass('active')) {
            $(this).find('span').addClass('fw' + pnum + 'active')
        } else {
        }
    }
)

$('#qiye #nrtwo .lunbo>div:nth-child(2)').css('display','block')
$('#qiye #nrtwo .product .botton a').click(function(){
    var page = $(this).index()
    $('#qiye #nrtwo .product .botton a').removeClass()
    $('#qiye #nrtwo .product .botton a:nth-child(' + (page+1) + ')').addClass('active')
    $('#qiye #nrtwo .lunbo>div').css('display','none')
    $('#qiye #nrtwo .lunbo>div:nth-child(' + (page+1) + ')').css('display','block')
})

$('#newslist #nrtwo .lunbo>div:first-child').css('display','block')
$('#newslist #nrtwo .product .botton a').click(function(){
    var page = $(this).index()
    $('#newslist #nrtwo .product .botton a').removeClass()
    $('#newslist #nrtwo .product .botton a:nth-child(' + (page+1) + ')').addClass('active')
    $('#newslist #nrtwo .lunbo>div').css('display','none')
    $('#newslist #nrtwo .lunbo>div:nth-child(' + (page+1) + ')').css('display','block')
})