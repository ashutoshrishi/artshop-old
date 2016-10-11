AdminConfig = {
  name: 'ArtShop',  
  // List of admins
  adminEmails: ['rishi@localhost', 'rishi@artshop.com'],
  // Manageable Collections
  collections: {
    Items: {
      color: 'red',
      icon: 'cube',
      tableColumns: [
        { label: 'Title', name: 'title'},
        { label: 'Price', name: 'price'},
        { label: 'Categoeies', name: 'categories'}
      ],
      templates: {
        new: {
          name: 'adminAddItemForm'
        }
      }
    }
  },

  // dashboard config
  dashboard: {
    homeUrl: '/',
    skin: 'black',
    widgets: [
      {
        template: 'adminCollectionWidget',
        data: {
          collection: 'Items',
          class: 'col-lg-3 col-xs-6'
        }
      },
      {
        template: 'adminCollectionWidget',
        data: {
          collection: 'Users',
          class: 'col-lg-3 col-xs-6'
        }
      }
    ]
  }
  
};

AdminDashboard.addSidebarItem('Add New Item',
                              AdminDashboard.path('/Items/new'),
                              { icon: 'plus' });
