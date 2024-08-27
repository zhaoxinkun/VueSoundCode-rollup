import babel from "@rollup/plugin-babel"

// rollup可以导出一个对象,作为打包的配置
export default {
    //入口
    input:"./src/index",
    // 出口
    output:{
        file:"./dist/vue.js",
        // 暴露的全局对象
        name:"Vue",
        // 打包格式  ems commonjs  iife umd
        format:"umd",
        // 可以调试源代码
        sourcemap:true,
    },
    // 插件
    Plugin:[
        babel({
            // 忽略
            exclude:"node_modules/**"  //排除下列的所有文件
        })
    ]
}
