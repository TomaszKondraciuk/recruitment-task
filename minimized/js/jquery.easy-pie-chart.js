!function(t){t.easyPieChart=function(o,e){var n,i,a,s,r,c,l,p,h=this
    return this.el=o,this.$el=t(o),this.$el.data("easyPieChart",this),this.init=function(){var o,n
        return h.options=t.extend({},t.easyPieChart.defaultOptions,e),o=parseInt(h.$el.data("percent"),10),h.percentage=0,h.canvas=t("<canvas width='"+h.options.size+"' height='"+h.options.size+"'></canvas>").get(0),h.$el.append(h.canvas),"undefined"!=typeof G_vmlCanvasManager&&null!==G_vmlCanvasManager&&G_vmlCanvasManager.initElement(h.canvas),h.ctx=h.canvas.getContext("2d"),window.devicePixelRatio>1&&(n=window.devicePixelRatio,t(h.canvas).css({width:h.options.size,height:h.options.size}),h.canvas.width*=n,h.canvas.height*=n,h.ctx.scale(n,n)),h.ctx.translate(h.options.size/2,h.options.size/2),h.ctx.rotate(h.options.rotate*Math.PI/180),h.$el.addClass("easyPieChart"),h.$el.css({width:h.options.size,height:h.options.size,lineHeight:""+h.options.size+"px"}),h.update(o),h},this.update=function(t){return t=parseFloat(t)||0,h.options.animate===!1?a(t):i(h.percentage,t),h},l=function(){var t,o,e
        for(h.ctx.fillStyle=h.options.scaleColor,h.ctx.lineWidth=1,e=[],t=o=0;24>=o;t=++o)e.push(n(t))
        return e},n=function(t){var o
        o=t%6===0?0:.017*h.options.size,h.ctx.save(),h.ctx.rotate(t*Math.PI/12),h.ctx.fillRect(h.options.size/2-o,0,.05*-h.options.size+o,1),h.ctx.restore()},p=function(){var t
        t=h.options.size/2-h.options.lineWidth/2,h.options.scaleColor!==!1&&(t-=.08*h.options.size),h.ctx.beginPath(),h.ctx.arc(0,0,t,0,2*Math.PI,!0),h.ctx.closePath(),h.ctx.strokeStyle=h.options.trackColor,h.ctx.lineWidth=h.options.lineWidth,h.ctx.stroke()},c=function(){h.options.scaleColor!==!1&&l(),h.options.trackColor!==!1&&p()},a=function(o){var e
        c(),h.ctx.strokeStyle=t.isFunction(h.options.barColor)?h.options.barColor(o):h.options.barColor,h.ctx.lineCap=h.options.lineCap,h.ctx.lineWidth=h.options.lineWidth,e=h.options.size/2-h.options.lineWidth/2,h.options.scaleColor!==!1&&(e-=.08*h.options.size),h.ctx.save(),h.ctx.rotate(-Math.PI/2),h.ctx.beginPath(),h.ctx.arc(0,0,e,0,2*-Math.PI*o/100,!1),h.ctx.stroke(),h.ctx.restore()},r=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)}}(),i=function(t,o){var e,n
        h.options.onStart.call(h),h.percentage=o,Date.now||(Date.now=function(){return+new Date}),n=Date.now(),e=function(){var i,l
            return l=Date.now()-n,l<h.options.animate&&r(e),h.ctx.clearRect(-h.options.size/2,-h.options.size/2,h.options.size,h.options.size),c.call(h),i=[s(l,t,o-t,h.options.animate)],h.options.onStep.call(h,i),a.call(h,i),l>=h.options.animate?h.options.onStop.call(h,i,o):void 0},r(e)},s=function(t,o,e,n){var i,a
        return i=function(t){return Math.pow(t,2)},a=function(t){return 1>t?i(t):2-i(t/2*-2+2)},t/=n/2,e/2*a(t)+o},this.init()},t.easyPieChart.defaultOptions={barColor:"#ef1e25",trackColor:"#f2f2f2",scaleColor:"#dfe0e0",lineCap:"round",rotate:0,size:110,lineWidth:3,animate:!1,onStart:t.noop,onStop:t.noop,onStep:t.noop},t.fn.easyPieChart=function(o){return t.each(this,function(e,n){var i,a
    return i=t(n),i.data("easyPieChart")?void 0:(a=t.extend({},o,i.data()),i.data("easyPieChart",new t.easyPieChart(n,a)))})}}(jQuery)
