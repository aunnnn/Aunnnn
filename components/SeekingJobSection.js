import ReactGA from 'react-ga';

const sendOutboundEvent = (e) => {
  const link = e.target.href;
  ReactGA.outboundLink({
    label: 'Click on resume link'
  }, () => { console.log('working') });
};

export default ({resumeText}) => (
  <div className="intern-section">
    <p>
      {resumeText ? <em>{resumeText}</em> : null}
      <a 
        className="link-resume" 
        href="https://s3-ap-southeast-1.amazonaws.com/aunnnn.com/work/fulltime-sweng-resume.pdf"
        target="_blank"
        onClick={sendOutboundEvent}
        >
        resume
      </a>
    </p>
    <style jsx>{`
      .intern-section {
        padding: 0;
        margin: 0;
        font-size: 0.8em;
        color: gray;
      }
      .link-resume {
        padding-left: 8px;
      }
      p {
        margin: 0;
      }
    `}
    </style>
  </div>
)