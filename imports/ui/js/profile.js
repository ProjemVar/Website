import { Template } from "meteor/templating";
import "../../api/db-profile.js";
import "../html/profile.html";


Template.profile.helpers({
  getProfile(){
    return Meteor.dbProfile.getProfile();
  },
  getUserInfo(){
    var user = Meteor.user();
    return {username : user.username,email : user.emails[0].address};
  }
});
Template.profile.events({
  "click #insert" (event,instance){
    event.preventDefault();
    var name = $("#name").val();
    var surname = $("#surname").val();
    Meteor.dbProfile.setProfile(name,surname);
  },
});
