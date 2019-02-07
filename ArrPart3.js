const vegzas = [
  {
    name: 'Charly',
    age: 32,
    coder:true,
    gender: 'm',
  },
  {
    name: 'Law',
    age: 21,
    coder:true,
    gender: 'm',
  },
  {
    name: 'Rosey',
    age: 42,
    coder:false,
    gender: 'f',
  },
  {
    name: 'Steph',
    age: 18,
    coder:true,
    gender:'f'
  },
  {
    name: 'Jon',
    age: 47,
    coder:false,
    gender: 'm',
  },
]

// Part 1 - Find the total age of male coders under 25

    const maleAge = vegzas.filter(function(user){
      return user.gender == 'm' && user.age < 25;

    });

        console.log( maleAge)

// Part 2 - List all male coders over 30
   
const maleCoders = vegzas.filter(function(user){
  if(user.coder == true ){
      return user.gender == 'm' && user.age > 30;
   }
});

    console.log( maleCoders)     


// Part 3 - Find the total age of everyone in texasss, newieyork and vegzas combined.

      let combinedArr = (texasss.concat(newieyork)).concat(vegzas);
      let totalAgeOfUsers = combineList.reduce(function(item, user){
               return item + user.age;
          }, 0);


console.log(totalAgeOfUsers);
