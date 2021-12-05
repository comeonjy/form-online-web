module.exports = {
    devServer: {
        open: true,
        host: 'localhost',
        port: 1024,
        https: false,
        proxy: {
            '/account': {
                target: 'http://account.jiangyang.me',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/account': ''
                }
            }
        }
    }
}
