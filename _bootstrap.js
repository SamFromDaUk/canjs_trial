steal(
    'jquery',
    'can/can.js',
    'can/util/fixture/fixture.js'
).then(function() {
    window.app = window.FrogOS = {};
}).then(
    '//contacts/contacts.js'
);