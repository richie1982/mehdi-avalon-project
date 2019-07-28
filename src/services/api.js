const baseUrl = "https://www.alphavantage.co/query?function="
const dailyData = 'FX_DAILY'
const from = '&from_symbol='
const to = '&to_symbol='
const alphaAPIKey = "&apikey=FZL753HE354O603E"

export const fetchData = async (time, fromFX, toFX) => {
    return await fetch(baseUrl + time + from + fromFX + to + toFX + alphaAPIKey)
        .then(resp => resp.json())
}

window.fetchData = fetchData