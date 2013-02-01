define(['ember', './soul'], function(Ember, Soul) {
  var set = Ember.set, get = Ember.get;
  
  var Rig = Ember.Namespace.create({
    toString: function() { return "rig"; }
  });

  Rig.Soul = Soul;

  return Rig;
});

