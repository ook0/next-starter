import Link from 'next/link';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
      </div>
    )
  }
}
