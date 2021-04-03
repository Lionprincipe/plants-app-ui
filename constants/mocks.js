export const categories = [
  {
    id: 'plants',
    name: 'Plants',
    tags: ['products',
      'inspirations',],
    count: 147,
    image: require('../assets/icons/plants.png')
  },
  {
    id: "seed",
    name: 'Seeds',
    tags: ['products', 'shop'],
    count: 16,
    image: require('../assets/icons/seeds.png')
  },

  {
    id: "flower",
    name: 'Flowers',
    tags: ['products', 'inspirations'],
    count: 68,
    image: require('../assets/icons/flowers.png')
  },
  {
    id: "sprayer",
    name: 'sprayers',
    tags: ['products', 'shop'],
    count: 17,
    image: require('../assets/icons/sprayers.png')
  },
  {
    id: "pot",
    name: 'pots',
    tags: ['products', 'shop'],
    count: 47,
    image: require('../assets/icons/pots.png')
  },
  {
    id: "fertilizer",
    name: 'fertilizers',
    tags: ['products', 'shop'],
    count: 9,
    image: require('../assets/icons/fertilizers.png')
  },

]
export const products = [
  {
    id: 1,
    name: '16 Best Plants That Thrive In Your Bedroom',
    description: 'Bedroom deserve to be decorated with lush grenery jsut like every other room in the house\n - but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain houseplants will flourish. ',
    tags: ['Interior', '23 m2 ', 'Ideas'],
    images: [
      require('../assets/images/plants_1.png'),
      require('../assets/images/plants_2.png'),
      require('../assets/images/plants_3.png'),

      require('../assets/images/plants_1.png'),
      require('../assets/images/plants_2.png'),
      require('../assets/images/plants_3.png'),
    ]

  }
]
export const explore = [
  //images
  require('../assets/images/explore_1.png'),
  require('../assets/images/explore_2.png'),
  require('../assets/images/explore_3.png'),
  require('../assets/images/explore_4.png'),
  require('../assets/images/explore_5.png'),
  require('../assets/images/explore_6.png'),
]

export const profile = {
  username: 'Paul',
  location: 'Mouila',
  email: 'contact-paul@email.com',
  avatar: require('../assets/images/avatar.png'),
  budget: 3000,
  monthly_cap: 5000,
  notification: true,
  newsletter: false


}
export const mocks = { profile, products, categories, explore }