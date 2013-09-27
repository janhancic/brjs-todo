caplin.thirdparty("caplin-br");

( function() {

	var br = require( 'br' );
	var ServiceRegistry = require( 'br/ServiceRegistry' );

	function ExampleClass() {
		var DisplayField = caplin.presenter.node.DisplayField;
		this.items = new caplin.presenter.node.NodeList( [ new DisplayField( "foo" ), new DisplayField( "bar" ) ] );

		this.eventHub = ServiceRegistry.getService( 'event-hub' );
		this.eventHub.on( 'todo-added', this._todoAdded, this );
	};
	br.extend(ExampleClass, caplin.presenter.PresentationModel);

	ExampleClass.prototype._todoAdded = function( added ) {
		var DisplayField = caplin.presenter.node.DisplayField;
		var newItem = new DisplayField( added.text );

		var nodes = this.items.getPresentationNodesArray();
		nodes.push( newItem );
		this.items.updateList( nodes );
	};

	brjstodo.todo.todoitems.ExampleClass = ExampleClass;

})();