class Bus {
    constructor(busNumber , destinations) {
        this.busNumber = busNumber
        this.destinations = destinations
    }
}

// create a 'Bus' object for practice7
const practice7Bus = new Bus("7",["Stop A","Stop B","Stop C"]);

class BusStop {
    constructor (destinations) {
        this.destinations = destinations
        this.buses = []
    }
    addBus (bus) {
        if (bus.destinations.includes(this.destinations)) {
            this.buses.push(bus);
            return true
        }
        return false
    }
    removeBus (busNumber) {
        const index = this.buses.findIndex(bus => bus.busNumber === busNumber);
        if (index !== -1) {
            this.buses.splice(index , 1)
            return true
        }
        return false
    }
    listBuses() {
        return this.buses.map(bus => ({ busNumber: bus.busNumber, destinations: bus.destinations}))
    }
}

// Create a 'Bus' and 'BusStop' object for Practice9
const practice9Bus = new Bus ("9" , ["Stop A", "Stop B","Stop C"] )
const practice9BusStop = new BusStop("Stop B");
practice9BusStop.addBus(practice9Bus);
