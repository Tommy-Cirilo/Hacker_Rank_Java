/* You will create a user object that has three properties. username, password, age
Using js symbols, ensure that username and passwords are privatefields on the user character.

This means that they shouldn't be accessible by calling user.username or user.password
 */

 const username = Symbol("username");
 const password = Symbol("password");

 const user = {
     [username]: "tommy",
     [password]: "12345",
     age: 28
 };

 //They will be revealed, but in order to fix that, you surround the property with brackets
 console.log(user.username);
 console.log(user.password);