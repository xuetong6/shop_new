/* nodejs基础包 */
const path = require('path')
const fs = require('fs')

/* 引入underscore */
const _ = require('underscore')

/* 引入jsonServer */
const jsonServer = require('json-server')

/* 创建server */
const server = jsonServer.create()

/* middleware */
const middlewares = jsonServer.defaults()

/* 使用middlewares */
server.use(middlewares)

const mockDir = path.resolve(__dirname, 'data')

const base = {}

/* 获取data下的所有文件名称组成的数组 */
const files = fs.readdirSync(mockDir)

files.forEach((file) => {
  _.extend(base, require(path.resolve(mockDir, file)))
})
console.log(base)

/* 使用base对象进行路由/接口数据映射 */
const router = jsonServer.router(base)

server.post('/account/login', (req, res) => {
  console.log(req)
})

/* 格式化输出 */
router.render = (req, res) => {
  res.jsonp({
    data: res.locals.data,
    status: 0,
    msg: '成功'
  })
}

server.use(router)

server.listen(3000, () => {
  console.log('json server is runing at port 3000')
})
