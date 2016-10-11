Router.configure({
  // we use the  appBody template to define the layout for the entire app
  layoutTemplate: 'mainShop',

  waitOn: function() {
    return [
      Meteor.subscribe('images'),
      Meteor.subscribe('latestItems')   
    ];
  }  
});


Router.map(function () {
  
  this.route('/', {
    template: 'main',
    name: 'main',
    waitOn: function () {
      return [Meteor.subscribe('latestItems')];
    },
    data: function () {
      return Items.find();
    }
  });


  // Route for displaying individual item
  this.route('/item/:_id', {
    
    template: 'itemDisplay',    
    data: function () {
      var currentItemId = this.params._id;      
      return Items.findOne({_id: currentItemId});
    }
  });

  this.route("images", {
    waitOn: function() {
      return [Meteor.subscribe('images')];
    }
  });

});

