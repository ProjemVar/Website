import { Template } from "meteor/templating";
import "../html/index.html";
import "../../api/db-profile.js";

Template.index.helpers({
  allProfiles(){
    return Meteor.dbProfile.listAllProfiles();
  },
});
