products = [
    {   paid:100,
        pname: 'apple',
        band: '5G',
        price: 120000,
        display: 'OLED'
    },
    {   paid:101,
        pname: 'samsung',
        band: '4G',
        price: 25000,
        display: 'AVOLED'
    },
    {   paid:102,
        pname: 'sasung',
        band: '5G',
        price: 150000,
        display: 'LED'
    },
    {   paid:103,
        pname: 'VIVO',
        band: '5G',
        price: 20000,
        display: 'OLED'
    },
    {   paid:104,
        pname: 'OPPO',
        band: '4G',
        price: 10000,
        display: 'LCD'
    },
    {   paid:105,
        pname: 'MI',
        band: '5G',
        price: 30000,
        display: 'OLED'
    },
    {   paid:106,
        pname: 'RENO',
        band: '4G',
        price: 15000,
        display: 'LED'
    },]

    // print product name only 

    console.log(products.forEach(element => console.log(element.pname)))

    // print all moblie with LED
    console.log(products.filter(element => element.display === "LED")
    .forEach(e=> console.log(e.pname)))

    // /print 5G mobile phone names
    console.log(products.filter(element => element.band == "5G")
    .forEach(e => console.log(e.pname)))

    // sort mobile names based on price
    console.log(products.sort((d1,d2)=> d2.price - d1.price)
    .forEach(e => console.log(e.pname)))

    // print costly mobiles 
    console.log(products.reduce((d1,d2)=>(d1.price > d2.price? d1:d2)))