let BASE_URL_WHY = ''
let TIME_OUT_WHY = 10000

let BASE_URL_HAN = ''
let TIME_OUT_HAN = 20000

if (process.env.NODE_ENV === 'development') {
  BASE_URL_WHY = 'http://1.12.243.250:8008'
  BASE_URL_HAN = 'http://xiguagaizi.gnway.cc'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL_WHY = 'http://1.12.243.250:8008'
  BASE_URL_HAN = 'http://xiguagaizi.gnway.cc'
} else {
  BASE_URL_WHY = 'http://1.12.243.250:8008'
  BASE_URL_HAN = 'http://xiguagaizi.gnway.cc'
}

export { BASE_URL_WHY, TIME_OUT_WHY, BASE_URL_HAN, TIME_OUT_HAN }
