ExampleClassTest = TestCase("ExampleClassTest");

var fakeEventHub;
var fakeChannel;

ExampleClassTest.prototype.setUp = function() {

  fakeChannel = {
    trigger: function(eventName, data) {
      // store event name and data
      this.eventName = eventName;
      this.data = data;
    }
  };

  fakeEventHub = {
    channel: function( channelName ) {
      // store the name of the channel
      this.channelName = channelName;
      return fakeChannel;
    }
  };

  var sr = require( 'br/ServiceRegistry' );

  // ensure there isn't already an event-hub registered
  sr.deregisterService( 'demo-event-hub' );

  // Register the fake event hub
  sr.registerService( 'demo-event-hub', fakeEventHub );
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
  assertEquals( 'todo-list', fakeEventHub.channelName );
  assertEquals( 'todo-added', fakeChannel.eventName );
  assertEquals( testTodoText, fakeChannel.data.text );
};