// TODO: the app code for this should be moved into the index.html and the reigistry code should not be using a test version
brjstodo.todo.todoitems.workbench.ExampleBladeApplication = function(nComponentWidth, nComonentHeight)
{
	this.m_sTemplateId = "brjstodo.todo.todoitems.view-template";
	this.m_eElement = null;

	this.m_nComponentWidth = nComponentWidth;
	this.m_nComonentHeight = nComonentHeight;

	this._createPresenterComponents();
};

brjstodo.todo.todoitems.workbench.ExampleBladeApplication.prototype._createPresenterComponents = function()
{
	this.m_oPresentationModel = new brjstodo.todo.todoitems.ExampleClass();
	this.m_oPresenterComponent = new caplin.presenter.component.PresenterComponent(this.m_sTemplateId, this.m_oPresentationModel);
	this.m_oPresenterComponent.setFrame(null);
	this.m_eElement = this.m_oPresenterComponent.getElement();
	this.m_oPresenterComponent.onOpen(this.m_nComponentWidth, this.m_nComonentHeight);
};

brjstodo.todo.todoitems.workbench.ExampleBladeApplication.prototype.getElement = function()
{
	return this.m_eElement;
};

brjstodo.todo.todoitems.workbench.ExampleBladeApplication.prototype.getPresentationModel = function()
{
	return this.m_oPresentationModel;
};
