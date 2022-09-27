// 开发模式的配置文件

const path = require("path");
const EslintWebpackPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

// 封装重复的代码
const getStyleLoaders = (preProcessor) => {
    return [
        "style-loader",
        "css-loader",
        {
            loader: "postcss-loader",
            options: {
                postcssOptions: {
                    plugins: [
                        "postcss-preset-env", // 能解决大多数样式兼容性问题
                    ],
                },
            },
        },
        preProcessor,
    ].filter(Boolean);
};

// 向外暴露一个对象
module.exports = {
    // 需要配置5个核心概念：
    // 1 指定入口文件，作为webpack的打包入口
    entry: './src/main.js',
    // 2 输出。指定输出的文件去哪，叫什么名字
    output: {
        path: undefined,
        // [name]是webpack命名规则，使用chunk的name作为输出的文件名
        filename: 'static/js/[name].js',
        // 如果有多余的chunk，那么命名方式和上面的做区分
        chunkFilename: 'static/js/[name].chunk.js',
        // 图片资源使用命名: 输出路径(取10位 自动补全文件扩展名 携带其他参数)
        assetModuleFilename: 'static/media/[hash:10][ext][query]',
    },
    // 3 loader（加载器）
    module: {
        // loader 规则
        rules: [
            {
                oneOf: [
                    // 处理css
                    {  // 规则是一个对象
                        // 被文件的正则(以.css结尾的文件)
                        test: /\.css$/,
                        // 使用多个loader对css文件进行处理
                        /*
                            'style-loader', 'css-loader'：通过动态创建style标签，把样式插入到页面上
                            {loader:...}处理兼容性问题，npm init -y生成json文件，进入文件写入"browserslist"内容
                        */
                        use: getStyleLoaders(),
                    },
                    {
                        test: /\.less$/,
                        use: getStyleLoaders("less-loader"),
                    },
                    {
                        test: /\.s[ac]ss$/,
                        use: getStyleLoaders("sass-loader"),
                    },
                    {
                        test: /\.styl$/,
                        use: getStyleLoaders("stylus-loader"),
                    },
                    // 处理图片
                    {
                        test: /\.(jpe?g|png|gif|webp|svg)$/,
                        type: 'asset',  // →base64
                        // 优化：将<10kb的图→base64
                        parser: {
                            dataUrlCondition: {
                                maxSize: 10 * 1024,
                            },
                        },
                    },
                    // 处理其他资源（字体图标）
                    {
                        test: /\.(woff2?|ttf)$/,
                        type: 'asset/resource',  // 原封不动输出
                    },
                    // 处理js（需要2个资源：Eslint检查js代码;转换js代码）
                    {
                        test: /\.jsx?$/,
                        include: path.resolve(__dirname, '../src'),  //只处理scr下的资源
                        loader: 'babel-loader',
                        // 提升babel的性能：压缩，使其第二次打包更快
                        options: {
                            cacheDirectory: true,
                            cacheCompression: false,// 不要压缩缓存的内容
                            plugins: [
                                // "@babel/plugin-transform-runtime", // presets中包含了
                                "react-refresh/babel", // 开启js的HMR功能
                            ],
                        }
                    },
                ]
            }
        ]
    },
    // 插件
    plugins: [
        new EslintWebpackPlugin({
            context: path.resolve(__dirname, '../src'),
            exclude: "node_moudles",  // 指定处理范围：排除该文件夹
            cache: true,  // 进行缓存
            cacheLocation: path.resolve(__dirname, '../node_moudles/.cache/.eslintcache'),
        }),
        // 处理html:以现在的html为模板创建新的html文件
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html"),
        }),
        new ReactRefreshWebpackPlugin(),  // 解决js的HMR功能运行时全局变量的问题
        // 将public下面的资源复制到dist目录去（除了index.html）
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "../public"),
                    to: path.resolve(__dirname, "../dist"),
                    toType: "dir",
                    noErrorOnMissing: true, // 不生成错误
                    globOptions: {
                        // 忽略文件
                        ignore: ["**/index.html"],
                    },
                    info: {
                        // 跳过terser压缩js
                        minimized: true,
                    },
                },
            ],
        }),
    ],
    mode: 'development',
    devtool: "cheap-module-source-map",
    // 避免打包到一个文件中，把它分成多个chunk
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        // 代码分割可能导致缓存失效，因此要给runtime的文件进行命名
        runtimeChunk: {
            name: (entrypoint) => `runtime~${entrypoint.name}.js`,
        },
    },
    // webpack解析模块加载选项
    resolve: {
        extensions: [".jsx", ".js", ".json"], // 自动补全文件扩展名，让jsx可以使用
    },
    devServer: {
        open: true,  // 是否自动打开浏览器
        host: "localhost",  // 域名
        port: 3000,  // 端口号
        hot: true,  // 开启热模块替换、HMR
        compress: true,
        historyApiFallback: true, // 解决react-router刷新404问题
    },
};