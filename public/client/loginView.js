Shortly.LoginView = Backbone.View.extend({
  className: 'login',

  template: Templates['login'],

  initialize: function() {
    console.log('initializing loginview')
  },
  render: function() {
    console.log('rendering loginView');
    this.$el.html(this.template());
    return this;
  }
});
