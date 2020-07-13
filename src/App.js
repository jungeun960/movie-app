import React from 'react';

class App extends React.Component{
  state ={
    isLoading : true
  };
  componentDidMount() { // 페이지 생성 시 가장 먼저 동작
    setTimeout(() => {
      this.setState({isLoading : false });
    }, 6000); // 6초뒤에 동작한다.
  }

  render() {
    const {isLoading} = this.state;
    return (
      <div>
        {isLoading ? "Loading" : "We are ready"}
        </div>
  )
  }
}

export default App;
