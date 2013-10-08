caplin.thirdparty( 'caplin-br' );

( function() {

  var br = require( 'br' );

  var ServiceRegistry = require( 'br/ServiceRegistry' );

  function ExampleClass() {
    this.message = new br.presenter.node.Field( "Hello World!" );
    this.eventHub = ServiceRegistry.getService( 'demo-event-hub' );
  };
  br.extend( ExampleClass, br.presenter.PresentationModel );

  ExampleClass.prototype.buttonClicked = function() {
    var todoText = this.message.value.getValue();
    this.eventHub.channel( 'todo-list' ).trigger( 'todo-added', { text: todoText } );
    
    this.message.value.setValue( '' );
  }

  brjstodo.todo.todoinput.ExampleClass = ExampleClass;

} )();