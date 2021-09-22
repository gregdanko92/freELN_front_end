import React from 'react'
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProgramIndex from '../pages/ProgramIndex';
import Program from '../pages/Program'
import Team from '../pages/Team'
import ExDir from '../pages/ExDir'
import Experiment from '../pages/Experiment'

function Routes(){
  
    return(
        <Switch>
          <Route path='/programs/:programId/:teamId/:exDir/:experimentId' component={Experiment}/>
          <Route path='/programs/:programId/:teamId/:exDir' render={(props)=><ExDir {...props} />} component={ExDir}/>
          <Route path='/programs/:programId/:teamId' render={(props)=><Team {...props} />} component={Team}/>
          <Route path='/programs/:programId'render={(props)=><Program {...props}/>} component={Program}/>
          <Route path='/programs' component={ProgramIndex}/>
          <Route path='/' exact component={HomePage}/>
      </Switch>
        
    )
}

export default Routes;