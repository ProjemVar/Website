import { Mongo } from "meteor/mongo";
var ProfileCol = new Mongo.Collection("Profile");

Meteor.dbProfile = {
  getProfile : function(){
    return ProfileCol.find();
  },
  setProfile : function(name,surname){
    ProfileCol.insert({Name : name,Surname : surname});
  },
};
