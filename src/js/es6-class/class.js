/*

class Person {
    constructor() {
        this.name = 'defalut';
    }
    say () {
        console.log("say hi");
        console.log(this.name);
        console.log(this)  //this指向了对象
    }
    song () {
        console.log('lalalalala')
        return 111
    }
}

class Man extends Person {
    constructor() {
        super()
    }
}

// var p = new Person('lily'); // 控制台会输出say hi
// p.say()
// p.song()
// console.log(Person)

console.log(new Man().name)
console.log(new Man().song())
 */

/**
 * 类的继承 extends
 */

class Person {
    constructor(name) {
        this.name = name
    }
    say () {
        console.log('say hi')
        return this
    }
}

class Man extends Person {
    constructor (name, power) {
        super(name)  // super 的作用 1、作为构造函数直接调用 2、作为父类实例3、在子类中的静态方法中调用父类的静态方法
        this.superPower = power
    }
    show () {
        console.log(this.superPower)
        return this
    }
}

console.log(new Man('clark', 'pee').show())
console.log(new Man('clark', 'pee').show().say())
console.log(new Man('clark', 'pee').show().say().name)
