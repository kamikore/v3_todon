import path from 'path'
import IconfontBuilder from 'simple-iconfont-builder'

// IconfontBuilder.build(path.resolve(__dirname,'styles', 'iconfont.css'))
IconfontBuilder.build(path.resolve('./src','styles', 'iconfont.scss'))