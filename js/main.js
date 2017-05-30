// Creating a new Vue instance and pass in an options object.
var demo = new Vue({

	// A DOM element to mount our view model.
	el: '#main',

    // This is the model.
	// Define properties and give them initial values.
	data: {
		active: 'home',
		result: [123],
	},

	mounted: function() {
		var that = this;
		var tabletop = Tabletop.init({
			key: '14WNDvoloeWELEGt0r_5Ldxtuiqcyv8ElX09wccq80d8',
			callback: function(data, tabletop) {
				console.log(data);
				that.result = data.Sheet1.elements;
				console.log(that.result);
			}
		})

	},


	// Functions we will be using.
	methods: {
		makeActive: function(item){
			// When a model is changed, the view will be automatically updated.
			this.active = item;
		}
	}
});
