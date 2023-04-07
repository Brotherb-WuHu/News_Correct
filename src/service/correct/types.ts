export interface Data {
  original: string
  position: number
  result: string
}

export interface RootObject {
  code: number
  data: Data[]
  msg: string
}

// HistoryArryData

export interface IHistoryArryData {
  data: {
    content: string
    contentTag: string
    time: string
  }
}
