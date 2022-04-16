const express = require("express");
const connectDB = require("./DB/connectDB");
const queries = require("./Queries/queries");

/*----------------------------QUERIES----------------------------*/
queries.createAndSavePerson();
queries.createManyPeople();
queries.search("Rzouga");
queries.searchByFood("Pie");
queries.searchById("625ae30628b6665cc099652b");
queries.updatePerson("625ae30628b6665cc099652c");
queries.newUpdatePerson("Haifa");
queries.removePerson("625af7358597565313380e19");
queries.removeManyPeople("Haifa");
queries.chainSearch();
/*---------------------------------------------------------------*/

connectDB();

const app = express();

const PORT = 4000;

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Server is running at ${PORT}`);
});
