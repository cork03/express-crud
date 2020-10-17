"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    const now = new Date();
    return queryInterface.bulkInsert(
      "categories",
      [
        {
          key: "programming",
          name: "プログラミング",
          createdAt: now,
          updatedAt: now,
        },
        {
          key: "career",
          name: "キャリア",
          createdAt: now,
          updatedAt: now,
        },
        {
          key: "hobby",
          name: "趣味",
          createdAt: now,
          updatedAt: now,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("caregories", null, {});
  },
};
