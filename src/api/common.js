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

export function list_question_type(obj) {
    return request({
        url: '/box/v1/form/list/question_type',
        method: 'get',
        params: obj,
    })
}

export function form_single(obj) {
    return request({
        url: '/box/v1/form/single',
        method: 'get',
        params: obj,
    })
}

export function form_save(obj) {
    return request({
        url: '/box/v1/form/save',
        method: 'post',
        data: obj,
    })
}

export function form_list(obj) {
    return request({
        url: '/box/v1/form/list',
        method: 'get',
        params: obj,
    })
}


export function form_answer_save(obj) {
    return request({
        url: '/box/v1/form/answer_save',
        method: 'post',
        data: obj,
    })
}
