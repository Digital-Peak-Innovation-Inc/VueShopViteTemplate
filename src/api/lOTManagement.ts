import request from '/@/utils/request'

export function getList(params?: any) {
  return request({
    url: '/lOTManagement/getList',
    method: 'get',
    params,
  })
}
