import React from "react"
import { Link, Route, Switch } from "react-router-dom"
import { NavList, NavListItem } from "../../shared/NavList"
import { Exercise } from "../Exercise"
import { Artist2QueryRenderer } from "./Artist2QueryRenderer"
export const Exercise2 = () => {
  return (
    <Exercise number={2} name="FragmentContainer">
      <Switch>
        <Route path="/exercise-2/artist/:artistID">
          <>
            <Link to="/exercise-2">&lt; Back</Link>
            <Artist2QueryRenderer />
          </>
        </Route>
        <Route path="/exercise-2/" exact>
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
        <Link to="/exercise-2/artist/1">Andy Warhol</Link>
      </NavListItem>
      <NavListItem>
        <Link to="/exercise-2/artist/2">Nicolas Party</Link>
      </NavListItem>
      <NavListItem>
        <Link to="/exercise-2/artist/3">Kehinde Wiley</Link>
      </NavListItem>
    </NavList>
  )
}
