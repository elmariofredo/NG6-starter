const template = require( './app.html' );

require( './app.css' );

//@Component( {
//  selector: 'app'
//} )
//@View( {
//  template: template
//} )
class AppComponent{

  private static selector = 'app';
  private static template = template;
  private static options = {};

}

export default AppComponent;
