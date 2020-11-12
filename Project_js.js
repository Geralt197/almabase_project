$("#formSubmit").submit(async function (e) {
	
        e.preventDefault();
		
		//variable 'org_name' for storing the name of organisation
        var org_name = document.querySelector("#org_name").value;
		
		//variable 'n' for storing the number of repos
        var n = parseInt(document.querySelector("#repo_count").value);
		
		//variable 'm' for storing the number of committees
        var m = parseInt(document.querySelector("#org_count").value);
		
        console.log(n, m);
		
		//variable 'url' for storing the data of repositories of given organisation using github api
        var url = 'https://api.github.com/users/' + org_name + '/repos';
		
		//main ajax function to sort repositories according to number of forks and then get the number of committees
        await $.ajax({
		
            url: url,
			
			//function is called if the result is returned
            success: async function (result) {
			
                //console.log("hi i am in repos ");
				
                console.log(result);
				
				//Sorting in descending order on the basis of forks
                result.sort((a, b) => { return b.forks - a.forks });
				
				//to output the data using jquery
                document.querySelector("#results").innerHTML = '';
				
				//for each repository, sorting the committees on the basis of commit count
                for (var i = 0; i < Math.min(n, result.length); i++) {
				
					//output using jquery
                    document.querySelector("#results").innerHTML += '<div> Name Of Repo: ' + result[i].name+' No of Forks : '+result[i].forks+'<br>';
					
					//variable 'url1' for storing the data of committees of given repository
                    var url1 = 'https://api.github.com/repos/' + org_name + '/' + result[i].name + '/contributors';
					
                    console.log(url1)
					
					//ajax function to sort the committees and show the output
                    await $.ajax({
					
                        url: url1,
						
						//sorting the committees in descending order on the basis of commit count
                        success: (res) => {
                            console.log(res);
                            res.sort((a, b) => {
                                return b.contributions - a.contributions;
                            });
							
							//variable 'final_result' for storing the output data
                            var final_result='';
							
							//if number of committees is less than 'm', all of them will be shown otherwise top 'm' committees are shown
                            for (var j = 0; j < Math.min(res.length, m); j++) {
                                final_result += ('<div>' + (j + 1) + '. Contributor Name: ' + res[j].login + ', Contribution Count: ' + res[j].contributions + '</div>');
                            }
							
                            console.log(final_result)
                            document.querySelector("#results").innerHTML += final_result;
                            document.querySelector("#results").innerHTML+='<br>';
                        },
						
						//error message
                        failure: (error) => {
                            console.log(error);
                        }
                    })
                }

            },
			
			//error message
            failure: function (error) {
                console.log(error);
                alert(error.message);
            }
        });
    })