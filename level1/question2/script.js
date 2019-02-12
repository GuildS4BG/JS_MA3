//Console.log out elements in JSON file
//There is an author.json file in the folder. Console.log each of the elements inside this JSON file that is id, name, URL, author and each element inside the data array. You can make use of a for loop here.
/*var jsonObj = {
	"video": [{
		"id": 12312412312,
		"name": "Ecuaciones Diferenciales",
		"url": "/video/math/edo/12312412312",
		"author": {
			"data": [{
				"name_author": "Alejandro Morales",
				"url": "/author/alejandro-morales",
				"type": "master"
			}]
		}
	}]
}*/
var newObj = JSON.parse('{ "video": [{"id": 12312412312, "name": "Ecuaciones Diferenciales", "url": "/video/math/edo/12312412312", "author": {"data": [{"name_author": "Alejandro Morales", "url": "/author/alejandro-morales", "type": "master"}]}}]}');

						
						
for (var i in newObj.video[0]){
	console.log(i + ": " + newObj.video[0] [i]);
}
for (var i in newObj.video[0].author.data[0]){
	console.log(i + ": " + newObj.video[0].author.data[0] [i]);
}