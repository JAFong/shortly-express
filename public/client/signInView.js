Shortly.LoginView = Backbone.View.extend({
  className: 'signin',

  template: Templates['signin'],

  events: {
    'submit': 'shortenUrl'
  },

  initialize: function() {
    console.log('initializing loginview')
  },

   shortenUrl: function(e) {
    e.preventDefault();
    var $form = this.$el.find('form .text');
    var link = new Shortly.SignUp({ url: $form.val() })
    link.on('sync', this.success, this);
    link.on('error', this.failure, this);
    link.save({});
    $form.val('');
  },

  success: function(link) {
    this.stopSpinner();
    var view = new Shortly.LinkView({ model: link });
    this.$el.find('.message').append(view.render().$el.hide().fadeIn());
  },

  failure: function(model, res) {
    this.stopSpinner();
    this.$el.find('.message')
      .html('Please enter a valid URL')
      .addClass('error');
    return this;
  },

  render: function() {
    console.log('rendering signInView');
    this.$el.html(this.template());
    return this;
  }
});
