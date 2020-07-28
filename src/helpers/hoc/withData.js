import React, {Component} from 'react';
import Spinner from '../../components/Spinner';

const withData = (View, getData) => {
  return class extends Component {
    state = {
      data: null,
    };

    componentDidMount() {
      getData()
        .then((data) => {
          this.setState({
            data,
          }) // TODO add catch()
        });
    }

    render() {
      const {data} = this.state;

      if (!data) {
        return <Spinner/>
      }

      return <View {...this.props} data={data} />;
    }
  }
}

export default withData;