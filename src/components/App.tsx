import * as React from 'react'
import Header from './Header'
import MainContent from './MainContent'

class App extends React.Component {
  constructor (props: Object) {
    super(props)
  }

  render () {
    return (
      <div>
        <Header />
        <MainContent />
      </div>
    )
  }
}

export default App
