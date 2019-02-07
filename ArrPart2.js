
 const newieyork = [
  {
    name: 'Michelle',
    age: 19,
    coder:true,
    gender: 'f',
    us: true,
  },
  {
    name: 'Sam',
    age: 25,
    coder:false,
    gender: 'm',
    us: false,
  },
  {
    name: 'Ivy',
    age: 26,
    coder:true,
    gender: 'f',
    us: false,
  },
  {
    name: 'Nick',
    age: 32,
    coder:true,
    gender: 'm',
    us: true,
  },
  {
    name: 'Jim Beglin',
    age: 65,
    coder:false,
    gender: 'm',
    us: true,
  },
]

// Part 1 - List all users in US in ascending order

      const usUser = newieyork.filter(function(user) {
   return user.us == true;
    });

  console.log(usUser)


// Part 2 - Sort all users by age

     newieyork.sort(function(a, b){
         if ( a.age > b.age ){
           return 1;
           } else {
           return -1;
         }
});

    console.log(newieyork)

// Part 3 - List all female coders

      const femaleCoders = newieyork.filter(function(user){
          return user.gender == 'f' && user.coder == true;
        });

console.log(femaleCoders)