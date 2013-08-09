app.Contacts_Model_Contact = can.Model({
    findAll: 'GET /contacts'
},{
    init: function() {
        if (!this.count) {
            this.attr('count', 0);
        }

        console.log(this);
    }
});