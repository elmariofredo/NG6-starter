const template = require( './hero.html' );
import controller from './hero.controller';

require( './hero.css' );

let heroComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default heroComponent;