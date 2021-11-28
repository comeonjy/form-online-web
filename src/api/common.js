import request from "@/util/request";

export function send_verification_code(obj) {
    return request({
        url: '/send_verification_code',
        method: 'post',
        data: obj,
    })
}

export function login(obj) {
    return request({
        url: '/login',
        method: 'post',
        data: obj,
    })
}
