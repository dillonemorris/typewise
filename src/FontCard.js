import React from "react";

const FontCard = ({ font }) => {
  const { title, sample, siteLink, downloadLink } = font;

  return (
    <React.Fragment>
      <div className="card">
        <p className="card-title">{title}</p>
        <div className="card-text-container">
          <p
            className="card-text"
            style={{
              fontFamily: title,
            }}
          >
            {sample}
          </p>
        </div>
        <div className="card-footer">
          <button className="card-btn">
            <a href={siteLink}>Google Fonts</a>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              style={{ width: 16, height: 16 }}
            >
              <path
                fill-rule="evenodd"
                d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                clip-rule="evenodd"
              />
              <path
                fill-rule="evenodd"
                d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <button className="card-btn card-btn-right">
            <a href={downloadLink}>Download</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              style={{ width: 16, height: 16 }}
            >
              <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
              <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
            </svg>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FontCard;
