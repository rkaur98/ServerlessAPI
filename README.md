# ServerlessAPI

Instructions to run API:<br/>
•	In postman, import the json file exported from API Gateway.<br/>
•	In collections, open the folder created, click on each method to test.<br/><br/>
GET:<br/>
	Simply click send request to get method.<br/><br/>
POST:<br/>
	Click on Body and insert raw data as example:<br/>
	{<br/>
	"id": "48",<br/>
	"name": "Grapes",<br/>
	"content": "fruit"<br/>
}<br/>
<br/>
PUT: <br/>
	Click on Body and insert raw data as example to update recipe with existing id:<br/>
	{<br/>
	"id": "48",<br/>
	"name": "Smoothie",<br/>
	"content": "tropical"<br/>
}<br/>

DELETE:<br/>
	Change the param id in endpoint as example:<br/>
	/recipe/recipe?id=49<br/>
