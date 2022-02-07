const piece1 = ['mice', 'cow', 'tigers', 'rabbits', 'dragons', 'snakes', 'horses', 'sheep', 'monkeys', 'chicken', 'dogs', 'pigs'];
const piece2 = ['like', 'hate', 'adore', 'dislike', 'are annoyed by', 'are concerned with'];
const piece3 = ['apples', 'orange', 'cabbages', 'pear', 'jam', 'soup', 'carrots', 'napkin'];
const randomMessage = () => {
  let randIndex1 = Math.floor(Math.random() * piece1.length);
  let randIndex2 = Math.floor(Math.random() * piece2.length);
  let randIndex3 = Math.floor(Math.random() * piece3.length);
  console.log(`${piece1[randIndex1]} ${piece2[randIndex2]} ${piece3[randIndex3]}.`);
};

randomMessage();