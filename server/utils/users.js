class Users {
  constructor () {
    this.users = [];
  }
  addUser (id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }
  removeUser (id) {
    /// return user that was removed
    var removedUser;
    var usersArray = this.users;
    var elementPos = usersArray.findIndex (x => x.id === id );
    if (elementPos !== -1) {
        removedUser = usersArray[elementPos];
        usersArray.splice(elementPos, 1);
    }

    ///console.log ("index = ", elementPos, "removedUser = ", removedUser);
    return removedUser;

    // var usersArray = this.users;
    // var elementPos = usersArray.findIndex (x => x.id === id );
    // if (elementPos === -1) {
    //     return {};
    // }
    // var removedUser = usersArray[elementPos];
    // usersArray.splice(elementPos, 1);
    // ///console.log ("index = ", elementPos, "removedUser = ", removedUser);
    // return removedUser;
  }
  getUser (id) {
      var usersArray = this.users;
      var elementPos = usersArray.findIndex (x => x.id === id);
      if (elementPos === -1) {
          return {};
      }
      return usersArray[elementPos];
  }
  getUserList (room) {
    var users = this.users.filter ( (user) => user.room === room);
    var userArray = users.map ((user) => user.name);
    return userArray;
  }
}

module.exports = {Users};

// class Person {
//   constructor (name, age) {
//     //console.log (name, age);
//     this.name = name;
//     this.age  = age;
//   }
//   getUserDescription () {
//     return `${this.name} is ${this.age} year(s) old.`;
//   }
// }
//
// var me = new Person ('Andrew', 25);
// var description = me.getUserDescription();
// console.log (description);
