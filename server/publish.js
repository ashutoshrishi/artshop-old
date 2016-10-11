
// Publishing the images collections for the client to view/download
Meteor.publish('images', function() {
  return Images.find();
});

Meteor.publish('latestItems', function () {
  return Items.find({}, {sort: {createdAt: -1}, limit: 4});  
});

Meteor.publish('items', function () {
  return Images.find();
});



