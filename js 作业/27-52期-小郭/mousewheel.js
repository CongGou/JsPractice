function mousewheel(dom, cb, bool){
    /*
      滚动方向为：e.wheelDetail   正值向前   负值向后
    */

    // 确定事件type
    var type = "mousewheel"
    if(dom.onmousewheel === undefined){ //是火狐
        type = "DOMMouseScroll"
    }

    // 真正的事件函数
    function typeFn(e){
        e = e || window.event
        // 把滚轮事件的方向 处理一致
        e.wheelDetail = e.wheelDelta / 120 || e.detail / -3

        if(!!bool){ //true则 阻止
            // 阻止默认行为
            if(e.preventDefault){
                e.preventDefault()
            }else{
                e.returnValue = false
            }
        }

        cb.call(this, e)
    }

    // 判断是否支持 addEventListener
    if(dom.addEventListener){ //非ie
        dom.addEventListener(type, typeFn)
    }else{ //是ie
        dom.attachEvent("on"+type, typeFn)
    }
}