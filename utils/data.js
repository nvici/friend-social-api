const name = [
    'John',
    'Nico',
    'Kameron',
    'Nick',
    'Brenden',
    'Isaac',
    'Alyssa',
    'Alissa',
    'Troy',
    'Anthony',
    'Thomas',
    'Mark',
    'Mary',
    'Benita',
    'Vicki',
    'Parker',
    'Sean',
    'Sidney',
    'Morgan',
    'Heather',
    'Rachel',
    'Pheobe',
    'Ross',
    'Joey',
    'Chandler',
    'Monica',
    'Richard',
    'Valerio',
  ];

  const email = [
    'test1@test.com',
    'test2@test.com',
    'test3@test.com',
    'test4@test.com',
    'test5@test.com',
    'test6@test.com',
    'test7@test.com',
    'test8@test.com',
    'test9@test.com',
    'test10@test.com',
  ];
  
  const ThoughtDescription = [
    'Gaming experiecne',
    'coding experience',
    'date night',
    'anime review',
    'gaming review',
    'podcasts',
    'vacation spots',
    'outdoors',
    'sport teams',
  ];
  
  const likelyReactions = [
    'sweet',
    'epic',
    'jod',
    'beautiful',
    'pretty',
    'looks great',
    'ok',
    'awful',
    'dumb',
    'lol',
    'lucky,'
  ];
  
  const users = [];
  
  // randomizes items in array
  const getRandomArr = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // random full name
  const getRandomName = () =>
   `${getRandomArr(name)}`;

    const getRandomEmail = () =>
    `${getRandomArrItem(email)}`;
  
  // function used to generate new thoughsts
  const getRandomThought = (int) => {
    let result = [];
    for (let i = 0; i < int; i++) {
      result.push({
        thoughtText: getRandomArrItem(ThoughtDescription),
        username: getRandomName(),
        buildSuccess: Math.random() < 0.5,
        reactions: [...getThoughtReaction(3)],
      });
    }
    return result;
  };

  const getUserFriend = (int) => {
    if (int === 1) {
      return getRandomArr(name);
    }
    const results = [];
    for (let i = 0; i < int; i++){
      results.push({
        tagBody: getRandomArr(name),
        thoughts: getRandomThought(),
      });
    }
    return results;
  };
  
  // each thought a user will be able to create a reaction
  const getThoughtReaction = (int) => {
    if (int === 1) {
      return getRandomArr(likelyReactions);
    }
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        tagBody: getRandomArr(likelyReactions),
        username: getRandomName(),
      });
    }
    return results;
  };
  

  module.exports = { getRandomName, getRandomEmail, getRandomThought };