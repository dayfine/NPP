import React from 'react'
import { Route, Switch } from 'react-router-dom'

import MainWrapper from './common/MainWrapper'
import Main from './Main'
import MarkDownEditor from './Current/MarkDownEditor'

export default (props) => {
  return (
    <MainWrapper>
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/markdown' component={MarkDownEditor} />
      </Switch>
    </MainWrapper>
  )
}
