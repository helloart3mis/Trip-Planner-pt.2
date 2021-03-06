var Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/tripPlanner', { logging: false });

const Hotel = db.define('hotel', {
  name: Sequelize.STRING,
  num_stars: {
    type: Sequelize.FLOAT(1, 5)
    // in class : type : Sequelize.INT, validate : { min:1, max:5}
  },
  amenities: Sequelize.STRING
});

const Restaurant = db.define('restaurant', {
  name: Sequelize.STRING,
  cuisine: Sequelize.TEXT,
  price: {
    type: Sequelize.INTEGER,
    validate: { min: 1, max: 5 }
  }
})

const Activity = db.define('activity', {
  name: Sequelize.STRING,
  age_range: Sequelize.STRING
})

const Place = db.define('place', {
  address: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  phone: Sequelize.STRING,
  location: Sequelize.ARRAY(Sequelize.FLOAT)
})

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

module.exports = {
  db: db,
  hotel: Hotel,
  restaurant: Restaurant,
  activity: Activity,
  place: Place
}
