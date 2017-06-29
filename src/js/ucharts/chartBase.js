import { select } from 'd3-selection'
import { timer } from 'd3-timer'

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
}


