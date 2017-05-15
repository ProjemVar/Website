import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import '../imports/ui/js/main.js';


FlowRouter.route('/', {
  action: function() {
    //BlazeLayout.render("main", {content : "index",topmenu : "indexmenu"});
    BlazeLayout.render("main", {content : "index"});
  }
});

FlowRouter.route('/profile/', {
  action: function() {
    BlazeLayout.render("main", {content : "profile"});
  }
});
///Project begin
FlowRouter.route('/project/', {
  action: function() {
    BlazeLayout.render("main", {content : "project"});
  }
});

FlowRouter.route('/project/:id', {
  action: function() {
    BlazeLayout.render("main", {content : "showproject"});
  }
});
FlowRouter.route('/project/edit/:id', {
  action: function() {
    BlazeLayout.render("main", {content : "editproject"});
  }
});
//project end
FlowRouter.route('/login/', {
  action: function() {
    BlazeLayout.render("main", {content : "login"});
  }
});

FlowRouter.route('/register/', {
  action: function() {
    BlazeLayout.render("main", {content : "register"});
  }
});

FlowRouter.route('/home/', {
  action: function() {
    BlazeLayout.render("main", {content : "home"});
  }
});
