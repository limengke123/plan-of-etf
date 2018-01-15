/**
 * @param range:the range time of the single price is used
 * @param price:the single price used
 * @param over:the over percent compared width last year,this count usually is between in 1 - 1.5
 * */
const single = {
    "2017":{
        range:"11.29-12.29",
        price:800,
        over:1
    },
    "2018":{
        range:"11.5-",
        price:1000,
        over:1.25
    }
}

module.exports.single = single