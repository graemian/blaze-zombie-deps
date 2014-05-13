if (Meteor.isClient) {

    Template.outer.viewType = function() {

        var viewType = Session.get("viewType");

        if (viewType)
            return Template[viewType];
        else
            return null;

    }

    Template.inner.helperDependentOnX = function() {

        console.log("Template.inner.helperDependentOnX");

        Session.get("x");

    }

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
