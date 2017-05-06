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
