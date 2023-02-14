class Car {
    // holds methods and properties
    constructor(brand, price) { // sets up initial values
        this.brand = brand
        this.price = price
    }

    drive() {
        console.log('driving')
    }
    stop() {
        console.log("stopping")
    }
}

//
const bmw = new Car("bmw", 90000)
const newArray = new Array()

console.log(bmw)