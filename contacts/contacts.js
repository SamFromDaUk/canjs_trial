steal(
    'jquery',
    "//contacts/controllers/controllers.js",
    "//contacts/models/models.js",
    "//contacts/views/views.js",
    "//contacts/fixtures/fixtures.js",
    "//contacts/public/css/css.js"
).then(function() {
    new app.Contacts_Controller_Core($('body').find('div.contacts'), {
        limit: 20
    });
});