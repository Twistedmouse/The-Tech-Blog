const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    datePosted: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
    author_id: {
        type: DataTypes.INTEGER,
        allowNull: false,

    //   references: {
    //     model: "user",
    //     key: "id",
    //   },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);
// Post.associate = function (models) {
//   Post.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
// };

module.exports = Post;
