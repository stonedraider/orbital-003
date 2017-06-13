import React, { Component } from 'react';

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
        <SliderItemInfo
          url={url}
          date={date}
          title={title}
          explanation={explanation}
        >
        </SliderItemInfo>
        {media_type === "video"
          ?
          <iframe width="800" height="600" src={url} frameBorder="0"></iframe>
          :
          <div>
            <div className="divSliderImage">
              <img src={url}></img>
            </div>
          </div>
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