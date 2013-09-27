ExampleClassTest = TestCase("ExampleClassTest");

caplin.thirdparty( 'caplin-br' );

var stubEventHub = {
	on: function( eventName, callback, context ) {
		this.eventName = eventName;
		this.callback = callback;
		this.context = context;
	}
};

var ServiceRegistry = require( 'br/ServiceRegistry' );
ServiceRegistry.registerService( 'event-hub', stubEventHub );

ExampleClassTest.prototype.testTodoItemsBladeListensToItemAddedEvents = function() {
	var todoItemsBlade = new brjstodo.todo.todoitems.ExampleClass();

	assertEquals( stubEventHub.eventName , 'todo-added' );
	assertEquals( stubEventHub.context , todoItemsBlade );
};

ExampleClassTest.prototype.testItemsViewModelAddsItemOnTodoAddedEvent = function() {

	var todoItemsBlade = new brjstodo.todo.todoitems.ExampleClass();

	stubEventHub.callback.call( stubEventHub.context, { text: 'hello' } );

	var items = todoItemsBlade.items.getPresentationNodesArray();
	assertEquals( 'hello', items[ items.length - 1 ].value.getValue() );

};