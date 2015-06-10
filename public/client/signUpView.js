Shortly.SignView = Backbone.View.extend({
  className: 'signup',

  template: Templates['signup'],

  initialize: function() {
    console.log('initializing loginview')
  },
  render: function() {
    console.log('rendering signInView');
    this.$el.html(this.template());
    return this;
  }
});
