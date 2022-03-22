module.exports = {
    devServer: {
        open: true,
        host: 'localhost',
        port: 1024,
        https: false,
        proxy: {
            '/': {
                target: 'https://api.jiangyang.me',
                // target: 'http://localhost:8080',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/*': ''
                }
            }
        }
    }
}
