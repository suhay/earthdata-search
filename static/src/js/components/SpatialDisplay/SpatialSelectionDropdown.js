import React, { PureComponent } from 'react'
import { PropTypes } from 'prop-types'
import { Dropdown } from 'react-bootstrap'
import {
  FaCrop, FaMapMarker, FaCircle, FaFile
} from 'react-icons/fa'

import { eventEmitter } from '../../events/events'

import Button from '../Button/Button'
import EDSCIcon from '../EDSCIcon/EDSCIcon'

import './SpatialSelectionDropdown.scss'

export class SpatialSelectionDropdown extends PureComponent {
  constructor(props) {
    super(props)
    this.onItemClick = this.onItemClick.bind(this)
  }

  onItemClick(item) {
    const {
      onToggleSelectingNewGrid,
      onToggleShapefileUploadModal
    } = this.props

    if (item === 'point') {
      eventEmitter.emit('map.drawStart', {
        type: 'marker'
      })
    }

    if (item === 'rectangle') {
      eventEmitter.emit('map.drawStart', {
        type: 'rectangle'
      })
    }

    if (item === 'polygon') {
      eventEmitter.emit('map.drawStart', {
        type: 'polygon'
      })
    }

    if (item === 'circle') {
      eventEmitter.emit('map.drawStart', {
        type: 'circle'
      })
    }

    if (item === 'file') {
      onToggleShapefileUploadModal(true)
    }

    if (item === 'grid') {
      onToggleSelectingNewGrid(true)
    }
  }

  render() {
    return (
      <Dropdown className="spatial-selection-dropdown dropdown-dark">
        <Dropdown.Toggle
          variant="inline-block"
          id="spatial-selection-dropdown"
          className="search-form__button search-form__button--dark"
        >
          <EDSCIcon icon={FaCrop} />
        </Dropdown.Toggle>
        <Dropdown.Menu className="spatial-selection-dropdown__menu">
          <Dropdown.Item
            className="spatial-selection-dropdown__button"
            as={Button}
            icon="edsc-icon-poly-open edsc-icon-fw"
            onClick={() => this.onItemClick('polygon')}
            label="Select Polygon"
          >
            <span>Polygon</span>
          </Dropdown.Item>
          <Dropdown.Item
            className="spatial-selection-dropdown__button"
            as={Button}
            icon="edsc-icon-rect-open edsc-icon-fw"
            onClick={() => this.onItemClick('rectangle')}
            label="Select Rectangle"
          >
            <span>Rectangle</span>
          </Dropdown.Item>
          <Dropdown.Item
            className="spatial-selection-dropdown__button"
            as={Button}
            icon={FaMapMarker}
            onClick={() => this.onItemClick('point')}
            label="Select Point"
          >
            <span>Point</span>
          </Dropdown.Item>
          <Dropdown.Item
            className="spatial-selection-dropdown__button"
            as={Button}
            icon={FaCircle}
            onClick={() => this.onItemClick('circle')}
            label="Select Circle"
          >
            <span>Circle</span>
          </Dropdown.Item>
          <Dropdown.Item
            className="spatial-selection-dropdown__button"
            as={Button}
            icon={FaFile}
            onClick={() => this.onItemClick('file')}
            label="Select Shapefile"
          >
            <span>
              File
              <span className="spatial-selection-dropdown__small">(KML, KMZ, ESRI, …)</span>
            </span>
          </Dropdown.Item>
          <Dropdown.Item
            className="spatial-selection-dropdown__button"
            as={Button}
            icon="edsc-icon-globe-grid edsc-icon-fw"
            onClick={() => this.onItemClick('grid')}
            label="Select Grid Coordinates"
          >
            <span>Grid Coordinates</span>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}

SpatialSelectionDropdown.propTypes = {
  onToggleSelectingNewGrid: PropTypes.func.isRequired,
  onToggleShapefileUploadModal: PropTypes.func.isRequired
}

export default SpatialSelectionDropdown
