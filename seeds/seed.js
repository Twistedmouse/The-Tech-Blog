const sequelize = require("../config/connection");
const {User, Post, Comment} = require('../models/')
const seedUser = require("./userSeedData.json");
const seedPost = require("./postSeedData.json");
const seedComment = require("./commentSeedData.json");

console.log(sequelize)

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    await User.bulkCreate(seedUser, {
      individualHooks: true,
    });
    await Post.bulkCreate(seedPost);
    await Comment.bulkCreate(seedComment);
  } catch (error) {
    console.error(error);
  }

  process.exit(0);
};

seedDatabase();
