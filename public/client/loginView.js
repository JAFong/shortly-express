Shortly.LoginView = Backbone.View.extend({
  className: 'login',

  initialize: function() {
    console.log('initializing loginview')
  },
  render: function() {
    this.$el.empty();
    return this;
  }
});
