// Escape the room

// You are creating an escape the room game. The first step is create an object called rooms that contains all of the rooms of the game. The room object should have at least 3 rooms as properties, and each individial room should have at least three properties (example: name, description, completed)

// Add rooms here
var rooms = {
  room1: {
    name: "room1",
    desciption: "cold, dark, and moist",
    completed: false
  },
  room2: {
    name: "room2",
    desciption: "extremely bright and white everywhere",
    completed: false
  },
  room3: {
    name: "room3",
    desciption: "house of mirrors",
    completed: false
  }
}

// var rooms = [[[], [], []], [[], [], []], [[], [], []]];


// describe('room creation', () => {
//   const keys = Object.keys(rooms)
//   it('should have at least three rooms', () => {
//     Test.assertEquals(keys.length >= 3, true)
//   })
//   it('each room should be an object', () => {
//      keys.forEach(name => {
//       Test.expect(typeof(rooms[name]) === 'object', `${name} should be an object`)
//     })
//   })
//   it('should contain at least three properties per room', () => {
//     keys.forEach(name => {
//       let numKeys = Object.keys(rooms[name]).length
//       Test.expect(numKeys >= 3, `not enough properties for room: ${name}`)
//     })
//   })
// })