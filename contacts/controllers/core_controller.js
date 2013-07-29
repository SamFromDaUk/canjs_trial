app.Contacts_Controller_Core = can.Control({
    init: function(){
        this.getContacts(this.options.limit).done(function() {
            this.renderContacts();
        });
    },

    getContacts: function() {
        var self = this;

        return $.Deferred(function(obj) {
            app.Contacts_Model_Contact.findAll({
                limit: self.options.limit
            }).done(function(contacts) {
                self.contacts = contacts;
                obj.resolve();
            }).fail(function() {
                // handle fail
            });
        });
    },

    renderContacts: function() {

    }
});