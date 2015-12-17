/****
 *
 * @date 2015/12/17
 * @author Jack Fan
 * @desc 手机h5版9宫格抽奖小游戏demo v0.1 (依赖zepto.js)
 * 
 * ***/
$(function() {

    // 判断是否为移动端
    function is_mobile_agent() {

        return (/iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(
            window.navigator.userAgent.toLowerCase()
        ));

    };

    if (!is_mobile_agent()) {

        $(".ercode").removeClass("js-ds-none");

    }


    // 这只是一个demo而已，根据商品id获取位置
    $("#start").click(function() {

        var _index = $("#golf").find("span[data-goods-id='40']").index() + parseInt(1);

        LTY.lottery({

            znum: 3, // 轮播圈数
            winindex: _index, // 中奖位置
            speed: 100 // 动画速度

        });

    });

});