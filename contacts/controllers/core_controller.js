app.Contacts_Controller_Core = can.Control({
    init: function(){
        var self = this;
        this.renderCore();
        this.getContacts(this.options.limit).done(function() {
            self.renderContacts();
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

    renderCore: function() {
        this.element.html(can.view('//contacts/views/core.ejs'));
    },

    renderContacts: function() {
        this.element.append(
            can.view('//contacts/views/contacts.ejs', {
                contacts: this.contacts
            })
        );
    },

    'ul.contact-list li.contact button click': function(el, ev) {
        var model = el.closest('li.contact').model();

        model.attr('clicks', ++model.attr('clicks'));
    }
});