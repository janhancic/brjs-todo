ExampleClassTest = TestCase("ExampleClassTest");

ExampleClassTest.prototype.testTodoItemsBladeListensToItemAddedEvents = function()
{
	// setup
	var stubEventHub = function() {
		on: function() {
			this.onArgs = arguments;
		}
	};
	ServiceRegistry.registerService( 'event-hub', stubEventHub );

	var todoItemsBlade = new brjstodo.todo.todoitems.ExampleClass();

	var eventName = this.onArgs[ 0 ]
	var context = this.onArgs[ 2 ];
	assertEquals( eventName , 'todo-added' );
	assertEquals( context , todoItemsBlade );
};

ExampleClassTest.prototype.testItemsViewModelAddsItemOnTodoAddedEvent() {

	var stubEventHub = function() {
		on: function( eventName, callback, context ) {
			this.eventName = eventName;
			this.callback = callback;
			this.context = context;
		}
	};
	ServiceRegistry.registerService( 'event-hub', stubEventHub );

	var todoItemsBlade = new brjstodo.todo.todoitems.ExampleClass();

	stubEventHub.callback.apply( stubEventHub.context, { text: 'hello' } );

	var items = todoItemsBlade.items.getPresentationNodesArray();
	assertEquals( 'hello', items[ items.length - 1 ].value.getValue() );

};