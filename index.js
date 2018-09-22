// Driver class:
let store = {trips: [], drivers: [], passengers: []}
let driverId = 0,
    passengerId = 0,
    tripId = 0
class Driver {
  constructor(name) {
    this.id = ++driverId
    this.name = name
    this.id = ++driverId
    store.drivers.push(this)
  }
  // trips() - returns all of the trips that a driver has taken
  trips() {
    return store.trips.filter((trip) => trip.driverId === this.id)
  }
// passengers() - returns all of the passengers that a driver has taken on a trip
  passengers() {
    return this.trips().map(trip => trip.passenger())
  }

}

class Passenger {
  constructor(name){
    this.id = ++passengerId
    this.name = name
    store.passengers.push(this)
  }

  trips() {
    return store.trips.filter((trip) => trip.passengerId === this.id)
  }

  drivers() {
    return this.trips().map(trip => trip.driver())
  }
}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId
    this.driverId = driver.id
    this.passengerId = passenger.id
    store.trips.push(this)
  }

  passenger() {
    return store.passengers.find((passenger) => passenger.id === this.passengerId)
  }

  driver() {
    return store.drivers.find((driver) => driver.id === this.driverId)
  }
}
