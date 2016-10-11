Template.ASCartSummary.helpers({
  'itemCount':function(){
    return Session.get('Cart-itemCount');
  },
  'itemTotal':function(){
    return Session.get('Cart-itemTotal');
  },
  'itemsInCart':function(){
    return !Session.equals('Cart-itemCount', 0);
  }
});


Template.ASCartItems.helpers({

  'items': function () {
    var query = {};
    if(Meteor.userId())
      query.userId = Meteor.userId();
    else
      query.deviceId = Session.get('Cart-deviceId');
    
    return Cart.Items.find(query);
  },

  'hasItems': function () {
    return !Session.equals('Cart-itemCount', 0);
  },

  'itemCount': function () {
    return Session.get('Cart-itemCount');
  },

  'itemTotal': function () {
    return Session.get('Cart-itemTotal');
  }
  
});

Template.ASCartItem.events({
  
  'click .remove':function(event, template){
    event.preventDefault();
    if(confirm("Are You Sure?"))
      Cart.Items.remove({_id:this._id});
  }
  
});



