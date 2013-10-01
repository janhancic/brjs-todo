caplin.thirdparty( 'caplin-br' );

( function() {

  var br = require( 'br' );

  var ServiceRegistry = require( 'br/ServiceRegistry' );

  function ExampleClass() {
    this.message = new caplin.presenter.node.Field( "Hello World!" );
    this.eventHub = ServiceRegistry.getService( 'event-hub' );
  };

  br.extend( ExampleClass, caplin.presenter.PresentationModel );

  ExampleClass.prototype.buttonClicked = function() {
    var todoText = this.message.value.getValue();
    console.log( todoText );

    // TODO: validate

    this.eventHub.trigger( 'todo-added', { text: todoText } );
    this.message.value.setValue( '' );
  }

  brjstodo.todo.todoinput.ExampleClass = ExampleClass;

})();