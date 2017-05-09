import { Mongo } from "meteor/mongo";
var ProjectCol = new Mongo.Collection("Project");

Meteor.dbProject = {
  getProjects : function(name,val){
    return ProjectCol.find({name : val});
  },
  setProject : function(id,obj){
    ProjectCol.update({_id : id},$set : obj);
  },
  addProject : function(data){
    ProjectCol.insert(data);
  },
};
