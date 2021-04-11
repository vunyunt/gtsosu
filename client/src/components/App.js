import React, { Component } from "react";
import { navigate, Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Home from "./pages/Home.js";
import Staff from "./pages/Staff.js";
import TourneyHome from "./pages/TourneyHome";
import TourneyStaff from "./pages/TourneyStaff";
import Rules from "./pages/Rules";
import Mappools from "./pages/Mappools";
import Players from "./pages/Players";
import Schedule from "./pages/Schedule";
import Navbar from "./modules/Navbar";
import { get } from "../utilities";

import "../utilities.css";
import YearConfig from "../content/year-config";

import { Layout } from "antd";
import "antd/dist/antd.css";
const { Footer } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {}, loginAttention: false };
  }

  componentDidMount() {
    get("/api/whoami").then((res) => {
      this.setState({ user: res });
    });
  }

  updateUser = (user) => {
    this.setState({ user });
  };

  setLoginAttention = (value) => {
    this.setState({ loginAttention: value });
  };

  render() {
    /*
      Each route for a tourney can optionally specify a year
      if a year is not specified, it will default to the most recent iteration
      of the tourney.

      TourneyRouteWrapper transforms the 'tourney' prop to include the year of the tourney
      e.g. /2019/igts -> props.tourney === "igts_2019"
    */
    return (
      <>
        <Layout>
          <Navbar
            attention={this.state.loginAttention}
            user={this.state.user}
            updateUser={this.updateUser}
          />
          <Router primary={false}>
            <Home path="/" />
            <Staff path="/staff" />

            <TourneyRouteWrapper
              setLoginAttention={this.setLoginAttention}
              user={this.state.user}
              path="/:tourney/home"
              updateUser={this.updateUser}
              PageComponent={TourneyHome}
            />
            <TourneyRouteWrapper
              setLoginAttention={this.setLoginAttention}
              user={this.state.user}
              path="/:year/:tourney/home"
              updateUser={this.updateUser}
              PageComponent={TourneyHome}
            />

            <TourneyRouteWrapper
              user={this.state.user}
              path="/:tourney/staff"
              PageComponent={TourneyStaff}
            />
            <TourneyRouteWrapper
              user={this.state.user}
              path="/:year/:tourney/staff"
              PageComponent={TourneyStaff}
            />

            <TourneyRouteWrapper path="/:tourney/rules" PageComponent={Rules} />
            <TourneyRouteWrapper path="/:year/:tourney/rules" PageComponent={Rules} />

            <TourneyRouteWrapper
              user={this.state.user}
              path="/:tourney/pools"
              PageComponent={Mappools}
            />
            <TourneyRouteWrapper
              user={this.state.user}
              path="/:year/:tourney/pools"
              PageComponent={Mappools}
            />

            <TourneyRouteWrapper
              user={this.state.user}
              path="/:tourney/players"
              PageComponent={Players}
            />
            <TourneyRouteWrapper
              user={this.state.user}
              path="/:year/:tourney/players"
              PageComponent={Players}
            />

            <TourneyRouteWrapper
              user={this.state.user}
              path="/:tourney/schedule"
              PageComponent={Schedule}
            />
            <TourneyRouteWrapper
              user={this.state.user}
              path="/:year/:tourney/schedule"
              PageComponent={Schedule}
            />

            <NotFound default />
          </Router>
          <Footer></Footer>
        </Layout>
      </>
    );
  }
}

function TourneyRouteWrapper(props) {
  const { PageComponent, year, tourney } = props;

  const _year = year ?? YearConfig[tourney];
  if (!_year) navigate("/404");

  return <PageComponent {...props} tourney={`${tourney}_${_year}`} />;
}

export default App;
