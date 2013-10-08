caplin.thirdparty("caplin-br");

( function() {

	var br = require( 'br' );
	var ServiceRegistry = require( 'br/ServiceRegistry' );

	function ExampleClass() {
		var DisplayField = br.presenter.node.DisplayField;
		var NodeList = br.presenter.node.NodeList;
		this.items = new NodeList( [ new DisplayField( "foo" ), new DisplayField( "bar" ) ] );

		this.eventHub = ServiceRegistry.getService( 'demo-event-hub' );
		this.eventHub.channel( 'todo-list' ).on( 'todo-added', this._todoAdded, this );
	};
	br.extend( ExampleClass, br.presenter.PresentationModel );

	ExampleClass.prototype._todoAdded = function( added ) {
		var DisplayField = br.presenter.node.DisplayField;
		var newItem = new DisplayField( added.text );

		var nodes = this.items.getPresentationNodesArray();
		nodes.push( newItem );
		this.items.updateList( nodes );
	};

	brjstodo.todo.todoitems.ExampleClass = ExampleClass;

})();