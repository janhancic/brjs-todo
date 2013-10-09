( function() {

  var App = function() {
    var inputModel = new brjstodo.todo.todoinput.ExampleClass();
    var itemsModel = new brjstodo.todo.todoitems.ExampleClass();

    var PresenterComponent = br.presenter.component.PresenterComponent;
    this.inputComponent = new PresenterComponent( 'brjstodo.todo.todoinput.view-template', inputModel );
    this.itemsComponent = new PresenterComponent( 'brjstodo.todo.todoitems.view-template', itemsModel );
    
    this._appendComponent( this.inputComponent );
    this._appendComponent( this.itemsComponent );
  };

  App.prototype._appendComponent = function( component ) {
    component.setFrame(null);
    var el = component.getElement();
    document.getElementById( 'todoapp' ).appendChild( el );
    component.onOpen();
  };

  brjstodo.App = App;

} )();