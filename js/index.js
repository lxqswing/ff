/**
 *
 * FF
 * zx 2014 04 307
 *
 */
(function ($) {
    var Index={
        /**
         * 初始化方法,用于功能函数的入口
         * @param {string}
         * @example
         **/
        init:function(){
            //事件绑定
            this.bindEvent();
        },
        /**
         * 事件绑定
         * @param {string}
         * @example
         **/
        bindEvent:function(){
            $('.popclose').live('click',function(){
                $('.pop,.shade').fadeOut(500)
            })
        }
    };
    Index.init();  
})(jQuery);




