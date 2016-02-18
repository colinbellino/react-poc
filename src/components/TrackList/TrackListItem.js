import React, { Component, PropTypes } from 'react'
import { List } from 'immutable'
import ImmutablePropTypes from 'react-immutable-proptypes'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import Card from 'material-ui/lib/card/card'
import CardHeader from 'material-ui/lib/card/card-header'
import CardText from 'material-ui/lib/card/card-text'

import s from './TrackListItem.scss'

const TrackListItem = ({ track, creatives }) => {

  const creativeNodes = creatives.map(creative =>
    <div key={creative.get('id')} creative={creative}>{creative.get('name')}</div>
  )
  const hasCreatives = creatives.count() > 0
  const subtitle = `${creatives.count()} creatives`

  return (
    <Card>
      <CardHeader
        title={track.get('name')}
        subtitle={subtitle}
        actAsExpander={hasCreatives}
        showExpandableButton={hasCreatives}
      />
      <CardText expandable={true}>
        {creativeNodes}
      </CardText>
    </Card>
  )
}

TrackListItem.propTypes = {
  track: ImmutablePropTypes.map.isRequired,
  creatives: ImmutablePropTypes.list.isRequired
}

export default withStyles(TrackListItem, s)
