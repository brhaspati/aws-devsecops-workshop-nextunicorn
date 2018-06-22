var AWS = require("aws-sdk");

var dynamoDB = new AWS.DynamoDB.DocumentClient();
var tableName = process.env.TABLE_NAME;

module.exports.create = function(event, context, callback){

	var timeStamp = new Date().getTime();
	var data = JSON.parse(event.body);
	console.log(event.body);

	if (typeof data.email !== "string") {
		var response = {
			statusCode: 200,
			body: "please provide valid name and email to subscribe!",
			headers: {
						'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
						'Access-Control-Allow-Methods': 'POST,OPTIONS',
						'Access-Control-Allow-Origin': '*'
						} 	
		};
		callback(null, response);
	}

	var params = {

		TableName: tableName,
		Item: {
			email: data.email,
			createdAt: timeStamp,
			updatedAt: timeStamp
			
		}  
	};			

	dynamoDB.put(params, function(err, result){

		if(err){
			var response = {
				statusCode: 200,
				body: JSON.stringify(err),
				headers: {
						'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
						'Access-Control-Allow-Methods': 'POST,OPTIONS',
						'Access-Control-Allow-Origin': '*'
						} 	
			};
			callback(null, response);
		}
		else{
			var response = {
				statusCode: 200,
				body: JSON.stringify(result),
				headers: {
						'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
						'Access-Control-Allow-Methods': 'POST,OPTIONS',
						'Access-Control-Allow-Origin': '*'
						} 	
			};
			callback(null, response);
		}
	});
}
