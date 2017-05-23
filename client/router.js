// import { Meteor } from 'meteor/meteor'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { BlazeLayout } from 'meteor/kadira:blaze-layout'
// import { Projects } from '../lib/collections/collections.js'
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

FlowRouter.route('/profile/:id', {
  action: function (params, queryParams) {
    console.log('FlowRouter profile id:', params.id)
    BlazeLayout.render('main', {
      content: 'PageProfile',
      params: params
    })
    /*
    if (Meteor.users.findOne({_id: params.id})) {
      ...
    } else {
      BlazeLayout.render('main', {
        content: 'PageError',
        params: params
      })
    }
    */
  }
})

FlowRouter.route('/profile/edit/:id', {
  action: function (params, queryParams) {
    console.log('FlowRouter profile id:', params.id)
    BlazeLayout.render('main', {
      content: 'PageProfileEdit',
      params: params
    })
    /*
    if (Meteor.users.findOne({_id: params.id})) {
      ...
    } else {
      BlazeLayout.render('main', {
        content: 'PageError',
        params: params
      })
    }
    */
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
    console.log('FlowRouter project id:', params.id)
    BlazeLayout.render('main', {
      content: 'PageProjectShow',
      params: params
    })
    /*
    if (Projects.findOne({_id: params.id})) {
      ...
    } else {
      BlazeLayout.render('main', {
        content: 'PageError',
        params: params
      })
    }
    */
  }
})
FlowRouter.route('/project/edit/:id', {
  action: function (params, queryParams) {
    console.log('FlowRouter project id:', params.id)
    BlazeLayout.render('main', {
      content: 'PageProjectEdit',
      params: params
    })
    /*
    if (Projects.findOne({_id: params.id})) {
        ...
    } else {
      BlazeLayout.render('main', {
        content: 'PageError',
        params: params
      })
    }
    */
  }
})
// project end
