import * as React from 'react'
import Select from 'react-select'

interface MyProps {
  displayCount: number
  updateDisplayCount: (count: number) => void
  categories: {
    value: string
    label: string
  }[],
  updateSelectedCategories: Function
  selectedCategories: string[]
}

interface MyState {
}

class Settings extends React.Component<MyProps, MyState> {
  constructor (props: MyProps) {
    super(props)
  }

  render () {
    const style: React.CSSProperties = {
      background: '#2e2122',
      color: '#e1e1e1',
      border: '1px solid #dbd6d0'
    }
    const selectStyle = {
      option: (provided: Object, state: any) => ({
        ...provided,
        backgroundColor: state.isFocused ? '#dbd6d0' : 'white'
      }),
      multiValueRemove: (provided: any) => ({
        ...provided,
        '&:hover': {
          backgroundColor: '#ea9d9f',
          color: '#c55053'
        }
      })
    }

    const selectedCategories = this.props.selectedCategories.map(cat => {
      return {
        value: cat,
        label: cat
      }
    })

    return (
      <div id='settings'>
        <button className='number-button'
          style={ this.props.displayCount === 4 ? style : undefined }
          onClick={ () => this.props.updateDisplayCount(4) }>4</button>
        <button className='number-button'
          style={ this.props.displayCount === 8 ? style : undefined }
          onClick={ () => this.props.updateDisplayCount(8) }>8</button>
        <button className='number-button'
          style={ this.props.displayCount === 12 ? style : undefined }
          onClick={ () => this.props.updateDisplayCount(12) }>12</button>
        <Select
          value={ [...selectedCategories] }
          closeMenuOnSelect={ false }
          isMulti
          name='categories'
          options={ this.props.categories }
          styles={ selectStyle }
          onChange={(selected) => this.props.updateSelectedCategories(selected)}
          className='category-select' />
      </div>
    )
  }
}

export default Settings
