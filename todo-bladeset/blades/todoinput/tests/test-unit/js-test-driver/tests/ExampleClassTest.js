ExampleClassTest = TestCase("ExampleClassTest");

ExampleClassTest.prototype.testMessageFieldIsInitialized = function() {
	var todoInputBlade = new brjstodo.todo.todoinput.ExampleClass();

  assertEquals( 'Hello World!', todoInputBlade.message.value.getValue() );
};
