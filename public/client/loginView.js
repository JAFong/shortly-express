Shortly.LoginView = Backbone.View.extend({
  className: 'login',

  template: Templates['login'],

  events: {
    'submit': 'processLogin'
  },

  initialize: function() {
    console.log('initializing loginview')
  },

  processLogin: function(e) {
    e.preventDefault();
    var $username = this.$el.find('#username');
    var $password = this.$el.find('#password');
    var user = new Shortly.LogIn({ username: $username.val(), password: $password.val() })
    user.on('sync', this.success, this);
    user.on('error', this.failure, this);
    user.save({});
    $username.val('');
    $password.val('');
  },

  success: function(user) {
    console.log('User Sync Success Function', user);
    // this.stopSpinner();
    // var view = new Shortly.LogInView({ model: user });
    // this.$el.find('.message').append(view.render().$el.hide().fadeIn());
  },

  failure: function(model, res) {
    console.log('User Sync Failure Method', model, res);
    // this.stopSpinner();
    // this.$el.find('.message')
    //   .html('Please enter a valid URL')
    //   .addClass('error');
    // return this;
  },

  render: function() {
    console.log('rendering loginView');
    this.$el.html(this.template());
    return this;
  }
});
