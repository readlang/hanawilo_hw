class Car {
    // holds methods and properties
    constructor(brand, price) { 
        // sets up initial values
        this.brand = brand
        this.price = price
    }

    drive() {
        // drive method
        console.log('driving')
    }
    stop() {
        // stop method
        console.log("stopping")
    }
}

//
const bmw = new Car("bmw", 90000)

console.log(bmw)