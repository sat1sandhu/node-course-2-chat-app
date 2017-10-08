const expect = require ('expect');
const {Users} = require ('./users');

describe ('Users', () => {
    var users;
    beforeEach (() => {
        users = new Users;
        users.users = [
            { id: '1', name: 'Mike', room: 'Node Course'
          },{ id: '2', name: 'Jen',  room: 'React Course'
          },{ id: '3', name: 'Julie', room: 'Node Course'
          }];
    });

    it ('Should add new user', () => {
        var users = new Users();
        var user  = {
            id: '123',
            name: 'Andrew',
            room: 'The Office Fan'
        };
        var resUser = users.addUser(user.id, user.name, user.room);
        expect (users.users).toEqual([user]);
    });

    it ('Should return names for node course', () => {
          var userList = users.getUserList('Node Course');
          expect (userList).toEqual(['Mike', 'Julie']);
    });

    it ('Should return names for react course', () => {
          var userList = users.getUserList('React Course');
          expect (userList).toEqual(['Jen']);
    });

    it ('Should remove user for id = 3', () => {
          var userId = '3';
          var removedUser = users.removeUser(userId);
          expect (removedUser).toEqual({ id: '3', name: 'Julie', room: 'Node Course'});          
          expect (users.users.length).toBe(2);
    });

    it ('Should not remove user for id = 4', () => {
          var removedUser = users.removeUser('4');
          //expect (removedUser).toEqual({});
          expect (removedUser).toNotExist();
          expect (users.users.length).toBe(3);
    });

    it ('Should get user for id = 2', () => {
          var userId = '2';
          var user = users.getUser(userId);
          expect (user.name).toBe('Jen');
          expect (user.id).toBe(userId);
    });

    it ('Should not get user for id = 5', () => {
          var userId = '99';
          var user = users.getUser(userId);
          expect (user.name).toBe(undefined);
          expect(user).toEqual({});
    });

});
