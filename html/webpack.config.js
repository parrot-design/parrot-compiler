const fs=require('fs');
const path=require('path');
const webpack=require('webpack');

module.exports={
    mode:'development',
    /** 
     */
    entry:{
        'base':['webpack-hot-middleware/client',path.join(__dirname,'index.ts')], 
    }, 
    /**
     * 根据不同的目录名称，打包生成目标js，名称和目录一致
     */
    output:{
        path:path.join(__dirname,'__build__'),
        filename:'[name].js',
        publicPath:'/__build__/'
    },
    module:{
        rules:[
            {
                test:/\.ts$/,
                enforce:'pre',
                use:[
                    {
                        loader:'tslint-loader'
                    }
                ]
            },
            {
                test:/\.tsx?$/,
                use:[
                    {
                        loader:'ts-loader',
                        options:{
                            transpileOnly:true
                        }
                    }
                ]
            },
        ]
    },
    resolve:{
        extensions:['.ts','.js']
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(), 
    ]
}