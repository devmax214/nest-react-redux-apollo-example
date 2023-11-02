import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAppsIfNeeded } from '../redux/actions'

import Card from './card'

type Props = {
  isFetching: boolean,
  apps: any,
  dispatch: (args) => {},
};

class Home extends Component<Props> {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchAppsIfNeeded())
  }

  render() {
    const { isFetching, apps } = this.props
    const totalapps = apps?.length;

    return (
      <>
        { isFetching 
          ? totalapps === 0 && <h2>Loading...</h2>
          : !totalapps
            ? <h2>Empty.</h2>
            : <Card apps={apps} totalapps={totalapps} />
        }
      </>
    );
  }
}
 
function mapStateToProps({ isFetching, apps }) {
  return {
    isFetching,
    apps
  }
}
 
export default connect(mapStateToProps)(Home)
