caplin.thirdparty( 'caplin-br' );

( function() {

	var br = require( 'br' );

	function ExampleClass() {
		this.message = new caplin.presenter.node.Field( "Hello World!" );	
	};

	br.extend( ExampleClass, caplin.presenter.PresentationModel );

	ExampleClass.prototype.buttonClicked = function() {
		console.log( this.message.value.getValue() );
	}

	brjstodo.todo.todoinput.ExampleClass = ExampleClass;

})();