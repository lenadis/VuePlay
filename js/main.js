// Creating a new Vue instance and pass in an options object.
var demo = new Vue({

	// A DOM element to mount our view model.
	el: '#main',

    // This is the model.
	// Define properties and give them initial values.
	data: {
		active: 'home',
		sheet1: [],
		sheet2: [],
	},

	beforeCreate: function() {
		var that = this;
		var tabletop = Tabletop.init({
			key: '14WNDvoloeWELEGt0r_5Ldxtuiqcyv8ElX09wccq80d8',
			callback: function(data, tabletop) {
				that.sheet1 = data.Sheet1.elements;
				that.sheet2 = data.Sheet2.elements;
				console.log(that.sheet1[1].Place);
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
