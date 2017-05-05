import { Template } from "meteor/templating";
import "./login.html";

Template.login.events({
	'submit form'(event,instance){
		event.preventDefault();
		var username = $("[name=username]").val();
		var password = $("[name=password]").val();
		Meteor.loginWithPassword(username,password,function(error){
			console.log("Login Process..");
			if(error){
				console.log(error.reason);
			}
			else{
				console.log("Logined");
				FlowRouter.go("/home");
			}
		});

	},
});