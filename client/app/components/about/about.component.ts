const template = require( './about.html' );

require( './about.css' );

//@Component( {
//  selector: 'about'
//} )
//@View( {
//  template: template
//} )
class AboutComponent {

  name:string;

  private static selector = 'about';
  private static template = template;
  private static options = {};

  constructor(){
    this.name = 'about';
  }
}


export default AboutComponent;
