define(['ember'], function(Ember) {
  var set = Ember.set, get = Ember.get;

  return Ember.Mixin.create({
    init: function(properties) {
      this._super.apply(this, arguments);

      if (properties) {
        this.setProperties(properties);
      }
    }
  });
});
