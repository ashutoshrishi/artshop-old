
Template.main.helpers({
    latestItems: function () {
        return Items.find();
    },
    latestItem: function () {
        return Items.findOne();
    },
    getImage: function (image_id) {
        return Images.findOne({_id: image_id}).url();
    }
});

Template.itemBox.helpers({

    getImage: function() {
        return Images.findOne({_id: this.featuredImage});
    },
    labelClass: function (categories) {
        var knowns = [
            { name: 'Digital', labelClass: 'label-primary'},
            { name: 'Fiction', labelClass: 'label-info'}
        ];
        var retCats = [];
        var labelFound = false;

        for (var i = 0; i < categories.length; i++) {
            var cat = categories[i];
            for (var j = 0; j < knowns.length; j++) {
                if (knowns[j].name.toLowerCase() === cat.toLowerCase()) {
                    retCats.push(knowns[j]);
                    labelFound = true;
                }
            }
            // default label class (something random)
            if (labelFound === false) {
                retCats.push({name: cat, labelClass: 'label-warning'});
                labelFound = true;
            }      
        }
        return retCats;
    }
    
});


// Subscribtions

