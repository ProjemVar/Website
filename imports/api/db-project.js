import { Mongo } from "meteor/mongo";
var ProjectCol = new Mongo.Collection("Project");

Meteor.dbProject = {
  getProjects : function(name,val){
    return ProjectCol.find({name : val},{sort: {create_date: -1}});
    //return ProjectCol.find();
  },
  setProject : function(id,obj){
    ProjectCol.update({_id : id},$set : obj);
  },
  addProject : function(name,desc){
      var userId = Meteor.userId();
      if(userId == null) return;
      var date = new Date();
      ProjectCol.insert({UserId : userId,Name : name,Description : desc,create_date : date,update_date : date});
  },
};
