const baseUrl = "https://www.alphavantage.co/query?function="
const alphaAPIKey = "&apikey=FZL753HE354O603E"

export const fetchData = async () => {
    return await fetch(baseUrl + alphaAPIKey)
        .then(resp => resp.json())
}