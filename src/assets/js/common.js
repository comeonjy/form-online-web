export default {
    deepCopy: function (e) {
        return JSON.parse(JSON.stringify(e));
    },
    isMobile: function (mobile) {
        console.log(mobile)
        let reg = /^1[3-9]\d{9}$/;
        return reg.test(mobile);
    },
    isEmail: function (email) {
        let reg = /^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/;
        return reg.test(email)
    }
}
