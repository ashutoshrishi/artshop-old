
// Main shop helpers
Template.mainShop.helpers({
  
  // isAdmin: return true if logged in user is in an admin role
  isAdmin: function() {
    if (Meteor.userId()) {
      var userId = Meteor.userId();
      if (Roles.userIsInRole(userId, 'admin')) {
        return true;
      }
    }
    return false;    
  },

  'itemCount':function(){
    return Session.get('Cart-itemCount');
  }
  
});


// Events
Template.mainShop.events({

  'click li.view-basket-button': function (event) {
    $("#basket-row").slideToggle('slow');
  }
  
});

