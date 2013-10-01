ExampleClassTest = TestCase("ExampleClassTest");

var fakeEventHub;

ExampleClassTest.prototype.setUp = function() {
	// Stub out a fake EventHub
	fakeEventHub = {
		trigger: function( eventName, data ) {
			this.eventName = eventName;
			this.data = data;
		}
	};

	var sr = require( 'br/ServiceRegistry' );

	// ensure there isn't already an event-hub registered
	sr.deregisterService( 'event-hub' );

	// Register the fake event hub
	sr.registerService( 'event-hub', fakeEventHub );
};

ExampleClassTest.prototype.testMessageFieldIsInitialized = function() {
	var todoInputBlade = new brjstodo.todo.todoinput.ExampleClass();

  assertEquals( 'Hello World!', todoInputBlade.message.value.getValue() );
};

ExampleClassTest.prototype.testButtonClickedTriggersEventOnEventHub = function() {
	// Initialize
	var testTodoText = 'write some code and test it';
	var todoInputBlade = new brjstodo.todo.todoinput.ExampleClass();
	todoInputBlade.message.value.setValue( testTodoText );

	// Execute test
	todoInputBlade.buttonClicked();

	// Verify
  assertEquals( 'todo-added', fakeEventHub.eventName );
  assertEquals( testTodoText, fakeEventHub.data.text );
};