import request from "@/util/request";

export function send_verification_code(obj) {
    return request({
        url: '/account/v1/send_verification_code',
        method: 'post',
        data: obj,
    })
}

export function login(obj) {
    return request({
        url: '/account/v1/login',
        method: 'post',
        data: obj,
    })
}
