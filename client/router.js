import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import '../imports/ui/body.js';

FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("main", {content : "index",topmenu : "indexmenu"});
  }
});

FlowRouter.route('/login/', {
  action: function() {
    BlazeLayout.render("main", {content : "login",topmenu : "indexmenu"});
  }
});

FlowRouter.route('/register/', {
  action: function() {
    BlazeLayout.render("main", {content : "register",topmenu : "indexmenu"});
  }
});

FlowRouter.route('/home/', {
  action: function() {
    BlazeLayout.render("main", {content : "hello",topmenu : "homemenu"});
  }
});

