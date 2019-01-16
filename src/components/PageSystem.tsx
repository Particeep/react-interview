import * as React from 'react'

interface MyProps {
  displayCount: number
  itemsToDisplay: number
  currentPage: number
  updatePage: Function
}

interface MyState {
}

class PageSystem extends React.Component<MyProps, MyState> {
  constructor (props: MyProps) {
    super(props)
  }

  render () {
    const pageCount = Math.ceil(this.props.itemsToDisplay / this.props.displayCount)
    const style: React.CSSProperties = {
      background: '#2e2122',
      color: '#e1e1e1',
      border: '1px solid #dbd6d0'
    }
    const pageButtons = []
    if (pageCount > 1) {
      for (let i = 0; i < pageCount; i++) {
        pageButtons.push(
          <button key={ i }
          className='page-button'
          style={ this.props.currentPage === i ? style : undefined }
          onClick={ () => this.props.updatePage(i) }>{ i + 1 }</button>
        )
      }
    }
    return (
      <div id='page-options'>
        { pageButtons }
      </div>
    )
  }
}

export default PageSystem
