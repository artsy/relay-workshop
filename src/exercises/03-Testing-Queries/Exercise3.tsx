import React from "react"
import { Link, Route, Switch } from "react-router-dom"
import { NavList, NavListItem } from "../../shared/NavList"
import { Exercise } from "../Exercise"
import { Artist3QueryRenderer } from "./Artist3QueryRenderer"
export const Exercise3 = () => {
  return (
    <Exercise number={3} name="FragmentContainer">
      <Switch>
        <Route path="/exercise-3/artist/:artistID">
          <>
            <Link to="/exercise-3">&lt; Back</Link>
            <Artist3QueryRenderer />
          </>
        </Route>
        <Route path="/exercise-3/" exact>
          <ArtistList />
        </Route>
      </Switch>
    </Exercise>
  )
}

const ArtistList = () => {
  return (
    <NavList>
      <NavListItem>
        <Link to="/exercise-3/artist/1">Andy Warhol</Link>
      </NavListItem>
      <NavListItem>
        <Link to="/exercise-3/artist/2">Nicolas Party</Link>
      </NavListItem>
      <NavListItem>
        <Link to="/exercise-3/artist/3">Kehinde Wiley</Link>
      </NavListItem>
    </NavList>
  )
}
