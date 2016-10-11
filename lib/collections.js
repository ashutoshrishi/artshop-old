

var Schemas = {};

Schemas.Item = new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 500
    },
    description: {
        type: String,
        label: "Description",
        autoform: {
            rows: 4
        }    
    },
    price: {
        type: Number,
        label: "Price",
        min: 0
    },
    artist: {
        type: String,
        label: "Artist"
    },
    'canvas.width': {
        type: Number,
        label: "Canvas Width"
    },
    'canvas.height': {
        type: Number,
        label: "Canvas Height"
    },
    frameOptions: {
        type: [String],
        label: "Frame Styles Available"
    },
    categories: {
        type: [String],
        label: "Categories the listed item falls under"
    },
    featuredImage: {
        type: String,
        label: "Main image for the item: ",
        autoform: {
            afFieldInput: {
                type: 'fileUpload',
                collection: 'Images'
            }
        }
    },

    // Force value to be current date (on server) upon insert
    // and prevent updates thereafter.
    createdAt: {
        type: Date,
        autoValue: function() {
            if (this.isInsert) {
                return new Date;
            } else if (this.isUpsert) {
                return {$setOnInsert: new Date};
            } else {
                this.unset();
            }
        }
    },
    
    // Force value to be current date (on server) upon update
    // and don't allow it to be set upon insert.
    updatedAt: {
        type: Date,
        autoValue: function() {
            if (this.isUpdate) {
                return new Date();
            }
        },
        denyInsert: true,
        optional: true
    }
    
});

Items = new Mongo.Collection('items');
Items.attachSchema(Schemas.Item);
Items.initEasySearch('title');



Images = new FS.Collection("images", {
    stores: [new FS.Store.FileSystem("images")]
});


Images.allow({
    insert: function(userId, doc) {
        return true;
    },
    download: function(userId) {
        return true;
    }
});

