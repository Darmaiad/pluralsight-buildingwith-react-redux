import colors from 'colors';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
export default configure({ adapter: new Adapter() });


// const Adapter = require('enzyme-adapter-react-16');  
// const enzyme = require('enzyme');
// enzyme.configure({ adapter: new Adapter() });

// module.exports = enzyme;  
