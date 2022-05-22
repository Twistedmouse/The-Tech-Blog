const sequelize = require("../config/connection");
const User = require("../models/User");
const Post = require("../models/Post");
const Comment = require("../models/Comment");
const seedUser = require("./userSeedData.json");
const seedPost = require("./postSeedData.json");
const seedComment = require("./commentSeedData.json");

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    await User.bulkCreate(JSON.parse(seedUser), {
      individualHooks: true,
      returning: true,
    });
    await Post.bulkCreate(JSON.parse(seedPost));
    await Comment.bulkCreate(JSON.parse(seedComment));
  } catch (error) {
    console.error(error);
  }

  process.exit(0);
};

seedDatabase();
