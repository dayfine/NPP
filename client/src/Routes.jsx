import React from 'react'
import { Route, Switch } from 'react-router-dom'

import MainWrapper from './common/MainWrapper'
import Main from './Main'
import CurrentList from './Current'

export default (props) => {
  return (
    <MainWrapper>
      <Switch>
        <Route path='/' exact component={Main} />
        {CurrentList.map(_ => (
          <Route key={_.name} path={`/${_.path}`} component={_.component} />
        ))}
      </Switch>
    </MainWrapper>
  )
}
