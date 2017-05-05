import { Template } from "meteor/templating";
import "./register.html";
Template.register.events({
	'submit #regform'(event,instance){
		event.preventDefault();

		var username = $("[name=regusername]").val();
		var email = $("[name=regemail]").val();
		var password = $("[name=regpassword]").val();
		var repassword = $("[name=regrepassword]").val();

		if(!Meteor.myAuthFuncs.comparePass(password,repassword)){
			console.log("Pass Not Same");
			return;
		}
		var passControl = Meteor.myAuthFuncs.isPasswordValid(password); 
		console.log(passControl.isErr + " -- " +passControl.msg);
		if(passControl.isErr){
			console.log(passControl.msg);
			return;
		}
		if(!Meteor.myAuthFuncs.isEmailValid(email)){
			console.log("Email Not Valid ");
			return;
		}
		Accounts.createUser({
				username: username,
				email: email,
				password: password,
			},
			function(error){
				console.log("Ok");
				if(error)
					console.log(error.reason);
			}
		);
	},
});
