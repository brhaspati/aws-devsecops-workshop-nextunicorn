var subscribeURL = "https://w2kzzluwp4.execute-api.eu-west-1.amazonaws.com/dev/subscribe";

function submit(){

			
			var email = ""+document.getElementById("email").value;
			
			$.ajax(subscribeURL, {
    				method: 'POST',
    				contentType: 'application/json',
                    data: JSON.stringify({
        				
        				email: email
                     }),
				    beforeSend: function(xmlHttpRequest) {
     					 xmlHttpRequest.withCredentials = true;
   				    }
				
			})
			.then(
    				function success(data) {
        				
					var result = data;
					
					if(result.code == "NotAuthorizedException" || result.code == "UserNotFoundException"){
						window.alert("Please enter a valid email!");
						window.location = "index.html";
					}
					else{
						   
						    window.location = "index.html";
						}
   			 	},

				function fail(data, status){
					
                    window.alert("Error connecting to server. Please try again");
	            window.location = "index.html";
				}
			);
}

        
