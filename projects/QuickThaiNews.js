export default () => (
  <div>
    <h2>Quick Thai News</h2>
      <p>A minimal news reader iOS app:</p>

      <div className="custom-container">
        <div className="images-column" >
          <div><img src="https://s3-ap-southeast-1.amazonaws.com/aunnnn.com/work/assets/qtn_home.jpg" /></div>
          <div><img src="https://s3-ap-southeast-1.amazonaws.com/aunnnn.com/work/assets/qtn_news_list.jpg" /></div>
          <div><img src="https://s3-ap-southeast-1.amazonaws.com/aunnnn.com/work/assets/qtn_news.jpg" /></div>
        </div>
      </div>
      <h3>Problem</h3>

      <p>Most news reader sites (and apps) are cluttered, and I wanted to make one as simple as possible. In the detail page, the app <strong>strips all the decorations and only shows news content</strong>. The url to original version is included. Also, users can easily increase font size.</p>

      <p>This app has only one (the first) version, as I don’t have sufficient permissions to use content from news agencies (and didn’t pass the Apple’s reviews.).</p>

      <p>However, it has attracted a lot of people since then!</p>

      <figure><img src="https://s3-ap-southeast-1.amazonaws.com/aunnnn.com/work/assets/quickthainews_analytic.png"/></figure>

      <p><em>*The recent increase in the number of crashes you saw was because I couldn’t publish any fixes. Moreover, the iOS SDK has also changed dramatically since then and resulting in many deprecated function calls.</em></p>

      <h3>Technical details</h3>

      <ul>
        <li>Implemented in Objective-C.</li>
        <li>News sources are pulled from RSS feeds.</li>
        <li>It loads an html page and strips other parts except the main content. I did this by manually finding patterns at each news site and figure out key html elements (e.g., div with id = “news_content”).</li>
      </ul>

  </div>
);
