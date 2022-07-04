# 在线编辑TypeScript

https://www.typescriptlang.org/play



https://www.typescriptlang.org/play?#code/PTAEAEFMCdoe2gZwFygOwAYMDYCwAoASwDsAXGAMwEMBjSUAYQAtIaBrKgIwBt6BvAqFA0W7ABTEqAW0ipEpaCQDmASlSc4cXlWIBuAgF8CBGtyqJEoAHLTIzVmxihCUgA68ZZS-fZdeoAXwhEQcxRBUAwSFQEGs4UkI6UGI4UBh4aFAWaEgooRzSAFdoYlBEADpSOAAZOAB3GBpESDEIgF4O0AAiODYu-SDo2OiR0AA9AH4oo3wDIA

# 小册

# 3 开始使用

## 安装 TypeScript

TypeScript 的安装很简单，你可以通过npm直接在全局安装 TypeScript。

```
> npm install -g typescript
```

## 创建环境

随后我们要创建一个目录：

```
mkdir ts-study && cd ts-study
```

接着创建 src 目录：

```
mkdir src && touch src/index.ts
```

接着我们用npm将目录初始化：

```
npm init
```

此时我们要使用 TypeScript 的话通常也需要初始化：

```
tsc --init
```

这个时候你会发现目录下多了一个`tsconfig.json`文件.

这是 TypeScript 的配置文件，里面已经包含官方初始化的一些配置以及注释，我们现在进行自定义的配置：

```
{
  "compilerOptions": {
    "target": "es5",                            // 指定 ECMAScript 目标版本: 'ES5'
    "module": "commonjs",                       // 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
    "moduleResolution": "node",                 // 选择模块解析策略
    "experimentalDecorators": true,             // 启用实验性的ES装饰器
    "allowSyntheticDefaultImports": true,       // 允许从没有设置默认导出的模块中默认导入。
    "sourceMap": true,                          // 把 ts 文件编译成 js 文件的时候，同时生成对应的 map 文件
    "strict": true,                             // 启用所有严格类型检查选项
    "noImplicitAny": true,                      // 在表达式和声明上有隐含的 any类型时报错
    "alwaysStrict": true,                       // 以严格模式检查模块，并在每个文件里加入 'use strict'
    "declaration": true,                        // 生成相应的.d.ts文件
    "removeComments": true,                     // 删除编译后的所有的注释
    "noImplicitReturns": true,                  // 不是函数的所有返回路径都有返回值时报错
    "importHelpers": true,                      // 从 tslib 导入辅助工具函数
    "lib": ["es6", "dom"],                      // 指定要包含在编译中的库文件
    "typeRoots": ["node_modules/@types"],
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": [                                  // 需要编译的ts文件一个*表示文件匹配**表示忽略文件的深度问题
    "./src/**/*.ts"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "**/*.test.ts",
  ]
}
```

然后在package.json中加入我们的script命令：

```
{
  "name": "ts-study",
  "version": "1.0.0",
  "description": "",
  "main": "src/index.ts",
  "scripts": {
    "build": "tsc", // 编译
    "build:w": "tsc -w" // 监听文件，有变动即编译
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "typescript ": "^3.6.4"
  }
}
```

## 编写第一个 TypeScript 程序

## 静态类型

编程语言的静态类型定义在学术上理解起来比较复杂，简单来说，一门语言在编译时报错，那么是静态语言，如果在运行时报错，那么是动态语言。

这里还有纠正一个概念，TypeScript 是静态弱类型语言，这跟C语言是一样的，并不是所谓的强类型，因为要兼容 JavaScript， 所以 TypeScript 几乎不限制 JavaScript 中原有的隐式类型转换，它对类型的隐式转换是有容忍度的，而真正的静态强类型语言比如 Java、C# 是不会容忍隐式转换的。

而实际上各大用动态语言的项目在这些年随着项目复杂度增加，开始逐渐进行静态化，有人会问「谷歌、Facebook 不都还在用 js、php、Python吗？」

其实不是的，这些大厂用的 php、Python、js 跟普通人用的不一样，比如 Facebook 的 js 背后有一个叫做 FlowType 的静态类型检查器，React 和 Vue 2.x 就是用的这个类型检查器，再比如 Facebook 的 Python，他背后也有一个叫做pyre-check 的静态类型检查器，实际上是虽然他们在用动态语言，但是大厂养活着一个庞大的团队来开发各种静态分析工具把动态语言变成静态的。

## todo

??? Structural Type System





# 4 原始类型

## 空值

表示没有任何类型，当一个函数没有返回值时，你通常会见到其返回值类型是 void：

```
function warnUser(): void {
    alert("This is my warning message");
}
```

实际上只有`null`和`undefined`可以赋给`void`:

```
const a: void = undefined
```

## Null 和 Undefined

TypeScript 里，undefined 和 null 两者各自有自己的类型分别叫做 undefined 和 null，和void相似，它们的本身的类型用处不是很大：

```
let a: undefined = undefined;
let b: null = null;
```

默认情况下 null 和 undefined 是所有类型的子类型，就是说你可以把 null 和 undefined 赋值给 number 类型的变量。

但是在正式项目中一般都是开启 `--strictNullChecks` 检测的，即 null 和 undefined 只能赋值给 any 和它们各自(一个例外是 undefined 是也可以分配给void)，可以规避非常多的问题。



## Symbol

**注意**：我们在使用 `Symbol` 的时候，必须添加 `es6` 的编译辅助库,如下：



![2020-01-05-20-49-18](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/1/5/16f75c0ca280fde9~tplv-t2oaga2asx-watermark.awebp)



Symbol 是在ES2015之后成为新的原始类型,它通过 `Symbol` 构造函数创建:

```
const sym1 = Symbol('key1');
const sym2 = Symbol('key2');
```

而且 Symbol 的值是唯一不变的：

```
Symbol('key1') === Symbol('key1') // false
```

## BigInt

`BigInt` 类型在 TypeScript3.2 版本被内置，使用 `BigInt` 可以安全地存储和操作大整数，即使这个数已经超出了JavaScript构造函数 `Number` 能够表示的安全整数范围。

**注意**：我们在使用 `BigInt` 的时候，必须添加 `ESNext` 的编译辅助库,如下：



![2020-01-05-20-47-38](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/1/5/16f75bf5587e2b69~tplv-t2oaga2asx-watermark.awebp)



在 JavaScript 中采用双精度浮点数,这导致精度有限，比如 `Number.MAX_SAFE_INTEGER` 给出了可以安全递增的最大可能整数，即`2**53-1`,我们看一下案例:

```
const max = Number.MAX_SAFE_INTEGER;

const max1 = max + 1
const max2 = max + 2

max1 === max2 //true
```

`max1`与`max2`居然相等？这就是超过精读范围造成的问题，而`BigInt`正是解决这类问题而生的:

```
// 注意，这里是 JavaScript 代码，并不是 typescript
const max = BigInt(Number.MAX_SAFE_INTEGER);

const max1 = max + 1n
const max2 = max + 2n

max1 === max2 // false
```

这是在 Chrome 浏览器 console 的结果:



![2019-10-07-22-22-48](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/10/16db4069694bc53a~tplv-t2oaga2asx-watermark.awebp)



值得注意的是我们需要用 `BigInt(number)` 把 Number 转化为 `BigInt`,同时如果类型是 `BigInt` ,那么数字后面需要加 `n` ,就如同上面例子的 `const max1 = max + 1n` 中的 `1n`。

在TypeScript中，`number` 类型虽然和 `BigInt` 都是有表示数字的意思，但是实际上两者类型是不同的:

```
declare let foo: number;
declare let bar: bigint;

foo = bar; // error: Type 'bigint' is not assignable to type 'number'.
bar = foo; // error: Type 'number' is not assignable to type 'bigint'.
```



# 5 Typescript 中其他常见类型

我们上一节了解了 TypeScript 中的原始类型,其实还有一些常见的类型没有涉及。

比如计算机类型系统理论中的[顶级类型](https://link.juejin.cn/?target=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FTop_type):

- any
- unknown

比如类型系统中的[底部类型](https://link.juejin.cn/?target=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FBottom_type):

- never

再比如非原始类型(non-primitive type):

- object

当然还有比较常见的数组、元组等等。

## any

有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。

这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。

这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用any类型来标记这些变量：

```
let notSure: any = 4;
notSure = "maybe a string instead";
```

`any`类型是多人协作项目的大忌，很可能把Typescript变成AnyScript，通常在不得已的情况下，不应该首先考虑使用此类型。

## unknown

`unknown` 是 TypeScript 3.0 引入了新类型,是 `any` 类型对应的安全类型。

`unknown` 和 `any` 的主要区别是 `unknown` 类型会更加严格:在对`unknown`类型的值执行大多数操作之前,我们必须进行某种形式的检查,而在对 `any` 类型的值执行操作之前,我们不必进行任何检查。

我们先看一下他跟 `any` 的共同点,它跟 `any` 一样,可以是任何类型:

```
let value: any;

value = true;             // OK
value = 1;                // OK
value = "Hello World";    // OK
value = Symbol("type");   // OK
value = {}                // OK
value = []                // OK
```

如果我们换成 `unknown`,结果一样

```
let value: unknown;

value = true;             // OK
value = 1;                // OK
value = "Hello World";    // OK
value = Symbol("type");   // OK
value = {}                // OK
value = []                // OK
```

那我们看看它们的区别在哪里:

```
let value: any;

value.foo.bar;  // OK
value();        // OK
new value();    // OK
value[0][1];    // OK
```

如果是 `unknown` 类型,那么结果大不相同:

```
let value: unknown;

value.foo.bar;  // ERROR
value();        // ERROR
new value();    // ERROR
value[0][1];    // ERROR
```

我们看到,这就是 `unknown` 与 `any` 的不同之处,虽然它们都可以是任何类型,但是当 `unknown` 类型被确定是某个类型之前,它不能被进行任何操作比如实例化、getter、函数执行等等。

而 `any` 是可以的,这也是为什么说 `unknown` 是更安全的 `any`, `any` 由于过于灵活的设定,导致它与 JavaScript 没有太多区别,很容易产生低级错误,很多场景下我们可以选择 `unknown` 作为更好的替代品.

那么上面情况下我们可以执行 `unknown` 呢?那就是缩小其类型范围,我们在后面的章节会涉及「类型保护」的内容,它就可以缩小类型范围,比如:

```
function getValue(value: unknown): string {
  if (value instanceof Date) { // 这里由于把value的类型缩小为Date实例的范围内,所以`value.toISOString()`
    return value.toISOString();
  }

  return String(value);
}
```

## never

never 类型表示的是那些永不存在的值的类型，never 类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是 never 的子类型或可以赋值给 never 类型（除了never本身之外）。

> 即使any也不可以赋值给never。

两个场景中 never 比较常见:

```
// 抛出异常的函数永远不会有返回值
function error(message: string): never {
    throw new Error(message);
}

// 空数组，而且永远是空的
const empty: never[] = []
```

## 数组

数组有两种类型定义方式，一种是使用泛型:

```
const list: Array<number> = [1, 2, 3]
```

另一种使用更加广泛那就是在元素类型后面接上 `[]`:

```
const list: number[] = [1, 2, 3]
```

## 元组（Tuple）

元组类型与数组类型非常相似，表示一个已知元素数量和类型的数组，各元素的类型不必相同。

比如，你可以定义一对值分别为`string`和`number`类型的元组。

```
let x: [string, number];
x = ['hello', 10, false] // Error
x = ['hello'] // Error
```

我们看到，这就是元组与数组的不同之处，元组的类型如果多出或者少于规定的类型是会报错的，必须严格跟事先声明的类型一致才不会报错。

那么有人会问，我们的类型完全一致，只是顺序错了有没有问题，比如上个例子中我们把 `string`、`number` 调换位置：

```
let x: [string, number];
x = ['hello', 10]; // OK
x = [10, 'hello']; // Error
```

我们看到，元组非常严格，即使类型的顺序不一样也会报错。

元组中包含的元素，必须与声明的类型一致，而且不能多、不能少，甚至顺序不能不符。

我们可以把元组看成严格版的数组，比如`[string, number]`我们可以看成是:

```
interface Tuple extends Array<string | number> {
  0: string;
  1: number;
  length: 2;
}
```

元组继承于数组，但是比数组拥有更严格的类型检查。

此外，还有一个个元组越界问题，比如 Typescript 允许向元组中使用数组的push方法插入新元素:

```
const tuple: [string, number] = ['a', 1];
tuple.push(2); // ok
console.log(tuple); // ["a", 1, 2] -> 正常打印出来
```

但是当我们访问新加入的元素时，会报错:

```
console.log(tuple[2]); // Tuple type '[string, number]' of length '2' has no element at index '2'
```

## Object

object 表示非原始类型，也就是除 number，string，boolean，symbol，null 或 undefined 之外的类型。

```
// 这是下一节会提到的枚举类型
enum Direction {
    Center = 1
}

let value: object

value = Direction
value = [1]
value = [1, 'hello']
value = {}
```

我们看到,普通对象、枚举、数组、元组通通都是 `object` 类型。

# 6 深入理解枚举类型

枚举类型是很多语言都拥有的类型,它用于声明一组命名的常数,当一个变量有几种可能的取值时,可以将它定义为枚举类型。

## 数字枚举

当我们声明一个枚举类型是,虽然没有给它们赋值,但是它们的值其实是默认的数字类型,而且默认从0开始依次累加:

```
enum Direction {
    Up,
    Down,
    Left,
    Right
}

console.log(Direction.Up === 0); // true
console.log(Direction.Down === 1); // true
console.log(Direction.Left === 2); // true
console.log(Direction.Right === 3); // true
```

因此当我们把第一个值赋值后,后面也会根据第一个值进行累加:

```
enum Direction {
    Up = 10,
    Down,
    Left,
    Right
}

console.log(Direction.Up, Direction.Down, Direction.Left, Direction.Right); // 10 11 12 13
```

## 字符串枚举

枚举类型的值其实也可以是字符串类型：

```
enum Direction {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

console.log(Direction['Right'], Direction.Up); // Right Up
```

## 异构枚举

既然我们已经有了字符串枚举和数字枚举，那么这两个枚举是不是可以混合使用呢？

```
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}
```

是的，这样也是没问题的，通常情况下我们很少会这样使用枚举，但是从技术的角度来说，它是可行的。

## 反向映射

我们看一个例子：

```
enum Direction {
    Up,
    Down,
    Left,
    Right
}

console.log(Direction.Up === 0); // true
console.log(Direction.Down === 1); // true
console.log(Direction.Left === 2); // true
console.log(Direction.Right === 3); // true
```

这就是我们数字枚举那一部分的例子，我们可以通过枚举名字获取枚举值，这当然看起来没问题，那么能不能通过枚举值获取枚举名字呢？

是可以的：

```
enum Direction {
    Up,
    Down,
    Left,
    Right
}

console.log(Direction[0]); // Up
```

这就很奇怪了，我们印象中一个 JavaScript 对象一般都是正向映射的，即 `name => value`，为什么在枚举中是可以正反向同时映射的？即 `name <=> value`。

我们往下看，通过了解枚举的本质，我们就可以理解这种正反向同时映射的特性了。

## 枚举的本质

以上面的 `Direction` 枚举类型为例,我们不妨看一下枚举类型被编译为 JavaScript 后是什么样子:

```
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 10] = "Up";
    Direction[Direction["Down"] = 11] = "Down";
    Direction[Direction["Left"] = 12] = "Left";
    Direction[Direction["Right"] = 13] = "Right";
})(Direction || (Direction = {}));
```

这个编译后的代码可能看起来比较复杂,不过我们可以把`Direction`看成一个对象,比如我们在 TypeScript 中做几个小实验:

```
enum Direction {
    Up = 10,
    Down,
    Left,
    Right
}

console.log(Direction[10], Direction['Right']); // Up 13
```

原因就在编译后的 JavaScript 中体现出来了,因为 `Direction[Direction["Up"] = 10] = "Up"` 也就是 `Direction[10] = "Up"` ,所以我们可以把枚举类型看成一个JavaScript对象，而由于其特殊的构造，导致其拥有正反向同时映射的特性。

## 常量枚举

枚举其实可以被 `const` 声明为常量的,这样有什么好处?我们看以下例子:

```
const enum Direction {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

const a = Direction.Up;
```

大家猜一下它被编译为 JavaScript 后是怎样的?

```
var a = "Up";
```

我们在上面看到枚举类型会被编译为 JavaScript 对象,怎么这里没有了?

这就是常量枚举的作用,因为下面的变量 `a` 已经使用过了枚举类型,之后就没有用了,也没有必要存在与 JavaScript 中了, TypeScript 在这一步就把 `Direction` 去掉了,我们直接使用 `Direction` 的值即可,这是性能提升的一个方案。

> 如果你非要 TypeScript 保留对象 Direction ,那么可以添加编译选项 `--preserveConstEnums`

## 联合枚举与枚举成员的类型

我们假设枚举的所有成员都是字面量类型的值，那么枚举的每个成员和枚举值本身都可以作为类型来使用，

- 任何字符串字面量,如：

```
const enum Direction {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}
```

- 任何数字字面量,如：

```
enum Direction {
    Up,
    Down,
    Left,
    Right
}
```

- 应用了一元`-`符号的数字字面量,如:

```
enum Direction {
    Up = -1,
    Down = -2,
    Left = -3,
    Right = -4,
}
```

### 枚举成员类型

当所有枚举成员都拥有字面量枚举值时，它就带有了一种特殊的语义，即枚举成员成为了类型。

比如我们声明一个数字类型：

```
enum Direction {
    Up,
    Down,
    Left,
    Right
}

const a = 0

console.log(a === Direction.Up) // true
```

我们把成员当做值使用，看来是没问题的，因为成员值本身就是0，那么我们再加几行代码：

```
type c = 0

declare let b: c

b = 1 // 不能将类型“1”分配给类型“0”
b = Direction.Up // ok
```

我们看到，上面的结果显示这个枚举的成员居然也可以被当做类型使用，这就是枚举成员当做类型使用的情况。

## 联合枚举类型

由于联合联合枚举，类型系统可以知道枚举里的值的集合。

> 联合类型会在后面的章节提到

```
enum Direction {
    Up,
    Down,
    Left,
    Right
}

declare let a: Direction

enum Animal {
    Dog,
    Cat
}

a = Direction.Up // ok
a = Animal.Dog // 不能将类型“Animal.Dog”分配给类型“Direction”
```

我们把 `a` 声明为 `Direction` 类型，可以看成我们声明了一个联合类型 `Direction.Up | Direction.Down | Direction.Left | Direction.Right`，只有这四个类型其中的成员才符合要求。

## 枚举合并

我们可以分开声明枚举,他们会自动合并

```
enum Direction {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

enum Direction {
    Center = 1
}
```

编译为 JavaScript 后的代码如下:

```
var Direction;
(function (Direction) {
    Direction["Up"] = "Up";
    Direction["Down"] = "Down";
    Direction["Left"] = "Left";
    Direction["Right"] = "Right";
})(Direction || (Direction = {}));
(function (Direction) {
    Direction[Direction["Center"] = 1] = "Center";
})(Direction || (Direction = {}));
```

因此上面的代码并不冲突。

## 为枚举添加静态方法

借助 `namespace` 命名空间，我们甚至可以给枚举添加静态方法。

我们举个简单的例子，假设有十二个月份:

```
enum Month {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December,
}
```

我们要编写一个静态方法，这个方法可以帮助我们把夏天的月份找出来:

```
function isSummer(month: Month) {
    switch (month) {
        case Month.June:
        case Month.July:
        case Month.August:
            return true;
        default:
            return false
    }
}
```

> 「命名空间」在第 30 小节，读者可以暂时跳过下面内容

想要把两者结合就需要借助命名空间的力量了:

```
namespace Month {
    export function isSummer(month: Month) {
        switch (month) {
            case Month.June:
            case Month.July:
            case Month.August:
                return true;
            default:
                return false
        }
    }
}

console.log(Month.isSummer(Month.January)) // false
```

## 小结

我们本节深入理解了枚举类型,通过编译后的 JavaScript 了解到其实本质上是 JavaScript 对象.

# 7 接口(interface)

TypeScript 的核心原则之一是对值所具有的结构进行类型检查,它有时被称做“鸭式辨型法”或“结构性子类型化”。

在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。

## 接口的使用

比如我们有一个函数，这个函数接受一个 `User` 对象，然后返回这个 `User` 对象的 `name` 属性:

```
const getUserName = (user) => user.name
```

在我们自定义的 TypeScript 开发环境下这个是会报错的：



![2019-06-25-03-05-40](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/11/16dbb114ddc7e1ec~tplv-t2oaga2asx-watermark.awebp)



我们必须用一种类型描述这个 `user` 参数，但是这个类型又不属于上一节介绍到的各种基本类型。

这个时候我们需要 interface 来描述这个类型:

```
interface User {
    name: string
    age: number
    isMale: boolean
}

const getUserName = (user: User) => user.name
```

这个接口 `User` 描述了参数 `user` 的结构，当然接口不会去检查属性的顺序，只要相应的属性存在并且类型兼容即可。

## 可选属性

那么还有一个问题，当这个 user 属性可能没有 `age` 时怎么办？比如我们在前端处理表单的时候，年龄 `age` 这个字段本身是可选的，我们应该如何用接口描述这种情况？

我们可以用可选属性描述这种情况:

```
interface User {
    name: string
    age?: number
    isMale: boolean
}
```

当我们看到代码提示的时候，这个 `age` 属性既可能是number类型也可能是 `undefined` 。



![2019-06-25-03-13-26](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/11/16dbb114decc413e~tplv-t2oaga2asx-watermark.awebp)



## 只读属性

还有一个问题，当我们确定 `user` 的性别之后就不允许就改了， `interface` 可以保证这一点吗？

利用 `readonly` 我们可以把一个属性变成只读性质，此后我们就无法对他进行修改

```
interface User {
    name: string
    age?: number
    readonly isMale: boolean
}
```

一旦我们要修改只读属性，就会出现警告⚠️。



![2019-06-25-03-32-31](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/11/16dbb114ded29ca2~tplv-t2oaga2asx-watermark.awebp)



## 函数类型

那么接下来，如果这个 `user` 含有一个函数怎么办？

比如:

```
user.say = function(words: string) {
    return 'hello world'
}
```

我们应该如何描述这种情况？一种是直接在 interface 内部描述函数:

```
interface User {
    name: string
    age?: number
    readonly isMale: boolean
    say: (words: string) => string
}
```

另一种方法，我们可以先用接口直接描述函数类型:

```
interface Say {
    (words: string) : string
}
```

然后在 `User` 内使用

```
interface User {
    name: string
    age?: number
    readonly isMale: boolean
    say: Say
    }
```

## 属性检查

假设我们有一个 `Config` 接口如下

```
interface Config {
  width?: number;
}

function  CalculateAreas(config: Config): { area: number} {
  let square = 100;
  if (config.width) {
      square = config.width * config.width;
  }
  return {area: square};
}

let mySquare = CalculateAreas({ widdth: 5 });
```

注意我们传入的参数是 `widdth`，并不是 `width`。

此时TypeScript会认为这段代码可能存在问题。对象字面量当被赋值给变量或作为参数传递的时候，会被特殊对待而且经过“额外属性检查”。 如果一个对象字面量存在任何“目标类型”不包含的属性时，你会得到一个错误。

```
// error: 'widdth' not expected in type 'Config'
let mySquare = CalculateAreas({ widdth: 5 });
```

目前官网推荐了三种主流的解决办法：

第一种使用类型断言：

```
let mySquare = CalculateAreas({ widdth: 5 } as Config);
```

第二种添加字符串索引签名：

```
interface Config {
   width?: number;
   [propName: string]: any;
}
```

这样Config可以有任意数量的属性，并且只要不是width，那么就无所谓他们的类型是什么了。

第三种将字面量赋值给另外一个变量：

```
let options: any = { widdth: 5 };
let mySquare = CalculateAreas(options);
```

本质上是转化为 any 类型，除非有万不得已的情况，不建议采用上述方法。

## 可索引类型

我们再假设一个场景，如果 `User` 还包含一个属性，这个属性是 `User` 拥有的邮箱的集合，但是这个集合有多少成员不确定，应该如何描述？

比如小张的信息如下:

```
{
    name: 'xiaozhang',
    age: 18,
    isMale: false,
    say: Function,
    phone: {
        NetEase: 'xiaozhang@163.com',
        qq: '1845751425@qq.com',
    }
}
```

而小明的信息如下:

```
{
    name: 'xiaoming',
    age: 16,
    isMale: true,
    say: Function,
    phone: {
        NetEase: 'xiaoming@163.com',
        qq: '784536325@qq.com',
        sina: 'abc784536325@sina.com',
    }
}
```

我们观察这两个人的信息，他们的 `phone` 属性有共同之处，首先他们的 key 都是 string 类型的，其次 value 也是 string 类型，虽然数量不等。

这个时候我们可以用可索引类型表示，可索引类型具有一个索引签名，它描述了对象索引的类型，还有相应的索引返回值类型。

> 可索引类型会在后面的章节详细讲

```
interface Phone {
    [name: string]: string
}

interface User {
    name: string
    age?: number
    readonly isMale: boolean
    say: () => string
    phone: Phone
}
```

## 继承接口

我们有一天又有一个新需求，就是需要重新创建一个新的VIP `User` ，这个 `VIPUser` 的属性与普通 `User` 一致，只是多了一些额外的属性，这个时候需要重新写一个接口吗？

并不需要，我们可以用继承的方式，继承 `User` 的接口。

```
interface VIPUser extends User {
    broadcast: () => void
}
```

你甚至可以继承多个接口:

```
interface VIPUser extends User, SupperUser {
    broadcast: () => void
}
```

## 小结

我们通过本节的学习了解了接口（interface）的基本用法，我们甚至可以用修饰符来修饰接口成员字段的特性，比如可选属性、只读属性等等。

接口（interface）是一个非常强大的代码类型定义描述，是我们今后编码非常常用的一个功能，在今后的章节还会大量使用此特性

# 8 类(Class)

传统的面向对象语言基本都是基于类的，JavaScript 基于原型的方式让开发者多了很多理解成本，在 ES6 之后，JavaScript 拥有了 class 关键字，虽然本质依然是构造函数，但是开发者已经可以比较舒服地使用 class了。

但是 JavaScript 的 class 依然有一些特性还没有加入，比如修饰符和抽象类等。

之于一些继承、静态属性这些在 JavaScript 本来就存在的特性，我们就不过多讨论了。

## 抽象类

抽象类做为其它派生类的基类使用,它们一般不会直接被实例化,不同于接口,抽象类可以包含成员的实现细节。

abstract 关键字是用于定义抽象类和在抽象类内部定义抽象方法。

比如我们创建一个 `Animal` 抽象类:

```
abstract class Animal {
    abstract makeSound(): void;
    move(): void {
        console.log('roaming the earch...');
    }
}
```

我在实例化此抽象类会报错：



![2019-06-25-07-50-23](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/11/16dbb116f92b95a0~tplv-t2oaga2asx-watermark.png)



我们不能直接实例化抽象类，通常需要我们创建子类继承基类,然后可以实例化子类。

```
class Cat extends Animal {

    makeSound() {
        console.log('miao miao')
    }
}

const cat = new Cat()

cat.makeSound() // miao miao
cat.move() // roaming the earch...
```

## 访问限定符

传统面向对象语言通常都有访问限定符，TypeScript 中有三类访问限定符，分别是: public、private、protected。

### public

在 TypeScript 的类中，成员都默认为 public, 被此限定符修饰的成员是可以被外部访问。

```
class Car {
    public run() {
        console.log('启动...')
    }
}

const car = new Car()

car.run() // 启动...
```

### private

当成员被设置为 private 之后, 被此限定符修饰的成员是只可以被类的内部访问。



![2019-06-25-08-14-12](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/11/16dbb116f9c298d7~tplv-t2oaga2asx-watermark.awebp)



### protected

当成员被设置为 protected 之后, 被此限定符修饰的成员是只可以被类的内部以及类的子类访问。

```
class Car {
    protected run() {
        console.log('启动...')
    }
}

class GTR extends Car {
    init() {
        this.run()
    }
}

const car = new Car()
const gtr = new GTR()

car.run() // [ts] 属性“run”受保护，只能在类“Car”及其子类中访问。
gtr.init() // 启动...
gtr.run() // [ts] 属性“run”受保护，只能在类“Car”及其子类中访问。
```

## class 可以作为接口

上一节我们讲到接口（interface），实际上类（class）也可以作为接口。

而把 class 作为 interface 使用，在 React 工程中是很常用的。

比如我之前写过一个轮播组件[rc-carousel](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fxiaomuzhu%2Frc-carousel%2Fblob%2Fmaster%2Fsrc%2Fprops.ts)。

```
export default class Carousel extends React.Component<Props, State> {}
```

由于组件需要传入 `props` 的类型 `Props` ，同时有需要设置默认 `props` 即 `defaultProps`。

这个时候 class 作为接口的优势就体现出来了。

我们先声明一个类，这个类包含组件 `props` 所需的类型和初始值：

```
// props的类型
export default class Props {
  public children: Array<React.ReactElement<any>> | React.ReactElement<any> | never[] = []
  public speed: number = 500
  public height: number = 160
  public animation: string = 'easeInOutQuad'
  public isAuto: boolean = true
  public autoPlayInterval: number = 4500
  public afterChange: () => {}
  public beforeChange: () => {}
  public selesctedColor: string
  public showDots: boolean = true
}
```

当我们需要传入 `props` 类型的时候直接将 `Props` 作为接口传入，此时 `Props` 的作用就是接口，而当需要我们设置`defaultProps`初始值的时候，我们只需要:

```
public static defaultProps = new Props()
```

`Props` 的实例就是 `defaultProps` 的初始值，这就是 class 作为接口的实际应用，我们用一个 class 起到了接口和设置初始值两个作用，方便统一管理，减少了代码量。

## 小结

我们学习了 TypeScript 类特有的知识点，包括三个访问限定符public、protected、private，抽象类，以及实际应用中的class作为接口的优势，这些都是之后我们会反复用到的知识。



# 9 函数(Function)

函数是 JavaScript 应用程序的基础,它帮助你实现抽象层、模拟类、信息隐藏和模块。

在 TypeScript 里,虽然已经支持类、命名空间和模块,但函数仍然是主要的定义行为的地方,TypeScript 为 JavaScript 函数添加了额外的功能，让我们可以更容易地使用。

## 定义函数类型

我们在 TypeScript 中的函数并不需要刻意去定义，比如我们实现一个加法函数:

```
const add = (a: number, b: number) => a + b
```

实际上我们只定义了函数的两个参数类型，这个时候整个函数虽然没有被显式定义，但是实际上 TypeScript 编译器是能『感知』到这个函数的类型的:



![2019-06-25-10-43-43](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/11/16dbb1194a11bb4c~tplv-t2oaga2asx-watermark.awebp)



我们通过 VS Code 的类型提示看到，TypeScript 已经推断出了整个函数的类型，虽然我们并没有显式定义出来，这就是所谓的『类型推断』。

那么我应该如何显式定义一个函数的类型呢？



![2019-06-25-10-47-16](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/11/16dbb1194a4d9eff~tplv-t2oaga2asx-watermark.awebp)



括号里的 `(a: number, b: number)` 为参数类型,而通过 `=>` 来连接参数与返回值, 最后则是返回值的类型。

## 函数的参数详解

### 可选参数

一个函数的参数可能是不存在的，这就需要我们使\用可选参数来定义.

我们只需要在参数后面加上 `?` 即代表参数可能不存在。

```
const add = (a: number, b?: number) => a + (b ? b : 0)
```

参数b有`number`与`undefined`两种可能。



![2019-06-25-10-53-47](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/11/16dbb1194a559f31~tplv-t2oaga2asx-watermark.awebp)



### 默认参数

默认参数在 JavaScript 同样存在，即在参数后赋值即可。

```
const add = (a: number, b = 10) => a + b
```

### 剩余参数

剩余参数与JavaScript种的语法类似，需要用 `...` 来表示剩余参数，而剩余参数 `rest` 则是一个由number组成的数组，在本函数中用 reduce 进行了累加求和。

```
const add = (a: number, ...rest: number[]) => rest.reduce(((a, b) => a + b), a)
```

## 重载（Overload）

重载这个概念在很多传统编译语言中都存在，如果你有类似 Java 的经验静很容易理解。

那么在 TypeScript 中它的作用是什么呢？

先看一下例子：

```
function assigned (a: number, b?: number, c?: number, d?: any) {
    if (b === undefined && c === undefined && d === undefined) {
      b = c = d = a
    } else if (c === undefined && d === undefined) {
      c = a
      d = b
    }
    return {
      top: a,
      right: b,
      bottom: c,
      left: d
    }
}
```

如果上述代码是我的同事写的，我只负责调用这个函数，那么我如果不看具体实现，只通过代码提示能搞清楚需要传几个参数吗？传不同的参数其返回值是一样的吗？

对于我而言，我只能去看这个函数的实现，来决定我如何传参，那么上述函数实现算是比较简单的，如果是个复杂函数呢？这增加了协作的成本也造成了类型的不安全。

比如上面的函数实际上只接受1、2、4个参数，但是如果我传入三个，是不会报错的，这就是类型的不安全。



![2019-06-25-11-38-38](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/11/16dbb1194a6633b1~tplv-t2oaga2asx-watermark.awebp)



为了解决上述问题，因此函数重载出现了。

我们用同样的函数名声明参数分别为1、2、4情况下

```
// 重载
interface Direction {
  top: number,
  bottom?: number,
  left?: number,
  right?: number
}
function assigned(all: number): Direction
function assigned(topAndBottom: number, leftAndRight: number): Direction
function assigned(top: number, right: number, bottom: number, left: number): Direction

function assigned (a: number, b?: number, c?: number, d?: number) {
  if (b === undefined && c === undefined && d === undefined) {
    b = c = d = a
  } else if (c === undefined && d === undefined) {
    c = a
    d = b
  }
  return {
    top: a,
    right: b,
    bottom: c,
    left: d
  }
}

assigned(1)
assigned(1,2)
assigned(1,2,3)
assigned(1,2,3,4)
```

最后我们分别传入不同数量的参数，发现只有三个参数的情况下报错了.



![2019-06-25-13-04-12](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/11/16dbb1194a792df6~tplv-t2oaga2asx-watermark.awebp)



函数重载在多人协作项目或者开源库中使用非常频繁，因为一个函数可能会被大量的开发者调用，如果不使用函数重载，那么会造成额外的麻烦。

## 小结

这一节我们学习了函数类型相关的知识，其中最重要的莫过于函数重载，虽然在普通的开发中使用到这个功能的几率并不大，但是一旦涉及多人使用的库相关开发，函数重载可谓是必不可少的利器。

值得一提的是,著名的全局状态管理库 `Redux` 的[compose](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Freduxjs%2Fredux%2Fblob%2F26f216e066a2a679d3cae4fb1a5c4e5d15e9fac6%2Fsrc%2Fcompose.ts%23L16)就是运用大量函数重载的典型案例,感兴趣的同学可以阅读一下 Redux 用 TypeScript 重写后的源码:



![2019-10-07-23-36-08](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/11/16dbb1194a7ec2fd~tplv-t2oaga2asx-watermark.awebp)

# 10 泛型（generic）的妙用

泛型是 TypeScript 中非常重要的一个概念，因为在之后实际开发中任何时候都离不开泛型的帮助，原因就在于泛型给予开发者创造灵活、可重用代码的能力。

## 初识泛型

假设我们用一个函数，它可接受一个 number 参数并返回一个 number 参数。

```
function returnItem (para: number): number {
    return para
}
```

我们按以上的写法貌似是没问题的，那么如果我们要接受一个 string 并返回同样一个 string 呢？逻辑是一样的，但是仅仅是类型发生了变化，难道需要再写一遍？

```
function returnItem (para: string): string {
    return para
}
```

这明显是重复性的代码，我们应该如何才能避免上述情况呢？

难道我们只能用 any 表示了？

```
function returnItem (para: any): any {
    return para
}
```

我们现在的情况是，我们在静态编写的时候并不确定传入的参数到底是什么类型，只有当在运行时传入参数后我们才能确定。

那么我们需要变量，这个变量代表了传入的类型，然后再返回这个变量，它是一种特殊的变量，只用于表示类型而不是值。

这个类型变量在 TypeScript 中就叫做「泛型」。

```
function returnItem<T>(para: T): T {
    return para
}
```

我们在函数名称后面声明泛型变量 `<T>`，它用于捕获开发者传入的参数类型（比如说string），然后我们就可以使用T(也就是string)做参数类型和返回值类型了。

## 多个类型参数

定义泛型的时候，可以一次定义多个类型参数，比如我们可以同时定义泛型 `T` 和 泛型 `U`：

```
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

swap([7, 'seven']); // ['seven', 7]
```

## 泛型变量

我们现在假设有这样的需求，我们的函数接受一个数组，如何把数组的长度打印出来，最后返回这个数组，我们应该如何定义？

我们当然得运用上刚才学的泛型：

```
function getArrayLength<T>(arg: T): T {
  console.log(arg.length) // 类型“T”上不存在属性“length”
  return arg
}
```

糟糕，在编写过程中报错了，编译器告诉我们「他们不知道类型T上有没有 length 这个属性」。

所以我们得想办法告诉编译器，这个类型 T 是有 length 属性的，不然在编译器眼里，这个 T 是可以代表任何类型的。

我们已经明确知道要传入的是一个数组了，为什么不这样声明呢: `Array<T>`？

反正传入的类型不管如何，这起码是数组是可以确定的，在这里泛型变量 T 当做类型的一部分使用，而不是整个类型，增加了灵活性。

```
function getArrayLength<T>(arg: Array<T>) {
  
  console.log((arg as Array<any>).length) // ok
  return arg
}
```

## 泛型接口

泛型也可用于接口声明，以上面的函数为例，如果我们将其转化为接口的形式。

```
interface ReturnItemFn<T> {
    (para: T): T
}
```

那么当我们想传入一个number作为参数的时候，就可以这样声明函数:

```
const returnItem: ReturnItemFn<number> = para => para
```

## 泛型类

泛型除了可以在函数中使用，还可以在类中使用，它既可以作用于类本身，也可以作用与类的成员函数。

我们假设要写一个`栈`数据结构，它的简化版是这样的:

```
class Stack {
    private arr: number[] = []

    public push(item: number) {
        this.arr.push(item)
    }

    public pop() {
        this.arr.pop()
    }
}
```

同样的问题，如果只是传入 number 类型就算了，可是需要不同的类型的时候，还得靠泛型的帮助。

```
class Stack<T> {
    private arr: T[] = []

    public push(item: T) {
        this.arr.push(item)
    }

    public pop() {
        this.arr.pop()
    }
}
```

泛型类看上去与泛型接口差不多， 泛型类使用 `<>` 括起泛型类型，跟在类名后面。

## 泛型约束

现在有一个问题，我们的泛型现在似乎可以是任何类型，但是我们明明知道我们的传入的泛型属于哪一类，比如属于 number 或者 string 其中之一，那么应该如何约束泛型呢？

```
class Stack<T> {
    private arr: T[] = []

    public push(item: T) {
        this.arr.push(item)
    }

    public pop() {
        this.arr.pop()
    }
}
```

我们可以用 `<T extends xx>` 的方式约束泛型，比如下图显示我们约束泛型为 number 或者 string 之一，当传入 boolean 类型的时候，就会报错。



![2019-06-25-14-41-19](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/21/16ded4ce42f572c9~tplv-t2oaga2asx-watermark.awebp)



## 泛型约束与索引类型

我们先看一个常见的需求，我们要设计一个函数，这个函数接受两个参数，一个参数为对象，另一个参数为对象上的属性，我们通过这两个参数返回这个属性的值，比如：

```
function getValue(obj: object, key: string) {
  return obj[key] // error
}
```

我们会得到一段报错，这是新手 TypeScript 开发者常常犯的错误，编译器告诉我们，参数 `obj` 实际上是 `{}`,因此后面的 `key` 是无法在上面取到任何值的。

因为我们给参数 `obj` 定义的类型就是 `object`，在默认情况下它只能是 `{}`，但是我们接受的对象是各种各样的，我们需要一个泛型来表示传入的对象类型，比如 `T extends object`:

```
function getValue<T extends object>(obj: T, key: string) {
  return obj[key] // error
}
```

这依然解决不了问题，因为我们第二个参数 `key` 是不是存在于 `obj` 上是无法确定的，因此我们需要对这个 `key` 也进行约束，我们把它约束为只存在于 `obj` 属性的类型，这个时候需要借助到后面我们会进行学习的索引类型进行实现 `<U extends keyof T>`，我们用索引类型 `keyof T` 把传入的对象的属性类型取出生成一个联合类型，这里的泛型 U 被约束在这个联合类型中，这样一来函数就被完整定义了：

```
function getValue<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key] // ok
}
```

比如我们传入以下对象：

```
const a = {
  name: 'xiaomuzhu',
  id: 1
}
```

这个时候 `getValue` 第二个参数 `key` 的类型被约束为一个联合类型 `name | id`,他只可能是这两个之一，因此你甚至能获得良好的类型提示：



![2019-10-18-14-52-35](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/21/16ded4ce432593b0~tplv-t2oaga2asx-watermark.awebp)



## 使用多重类型进行泛型约束

> 注意，本示例是在非 「--strictPropertyInitialization」或者「--strict」下测试的

我们刚才学习了通过单一类型对泛型进行约束的方式，那么我们再设想以下场景，如果我们的泛型需要被约束，它只被允许实现以下两个接口的类型呢？

```
interface FirstInterface {
  doSomething(): number
}

interface SecondInterface {
  doSomethingElse(): string
}
```

我们或许会在一个类中这样使用：

```
class Demo<T extends FirstInterface, SecondInterface> {
  private genericProperty: T

  useT() {
    this.genericProperty.doSomething()
    this.genericProperty.doSomethingElse() // 类型“T”上不存在属性“doSomethingElse”
  }
}
```

但是只有 `FirstInterface` 约束了泛型 `T`，`SecondInterface` 并没有生效，上面的方法并不能用两个接口同时约束泛型，那么我们这样使用呢：

```
class Demo<T extends FirstInterface, T extends SecondInterface> { // 标识符“T”重复
  ...
}
```

上述的语法就是错误的，那么应该如何用多重类型约束泛型呢?

比如我们就可以将接口 `FirstInterface` 与 `SecondInterface` 作为超接口来解决问题：

```
interface ChildInterface extends FirstInterface, SecondInterface {

}
```

这个时候 `ChildInterface` 是 `FirstInterface` 与 `SecondInterface` 的子接口，然后我们通过泛型约束就可以达到多类型约束的目的。

```
class Demo<T extends ChildInterface> {
  private genericProperty: T

  useT() {
    this.genericProperty.doSomething()
    this.genericProperty.doSomethingElse()
  }
}
```

经过评论区 @塔希 同学的提醒，我们可以利用交叉类型来进行多类型约束，如下：

```
interface FirstInterface {
  doSomething(): number
}

interface SecondInterface {
  doSomethingElse(): string
}

class Demo<T extends FirstInterface & SecondInterface> {
  private genericProperty: T

  useT() {
    this.genericProperty.doSomething() // ok
    this.genericProperty.doSomethingElse() // ok
  }
}
```

以上就是我们在多个类型约束泛型中的使用技巧。

## 泛型与 new

我们假设需要声明一个泛型拥有构造函数，比如：

```
function factory<T>(type: T): T {
  return new type() // This expression is not constructable.
}
```

编译器会告诉我们这个表达式不能构造，因为我们没有声明这个泛型 `T` 是构造函数，这个时候就需要 `new` 的帮助了。

```
function factory<T>(type: {new(): T}): T {
  return new type() // ok
}
```

参数 `type` 的类型 `{new(): T}` 就表示此泛型 T 是可被构造的，在被实例化后的类型是泛型 T。

## 小结

设计泛型的关键目的是在成员之间提供有意义的约束，这些成员可以是：

- 接口
- 类的实例成员
- 类的方法
- 函数参数
- 函数返回值

除了本节介绍的泛型用法之外，还有一些更高级的用法，后面我们会讲到，泛型十分重要，值得我们多进行代码练习来巩固知识。

# 11 可辨识联合类型

在开始「可辨识联合类型」的学习之前我们要先搞清楚两个概念「类型字面量」与「字面量类型」,因为会在可辨识联合类型的学习中用到类型字面量的特性.

这看起来非常绕,但是「类型字面量」与「字面量类型」的关系就如同雷锋和雷峰塔一样,它们只是名字有些像,所以容易造成混淆,所以我们专门把两者放在同一节,主要聊一下两者的不同.

## 字面量类型

字面量（Literal Type）主要分为 真值字面量类型（boolean literal types）,数字字面量类型（numeric literal types）,枚举字面量类型（enum literal types）,大整数字面量类型（bigInt literal types）和字符串字面量类型（string literal types）。

```
const a: 2333 = 2333 // ok
const ab : 0b10 = 2 // ok
const ao : 0o114 = 0b1001100 // ok
const ax : 0x514 = 0x514 // ok
const b : 0x1919n = 6425n // ok
const c : 'xiaomuzhu' = 'xiaomuzhu' // ok
const d : false = false // ok

const g: 'github' = 'pronhub' // 不能将类型“"pronhub"”分配给类型“"github"”
```

字面量类型的要和实际的值的字面量一一对应,如果不一致就会报错,比如最后一个例子中字面量类型是 `github`,但是值却是 `pronhub`,这就会产生报错.

你可能会问这种只有单个类型的字面量类型有什么用处呢?

当字面量类型与联合类型结合的时候,用处就显现出来了,它可以模拟一个类似于枚举的效果:

```
type Direction = 'North' | 'East' | 'South' | 'West';

function move(distance: number, direction: Direction) {
    // ...
}
```

效果如下:



![2019-10-08-13-54-45](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/11/16dbb124607d2898~tplv-t2oaga2asx-watermark.awebp)



## 类型字面量

类型字面量(Type Literal)不同于字面量类型（Literal Type),它跟 JavaScript 中的对象字面量的语法很相似:

```
type Foo = {
  baz: [
    number,
    'xiaomuzhu'
  ];
  toString(): string;
  readonly [Symbol.iterator]: 'github';
  0x1: 'foo';
  "bar": 12n;
};
```

你会发现这个结构跟 `interface` 也有点相似,我们在类型别名那一节讲过,在一定程度上类型字面量可以代替接口.

## 可辨识联合类型

我们先假设一个场景,现在又两个功能,一个是创建用户即 `create`,一个是删除用户即 `delete`.

我们先定义一下这个接口,由于创建用户不需要id,是系统随机生成的,而删除用户是必须用到 id 的,那么代码如下:

```
interface Info {
    username: string
}

interface UserAction {
    id?: number
    action: 'create' | 'delete'
    info: Info
}
```

上面的接口是不是有什么问题?

是的,当我们创建用户时是不需要 id 的,但是根据上面接口产生的情况,以下代码是合法的:

```
const action:UserAction = {
    action:'create',
    id: 111,
    info: {
        username: 'xiaomuzhu'
    }
}
```

但是我们明明不需要 id 这个字段,因此我们得用另外的方法,这就用到了上面提到的「类型字面量」了:

```
type UserAction = | {
    id: number
    action: 'delete'
    info: Info
} |
{
    action: 'create'
    info: Info
}
```

这似乎完美解决了,那么我们创建一个函数分别处理 `create` 和 `delete` 两者情况,两者的不同之处就在于一个有 id 另一个没 id 这个字段:

```
const UserReducer = (userAction: UserAction) => {
    console.log(userAction.id)
    ...
}
```

我们发现在编写过程中 IDE 就报错了:



![2019-10-08-14-35-26](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/11/16dbb124613e3b1e~tplv-t2oaga2asx-watermark.awebp)



类型别名 `UserAction` 是有两个类型字面量联合而成的,我们不知道其中传入的是有没有 `id` 字段的那个类型字面量,因此我们需要找到方法区分出到底是哪个类型字面量.

大家有没有想到最开始提到的「字面量类型」,它的特性不就是唯一性吗?这就是区分两者的钥匙:

```
const UserReducer = (userAction: UserAction) => {
    switch (userAction.action) {
        case 'delete':
            console.log(userAction.id);
            break;
        default:
            break;
    }
}
```

效果如下:



![2019-10-08-14-38-11](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/11/16dbb1246146cc76~tplv-t2oaga2asx-watermark.awebp)



我们上面提到了 `userAction.action` 就是辨识的关键,被称为**可辨识的标签**,我们发现上面这种模式要想实现必须要三个要素:

- 具有普通的单例类型属性—可辨识的特征,上文中就是 `delete` 与 `create` 两个有唯一性的字符串字面量
- 一个类型别名包含**联合类型**
- 类型守卫的特性,比如我们必须用 `if` `switch` 来判断 `userAction.action` 是属于哪个类型作用域即 `delete` 与 `create`

## 小结

熟悉 Redux 的同学看完本节应该似曾相识,我们可辨识联合类型的使用场景非常适用于 Redux 的那些样板代码,在之后的 Redux 实战环节,我们会大量运用可辨识联合这个高级类型.

# 11 类型断言与类型守卫

## 类型断言

有些情况下 TS 并不能正确或者准确得推断类型,这个时候可能产生不必要的警告或者报错。

比如初学者经常会遇到的一类问题:

```
const person = {};

person.name = 'xiaomuzhu'; // Error: 'name' 属性不存在于 ‘{}’
person.age = 20; // Error: 'age' 属性不存在于 ‘{}’
```

这个时候该怎么办？由于类型推断，这个时候 `person` 的类型就是 `{}`，根本不存在后添加的那些属性，虽然这个写法在js中完全没问题，但是开发者知道这个 `person` 实际是有属性的，只是一开始没有声明而已，但是 typescript 不知道啊，所以就需要类型断言了:

```
interface Person {
  name: string;
  age: number;
}

const person = {} as Person;

person.name = 'xiaomuzhu';
person.age = 20;
```

但是类型断言不要滥用,在万不得已的情况下使用要谨慎,因为你强制把某类型断言会造成 TypeScript 丧失代码提示的能力。

## 双重断言

虽然类型断言是有强制性的,但并不是万能的,因为一些情况下也会失效:

```
interface Person {
	name: string;
	age: number;
}

const person = 'xiaomuzhu' as Person; // Error
```

这个时候会报错,很显然不能把 `string` 强制断言为一个接口 `Person` ,但是并非没有办法,此时可以使用双重断言:

```
interface Person {
	name: string;
	age: number;
}

const person = 'xiaomuzhu' as any as Person; // ok
```

先把类型断言为 `any` 再接着断言为你想断言的类型就能实现双重断言，当然上面的例子肯定说不通的，双重断言我们也更不建议滥用，但是在一些少见的场景下也有用武之地，当你遇到事记得有双重断言这个操作即可。

## 类型守卫

类型守卫说白了就是缩小类型的范围，我们看几个例子就容易理解了。

### instanceof

instanceof 类型保护是通过构造函数来细化类型的一种方式.

```
class Person {
    name = 'xiaomuzhu';
    age = 20;
}

class Animal {
    name = 'petty';
    color = 'pink';
}

function getSometing(arg: Person | Animal) {
    // 类型细化为 Person
    if (arg instanceof Person) {
        console.log(arg.color); // Error，因为arg被细化为Person，而Person上不存在 color属性
        console.log(arg.age); // ok
    }
    // 类型细化为 Person
    if (arg instanceof Animal) {
        console.log(arg.age); // Error，因为arg被细化为Animal，而Animal上不存在 age 属性
        console.log(arg.color); // ok
    }
}
```

### in

跟上面的例子类似，`x in y` 表示 x 属性在 y 中存在。

```
class Person {
	name = 'xiaomuzhu';
	age = 20;
}

class Animal {
	name = 'petty';
	color = 'pink';
}

function getSometing(arg: Person | Animal) {
	if ('age' in arg) {
		console.log(arg.color); // Error
		console.log(arg.age); // ok
	}
	if ('color' in arg) {
		console.log(arg.age); // Error
		console.log(arg.color); // ok
	}
}
```

### 字面量类型守卫

这个功能很重要，在后面的联合辨析类型中会用到此特性，当你在联合类型里使用字面量类型时，它可以帮助检查它们是否有区别:

```
type Foo = {
  kind: 'foo'; // 字面量类型
  foo: number;
};

type Bar = {
  kind: 'bar'; // 字面量类型
  bar: number;
};

function doStuff(arg: Foo | Bar) {
  if (arg.kind === 'foo') {
    console.log(arg.foo); // ok
    console.log(arg.bar); // Error
  } else {
    console.log(arg.foo); // Error
    console.log(arg.bar); // ok
  }
}
```

## 小结

本节的内容不多，基本属于小技巧类，这些小技巧能帮助我们快速解决一下棘手的问题，也能帮助我们编写一些高效的代码。



# 12 类型兼容性

类型兼容性用于确定一个类型是否能赋值给其他类型，这看起来并没有什么太大用处，而实际上当我们了解了兼容性之后才会规避之后实际编程中的很多低级错误，笔者也是后来才意识到这一点的。

## 结构类型

TypeScript 里的类型兼容性是基于「结构类型」的，结构类型是一种只使用其成员来描述类型的方式，其基本规则是，如果 x 要兼容 y，那么 y 至少具有与 x 相同的属性。

我们做一个简单的实验，我们构建一个类 `Person`,然后声明一个接口 `Dog`，`Dog` 的属性 `Person` 都拥有，而且还多了其他属性，这种情况下 `Dog` 兼容了 `Person`。

```
class Person {
    constructor(public weight: number, public name: string, public born: string) {

    }
}

interface Dog {
    name: string
    weight: number
}

let x: Dog

x = new Person(120, 'cxk', '1996-12-12') // OK
```

但如果反过来，`Person` 并没有兼容 `Dog`，因为 `Dog` 的属性比 `Person` 要少了一个。

## 函数的类型兼容性

### 函数参数兼容性

函数类型的兼容性判断，要查看 x 是否能赋值给 y，首先看它们的参数列表。

x 的每个参数必须能在 y 里找到对应类型的参数,注意的是参数的名字相同与否无所谓，只看它们的类型。

这里，x 的每个参数在 y 中都能找到对应的参数，所以允许赋值:

```
let x = (a: number) => 0;
let y = (b: number, s: string) => 0;

y = x; // OK
x = y; // Error 不能将类型“(b: number, s: string) => number”分配给类型“(a: number) => number”。
```

那么当函数的参数中出现了可选参数或者 rest 参数时会怎么样呢？

```
let foo = (x: number, y: number) => {};
let bar = (x?: number, y?: number) => {};
let bas = (...args: number[]) => {};

foo = bar = bas;
bas = bar = foo;
```

如果你在 `tsconfig.json` 默认配置下上面的兼容性都是没问题的，但是在我们严格检测的环境下还是会报错的:



![2019-06-25-15-58-11](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/11/16dbb11f033a581a~tplv-t2oaga2asx-watermark.awebp)



原因就是可选类型的参数可能为 `undefined`，在这种情况下不能与 `number` 兼容。

> 当我们把 strictNullChecks 设置为 false 时上述代码是兼容的。

那么甚至他们的参数数量都不一致呢?

```
let foo = (x: number, y: number) => {};
let bar = (x?: number) => {};

foo = bar // ok
bar = foo //报错
```

我们看到参数较多的 foo 兼容了 bar。

## 枚举的类型兼容性

枚举与数字类型相互兼容:

```
enum Status {
  Ready,
  Waiting
}

let status = Status.Ready;
let num = 0;

status = num;
num = status;
```

## 类的类型兼容性

仅仅只有实例成员和方法会相比较，构造函数和静态成员不会被检查:

```
class Animal {
  feet: number;
  constructor(name: string, numFeet: number) {}
}

class Size {
  feet: number;
  constructor(meters: number) {}
}

let a: Animal;
let s: Size;

a = s; // OK
s = a; // OK
```

私有的和受保护的成员必须来自于相同的类:

```
class Animal {
  protected feet: number;
}
class Cat extends Animal {}

let animal: Animal;
let cat: Cat;

animal = cat; // ok
cat = animal; // ok

class Size {
  protected feet: number;
}

let size: Size;

animal = size; // ERROR
size = animal; // ERROR
```

## 泛型的类型兼容性

泛型本身就是不确定的类型,它的表现根据是否被成员使用而不同.

就比如下面代码:

```
interface Person<T> {

}

let x : Person<string>
let y : Person<number>

x = y // ok
y = x // ok
```

由于没有被成员使用泛型,所以这里是没问题的。

那么我们再看下面:

```
interface Person<T> {
    name: T
}

let x : Person<string>
let y : Person<number>

x = y // 不能将类型“Person<number>”分配给类型“Person<string>”。
y = x // 不能将类型“Person<string>”分配给类型“Person<number>”。
```

这里由于泛型 `T` 被成员 `name` 使用了,所以类型不再兼容。

## 小结

了解各个类型的兼容性有助于我们更高效地编写代码,也避免了众多低级错误,最后留一个思考题:

如下代码,`Person` 和 `Animal` 的形状是一样的,这就代表两者互相兼容,那么我们的 `getPersonName` 函数是要获取 `Person` 类的某些属性,但是由于 `Person` 和 `Animal` 兼容,此时传入 `Animal` 类型也是不会报错的,这很烦人,如何在这种情况下让他们不兼容?

```
interface Person {
	name: string;
	age: number;
	weight: number;
}

interface Animal {
	name: string;
	age: number;
	weight: number;
}

function getPersonName(p: Person) {
	...
}
```
>>>>>>> 12cb239e7d58d591ecc7518c3574a77414892612



# 23 高级类型之条件类型

之所以叫类型编程,是因为我们可以对*类型*进行编程了,比如之前我们的类型基本都是写死的,比如这样:

```
type F = string
```

但是有时候我们并不能再编写代码的时候就把类型确定了,到底是什么类型还是需要一些外部条件的,那么这个时候应该怎么办?

TypeScript 在2.8版本之后引入了条件类型(conditional type).

## 条件类型的使用

条件类型够表示非统一的类型,以一个条件表达式进行类型关系检测，从而在两种类型中选择其一:

```
T extends U ? X : Y
```

上面的代码可以理解为: 若 `T` 能够赋值给 `U`，那么类型是 `X`，否则为 `Y`,有点类似于JavaScript中的三元条件运算符.

比如我们声明一个函数 `f`,它的参数接收一个布尔类型,当布尔类型为 `true` 时返回 `string` 类型,否则返回 `number` 类型:

```
declare function f<T extends boolean>(x: T): T extends true ? string : number;

const x = f(Math.random() < 0.5)
const y = f(false)
const z = f(true)
```

而 `x,y,z` 的类型分别如下:



![2019-09-25-23-14-23](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/11/16dbb142562f98dd~tplv-t2oaga2asx-watermark.awebp)





![2019-09-25-23-14-37](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/11/16dbb14257578f5b~tplv-t2oaga2asx-watermark.awebp)





![2019-09-25-23-14-51](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/11/16dbb142576db052~tplv-t2oaga2asx-watermark.awebp)



条件类型就是这样,只有类型系统中给出充足的条件之后,它才会根据条件推断出类型结果.

## 条件类型与联合类型

条件类型有一个特性,就是「分布式有条件类型」,但是分布式有条件类型是有前提的,条件类型里待检查的类型必须是`naked type parameter`.

好了,肯定有人已经晕了,什么是分布式有条件类型?`naked type parameter`又是什么?

`naked type parameter`指的是**裸类型参数**,怎么理解?这个「裸」是指类型参数没有被包装在其他类型里,比如没有被数组、元组、函数、Promise等等包裹.

我们举个简单的例子:

```
// 裸类型参数,没有被任何其他类型包裹即T
type NakedUsage<T> = T extends boolean ? "YES" : "NO"
// 类型参数被包裹的在元组内即[T]
type WrappedUsage<T> = [T] extends [boolean] ? "YES" : "NO";
```

好了,`naked type parameter`我们了解了之后,「分布式有条件类型」就相对容易理解了,按照官方文档的说法是「分布式有条件类型在实例化时会自动分发成联合类型」.

这个说法很绕,我们直接看例子:

```
type Distributed = NakedUsage<number | boolean> //  = NakedUsage<number> | NakedUsage<boolean> =  "NO" | "YES"
type NotDistributed = WrappedUsage<number | boolean > // "NO"
```

当我们给类型`NakedUsage`加入联合类型`number | boolean`时,它的结果返回`"NO" | "YES"`,相当于联合类型中的`number`和`boolean`分别赋予了`NakedUsage<T>`然后再返回出一个联合类型,这个操作大家可以类比JavaScript中的`Array.map()`

> JavaScript中map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。

我们看`NotDistributed`的结果,他接受的同样是联合类型`number | boolean`,但是返回一个特定的类型`"NO"`,而非一个联合类型,就是因为他的类型参数是被包裹的即`[<T>]`,不会产生分布式有条件类型的特性.

这一部分比较难以理解,我们可以把「分布式有条件类型」粗略得理解为类型版的`map()方法`,然后我们再看一些实用案例加深理解.

我们先思考一下,如何设计一个类型工具`Diff<T, U>`,我们要找出`T`类型中`U`不包含的部分:

```
type R = Diff<"a" | "b" | "c" | "d", "a" | "c" | "f">;  // "b" | "d"
```

联合类型`"a" | "b" | "c" | "d"`与`"a" | "c" | "f"`相比,后者不包含`"b" | "d"`.

我们借助有条件类型很容易写出这个工具函数:

```
type Diff<T, U> = T extends U ? never : T;
```

同样的,我们可以生产出`Filter<T, U>` `NonNullable<T>`等工具类型:

```
// 类似于js数组的filter
type Filter<T, U> = T extends U ? T : never;
type R1 = Filter<string | number | (() => void), Function>;

// 剔除 null和undefined
type NonNullable<T> = Diff<T, null | undefined>;

type R2 = NonNullable<string | number | undefined>;  // string | number
```

我们会在后面专门的章节介绍如何构建这些工具类型,而工具类型的编写离不开「分布式有条件类型」的帮助.

## 条件类型与映射类型

这一小部分需要读者对映射类型有基本的了解,我们依然是先看一个思考题:

我没有一个interface `Part`,现在需要编写一个工具类型将interface中**函数类型**的**名称**取出来,在这个题目示例中,应该取出的是:



![2019-09-26-12-03-00](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/11/16dbb1425771bb18~tplv-t2oaga2asx-watermark.awebp)



```
interface Part {
    id: number;
    name: string;
    subparts: Part[];
    updatePart(newName: string): void;
}

type R = FunctionPropertyNames<Part>;
```

那么你会如何设计这个工具类型?

> 在一些有要求TS基础的公司,设计工具类型是一个比较大的考点.

这种问题我们应该换个思路,比如我们把interface看成js中的对象字面量,用js的思维你会如何取出?

这个时候问题就简单了,遍历整个对象,找出value是函数的部分取出key即可.

在TypeScript的类型编程中也是类似的道理,我们要遍历interface,取出类型为`Function`的部分找出key即可:

```
type FunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T]
```

我一步步分析一下上述工具类型(我们按照js的思维讲解,可能有不严谨之处,但是有助于你的理解):

1. 假设我们把`Part`代入泛型`T`,`[K in keyof T]`相当于遍历整个interface
2. 这时`K`相当于interface的key,`T[K]`相当于interface的value
3. 接下来,用条件类型验证value的类型,如果是`Function`那么将value作为新interface的key保留下来,否则为`never`
4. 到这里我们得到了遍历修改后的**新**interface即:

```
type R = {
    id: never;
    name: never;
    subparts: never;
    updatePart: "updatePart";
}
```

> 特别注意: 这里产生的新interface R中的value是老interface Part的key,取出新interface R的value就是取出了对应老interface Part的key

1. 但是我们的的要求是取出老interface Part的key,这个时候再次用`[keyof T]`作为key依次取出新interface的value,但是由于`id` `name`和`subparts`的value为`never`就不会返回任何类型了,所以只返回了`'updatePart'`.

> `never`类型表示不会是任何值,即什么都没有,甚至不是`null`类型

## 小结

这一节的信息量很大,如果没有仔细搞清楚之前的映射类型相关的知识,理解起来会比较困难,不过没关系,我们后面会有一个专门的章节讲工具类型的设计,还会涉及相关的内容,不过今天有一个思考题:

如何取出下面interface中的可选类型?

```
interface People = {
  id: string
  name: string
  age?: number
  from?: string
}
```

即

```
type R = NullableKeys<People> // type R = "age" | "from"
```

> 提示: TypeScript中有一类符号,`+`或`-`允许控制映射的类型修饰符（例如?或readonly),`-?`意味着必须全部存在,意味着将消除类型映射的可选类型.



# 25 常用工具类型解读

用 JavaScript 编写中大型程序是离不开 lodash 这种工具集的，而用 TypeScript 编程同样离不开类型工具的帮助，类型工具就是类型版的 lodash.

我们在本节会介绍一些类型工具的设计与实现，如果你的项目不是非常简单的 demo 级项目，那么在你的开发过程中一定会用到它们。

起初，TypeScript 没有这么多工具类型，很多都是社区创造出来的，然后 TypeScript 陆续将一些常用的工具类型纳入了官方基准库内。

比如 `ReturnType`、`Partial`、`ConstructorParameters`、`Pick` 都是官方的内置工具类型.

其实上述的工具类型都可以被我们开发者自己模拟出来,本节我们学习一下如何设计工具类型.

## 工具类型的设计

### 泛型

我们说过可以把工具类型类比 js 中的工具函数，因此必须有输入和输出，而在TS的类型系统中能担当类型入口的只有泛型.

比如`Partial`,它的作用是将属性全部变为可选.

```
type Partial<T> = { [P in keyof T]?: T[P] };
```

这个类型工具中,我们需要将类型通过泛型`T`传入才能对类型进行处理并返回新类型,可以说,一切类型工具的基础就是泛型.

### 类型递归

是的,在类型中也有类似于js递归的操作,上面提到的`Partial`可以把属性变为可选,但是他有个问题,就是无法把深层属性变成可选,只能处理外层属性:

```
interface Company {
    id: number
    name: string
}

interface Person {
    id: number
    name: string
    adress: string
    company: Company
}

type R1 = Partial<Person>
```



![2019-09-26-20-43-21](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/6/16da1a8b34dc7e54~tplv-t2oaga2asx-watermark.awebp)



这里想处理深层属性,就必须用到类型递归:

```
type DeepPartial<T> = {
    [U in keyof T]?: T[U] extends object
    ? DeepPartial<T[U]>
    : T[U]
};

type R2 = DeepPartial<Person>
```



![2019-09-26-20-48-25](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/6/16da1a8b34f7a170~tplv-t2oaga2asx-watermark.awebp)



这个原理跟js类似,就是对外层的value做个判断,如果恰好是`object`类型,那么对他也进行属性可选化的操作即可.

### 关键字

像`keyof`、`typeof`这种常用关键字我们已经了解过了,现在主要谈一下另外一些常用关键字.

`+` `-`这两个关键字用于映射类型中给属性添加修饰符,比如`-?`就代表将可选属性变为必选,`-readonly`代表将只读属性变为非只读.

比如TS就内置了一个类型工具`Required<T>`,它的作用是将传入的属性变为必选项:

```
type Required<T> = { [P in keyof T]-?: T[P] };
```

当然还有很常用的`Type inference`就是上一节infer关键字的使用,还有之前的`Conditional Type`条件类型都是工具类型的常用手法,在这里就不多赘述了。

## 常见工具类型的解读

### Omit

`Omit`这个工具类型在开发过程中非常常见,以至于官方在3.5版本正式加入了`Omit`类型.

要了解之前我们先看一下另一个内置类型工具的实现`Exclude<T>`:

```
type Exclude<T, U> = T extends U ? never : T;
type T = Exclude<1 | 2, 1 | 3> // -> 2
```

`Exclude` 的作用是从 `T` 中排除出**可分配**给 `U`的元素.

> 这里的可分配即`assignable`,指可分配的,`T extends U`指T是否可分配给U

那么`Exclude`跟`Omit`有什么关系呢?

其实`Omit` = `Exclude` + `Pick`

```
type Omit<T, K> = Pick<T, Exclude<keyof T, K>>

type Foo = Omit<{name: string, age: number}, 'name'> // -> { age: number }
```

`Omit<T, K>`的作用是忽略`T`中的某些属性.

### Merge

`Merge<O1, O2>`的作用是将两个对象的属性合并:

```
type O1 = {
    name: string
    id: number
}

type O2 = {
    id: number
    from: string
}

type R2 = Merge<O1, O2>
```

结果



![2019-09-26-23-34-57](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/11/16dbb1464cc80532~tplv-t2oaga2asx-watermark.awebp)



这个类型工具也非常常用,他主要有两个部分组成:

```
Merge<O1, O2>` = `Compute<A>` + `Omit<U, T>
```

`Compute`的作用是将交叉类型合并.即:

```
type Compute<A extends any> =
    A extends Function
    ? A
    : { [K in keyof A]: A[K] }

type R1 = Compute<{x: 'x'} & {y: 'y'}>
```

结果如下:



![2019-09-26-23-41-30](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/11/16dbb1464cbb2ca3~tplv-t2oaga2asx-watermark.awebp)



Merge的最终实现如下:

```
type Merge<O1 extends object, O2 extends object> =
    Compute<O1 & Omit<O2, keyof O1>>
```

### Intersection

`Intersection<T, U>`的作用是取`T`的属性,此属性同样也存在与`U`.

```
type Props = { name: string; age: number; visible: boolean };
type DefaultProps = { age: number };

// Expect: { age: number; }
type DuplicatedProps = Intersection<Props, DefaultProps>;
```

`Intersection`是`Extract`与`Pick`的结合

```
Intersection<T, U>` = `Extract<T, U>` + `Pick<T, U>
type Intersection<T extends object, U extends object> = Pick<
  T,
  Extract<keyof T, keyof U> & Extract<keyof U, keyof T>
>;
```

### Overwrite

`Overwrite<T, U>`顾名思义,是用`U`的属性覆盖`T`的相同属性.

```
type Props = { name: string; age: number; visible: boolean };
type NewProps = { age: string; other: string };

// Expect: { name: string; age: string; visible: boolean; }
type ReplacedProps = Overwrite<Props, NewProps>
```

即:

```
type Overwrite<
  T extends object,
  U extends object,
  I = Diff<T, U> & Intersection<U, T>
> = Pick<I, keyof I>;
```

### Mutable

将 `T` 的所有属性的 `readonly` 移除

```
type Mutable<T> = {
  -readonly [P in keyof T]: T[P]
}
```

## 小结

本节我们介绍了几种常见的高级类型工具,尤其是前三个非常常用,当然如果你想进一步学习类型工具的设计,建议阅读[utility-types](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fpiotrwitek%2Futility-types)的源码,本节部分实现就是源于此类型工具库.

# 33 TypeScript 工程化：tsconfig.json 配置

[官方网站](https://link.juejin.cn/?target=http%3A%2F%2Fwww.typescriptlang.org%2Fdocs%2Fhandbook%2Ftsconfig-json.html)其实有一章专门讲了 tsconfig.json 配置,但是大多数人可能跟我一样，读了一遍之后根本不知道在干什么，我们就用白话逐条来解读 tsconfig.json 的配置项。

如果一个目录下存在一个 `tsconfig.json` 文件，那么它意味着这个目录是 TypeScript 项目的根目录。 `tsconfig.json` 文件中指定了用来编译这个项目的根文件和编译选项。

一个项目可以通过以下方式之一来编译：

- 不带任何输入文件的情况下调用 tsc，编译器会从当前目录开始去查找 `tsconfig.json` 文件，逐级向上搜索父目录。
- 不带任何输入文件的情况下调用 tsc，且使用命令行参数 --project（或-p）指定一个包含 `tsconfig.json` 文件的目录。 当命令行上指定了输入文件时，`tsconfig.json`文件会被忽略。

## tsconfig.json 文件指定

我们先看一下 `tsconfig.json` 主要配置项：

```
{
  "files": [],
  "include": [],
  "exclude": [],
  "compileOnSave": false,
  "extends": "",
  "compilerOptions": {}
}
```

### **files** 配置项

`files` 是一个数组列表，里面包含指定文件的相对或绝对路径，用来指定待编译文件，编译器在编译的时候只会编译包含在files中列出的文件。

这里的待编译文件是指入口文件，任何被入口文件依赖的文件，比如 `foo.ts` 依赖 `bar.ts` ，那这里并不需要写上 `bar.ts` ，编译器会自动把所有的依赖文件纳为编译对象。

如果我们不指定待编译文件的话，则取决于有没有设置 `include` 选项，如果没有 `include` 选项，则默认会编译根目录以及所有子目录中的文件。

### **include/exclude** 配置项

`include/exclude` 也是一个数组，但数组元素是类似 glob 的文件模式。它支持的 glob 通配符包括：

- `*`：匹配 0 或多个字符（注意：不含路径分隔符）
- `?`：匹配任意单个字符（注意：不含路径分隔符）
- `**/` ：递归匹配任何子路径

在这里我们既可以指定目录也可以指定文件，而上面的 `files` 选项则只能指定文件。

我们再说明一个问题，什么才是 TypeScript 编译器眼中的文件？

TS 文件指拓展名为 `.ts`、`.tsx` 或 `.d.ts` 的文件。如果开启了 `allowJs` 选项，那 `.js` 和 `.jsx` 文件也属于 TS 文件，因此一个目录下只有上述文件才会被编译。

`include/exclude` 的作用也很好理解，我们可以指定编译某些文件，或者指定排除某些文件，但是别忘了，还有上面我们提到的 `files`，这三者的关系是什么样的？有没有优先级？或者默认值?

### include/exclude/files 三者的关系

首先我们明确一点，`exclude` 是有默认值的，如果我们没有设置 `exclude` ，那其默认值为 `node_modules` 、`bower_components`、`jspm_packages` 和编译选项 `outDir` 指定的路径。

还有一点，`files` 的优先级是最高的，比如我们在 `files` 中指定了一些文件，但是又在 `exclude` 中把它们排除了，这是无效的，因为 `files` 的优先级更高，这些文件依然会被编译，但是如果 `include` 中包含，那么依然会被排除，由此可见这三者的优先级如下：

files > exclude > include

如果 `files` 和 `include` 都未设置，那么除了 `exclude` 排除的文件，编译器会默认包含路径下的所有 TS 文件。

## tsconfig.json 配置复用

我们看到 `tsconfig.json` 还有一个 `extends` 的配置项，它的作用是实现配置复用，即一个配置文件可以继承另一个文件的配置属性。

比如我们创建一个文件 `configs/base.json`:

```
{
  "compilerOptions": {
    "noImplicitAny": true,
    "strictNullChecks": true,
    "composite": true,
    "incremental": true
  }
}
```

如果我们想引用上属配置，那么就需要 `extends` 这个配置项了：

```
{
  "extends": "./configs/base"
}
```

值得注意的有两点：

- 继承者中的同名配置会覆盖被继承者
- 所有相对路径都被解析为其所在文件的路径

## compileOnSave

在最顶层设置compileOnSave标记，可以让IDE在保存文件的时候根据tsconfig.json重新生成文件。

```
{
    "compileOnSave": true,
    "compilerOptions": {
        "noImplicitAny" : true
    }
}
```

要想支持这个特性需要Visual Studio 2015， TypeScript1.8.4以上并且安装atom-typescript插件。

## 编译选项

编译选项是重点，也是内容最多的地方，我们把它分为六大类：基础选项、类型检查选项、额外检测选项、模块解析选项、Source Map 选项、实验选项。

我们会涉及大部分的编译选项解读，但是一些冷门的编译选项我们没有涉及，具体可以移步[官方编译选项一览](https://link.juejin.cn/?target=http%3A%2F%2Fwww.typescriptlang.org%2Fdocs%2Fhandbook%2Fcompiler-options.html)。

### 基础选项

- target：基础选项中的 target 用于指定编译后的目标代码，比如我们想编译为 ES5 或者 ES2015
- module：用于我们指定模块的标准，比如 amd、umd、commonjs、esnext 等等

如果我们选择了 commonjs 那么编译后的模块会是 commonjs 模块：



![2019-10-19-00-07-08](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/21/16ded14eaa3fd615~tplv-t2oaga2asx-watermark.awebp)



如果我们选择了 exnext，那么编译后的模块会是 ES2015 的模块系统:



![2019-10-19-00-07-37](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/21/16ded14eaad1b4dc~tplv-t2oaga2asx-watermark.awebp)



- lib：用于指定在编译过程中需要包含进来的库文件，比如需要编译一些与浏览器 Dom 相关的代码，就需要引入 DOM 库，如果需要编译 ES2015 相关的一些代码，比如 Proxy、Reflect 等，就需要引入 ES2015 的库，如果需要引入一些尚在提案阶段的代码，比如 asynciterable、bigint，那么就要 esnext 库
- allowJs：allowJs设置的值为true或false，用来指定是否允许编译js文件，默认是false，即不编译js文件
- checkJs：checkJs的值为true或false，用来指定是否检查和报告js文件中的错误，默认是false
- jsx：指定jsx代码用于的开发环境: 'preserve', 'react-native', or 'react'，用于编译 jsx 代码
- jsxFactory: 指定生成目标为react JSX时，使用的JSX工厂函数，比如 React.createElement或 h
- declaration：declaration的值为true或false，用来指定是否在编译的时候生成相应的".d.ts"声明文件。如果设为true，编译每个ts文件之后会生成一个js文件和一个声明文件。但是declaration和allowJs不能同时设为true
- declarationMap：指定是否为声明文件.d.ts生成map文件
- sourceMap：用来指定编译时是否生成.map文件
- outFile：outFile用于指定将输出文件合并为一个文件，它的值为一个文件路径名。比如设置为"./dist/index.js"，则将所有的文件输出为一个名为index.js的单一文件。但是要注意，只有设置module的值为amd和system模块时才支持这个配置
- rootDir: outDir用来指定输出目录
- removeComments：删除所有注释，除了以 /!*开头的版权信息。
- noEmit：不生成输出文件

### 类型检查选项

类型检查选项主要是配置对 TypeScript 类型的检查严苛程度，通常情况下我们建议选择更为严苛的检查程度，比如大多数情况下我建议直接开启 strict 模式。

- strict: 用于指定是否启动所有类型检查，如果设为true则会同时开启下面这几个严格类型检查，默认为false
- noImplicitAny: 如果我们没有为一些值设置明确的类型，编译器会默认认为这个值为any，如果noImplicitAny的值为true的话。则没有明确的类型会报错。
- strictNullChecks：在严格的 null 检查模式下， null 和 undefined 值不包含在任何类型里，只允许用它们自己和 any 来赋值
- strictPropertyInitialization：确保类的非 undefined 属性已经在构造函数里初始化，若要令此选项生效，需要同时启用 `--strictNullChecks`
- strictBindCallApply：对 bind call apply 更严格的类型检测，比如如下可以检测出 apply 函数参数数量和类型的错误：

```
function foo(a: number, b: string): string {
  return a + b;
}

let a = foo.apply(undefined, [10]); // error: too few argumnts
```

特别对一些 react 老代码，函数需要自己 bind(this)，在没有用箭头函数时，可能经常使用 `this.foo = this.foo.bind(this)`，这时类型可能会不准，现在则可以准确捕获到错误了。

- alwaysStrict：始终以严格模式解析并为每个源文件生成 "use strict"语句，开启这个选项是一个好习惯，这可以帮助我们规避很多 JavaScript 遗留的一些怪异现象

### 额外检测选项

- noUnusedLocals：当一个变量声明，但未使用则抛错
- noUnusedParameters：当一个参数声明后没使用，也报错
- noImplicitReturns：当函数的有的返回路径没有返回值时报错
- noImplicitThis：当 this 为 any 类型的时候报错
- noFallthroughCasesInSwitch：当 `switch` 中没有使用 break 跳出时报错

### 模块解析选项

模块解析非常常用，我们有时候要用到路径别名的时候就需要对模块解析选项进行配置。

- baseUrl：解析非相对模块名的基准目录，设置 baseUrl 来告诉编译器到哪里去查找模块，所有非相对模块导入都会被当做相对于 baseUrl
- paths：路径映射，使用 paths 的前提是 baseUrl 必须被指定，比如我们要映射 `src/Views` 目录，如何映射取决于 baseUrl 是什么，比如 baseUrl 为 `./`，那么：

```
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "views": ["src/Views"] // 此处映射是相对于"baseUrl"
    }
  }
}
```

如果 baseUrl 为 `./src/`，那么：

```
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "views": ["Views"] // 此处映射是相对于"baseUrl"
    }
  }
}
```

- rootDirs: rootDirs可以指定一个路径列表，列表里的内容会在运行时被合并
- typeRoots: 默认所有可见的 "@types" 包会在编译过程中被包含进来，`node_modules/@types` 文件夹下以及它们子文件夹下的所有包都是可见的,但是如果指定了typeRoots，只有typeRoots下面的包才会被包含进来
- types: 如果指定了types，只有被列出来的包才会被包含进来,比如：

```
{
   "compilerOptions": {
        "types" : ["node", "lodash", "express"]
   }
}
```

### Source Map 选项

- sourceRoot：指定TypeScript源文件的路径，以便调试器定位
- sourceMap：生成相应的 .map文件
- inlineSources：将代码与sourcemaps生成到一个文件中，要求同时设置了 --inlineSourceMap或 --sourceMap属性

### 实验选项

控制是否开启一些实验性质的语法。

- experimentalDecorators： 启用实验性的ES装饰器，在装饰器章节我们提到过
- emitDecoratorMetadata：给源码里的装饰器声明加上设计类型元数据，这个在我们 Reflect.Metadata 的章节也提到过

## 小结

至此我们就把 `tsconfig.json` 详细的配置项解读完毕了，这个配置项比较繁杂，为了方便查找和记忆，我在网络上找了一份比较详细的[速查表](https://link.juejin.cn/?target=https%3A%2F%2Fjack-cool.github.io%2F2019%2F08%2F05%2Ftsconfig-json-%E9%85%8D%E7%BD%AE%E8%AF%A6%E8%A7%A3%2F)，如下：

```
{
  "compilerOptions": {
    /* Basic Options */
    "target": "es5" /* target用于指定编译之后的版本目标: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019' or 'ESNEXT'. */,
    "module": "commonjs" /* 用来指定要使用的模块标准: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */,
    "lib": ["es6", "dom"] /* lib用于指定要包含在编译中的库文件 */,
    "allowJs": true,                       /* allowJs设置的值为true或false，用来指定是否允许编译js文件，默认是false，即不编译js文件 */
    "checkJs": true,                       /* checkJs的值为true或false，用来指定是否检查和报告js文件中的错误，默认是false */
    "jsx": "preserve",                     /* 指定jsx代码用于的开发环境: 'preserve', 'react-native', or 'react'. */
    "declaration": true,                   /* declaration的值为true或false，用来指定是否在编译的时候生成相应的".d.ts"声明文件。如果设为true，编译每个ts文件之后会生成一个js文件和一个声明文件。但是declaration和allowJs不能同时设为true */
    "declarationMap": true,                /* 值为true或false，指定是否为声明文件.d.ts生成map文件 */
    "sourceMap": true,                     /* sourceMap的值为true或false，用来指定编译时是否生成.map文件 */
    "outFile": "./dist/main.js",                       /* outFile用于指定将输出文件合并为一个文件，它的值为一个文件路径名。比如设置为"./dist/main.js"，则输出的文件为一个main.js文件。但是要注意，只有设置module的值为amd和system模块时才支持这个配置 */
    "outDir": "./dist",                        /* outDir用来指定输出文件夹，值为一个文件夹路径字符串，输出的文件都将放置在这个文件夹 */
    "rootDir": "./",                       /* 用来指定编译文件的根目录，编译器会在根目录查找入口文件，如果编译器发现以rootDir的值作为根目录查找入口文件并不会把所有文件加载进去的话会报错，但是不会停止编译 */
    "composite": true,                     /* 是否编译构建引用项目  */
    "removeComments": true,                /* removeComments的值为true或false，用于指定是否将编译后的文件中的注释删掉，设为true的话即删掉注释，默认为false */
    "noEmit": true,                        /* 不生成编译文件，这个一般比较少用 */
    "importHelpers": true,                 /* importHelpers的值为true或false，指定是否引入tslib里的辅助工具函数，默认为false */
    "downlevelIteration": true,            /* 当target为'ES5' or 'ES3'时，为'for-of', spread, and destructuring'中的迭代器提供完全支持 */
    "isolatedModules": true,               /* isolatedModules的值为true或false，指定是否将每个文件作为单独的模块，默认为true，它不可以和declaration同时设定 */

    /* Strict Type-Checking Options */
    "strict": true /* strict的值为true或false，用于指定是否启动所有类型检查，如果设为true则会同时开启下面这几个严格类型检查，默认为false */,
    "noImplicitAny": true,                 /* noImplicitAny的值为true或false，如果我们没有为一些值设置明确的类型，编译器会默认认为这个值为any，如果noImplicitAny的值为true的话。则没有明确的类型会报错。默认值为false */
    "strictNullChecks": true,              /* strictNullChecks为true时，null和undefined值不能赋给非这两种类型的值，别的类型也不能赋给他们，除了any类型。还有个例外就是undefined可以赋值给void类型 */
    "strictFunctionTypes": true,           /* strictFunctionTypes的值为true或false，用于指定是否使用函数参数双向协变检查 */
    "strictBindCallApply": true,           /* 设为true后会对bind、call和apply绑定的方法的参数的检测是严格检测的 */
    "strictPropertyInitialization": true,  /* 设为true后会检查类的非undefined属性是否已经在构造函数里初始化，如果要开启这项，需要同时开启strictNullChecks，默认为false */
   "noImplicitThis": true,                /* 当this表达式的值为any类型的时候，生成一个错误 */
    "alwaysStrict": true,                  /* alwaysStrict的值为true或false，指定始终以严格模式检查每个模块，并且在编译之后的js文件中加入"use strict"字符串，用来告诉浏览器该js为严格模式 */

    /* Additional Checks */
    "noUnusedLocals": true,                /* 用于检查是否有定义了但是没有使用的变量，对于这一点的检测，使用eslint可以在你书写代码的时候做提示，你可以配合使用。它的默认值为false */
    "noUnusedParameters": true,            /* 用于检查是否有在函数体中没有使用的参数，这个也可以配合eslint来做检查，默认为false */
    "noImplicitReturns": true,             /* 用于检查函数是否有返回值，设为true后，如果函数没有返回值则会提示，默认为false */
    "noFallthroughCasesInSwitch": true,    /* 用于检查switch中是否有case没有使用break跳出switch，默认为false */

    /* Module Resolution Options */
    "moduleResolution": "node",            /* 用于选择模块解析策略，有'node'和'classic'两种类型' */
    "baseUrl": "./",                       /* baseUrl用于设置解析非相对模块名称的基本目录，相对模块不会受baseUrl的影响 */
    "paths": {},                           /* 用于设置模块名称到基于baseUrl的路径映射 */
    "rootDirs": [],                        /* rootDirs可以指定一个路径列表，在构建时编译器会将这个路径列表中的路径的内容都放到一个文件夹中 */
    "typeRoots": [],                       /* typeRoots用来指定声明文件或文件夹的路径列表，如果指定了此项，则只有在这里列出的声明文件才会被加载 */
    "types": [],                           /* types用来指定需要包含的模块，只有在这里列出的模块的声明文件才会被加载进来 */
    "allowSyntheticDefaultImports": true,  /* 用来指定允许从没有默认导出的模块中默认导入 */
    "esModuleInterop": true /* 通过为导入内容创建命名空间，实现CommonJS和ES模块之间的互操作性 */,
    "preserveSymlinks": true,              /* 不把符号链接解析为其真实路径，具体可以了解下webpack和nodejs的symlink相关知识 */

    /* Source Map Options */
    "sourceRoot": "",                      /* sourceRoot用于指定调试器应该找到TypeScript文件而不是源文件位置，这个值会被写进.map文件里 */
    "mapRoot": "",                         /* mapRoot用于指定调试器找到映射文件而非生成文件的位置，指定map文件的根路径，该选项会影响.map文件中的sources属性 */
    "inlineSourceMap": true,               /* 指定是否将map文件的内容和js文件编译在同一个js文件中，如果设为true，则map的内容会以//# sourceMappingURL=然后拼接base64字符串的形式插入在js文件底部 */
    "inlineSources": true,                 /* 用于指定是否进一步将.ts文件的内容也包含到输入文件中 */

    /* Experimental Options */
    "experimentalDecorators": true /* 用于指定是否启用实验性的装饰器特性 */
    "emitDecoratorMetadata": true,         /* 用于指定是否为装饰器提供元数据支持，关于元数据，也是ES6的新标准，可以通过Reflect提供的静态方法获取元数据，如果需要使用Reflect的一些方法，需要引入ES2015.Reflect这个库 */
  }
  "files": [], // files可以配置一个数组列表，里面包含指定文件的相对或绝对路径，编译器在编译的时候只会编译包含在files中列出的文件，如果不指定，则取决于有没有设置include选项，如果没有include选项，则默认会编译根目录以及所有子目录中的文件。这里列出的路径必须是指定文件，而不是某个文件夹，而且不能使用* ? **/ 等通配符
  "include": [],  // include也可以指定要编译的路径列表，但是和files的区别在于，这里的路径可以是文件夹，也可以是文件，可以使用相对和绝对路径，而且可以使用通配符，比如"./src"即表示要编译src文件夹下的所有文件以及子文件夹的文件
  "exclude": [],  // exclude表示要排除的、不编译的文件，它也可以指定一个列表，规则和include一样，可以是文件或文件夹，可以是相对路径或绝对路径，可以使用通配符
  "extends": "",   // extends可以通过指定一个其他的tsconfig.json文件路径，来继承这个配置文件里的配置，继承来的文件的配置会覆盖当前文件定义的配置。TS在3.2版本开始，支持继承一个来自Node.js包的tsconfig.json配置文件
  "compileOnSave": true,  // compileOnSave的值是true或false，如果设为true，在我们编辑了项目中的文件保存的时候，编辑器会根据tsconfig.json中的配置重新生成文件，不过这个要编辑器支持
  "references": [],  // 一个对象数组，指定要引用的项目
}
```

留言

# 参考资料：

https://www.notion.so/4-3-TypeScript-08f52ad87f7540e781144d7688452f39

Typescript的联合类型、Partial、Pick、Exclude、Omit介绍:

https://blog.csdn.net/dajuna/article/details/117958613

函数类型声明
https://www.cnblogs.com/sap-jerry/p/14933674.html

## 基础类型

基础类型包含：<u>string</u>，<u>number</u>，<u>boolean</u>

标注语法

```typescript
let title: string = '开课吧';
let n: number = 100;
let isOk: boolean = true;
```



### 布尔值

最基本的数据类型就是简单的true/false值，在JavaScript和TypeScript里叫做`boolean`（其它语言中也一样）。



### 数字

和JavaScript一样，TypeScript里的所有数字都是浮点数。 这些浮点数的类型是 `number`。 除了支持十进制和十六进制字面量，TypeScript还支持ECMAScript 2015中引入的二进制和八进制字面量。

```ts

```

### 字符串

JavaScript程序的另一项基本操作是处理网页或服务器端的文本数据。 像其它语言里一样，我们使用 `string`表示文本数据类型。 和JavaScript一样，可以使用双引号（ `"`）或单引号（`'`）表示字符串。

```ts

```

你还可以使用*模版字符串*，它可以定义多行文本和内嵌表达式。 这种字符串是被反引号包围（ ```），并且以`${ expr }`这种形式嵌入表达式

```ts

```

这与下面定义`sentence`的方式效果相同：

## Object对象

`object`表示非原始类型，也就是除`number`，`string`，`boolean`，`symbol`，`null`或`undefined`之外的类型。

使用`object`类型，就可以更好的表示像`Object.create`这样的API。例如：

```ts
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error
```

**内置对象类型**

在 `JavaScript` 中，有许多的内置对象，比如：Object、Array、Date……，我们可以通过对象的 <u>构造函数</u> 或者 <u>类</u> 来进行标注

```typescript
let a: object = {};
// 数组这里标注格式有点不太一样，后面我们在数组标注中进行详细讲解
let arr: Array<number> = [1,2,3];
let d1: Date = new Date();
```

**自定义对象类型**

另外一种情况，许多时候，我们可能需要自定义结构的对象。这个时候，我们可以：

- 字面量标注
- 接口
- 定义 <u>类</u> 或者 <u>构造函数</u>

字面量标注：

```typescript
let a: {username: string; age: number} = {
  username: 'zMouse',
  age: 35
};
// ok
a.username;
a.age;
// error
a.gender;
```

`优点` : 方便、直接

`缺点` : 不利于复用和维护

使用interface



## 数组

TypeScript像JavaScript一样可以操作数组元素。 有两种方式可以定义数组。 第一种，可以在元素类型后面接上`[]`，表示由此类型元素组成的一个数组：

```ts
let list: number[] = [1, 2, 3];
```

第二种方式是使用数组泛型，`Array<元素类型>`：

```ts
let list: Array<number> = [1, 2, 3];
```



## ❤元组 Tuple

元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。

 比如，你可以定义一对值分别为`string`和`number`类型的元组。（初始化数据的个数以及对应位置标注类型必须一致）

```ts
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
x = [10, 'hello']; // Error
```

当访问一个已知索引的元素，会得到正确的类型：

```ts
console.log(x[0].substr(1)); // OK
console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
```

当访问一个越界的元素，会使用联合类型替代：（越界数据必须是元组标注中的类型之一（标注越界数据可以不用对应顺序 - <u>联合类型</u>））

```ts
x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型

console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString

x[6] = true; // Error, 布尔不是(string | number)类型
```

联合类型是高级主题，我们会在以后的章节里讨论它。



```js
let data1: [string, number] = ['开课吧', 100];
// ok
data1.push(100);
// ok
data1.push('100');
// error
data1.push(true);
```



useState 返回的就是一个元祖 tuple,

可直接解构成新的变量名。



## 枚举 enum

枚举的作用组织收集一组关联数据的方式，通过枚举我们可以给一组有关联意义的数据赋予一些友好的名字

```ts
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
```

**默认情况下，从`0`开始为元素编号。 你也可以手动的指定成员的数值。 例如，我们将上面的例子改成从 `1`开始编号：**

```ts
enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green;
```

或者，全部都采用手动赋值：

```ts
enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;
```

枚举类型提供的一个便利是你可以由枚举的值得到它的名字。 例如，我们知道数值为2，但是不确定它映射到Color里的哪个名字，我们可以查找相应的名字：

```ts
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];

console.log(colorName);  // 显示'Green'因为上面代码里它的值是2
```



## 任意类型 any

有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 `any`类型来标记这些变量：

```ts
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
```

## unknown

unknown 表示这个值可以是任何值

❓❓❓❓❓❓

这句话怎么这么熟悉，刚才是不是用来形容 any 的？

unknown 的用法：在你想用 any 的时候，用 unknown 来代替，简单来说，unknown是一个"严格"版的 any

```jsx
const isFalsy = (value: unknown) => { 
 // 大家不用考虑这段console有啥意义，把它打在你的代码里对应的位置，观察编辑器会不会报错；
 // 再思考它应不应该报错
  console.log(value.mayNotExist)
  return value === 0 ? true : !!value; 
}; 
```

## 无值类型 void

某种程度上来说，`void`类型像是与`any`类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 `void`：

```ts
function warnUser(): void {
    console.log("This is my warning message");
}
```

不能有返回值，return



返回值为string类型

```
function warnUser(): string {
    console.log("This is my warning message");
}
```

声明一个`void`类型的变量没有什么大用，因为你只能为它赋予`undefined`和`null`：



给方法的参数name声明类型  

```
function warnUser(name:string): string {
    console.log("This is my warning message");
}
```



```ts
let unusable: void = undefined;
```

## Null 和 Undefined

TypeScript里，`undefined`和`null`两者各自有自己的类型分别叫做`undefined`和`null`。 和 `void`相似，它们的本身的类型用处不是很大：

```ts
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
```

默认情况下`null`和`undefined`是所有类型的子类型。 就是说你可以把 `null`和`undefined`赋值给`number`类型的变量。

然而，当你指定了`--strictNullChecks`标记，`null`和`undefined`只能赋值给`void`和它们各自。 这能避免*很多*常见的问题。 也许在某处你想传入一个 `string`或`null`或`undefined`，你可以使用联合类型`string | null | undefined`。

## Never

当一个函数永远不可能执行 `return` 的时候，返回的就是 `never` ，与 <u>void</u> 不同，`void` 是执行了 `return`， 只是没有值，`never` 是不会执行 `return`，比如抛出错误，导致函数终止执行

```typescript
function fn(): never {
  	throw new Error('error');
}
```





`never`类型表示的是那些永不存在的值的类型。 例如， `never`类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 `never`类型，当它们被永不为真的类型保护所约束时。

`never`类型是任何类型的子类型，也可以赋值给任何类型；然而，*没有*类型是`never`的子类型或可以赋值给`never`类型（除了`never`本身之外）。 即使 `any`也不可以赋值给`never`。

下面是一些返回`never`类型的函数：

```ts
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}
```

# >>接口interface<<

TypeScript的核心原则之一是对值所具有的结构进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。

下面通过一个简单示例来观察接口是如何工作的：

```ts
function printLabel(labelledObj: { label: string }) {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
```

类型检查器会查看`printLabel`的调用。 `printLabel`有一个参数，并要求这个对象参数有一个名为`label`类型为`string`的属性。 需要注意的是，我们传入的对象参数实际上会包含很多属性，但是编译器只会检查那些必需的属性是否存在，并且其类型是否匹配。 然而，有些时候TypeScript却并不会这么宽松，我们下面会稍做讲解。

下面我们重写上面的例子，这次使用接口来描述：必须包含一个`label`属性且类型为`string`：

```ts
interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);
```

`LabelledValue`接口就好比一个名字，用来描述上面例子里的要求。 它代表了有一个 `label`属性且类型为`string`的对象。



## 可选属性

接口也可以定义可选的属性，通过 <u>?</u> 来进行标注

```typescript
interface Point {
    x: number;
    y: number;
    color?: string;
}
```

其中的 <u>color?</u> 表示该属性是可选的



## ❤只读属性

我们还可以通过 <u>readonly</u> 来标注属性为只读

```typescript
interface Point {
    readonly x: number;
    readonly y: number;
}
```

当我们标注了一个属性为只读，那么该属性除了初始化以外，是不能被再次赋值的



## ❤任意属性

有的时候，我们希望给一个接口添加任意属性，可以通过索引类型来实现

**数字类型索引**

```typescript
interface Point {
    x: number;
    y: number;
    [prop: number]: number;
}
```

**字符串类型索引**

```typescript
interface Point {
    x: number;
    y: number;
    [prop: string]: number;
}
```

数字索引是字符串索引的子类型

> 注意：索引签名参数类型必须为 <u>string</u> 或 <u>number</u> 之一，但两者可同时出现

```typescript
interface Point {
    [prop1: string]: string;
    [prop2: number]: string;
}
```

> 注意：当同时存在数字类型索引和字符串类型索引的时候，数字类型的值类型必须是字符串类型的值类型或子类型

```typescript
interface Point1 {
    [prop1: string]: string;
    [prop2: number]: number;	// 错误
}
interface Point2 {
    [prop1: string]: Object;
    [prop2: number]: Date;	// 正确
}
```



## ❤使用接口描述函数fn

我们还可以使用接口来描述一个函数

```typescript
interface IFunc {
  (a: string): string;
}

let fn: IFunc = function(a) {}
```

> 注意，如果使用接口来单独描述一个函数，是没 `key` 的



## ❤接口合并

多个同名的接口合并成一个接口

```typescript
interface Box {
    height: number;
    width: number;
}

interface Box {
    scale: number;
}

let box: Box = {height: 5, width: 6, scale: 10}
```

- 如果合并的接口存在同名的非函数成员，则必须保证他们类型一致，否则编译报错
- 接口中的同名函数则是采用重载（具体后期函数详解中讲解）

## 进阶用法

```tsx
interface SearchPanelProps {
  param: {
    name: string;
    personId: string;
  },
  setParam: (param: SearchPanelProps['param']) => void;
  users: User [];
}
```

## todo ?? Partial

https://blog.csdn.net/dajuna/article/details/117958613



adj. 局部的；偏爱的；不公平的 

[partial:](http://dict.youdao.com/search?q=partial&keyfrom=chrome.extension&le=eng) 部分的

Constructs a type with all properties of `Type` set to optional. This utility will return a type that represents all subsets of a given type.

```tsx
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});
```

## pick的实现原理

```tsx
type Pick<T, K extends keyof T> = {
  [P in K]: T[P]
}
```

pick接收两个泛型

第一个泛型 T 便是 interface 或者 type 定义
第二个就是第一个定义中的属性， extends就代表继承
K extends keyof T 等同于 k extends ‘name’ | ‘age’,意思就是k只能是age或者name
Exclude (意思是排除) ts中可以排除 联合类型 中一部分的内容

**注意Exclude是操作联合类型的，下方将讲到的Omit是操作键值对的**



![在这里插入图片描述](https://img-blog.csdnimg.cn/20210616161441785.png)

## Exclude的原理

```tsx
type Exclude<T, U> = T extends U ? never : T
```


传入两个泛型

我们这里用 MyTypes 也就是 ‘name’ | ‘age’ | ‘height’ 去代表 T
用 name 属性去代表第二个泛型 U
T extends U 就判断是否’name’ | ‘age’ | ‘height’ 有 name， 有name就返回never,就代表将其排除
Omit (意思是省略的)ts中就是将接口或者类型的键值对删除一部分

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210616162723407.png)





## todo ?? Omit

vt. 省略；遗漏；删除；疏忽；没做；<废>无视；<废>放弃

Constructs a type by picking all properties from `Type` and then removing `Keys` (string literal or union of string literals).

```tsx
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};

todo;
// ^?

type TodoInfo = Omit<Todo, "completed" | "createdAt">;

const todoInfo: TodoInfo = {
  title: "Pick up kids",
  description: "Kindergarten closes at 5pm",
};

todoInfo;
// ^?
```



type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;



```tsx
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
```

## extends

```tsx
const apiUrl = process.env.REACT_APP_API_URL;
interface Config extends RequestInit {
    token?: string;
    data?: object;
}
```



## Parameters

// todo 讲解ts操作符 Utility Types

```tsx
export const http = async (endpoint: string, { data, token, headers, ...customConfig }: Config = {}) => {
// 能不能给第3个参数加一个问号，使其变为可选参数，不可以，因为前面已经解构了
// export const http = async (endpoint: string, { data, token, headers, ...customConfig }: Config) => {}
```



```tsx
export const useHttp = () => {
    const {user} = useAuth();
    // return ([endpoint, config]: [string, Config]) => http(endpoint, {...config, token: user?.token})
    // todo 讲解ts操作符 Utility Types
    // return ([endpoint, config]: Parameters<typeof http>) => http(endpoint, {...config, token: user?.token})
    return (...[endpoint, config]: Parameters<typeof http>) => http(endpoint, {...config, token: user?.token})
}
```

```tsx
/**
 * Obtain the parameters of a function type in a tuple
 */
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
```



# 联合类型 |

联合类型也可以称为多选类型，当我们希望标注一个变量为多个类型之一时可以选择联合类型标注，<u>或</u> 的关系

```typescript
function css(ele: Element, attr: string, value: string|number) {
    // ...
}

let box = document.querySelector('.box');
// document.querySelector 方法返回值就是一个联合类型
if (box) {
    // ts 会提示有 null 的可能性，加上判断更严谨
    css(box, 'width', '100px');
    css(box, 'opacity', 1);
    css(box, 'opacity', [1,2]);  // 错误
}
```



# 交叉类型 &

交叉类型也可以称为合并类型，可以把多种类型合并到一起成为一种新的类型，<u>并且</u> 的关系

对一个对象进行扩展：

```typescript
interface o1 {x: number, y: string};
interface o2 {z: number};

let o: o1 & o2 = Object.assign({}, {x:1,y:'2'}, {z: 100});
```

**小技巧**

> `TypeScript` 在编译过程中只会转换语法（比如扩展运算符，箭头函数等语法进行转换，对于 `API` 是不会进行转换的（也没必要转换，而是引入一些扩展库进行处理的），如果我们的代码中使用了 `target` 中没有的 `API` ，则需要手动进行引入，默认情况下 `TypeScript` 会根据 `target` 载入核心的类型库
>
> `target` 为 `es5` 时: `["dom", "es5", "scripthost"]`
>
> `target` 为 `es6` 时: `["dom", "es6", "dom.iterable", "scripthost"]`
>
> 如果代码中使用了这些默认载入库以外的代码，则可以通过 `lib` 选项来进行设置
>
> http://www.typescriptlang.org/docs/handbook/compiler-options.html



# 字面量类型

有的时候，我们希望标注的不是某个类型，而是一个固定值，就可以使用字面量类型，配合联合类型会更有用

```typescript
function setPosition(ele: Element, direction: 'left' | 'top' | 'right' | 'bottom') {
  	// ...
}

// ok
box && setDirection(box, 'bottom');
// error
box && setDirection(box, 'hehe');
```

# ❤ 类型别名 type

有的时候类型标注比较复杂，这个时候我们可以类型标注起一个相对简单的名字

```typescript
type dir = 'left' | 'top' | 'right' | 'bottom';
function setPosition(ele: Element, direction: dir) {
  	// ...
}
```

## 使用类型别名定义函数类型

这里需要注意一下，如果使用 `type` 来定义函数类型，和接口有点不太相同

```typescript
type callback = (a: string) => string;
let fn: callback = function(a) {};

// 或者直接
let fn: (a: string) => string = function(a) {}
```



```ts
type dir = 'left' | 'top' | 'right' | 'bottom';

function setPosition (ele: Element, direction: 'left' | 'top' | 'right' | 'bottom') {

};

function setPosition2 (ele: Element, direction: dir) {

}
```



## interface 与 type 的区别

**interface**

- 只能描述 `object`/`class`/`function` 的类型. 描述不了联合类型、交叉类型
- 同名 `interface` 自动合并，利于扩展

**type**

- 不能重名
- 能描述所有数据



# 类型推导

每次都显式标注类型会比较麻烦，<u>TypeScript</u> 提供了一种更加方便的特性：类型推导。<u>TypeScript</u> 编译器会根据当前上下文自动的推导出对应的类型标注，这个过程发生在：

- 初始化变量
- 设置函数默认参数值
- 返回函数值

```typescript
// 自动推断 x 为 number
let x = 1;
// 不能将类型“"a"”分配给类型“number”
x = 'a';

// 函数参数类型、函数返回值会根据对应的默认值和返回值进行自动推断
function fn(a = 1) {return a * a}
```





# ❤ 类型断言

有时候你会遇到这样的情况，你会比TypeScript更了解某个值的详细信息。 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。

通过*类型断言*这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。 TypeScript会假设你，程序员，已经进行了必须的检查。

类型断言有两种形式。 

**其一是“尖括号”语法：**

```ts
let someValue: any = "this is a string";
let man: boolean = true;

let strLength: number = (<string>someValue).length;
```

**另一个为`as`语法：**

```ts
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

两种形式是等价的。 至于使用哪个大多数情况下是凭个人喜好；然而，当你在TypeScript里使用JSX时，只有 `as`语法断言是被允许的。



有的时候，我们可能标注一个更加精确的类型（缩小类型标注范围），比如：

```typescript
let img = document.querySelector('#img');
```

我们可以看到 <u>img</u> 的类型为 <u>Element</u>，而 <u>Element</u> 类型其实只是元素类型的通用类型，如果我们去访问 <u>src</u> 这个属性是有问题的，我们需要把它的类型标注得更为精确：<u>HTMLImageElement</u> 类型，这个时候，我们就可以使用类型断言，它类似于一种 类型转换：

```typescript
let img = <HTMLImageElement>document.querySelector('#img');
```

或者

```typescript
let img = document.querySelector('#img') as HTMLImageElement;
```

> 注意：断言只是一种预判，并不会数据本身产生实际的作用，即：类似转换，但并非真的转换了



# class 声明新类型

```
class Person {
	name:string,
	age:number
}
var zhangsan: Person = new Person();
输入zhangsan.  name和age会自动联想出来
```

```
  componentDidMount() {
        this.getCommentList(1);
        if (process.env.TARO_ENV === 'h5') {
            this.refreshUIH5();
        } else {
            this.refreshUI();
        };
        setDisplayMonitor({
            className: 'comment-container',
            param: {type: 'comment'}
        }, this);
    };
    page: number = 1;
    firstRender: boolean = true;
```



# ❤ ❤ 泛型

**泛型是对类型的一种抽象，一般用于函数，能让调用者动态地指定部分数据类型。**这一点和 any 类型有些像，对于类型的定义具有不确定性，可以指代多种类型，但最大区别在于泛型可以对函数成员或类成员产生约束关系。



下面来创建第一个使用泛型的例子：identity函数。 这个函数会返回任何传入它的值。 你可以把这个函数当成是 `echo`命令。

不用泛型的话，这个函数可能是下面这样：

```ts
function identity(arg: number): number {
    return arg;
}
```

或者，我们使用`any`类型来定义函数：

```ts
function identity(arg: any): any {
    return arg;
}
```

使用`any`类型会导致这个函数可以接收任何类型的`arg`参数，这样就丢失了一些信息：传入的类型与返回的类型应该是相同的。如果我们传入一个数字，我们只知道任何类型的值都有可能被返回。

因此，我们需要一种方法使返回值的类型与传入参数的类型是相同的。 这里，我们使用了 *类型变量*，它是一种特殊的变量，只用于表示类型而不是值。

## 示例

```ts
function identity<T>(arg: T): T {
    return arg;
}
```

我们给identity添加了类型变量`T`。 `T`帮助我们捕获用户传入的类型（比如：`number`），之后我们就可以使用这个类型。 之后我们再次使用了 `T`当做返回值类型。现在我们可以知道参数类型与返回值类型是相同的了。 这允许我们跟踪函数里使用的类型的信息。

我们把这个版本的`identity`函数叫做泛型，因为它可以适用于多个类型。 不同于使用 `any`，它不会丢失信息，像第一个例子那像保持准确性，传入数值类型并返回数值类型。

我们定义了泛型函数后，可以用两种方法使用。 第一种是，传入所有的参数，包含类型参数：

```ts
let output = identity<string>("myString");  // type of output will be 'string'
```

这里我们明确的指定了`T`是`string`类型，并做为一个参数传给函数，使用了`<>`括起来而不是`()`。

第二种方法更普遍。利用了*类型推论* -- 即编译器会根据传入的参数自动地帮助我们确定T的类型：

```ts
let output = identity("myString");  // type of output will be 'string'
```

注意我们没必要使用尖括号（`<>`）来明确地传入类型；编译器可以查看`myString`的值，然后把`T`设置为它的类型。 类型推论帮助我们保持代码精简和高可读性。如果编译器不能够自动地推断出类型的话，只能像上面那样明确的传入T的类型，在一些复杂的情况下，这是可能出现的。



## react



下面代码是 react 的钩子函数 useState 的类型定义，就用到了泛型。

`function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];`
这段代码中 S 称为泛型变量。从这个定义可看出，useState 可以接收任何类型的参数或回调函数，但返回的元组数据第一个值必定和参数类型或者回调函数返回值类型相同，都为 S。
如果使用 any 类型来取代泛型，那么我们只能知道允许传入任何参数或回调函数，而无法知道返回值与入参的对应关系。

在使用泛型的时候，我们可以通过尖括号来手动指定泛型变量的类型，这个指定操作称之为**类型断言，**也可以不指定，让 TypeScript 自行推断类型。比如下面的代码就通过类型断言，将范型变量指定为 string 类型。


```
const [id, setId] = useState<string>('');
```



## 使用泛型变量

使用泛型创建像`identity`这样的泛型函数时，编译器要求你在函数体必须正确的使用这个通用的类型。 换句话说，你必须把这些参数当做是任意或所有类型。

看下之前`identity`例子：

```ts
function identity<T>(arg: T): T {
    return arg;
}
```

如果我们想同时打印出`arg`的长度。 我们很可能会这样做：

```ts
function loggingIdentity<T>(arg: T): T {
    console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}
```

如果这么做，编译器会报错说我们使用了`arg`的`.length`属性，但是没有地方指明`arg`具有这个属性。 记住，这些类型变量代表的是任意类型，所以使用这个函数的人可能传入的是个数字，而数字是没有 `.length`属性的。

现在假设我们想操作`T`类型的数组而不直接是`T`。由于我们操作的是数组，所以`.length`属性是应该存在的。 我们可以像创建其它数组一样创建这个数组：

```ts
function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}
```

你可以这样理解`loggingIdentity`的类型：泛型函数`loggingIdentity`，接收类型参数`T`和参数`arg`，它是个元素类型是`T`的数组，并返回元素类型是`T`的数组。 如果我们传入数字数组，将返回一个数字数组，因为此时 `T`的的类型为`number`。 这可以让我们把泛型变量T当做类型的一部分使用，而不是整个类型，增加了灵活性。

我们也可以这样实现上面的例子：

```ts
function loggingIdentity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}
```

使用过其它语言的话，你可能对这种语法已经很熟悉了。 在下一节，会介绍如何创建自定义泛型像 `Array<T>`一样。

# ❤ 类型引用

## 索引

索引类型的目的是让 TypeScript 编译器检查出使用了动态属性名的类型，需要通过索引类型查询和索引类型访问来实现。

下面的示例代码实现了一个简单的函数 getValue ，传入对象和对象属性名获取对应的值。

```tsx
function getValue<T, K extends keyof T>(o: T, name: K): T[K] {
    return o[name]; // o[name] is of type T[K]
}
let com = {
    name: 'lagou',
    id: 123
}
let id: number = getValue(com, 'id')
let no = getValue(com, 'no') //报错：Argument of type '"no"' is not assignable to parameter of type '"id" | "name"'.

```

其中，泛型变量 K 继承了泛型变量 T 的属性名联合，这里的 keyof 就是索引类型查询操作符；返回值 T[K] 就是索引访问操作符的使用方式。

前面提到的 Pick 类型就是通过索引类型来实现的。

## 映射

映射类型是指从已有类型中创建新的类型。TypeScript 预定义了一些类型，比如最常用的 Pick 和 Omit。

下面是 Pick 类型的使用示例及源码，可以看到类型 Pick 从类型 task 中选择属性 "title" 和 "description" 生成了新的类型 simpleTask。


```tsx
type Pick<T, K extends keyof T> = {
		[P in K]: TP;
};
interface task {
  title: string;
  description: string;
  status: string;
}
type simpleTask = Pick<task, 'title' | 'description'>// {title: string;description: string}
```

类型 Pick 的实现，先用到了索引类型查询，获取了类型 T 的属性名联合 K，然后通过操作符 in 对其进行遍历，同时又用到了索引类型访问来表示属性值。

由于篇幅所限，更多的预定义类型这里就不一一讲解了，对实现原理感兴趣的同学可以参看其源码。



# 可选参数

带默认值的参数一定要放在最后面

``` ts
function test(a:string,b:string,c:string="hehe") {
	clg(a);
	clg(b)
	clg(c)
}
test("xxx","yyy");//
```



可选参数

```
function test(a:string,b?:string,c:string="hehe") {
	clg(a);
	clg(b)
	clg(c)
}
test("xxx");//
```



可选参数必须声明在必选参数后面，否则会报错ß

```ts
function test(a?:string,b:string,c:string="hehe") {
	clg(a);
	clg(b)
	clg(c)
}
test("xxx");//
```

# Rest and Spread

```
function func1(...args) {

}
```

# 析构表达式

```tsx
function fun() {
 return {
 		code:'IBM',
 		price:{
 			price1:200,
 			price2:400
 		}
 }
 var {code:codex,price:{price2}} = fun()
 console.log(codex); //'IBM'
 console.log(price2); //400
```

# 其它

## Classes

### [`implements`Clauses](https://www.typescriptlang.org/docs/handbook/2/classes.html#implements-clauses)

https://stackoverflow.com/questions/35990538/extending-vs-implementing-a-pure-abstract-class-in-typescript/35990799#35990799



implements 必须实现类中的方法

**implements**
实现，一个新的类，从父类或者接口实现所有的属性和方法，同时可以重写属性和方法，包含一些新的功能

**extends**
继承，一个新的接口或者类，从父类或者接口继承所有的属性和方法，不可以重写属性，但可以重写方法



You can use an `implements` clause to check that a class satisfies a particular `interface`. An error will be issued if a class fails to correctly implement it:

```tsx
interface Pingable {
  ping(): void;
}
 
class Sonar implements Pingable {
  ping() {
    console.log("ping!");
  }
}
 
class Ball implements Pingable {Class 'Ball' incorrectly implements interface 'Pingable'.
  Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.Class 'Ball' incorrectly implements interface 'Pingable'.
  Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.
  pong() {
    console.log("pong!");
  }
}
```

Classes may also implement multiple interfaces, e.g. `class C implements A, B {`.

#### Cautions

It’s important to understand that an `implements` clause is only a check that the class can be treated as the interface type. It doesn’t change the type of the class or its methods *at all*. A common source of error is to assume that an `implements` clause will change the class type - it doesn’t!

```
interface Checkable {
  check(name: string): boolean;
}
 
class NameChecker implements Checkable {
  check(s) {Parameter 's' implicitly has an 'any' type.Parameter 's' implicitly has an 'any' type.
    // Notice no error here
    return s.toLowercse() === "ok";
                 
any
  }
}Try
```

In this example, we perhaps expected that `s`’s type would be influenced by the `name: string` parameter of `check`. It is not - `implements` clauses don’t change how the class body is checked or its type inferred.

Similarly, implementing an interface with an optional property doesn’t create that property:

```
interface A {
  x: number;
  y?: number;
}
class C implements A {
  x = 0;
}
const c = new C();
c.y = 10;Property 'y' does not exist on type 'C'.Property 'y' does not exist on type 'C'.Try
```

### `extends`



# TS编写debonce函数

```tsx
// 函数T 函数T的返回值U  函数T的参数V
const debounce = <T extends Function, U, V extends any[]>(func: T, wait: number = 0) => {
    let timeout: number | null = null
    let args: V

    function debounced(...arg: V): Promise<U> {
        args = arg
        if (timeout) {
            clearTimeout(timeout)
            timeout = null
        }
        // 以 Promise 的形式返回函数执行结果
        return new Promise((res, rej) => {
            timeout = setTimeout(async () => {
                try {
                    const result: U = await func.apply(this, args)
                    res(result)
                } catch (e) {
                    rej(e)
                }
            }, wait)
        })
    }

    // 允许取消
    function cancel() {
        clearTimeout(timeout)
        timeout = null
    }

    // 允许立即执行
    function flush(): U {
        cancel()
        return func.apply(this, args)
    }

    debounced.cancel = cancel
    debounced.flush = flush

    return debounced
}
```



# lib.dom.d.ts

所有DOM相关的类型定义在该文档中

/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/node_modules/typescript/lib/lib.dom.d.ts

## 无法找到该模块qs的声明文件

yarn add @types/qs -D 

node_modules/@types/qs/index.d.ts

index.d.ts即为 j s打补丁用的



# React中TypeScript

```
import {memo, useMemo, useRef, ReactNode, FC, useEffect} from 'react';
```

## FC

函数式组件

```
(alias) type FC<P = {}> = FunctionComponent<P>
```

## ReactNode

```tsx
type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;
```

## ReactElement

```tsx
interface ReactElement<P = any, T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>> {
        type: T;
        props: P;
        key: Key | null;
}
```

## Children

```tsx
const Children: ReactChildren;
```

## CSSProperties

```
style?: React.CSSProperties;
```



## ?? HTMLDivElement



## UIEvent

```tsx
scrollEvent.current = addEventListener(container, 'scroll', (e: React.UIEvent<HTMLElement>) => {
      handletsScroll(e);
    });
```



## isValidElement

```tsx
function isValidElement<P>(object: {} | null | undefined): object is ReactElement<P>;
```



## cloneElement

```tsx
// DOM Elements
    // ReactHTMLElement
function cloneElement<P extends HTMLAttributes<T>, T extends HTMLElement>(
element: DetailedReactHTMLElement<P, T>,
 props?: P,
 ...children: ReactNode[]): DetailedReactHTMLElement<P, T>;
```

node_modules/react/cjs/react.development.js

```js
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
```



## useImperativeHandle

```tsx
/**
 * `useImperativeHandle` customizes the instance value that is exposed to parent components when using
 * `ref`. As always, imperative code using refs should be avoided in most cases.
 *
 * `useImperativeHandle` should be used with `React.forwardRef`.
 *
 * @version 16.8.0
 * @see https://reactjs.org/docs/hooks-reference.html#useimperativehandle
 */
function useImperativeHandle<T, R extends T>(ref: Ref<T>|undefined, init: () => R, deps?: DependencyList): void;
```

# antd中

## 组件

### button.tsx

https://juejin.cn/post/7028092932146069534#comment

```tsx
export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;
```



```tsx
export type AnchorButtonProps = {
  href: string;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<any>, 'type' | 'onClick'>;
```



```tsx
export type NativeButtonProps = {
  htmlType?: ButtonHTMLType;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>;
```



```tsx
export interface BaseButtonProps {
  type?: ButtonType;
  icon?: React.ReactNode;
  shape?: ButtonShape;
  size?: SizeType;
  loading?: boolean | { delay?: number };
  prefixCls?: string;
  className?: string;
  ghost?: boolean;
  danger?: boolean;
  block?: boolean;
  children?: React.ReactNode;
}
```

#### isTwoCNChar

```
// 正则表达式：匹配两个汉字
const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
// 判断一个字符串是不是两个汉字
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
```

tuple 函数，非常巧妙的生成一个纯字符串元祖类型的数组

```ts
// 生成一个 元祖类型 的数组对象
const tuple = <T extends string[]>(...args: T) => args;
// 按钮类型的数组
const ButtonTypes = tuple('default', 'primary', 'ghost', 'dashed', 'link', 'text');
// 按钮类型的类型
type ButtonType = typeof ButtonTypes[number]
```

![image-20220124155022395](TypeScipt-notes.assets/image-20220124155022395.png)

![image-20220124155039845](TypeScipt-notes.assets/image-20220124155039845.png)



#### ref

```tsx
const InternalButton: React.ForwardRefRenderFunction<unknown, ButtonProps> = (props, ref) => {
	const buttonRef = (ref as any) || React.createRef<HTMLElement>();
  ...
      <button
      {...(rest as NativeButtonProps)}
      type={htmlType}
      className={classes}
      onClick={handleClick}
      ref={buttonRef}
    >
      {iconNode}
      {kids}
    </button>
  ...
}
const Button = React.forwardRef<unknown, ButtonProps>(InternalButton) as CompoundedComponent;
```



一般情况下，ref 属性用的不多，但在组件库中使用颇多。但 ref 属性只能用于 DOM 元素，或者 class 组件，对于 class 组件，我们拿到的是实例。详细说明可以看一下 [这一章](https://link.juejin.cn?target=https%3A%2F%2Fzh-hans.reactjs.org%2Fdocs%2Frefs-and-the-dom.html%23gatsby-focus-wrapper)。

函数组件，不存在实例，所以在上层我们就拿不到组件实例。如果我们想拿到函数组件的 DOM 呢？

首先想到了 props 传递（ref属性会被props属性剥离，所以必须使用别名）

```ts
const Parent = () => {
    const ref = React.useRef(null)
    
    return <Child inputRef={ref} />
}

const Child = (props) => {
    return <input ref={props.inputRef} />
}
```

总感觉多一个 inputRef prop 不够优雅，于是：

```ts
const Parent = () => {
    const ref = React.useRef(null)
    
    return <Child ref={ref} />
}

const Child = React.forwardRef<HTMLInputElement, {}>((props, ref) => {
    return <input ref={ref} />
})
```

使用 React.forwardRef 包裹，就可以传递 ref 了，详细可以看一下[这一章](https://link.juejin.cn?target=https%3A%2F%2Fzh-hans.reactjs.org%2Fdocs%2Fforwarding-refs.html%23forwarding-refs-to-dom-components)

> 记得给匿名的函数组件定义一个 displayName 否则在 devtools 中就不太好看了

作者：青杨
链接：https://juejin.cn/post/7028092932146069534
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。



# Taro中TypeScript



## Current

```tsx
import {usePageScroll, createSelectorQuery, pageScrollTo, Current} from '@tarojs/taro';

interface Current {
  app: AppInstance | null
  router: RouterInfo | null
  page: PageInstance | null
  onReady: string
  onHide: string
  onShow: string
  preloadData?: Record<any, any>
  /**
   * RN 私有对象navigationRef，用于使用底层接口控制路由
   */
  rnNavigationRef?: React.RefObject<any>
}
const Current: Current
```



## 编辑器

// @ts-ignore 
