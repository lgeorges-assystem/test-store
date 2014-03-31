var EmployeeView = function(employee) {
    
	this.render = function() {
	    this.elt.html(EmployeeView.template(employee));
	    return this;
	};
	
	this.addLocation = function(event) {
	    event.preventDefault();
	    console.log('addLocation');
	    navigator.geolocation.getCurrentPosition(
	        function(position) {
	            $('.location', this.elt).html(position.coords.latitude + ',' + position.coords.longitude);
	        },
	        function() {
	            alert('Error getting location');
	        });
	    return false;
	};
	
	this.initialize = function() {
        this.elt = $('<div/>');
        this.elt.on('click', '.add-location-btn', this.addLocation);
    };
 
    this.initialize();
 
}
EmployeeView.template = Handlebars.compile($("#employee-tpl").html());