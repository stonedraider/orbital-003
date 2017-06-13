import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';

import './SliderItem.css';

export default class SliderItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      media_type: null,
      url: "",
      date: null,
      title: "",
      explanation: ""
    }

    this.onMouseOver = this.onMouseOver.bind(this);
  }

  onMouseOver() {
    console.dir(this);
    // debugger;
  }

  onClick() {
    // debugger;
  }

  getTooltipContent() {
    return "Hi";
  }

  render() {
    const {
      media_type,
      url,
      date,
      title,
      explanation
    } = this.props;

    return (
      <div>
        <ReactTooltip html place="bottom" />
        {/*<SliderItemInfo
          url={url}
          date={date}
          title={title}
          explanation={explanation}
        >
        </SliderItemInfo>*/}
        {media_type === "video"
          ?
          <iframe className="apodItem" width="800" height="600" src={url} frameBorder="0"></iframe>
          :
          <img
            className="apodItem"
            src={url}
            data-tip={this.props.date + "</br>" + this.props.title + "</br>" + this.props.explanation}
            onMouseOver={this.onMouseOver}
            onClick={this.onClick}
          >
          </img>
        }
      </div>
    )
  }
}

function SliderItemInfo({ url, date, title, explanation }) {
  const explanationMin = explanation;
  return (
    <div className="divSliderItemInfo">
      <br></br>
      <h4>Date</h4>
      {date}
      <h4>Title</h4>
      {title}
      <div className="divDownloadButton">
        <a
          className="btn btn-default active" role="button"
          download=""
          href={url}
          title="Download">
          Download
            </a>
      </div>
    </div>
  );
}