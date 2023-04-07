import { hanRequest, brRequest } from '../index'

import { RootObject } from './types'

enum CorrectAPI {
  correct = '/corr'
}

enum HistoryAndWBListAPI {
  selectAllBlack = '/blacklist/selectAll',
  selectAllWhite = '/whiteList/selectAll',
  selectABlack = '/blacklist/select',
  selectAWhite = '/whiteList/select',
  deleteBlack = '/blacklist/delete',
  deleteWhite = '/whiteList/delete',
  addBlackList = '/blacklist/add',
  addWhiteList = '/whiteList/add',
  history = '/history'
}

export function correctRequest(text: string, tagText: string) {
  return hanRequest.post<RootObject>({
    url: CorrectAPI.correct,
    data: {
      text: text,
      tagText: tagText
    }
  })
}
// 历史记录
export function correctHistoryRequest(username: string) {
  return brRequest.get({
    url: HistoryAndWBListAPI.history,
    params: {
      username: username
    }
  })
}

// 全部黑名单
export function selectAllBlack() {
  return brRequest.get({
    url: HistoryAndWBListAPI.selectAllBlack
  })
}

// 搜索某个黑名单
export function selectABlack(str: string) {
  return brRequest.post({
    url: HistoryAndWBListAPI.selectABlack + '/' + str
  })
}

// 批量添加黑名单
export function addBlackList(form: any) {
  return brRequest.post({
    url: HistoryAndWBListAPI.addBlackList,
    data: form
  })
}

// 删除某个黑名单
export function deleteBlack(str: string) {
  return brRequest.get({
    url: HistoryAndWBListAPI.deleteBlack,
    params: {
      str: str
    }
  })
}

// 全部白名单
export function selectAllWhite() {
  return brRequest.get({
    url: HistoryAndWBListAPI.selectAllWhite
  })
}

// 搜索某个白名单
export function selectAWhite(str: string) {
  return brRequest.post({
    url: HistoryAndWBListAPI.selectAWhite + '/' + str
  })
}

// 删除某个白名单
export function deleteWhite(str: string) {
  return brRequest.get({
    url: HistoryAndWBListAPI.deleteWhite,
    params: {
      str: str
    }
  })
}

// 批量添加白名单
export function addWhiteList(form: any) {
  return brRequest.post({
    url: HistoryAndWBListAPI.addWhiteList,
    data: form
  })
}
