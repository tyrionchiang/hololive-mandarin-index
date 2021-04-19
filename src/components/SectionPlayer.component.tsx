import React from 'react';

type Props = {
  ID: string
}
interface State {

}

const scrollTop = () => {
  window.scroll(0,0)
}

class SectionPlayer extends React.Component < Props, State > {
  componentDidUpdate() {
    scrollTop()
  }
  componentDidMount() {
    scrollTop()
  }
  render() {
    const { ID } = this.props
    return (
      <div>
        <iframe title={ID} width="560" height="315"
          src={"https://www.youtube.com/embed/" + ID} allow="autoplay; encrypted-media" ></iframe>
      </div>
    );
  }
}

export default SectionPlayer;
