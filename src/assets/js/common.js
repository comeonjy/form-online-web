export default {
    deepCopy: function (e) {
        return JSON.parse(JSON.stringify(e));
    },
    setRemUnit: function () {
        // set 1rem = viewWidth / 10
        let rem = document.documentElement.clientWidth / 10
        document.documentElement.style.fontSize = rem + 'px'
    },
    isPhone: function (mobile) {
        let reg = /^1[3-9]\d{9}$/;
        return reg.test(mobile);
    }
}
