let store = {drivers: [], passengers: [], trips: []}

let passId = 0;
let driverId = 0;
let tripId = 0;


class Driver {

  constructor(name){
  this.name = name
  this.id = ++driverId
  store.drivers.push(this)
  }

  trips() {
    return store.trips.filter(trip => trip.driverId === this.id)
  }
  passengers() {
    const pass =  this.trips().map(trip => trip.passengerId)
    return store.passengers.filter(passenger => pass.includes(passenger.id))
  }
}


class Passenger {

  constructor(name){
  this.name = name
  this.id = ++passId
  store.passengers.push(this)
  }
  trips(){
    return store.trips.filter(trip => trip.passengerId === this.id)
  }
  drivers(){
    const driv =  this.trips().map(trip => trip.driverId)
    return store.drivers.filter(driver => driv.includes(driver.id))
  }
}


class Trip {

  constructor(driver, passenger){
  this.driverId = driver.id
  this.passengerId = passenger.id
  this.id = ++tripId
  store.trips.push(this)
  }
  driver(){
    return store.drivers.find(driver =>  driver.id === this.driverId)
  }
  passenger(){
    return store.passengers.find(pass =>  pass.id === this.passengerId)
  }
}
