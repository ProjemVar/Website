import { FlowRouter } from 'meteor/kadira:flow-router'
import { BlazeLayout } from 'meteor/kadira:blaze-layout'
import '../imports/ui/js/main.js'

FlowRouter.route('/admin', {
  action: function () {
    // BlazeLayout.render("main", {content : "index",topmenu : "indexmenu"});
    BlazeLayout.render('main', {content: 'PageAdmin'})
  }
})

FlowRouter.route('/', {
  action: function () {
    BlazeLayout.render('main', {content: 'PageHome'})
  }
})

FlowRouter.route('/chat/:id', {
  action: function (params, queryParams) {
    BlazeLayout.render('main', {
      content: 'PageChat',
      params: params
    })
  }
})

FlowRouter.route('/profile/:id', {
  action: function (params, queryParams) {
    BlazeLayout.render('main', {
      content: 'PageProfile',
      params: params
    })
  }
})

FlowRouter.route('/profile/edit/:id', {
  action: function (params, queryParams) {
    BlazeLayout.render('main', {
      content: 'PageProfileEdit',
      params: params
    })
  }
})

FlowRouter.route('/login/', {
  action: function () {
    BlazeLayout.render('main', {content: 'PageLogin'})
  }
})

FlowRouter.route('/register/', {
  action: function () {
    BlazeLayout.render('main', {content: 'PageRegister'})
  }
})
// Project begin
FlowRouter.route('/projects/', {
  action: function () {
    BlazeLayout.render('main', {content: 'PageProjects'})
  }
})

FlowRouter.route('/project/:id', {
  action: function (params, queryParams) {
    BlazeLayout.render('main', {
      content: 'PageProjectShow',
      params: params
    })
  }
})
FlowRouter.route('/project/edit/:id', {
  action: function (params, queryParams) {
    BlazeLayout.render('main', {
      content: 'PageProjectEdit',
      params: params
    })
  }
})
// project end
