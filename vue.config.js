module.exports = {
    devServer: {
        open: true,
        host: 'localhost',
        port: 1024,
        https: false,
        proxy: {
            '/account': {
                target: 'http://account.jiangyang.me',
                // target: 'http://localhost:8080',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/account': ''
                }
            },
            '/box': {
                // target: 'http://box.jiangyang.me',
                target: 'http://localhost:8080',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/box': ''
                }
            }
        }
    }
}
