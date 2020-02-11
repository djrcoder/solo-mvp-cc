const app = require("./main");
const db = require("./knex");

const PORT = process.env.PORT || 5000;

(async () => {
    try {
        console.log("Running migrations...");
        await db.migrate.latest();

        console.log("Starting express...");

        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}!`);
        });

        // app.listen("3000", function () {
        //     console.log('Express server listening on port 3000');
        // });

    } catch (err) {
        console.error("Error starting app!", err);
        process.exit(-1);
    }
})();


