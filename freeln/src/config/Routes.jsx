import React from 'react'
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProgramIndex from '../pages/ProgramIndex';
import Program from '../pages/Program'
import Team from '../pages/Team'
import CreateProgram from '../pages/CreateProgram'
import CreateTeam from '../pages/CreateTeam'
import EditTeam from '../pages/EditTeam'
// import CreateTeamFunc from '../pages/CreateTeamFunc'
import CreateExDir from '../pages/CreateExDir'

function Routes(){
  
    return(
      <Switch>
          <Route path='/programs/:programId/:teamId/edit' render={(props)=><EditTeam {...props} />} component={EditTeam}/>
          <Route path='/programs/:programId/create' exact component={CreateTeam}/>
          <Route path='/programs/create' exact component={CreateProgram}/>
          <Route path='/programs/:programId/:teamId' render={(props)=><Team {...props} />} component={Team}/>
          <Route path='/programs/:programId'render={(props)=><Program {...props}/>} component={Program}/>
          <Route path='/programs' component={ProgramIndex}/>
          <Route path='/' exact component={HomePage}/>
      </Switch>
        
    )
}

export default Routes;