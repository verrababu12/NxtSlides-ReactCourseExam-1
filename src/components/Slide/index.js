import {Component} from 'react'
import './index.css'
import NxtSlideContext from '../../context'

class Slide extends Component {
  state = {headingActive: true, descriptionActive: true}

  onClickHeading = () => {
    this.setState({headingActive: false})
  }

  onClickDescription = () => {
    this.setState({descriptionActive: false})
  }

  render() {
    const {headingActive, descriptionActive} = this.state
    return (
      <NxtSlideContext.Consumer>
        {value => {
          const {
            initialList,
            activeIndex,
            changeHeading,
            ChangeDescription,
          } = value

          const onBlurDescription = event => {
            if (event.target.value === '') {
              ChangeDescription('Description')
            }
            this.setState({descriptionActive: true})
          }

          const onBlurHeading = event => {
            if (event.target.value === '') {
              changeHeading('Heading')
            }
            this.setState({headingActive: true})
          }

          const onChangeHeading = event => {
            changeHeading(event.target.value)
          }

          const onChangeDescription = event => {
            ChangeDescription(event.target.value)
          }

          const tabDetails = initialList[activeIndex]
          const {description, heading} = tabDetails

          return (
            <div className="main-slide-view-container">
              <div className="main-slide-container">
                {headingActive ? (
                  <h1
                    onClick={this.onClickHeading}
                    className="main-slide-heading"
                  >
                    {heading}
                  </h1>
                ) : (
                  <input
                    type="text"
                    value={heading}
                    onChange={onChangeHeading}
                    onBlur={onBlurHeading}
                    className="main-slide-heading-input"
                  />
                )}
                {descriptionActive ? (
                  <p
                    onClick={this.onClickDescription}
                    className="main-slide-description"
                  >
                    {description}
                  </p>
                ) : (
                  <input
                    type="text"
                    value={description}
                    onChange={onChangeDescription}
                    className="main-slide-description-input"
                    onBlur={onBlurDescription}
                  />
                )}
              </div>
            </div>
          )
        }}
      </NxtSlideContext.Consumer>
    )
  }
}

export default Slide
