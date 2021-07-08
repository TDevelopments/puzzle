import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from '../components/Navbar'
import HomePage from '../pages/HomePage'
import IntroductionPage from '../pages/IntroductionPage'
import LevelPage from '../pages/LevelPage'
import ObjectivePage from '../pages/ObjectivePage'
import LoadingPage from '../pages/LoadingPage'
import RankingPage from '../pages/RankingPage'
import AboutUsPage from '../pages/AboutUsPage'

export default function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/introduction">
          <IntroductionPage />
        </Route>
        <Route exact path="/objetive">
          <ObjectivePage />
        </Route>
        <Route exact path="/level">
          <LevelPage />
        </Route>
        <Route exact path="/loading">
          <LoadingPage />
        </Route>
        <Route exact path="/ranking">
          <RankingPage />
        </Route>
        <Route exact path="/about-us">
          <AboutUsPage />
        </Route>
        <Route path="*">
          <h1>404 Not found</h1>
        </Route>
      </Switch>
    </Router>
  )
}
