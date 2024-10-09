const express = require('express')
const app = express()
const port = 3000
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('development.sqlite3');

try {
	db.serialize(() => {
		var table_exists = false

		db.each("SELECT name FROM sqlite_master WHERE type='table' AND name='customer';", (err, row) => {
			console.log(row);
			table_exists = true
		}, function() {
			console.log('im here now')
			console.log(table_exists)
			if (table_exists == false) {
			    const db2 = new sqlite3.Database('development.sqlite3');
				db2.run("CREATE TABLE customer ( id INTEGER PRIMARY KEY, name VARCHAR(50) NOT NULL, address VARCHAR(100) NOT NULL, phone VARCHAR(15));");
				db2.close();
			}
		});

	});

	db.close();
} catch (e) {
	console.log(e)
}

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})