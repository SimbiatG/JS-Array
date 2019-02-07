




const texasss = [
  {
    name: 'Mike',
    age: 23,
    gender: 'm',
    us: false,
  },
  {
    name: 'Liz',
    age: 20,
    gender: 'f',
    us: true,
  },
  {
    name: 'Chris',
    age: 102,
    gender: 'm',
    us: true,
  },
  {
    name: 'Chuloo',
    age: 27,
    gender: 'm',
    us: false,
  },
  {
    name: 'Annie',
    age: 30,
    gender: 'f',
    us: true,
  },
];

// Part 1 - Find all users older than 24

const olderUsers = texasss.filter(function (older){
        return older.age > 24 ;
      }); 

console.log(olderUsers)

// Part 2 - Find the total age of all users

          var totalAge = texasss.reduce(function(sum, users){
                return sum + users.age;
                 }, 0);
          console.log(totalAge)

