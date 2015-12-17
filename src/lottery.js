/****
*
* @date 2015/12/17
* @author Jack Fan
* @desc 手机h5版9宫格抽奖小游戏 v0.1 (依赖zepto.js)
* 
* ***/
;(function(){
	
	var LTY = {};

    // 默认配置
    LTY.Conf = {

        antid: 0,
        i: 0,
        d: 0,
        ptag: "#golf",  // 礼品池ID
        znum: 3,        // 轮播圈数
        speed: 100,     // 轮播速度
        winindex: 1     // 中奖位置(1到9)

    };
	
    // 销毁动画id
    LTY.destroy_antid = function(){

        clearTimeout(LTY.Conf.antid);
        LTY.Conf.d = 0;
        LTY.Conf.i = 0;

    };

    // 抽奖轮播动画
    LTY.lottery_animation = function(){

        LTY.Conf.antid = setTimeout(function(){

            LTY.lottery_animation();

        }, LTY.Conf.speed);

        LTY.Conf.d = LTY.Conf.d % 9;
        $(LTY.Conf.ptag).find("em").addClass("active");
        $(LTY.Conf.ptag).find("span").eq(LTY.Conf.d).find("em").removeClass("active");
        LTY.Conf.d++;
        LTY.Conf.i++;

        if (LTY.Conf.i >= 9 * LTY.Conf.znum + parseInt(LTY.Conf.winindex)) {

            LTY.destroy_antid();
            return false;

        }

    };

    // 初始化抽奖
    LTY.lottery  = function(options){

        LTY.Conf = $.extend({},LTY.Conf,options);
        LTY.destroy_antid();
        LTY.lottery_animation();

    };

    window.LTY = LTY;

})();