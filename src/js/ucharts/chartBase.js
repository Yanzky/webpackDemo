import { select } from 'd3-selection'
import { timer } from 'd3-timer'

/**
 * 引入配置文件
 */
import Painter from './Painter'

/**
 * 图表基类
 * 一个抽象的类
 *
 * @property {d3selection} dataRoom - 用于存放绑定数据的元素
 * @property {d3selection} parent - 图表的父容器
 * @property {d3selection} canvas - 画布元素
 * @property {canvasRenderingContext2D} ctx - 画布的2d context对象
 *
 */

export default class ChartBase {
    /**
     * 构造器
     * @param {string|HTMLElement} container - 图表的父容器
     *                                         可以使用css选择器的规则，或者直接传递一个DOM元素
     * @param { object }           props     - 图表属性
     *
     */

    constructor(container, props) {
        // 图表属性
        this.props = Object.assign({
            width: 300,
            height: 300,
            background: 'rgba(0, 0, 0, 0)',
            duration: 600
        }, props)

        const { width, height} = this.props

        // 保存父容器
        this.parent = select(container)

        // 创建画布
        this.canvas = this.parent.append('canvas')
            .attr('with', width)
            .attr('height', height)
        this.ctx = this.canvas.node().getContext('2d')

        this.dataRoom = select(document.createElement(this.ele('dataroom')))

        this.painter = new Painter(this.ctx)

        this._bindSelf()

        // 记录正在执行执行的transition的个数
        this.transitionCount = 0

        //绘制transition所需要的时间
        this.transitionTimer = null
    }

    //绑定方法this
    _bindSelf() {
        this.drawTransition = this.drawTransition.bind(this)
    }


    /**
     * 清空画布
     *
     */

    clear() {
       let { width, height } = this.props;
        this.ctx.clearRect(0, 0, width, height)
    }

    /**
     * 生成元素名称
     * @param {string} name - 元素名称
     * @returns {string} 返回一个以uinnova为命名空间的元素名
     */
    ele(name) {
        return `${name}`
    }

    /**
     * 渲染数据，每次需要更新数据时调用该方法
     * 该方法会调用draw方法以实现真正的绘制
     * @param {object|Array} data - 需要被渲染的数据
     *
     */
    render(data) {
        const { dataRoom } = this
        // 把原始数据绑定到根元素上
        dataRoom.datum(data)
        // 绑定数据到元素
        this.bindData(data)
        // 绘制
        this.draw()
    }

    /**
     * 绘制图表
     * 子类可重写该方法
     */
    draw() {
        // 清空画布
        this.clear()
        this.paintBackground()

        // 绘制绑定好的数据元素
        this.ctx.save()
        this.drawData()
        this.ctx.restore()
    }

    /**
     * 绘制背景
     *
     */
    paintBackground() {
        const { ctx } = this
        const { width, height, backgroundColor } = this.props
        ctx.save()
        ctx.fillStyle = backgroundColor
        ctx.fillRect(0, 0, width, height)
        ctx.restore()
    }

    /**
     * 绑定数据到元素
     * 抽象方法，需要由子类实现
     * @param {object|Array} data - 需要绘制的数据
     */
    bindData(data) {
        console.warn('bindData is not implemented')
    }
    drawData() {
        console.warn('bindData is not implemented')
    }

    /**
     * 获取selection的属性
     * @param {d3.selection} sel   -需要获取属性值的对象
     * @Parma {string}  ...attrs   -属性名
     * @returns {object} 所有指定的属性以对象的键值形式返回
     */
    getAttrs(sel, ...attrs) {
        return attrs.reduce((p, n) =>{
            let value = sel.attr(n)
            isNaN(+value) ? (p[n] = value) : (p[n] = +value)
            return p
        }, {})
    }

    /**
     * 启动绘制transition的timer
     * @private
     */
    _startTransitionTimer() {
        if(!this._transitionTimer) {
            this._transitionTimer = timer( ()=>{
                this.draw()
            } )
        }
    }

    /**
     * 停止绘制transition的timer
     * @private
     */
    _stopTransitionTimer() {
        if(this._transitionTimer) {
            this._transitionTimer.stop()
            this._transitionTimer = null
        }
        this.draw()
    }

    drawTransition(transition) {
        transition.on('start.now', ()=>{
            this._transitionCount++;
            this._startTransitionTimer()
        })
        .on('end.draw', ()=>{
            this._transitionCount--
            if(this._transitionCount <= 0) {
                this._stopTransitionTimer()
            }
        })
        .on('interrupt.draw', ()=>{
            this._transtionCount--
            if(this._transitionCount <= 0) {
                this._stopTransitionTimer()
            }
        })
    }

    /**
     * 包装d3的attr方法，使元素可以记录所设置的属性名
     * @param {object} sels - d3.selection
     */
    wrapAttr(sels) {
       const attr = sels.attr
        sels.attr = function (name, value) {
            sels.each(function (d) {
                this._myAttr || (this._myAttr = new Set)
                this._myAttr.add(name)
            })
            return attr.call(sels, name, value)
        }
    }

    fetchAttrs(sel) {

        let attrs = sel.node()._myAttr

        if(!attrs) {
            throw new Error('Have not Wrap attr of this Selection')
        }

        let ret = {},
            value

        for(let a of attr) {
            value = sel.attr(a)
            ret[a] = isNaN(+value) ? value : +value
        }

        return ret

    }

}


