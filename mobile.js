var mobile1 = {
    model: "IPhone 11",
    brand: "Apple",
    color: "Black",
    price: 58000,
    accessories: ["Charger", "Earphones","Tempered Glass"],
    features: { Ram: "4GB", Processor: "A13 Bionic" },
    show: function(brand, model) {
        console.log(`All about ${brand} ${model}`)
    }
}

for (const key in mobile1) {
    var mob1 = mobile1[key];
    if (mob1 instanceof Array) {
        mob1.forEach((element) => { console.log(key + " :" + element) })

    } else if (typeof(mob1) == "object") {
        for (const key in mob1) {
            console.log(key + " : " + mob1[key]);
        }
    } else if (typeof(mob1) == "function") {
        mob1(mobile1.brand, mobile1.model);
    } else
        console.log(key + " :" + mob1);

}
var mobile2 = {
    model: "Iphone 12",
    brand: "Apple",
    color: "Black",
    price: 80000,
    accessories: ["Charger", "Earphones", "Tempered Glass"],
    features: { Ram: "4GB", Processor: "A14 Bionic" },
    show: function(brand, model) {
        console.log(`All about ${brand} ${model}`)
    }
}
for (const key in mobile2) {
    var mob2 = mobile2[key];
    if (mob2 instanceof Array) {
        mob2.forEach((element) => { console.log(key + " :" + element) })

    } else if (typeof(mob2) == "object") {
        for (const key in mob2) {
            console.log(key + " : " + mob2[key]);
        }
    } else if (typeof(mob2) == "function") {
        mob2(mobile2.brand, mobile2.model);
    } else
        console.log(key + " :" + mob2);
}