
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('logs').del()
    .then(function () {
      // Inserts seed entries
      return knex('logs').insert([
        { time_and_date_of_run: "2020-01-01 14:00:00", distance: 5.6, time_taken: 30, name_of_run: "Tokyo" },
        { time_and_date_of_run: "2020-01-05 14:00:00", distance: 5.4, time_taken: 28, name_of_run: "London" },
        { time_and_date_of_run: "2020-01-10 14:00:00", distance: 4.5, time_taken: 25, name_of_run: "Belgrade" },
        { time_and_date_of_run: "2020-01-15 14:00:00", distance: 3.6, time_taken: 18, name_of_run: "Portugal" },
        { time_and_date_of_run: "2020-01-20 14:00:00", distance: 5.9, time_taken: 36, name_of_run: "Shinagawa" },
        { time_and_date_of_run: "2020-01-25 14:00:00", distance: 8, time_taken: 45, name_of_run: "Glasgow" },
      ]);
    });
};
