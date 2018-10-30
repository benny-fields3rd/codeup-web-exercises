/*
 * Complete the TODO items below
 */
  const users = [
    {
      name: 'zach',
      email: 'zach@codeup.com',
      languages: ['javascript', 'bash']
    },
    {
      name: 'ryan',
      email: 'ryan@codeup.com',
      languages: ['clojure', 'javascript']
    },
    {
      name: 'luis',
      email: 'luis@codeup.com',
      languages: ['java', 'scala', 'php']
    },
    {
      name: 'fernando',
      email: 'fernando@codeup.com',
      languages: ['java', 'php', 'sql']
    },
    {
      name: 'justin',
      email: 'justin@codeup.com',
      languages: ['html', 'css', 'javascript', 'php']
    }
  ];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
  const name = 'benny';
  const email = 'benny@codeup.com';
  const languages = ['java', 'python', 'javascript'];

// TODO: rewrite the object literal using object property shorthand
users.push({
  name: name,
  email: email,
  languages: languages
});

users.push({
  name,
  email,
  languages
});

// TODO: replace `var` with `let` in the following variable declarations
  let emails = [];
  let names = [];

// TODO: rewrite the following using arrow functions
  users.forEach(function(user) {
      return emails.push(user.email);

// my way
      users.forEach((user) => {
          return emails.push(user.email);
      });
      // or
      users.forEach((user) => emails.push(user.email));

      users.forEach(function (user) {
          return names.push(user.name);
      });

// my way
      users.forEach((user) => {
          return names.push(user.name);
      });
      // or
      users.forEach((user) => name.push(user.name));

// TODO: replace `var` with `let` in the following declaration
      let developers = [];
      users.forEach(function ({name, email, languages}) { //add properties
// TODO: rewrite the code below to use object destructuring assignment
//       note that you can also use destructuring assignment in the function
//       parameter definition
//   const name = user.name;
//   const email = user.email;
//   const languages = user.languages;

          // my way
          // const user = { name, email, languages }; moved

// TODO: rewrite the assignment below to use template strings
          developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
      });
      // my way
      developers.push(`"${name}'s email is ${email} {name} knows {languages}.join(',')"`); // do not need double-quotes and move closing bracket to after join method
      // Instructor Ryan's way
      developers.push(`${name}'s email is ${email} {name} knows {languages.join(',')}`);

// TODO: Use `let` for the following variable
      let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
      developers.forEach(function (developer) {
          // my way
          for (let developer of developers) { // forgot let!
          }

// TODO: rewrite the assignment below to use template strings
          list += '<li>' + developer + '</li>';
      });

      list += '</ul>';
      // my way
      let list = `
    <li>${developer[0]}</li> 
  `; // do not need [0] because it is not what we asked for /  it returns the first character of the string

    list = `
        <li>${developer}</li>`;
  }