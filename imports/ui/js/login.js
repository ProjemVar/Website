import { Template } from "meteor/templating";
import "../html/login.html";

Template.login.onCreated(function loginOnCreated() {
	if(Meteor.userId() !== null)
		FlowRouter.go("/home");
	this.errorMessage = new ReactiveVar("");
});

Template.login.helpers({
	message(){
		return Template.instance().errorMessage.get();
	},
	token(){
		return Meteor.userId();
	},
});

Template.login.events({
	'submit form'(event,instance){
		event.preventDefault();
		var username = $("[name=username]").val();
		var password = $("[name=password]").val();
		Meteor.loginWithPassword(username,password,function(error){
			if(error)
				instance.errorMessage.set(error.reason);
			else
				FlowRouter.go("/home");
		});

	},
});
