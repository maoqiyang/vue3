/* eslint-disable */
import request from './request'

export const login = (data) => {
    return request({
        url: 'login',
        methods: 'POST',
        data
    })
}
