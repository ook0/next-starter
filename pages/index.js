import { FaReact } from 'react-icons/fa';

export default class index extends React.Component {
  render() {
    return (
      <div className="index">
        <h1>Next starter</h1>
        <h2>What's included?</h2>
        <ul>
          <a href="https://github.com/expressjs/express"><li>Express server</li></a>
          <a href="https://github.com/facebook/prop-types"><li>Prop-types</li></a>
          <a href="https://github.com/axios/axios"><li>Axios</li></a>
          <a href="http://react-icons.github.io/react-icons/"><li>React icons <FaReact /></li></a>
          <a href="https://github.com/sass/sass"><li>Sass</li></a>
        </ul>
      </div>
    )
  }
}
