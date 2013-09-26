brjstodo.todo.todoinput.ExampleClass = function()
{
	this.message = new caplin.presenter.node.Field( "Hello World!" );	
};

caplin.extend(brjstodo.todo.todoinput.ExampleClass, caplin.presenter.PresentationModel);

brjstodo.todo.todoinput.ExampleClass.prototype.buttonClicked = function()
{
 	var proxy = caplin.core.ServiceRegistry.getService("br.event-service").getProxy("caplin.workbench.model.WorkbenchEventListener", "caplin");
	proxy.logEvent("button clicked", "", {"greeting" : "Hello!"});

	console.log( this.message.value.getValue() );
}
