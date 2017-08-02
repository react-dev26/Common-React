import React, { Component } from 'react'
import { StaggeredMotion, spring } from 'react-motion'
import BackgroundImageHelper from 'lib/BackgroundImageHelper'

const startY = -100
const startOpacity = 0
const initialStiffness = 400
const initialDamping = 60

const finalStiffness = 400
const finalDamping = 60

class citySelect extends Component {
  render() {
    const { input: { value, onChange }, cities } = this.props
    return (
      <div className="learn-box-cities">
        <div className="learn-box-cities-label">
          <h2 className="text-left">Select your city</h2>
          <p className="text-left">Choose the city in which you would like to live.</p>
        </div>
        <StaggeredMotion
          defaultStyles={cities.map(c => ({ y: startY, o: startOpacity}))}
          styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
            return i === 0
              ? { y: spring(0, { stiffness: initialStiffness, damping: initialDamping }), o: spring(1) }
              : {
                  y: spring(prevInterpolatedStyles[i - 1].y, { stiffness: finalStiffness, damping: finalDamping }),
                  o: spring(prevInterpolatedStyles[i - 1].o)
                }
          })}
        >
          {interpolatingStyles =>
            <div className="learn-box-cities-wrapper">
              {interpolatingStyles.map((style, i) => {
                const cityStyles = {
                  WebkitTransform: `translate3d(0, ${style.y}px, 0)`,
                  opacity: style,
                  backgroundImage: (new BackgroundImageHelper(cities[i].photoForApplyForm)).style.backgroundImage
                }
                return (
                  <div key={cities[i].name} onClick={() => onChange(cities[i].salesforceIdentifier)} className={`learn-box-cities-city learn-box-cities-city--${cities[i].name}`} style={cityStyles}>
                    <div className="learn-box-cities-city-overlay">{cities[i].name}</div>
                  </div>
                )
              })}
            </div>
          }
        </StaggeredMotion>
      </div>
    )
  }
}

export default citySelect
