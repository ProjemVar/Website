import { FlowRouter } from 'meteor/kadira:flow-router'
import { BlazeLayout } from 'meteor/kadira:blaze-layout'
import '../imports/ui/js/main.js'

FlowRouter.route('/', {
  action: function () {
    // BlazeLayout.render("main", {content : "index",topmenu : "indexmenu"});
    BlazeLayout.render('main', {content: 'index'})
  }
})

FlowRouter.route('/home/', {
  action: function () {
    BlazeLayout.render('main', {content: 'home'})
  }
})

FlowRouter.route('/profile/', {
  action: function () {
    BlazeLayout.render('main', {content: 'profile'})
  }
})

FlowRouter.route('/profile/:id', {
  action: function (params, queryParams) {
    BlazeLayout.render('main', {
      content: 'profileWithId',
      params: params
    })
  }
})

FlowRouter.route('/profile/edit/:id', {
  action: function (params, queryParams) {
    BlazeLayout.render('main', {
      content: 'editprofile',
      params: params
    })
  }
})

FlowRouter.route('/login/', {
  action: function () {
    BlazeLayout.render('main', {content: 'login'})
  }
})

FlowRouter.route('/register/', {
  action: function () {
    BlazeLayout.render('main', {content: 'register'})
  }
})
// Project begin
FlowRouter.route('/project/', {
  action: function () {
    BlazeLayout.render('main', {content: 'project'})
  }
})

FlowRouter.route('/project/:id', {
  action: function (params, queryParams) {
    BlazeLayout.render('main', {
      content: 'showproject',
      params: params
    })
  }
})
FlowRouter.route('/project/edit/:id', {
  action: function (params, queryParams) {
    BlazeLayout.render('main', {
      content: 'editproject',
      params: params
    })
  }
})
// project end
