export default () => (
  <div>
    <h2>ViewElements</h2>

    <p>ViewElements is a framework to build UITableView with ease.</p>

    <p><a href="https://github.com/aunnnn/ViewElements">Github repo</a></p>

    <div>
      
    </div>
    <h3>Why?</h3>

    <p>All iOS apps have at least one UITableView. It displays a list of elements (called UITableViewCell) that users can scroll vertically. These cells are reused automatically as they go in and out of screen. So, displaying a thousand of items is not a problem. </p>

    <p>You can see this in most builtin apps from Apple, like Settings.</p>

    <div className="mobile-img">
      <img src="https://s3-ap-southeast-1.amazonaws.com/aunnnn.com/work/assets/ve_settings.jpeg" />
    </div>
    <div className="center-caption">
      <em>
        Most common (and default) appearance of UITableView
      </em>
    </div>
    <p>However we shouldn’t stop here. See these pages:</p>

    <div className="custom-container">
      <div className="images-column" >
        <div><img src="https://s3-ap-southeast-1.amazonaws.com/aunnnn.com/work/assets/ve-center.png" /></div>
        <div><img src="https://s3-ap-southeast-1.amazonaws.com/aunnnn.com/work/assets/ve-medium-feed.png" /></div>
        <div><img src="https://s3-ap-southeast-1.amazonaws.com/aunnnn.com/work/assets/ve-medium-post.png" /></div>
      </div>
    </div>
    <div className="center-caption" />
    <p>They are just rows of elements stacking together:</p>

    <div className="custom-container">
      <div className="images-column" >
        <div><img src="https://s3-ap-southeast-1.amazonaws.com/aunnnn.com/work/assets/ve-center-debug.png" /></div>
        <div><img src="https://s3-ap-southeast-1.amazonaws.com/aunnnn.com/work/assets/ve-medium-feed-debug.png" /></div>
        <div><img src="https://s3-ap-southeast-1.amazonaws.com/aunnnn.com/work/assets/ve-medium-post-debug.png" /></div>
      </div>
    </div>
    <div className="center-caption">
      <em>
        Debug mode
      </em>
    </div>
    <p>It is clear now that UITableView can be used to build any kinds of page in the app, not only table views. Another huge advantage of this is that the cells are reused automatically.</p>

    <p>However, creating a table view is a repetitive and tiresome task. It uses the concept of data source, and thus the code for the presentational layer is separated into multiple functions (e.g., cellForRowAtIndexPath, heightForRowAtIndexPath, estimatedHeightForRowAtIndexPath). This makes the code hard to work with as it grows.</p>

    <h3>Solution</h3>

    <p>ViewElements simplifies the process of building UITableView and reusing UITableViewCell. It allows developers to declare arrays of rows such that the final appearance and the order of the rows, will directly mirror the code. Thus, all parts of the code for each row are close together, make it easier to work with.</p>

    <figure><img src="https://s3-ap-southeast-1.amazonaws.com/aunnnn.com/work/assets/ve_concept.png"/></figure>

    <p>It also provides API, called Component, to build a view by nesting UIStackView together. With a combination of UITableView and UIStackView. While table view deals with displaying and reusing cells in the vertical direction, stack view deals with UI creation in each cell.</p>

    <p>ViewElements has data structures that wrap those complexities and provide APIs to construct a complete view. Once a view is setup, it can be reused anywhere, under the provided API. But the built-in elements provided can already do a lot!</p>

    <p>Check this quick demo:</p>

    <figure><img src="https://s3-ap-southeast-1.amazonaws.com/aunnnn.com/work/assets/ve-demo.gif"/></figure>

    <div className="center-caption">
      <em>
        A demo using built-in label elements. These are the only code to build what you see.
      </em>
    </div>
    <h3>What’s Next</h3>

    <p>This proves to be great solution for static pages in the app. However, for a dynamic page, and those that interact with data such as form inputs, we need more. </p>

    <p>Currently, I’m combining a reactive programming library called RxSwift with ViewElements, in order to enable data-driven UI.</p>

    <p><a href="https://github.com/aunnnn/RxViewElementsExperiment">Check out the experimental repo here.</a></p>

    <h3>Lessons</h3>

    <ul>
      <li>The API designer has the power to guide developers in either right or wrong directions.</li>
      <li>When it goes right, developers will feel that a framework is intuitive. They can guess how it works, what they should do, or not do, on their own without consulting a documentation.</li>
      <li>Usually such framework is designed in a way that mirrors the real-world objects.</li>
      <li>Throwing fatal error is good when developers are building their apps with a framework. But utilizing syntax, static types, or complier of a programming language to restrict developers from writing invalid code is much more elegant.</li>
    </ul>

    <h3>Future</h3>

    <ul>
      <li>Currently, many parts of the iOS development are still imperative. We have to do a lot of things manually like structuring views in the app, handling events and UI updates, managing the lifecycle, etc.</li>
      <li>Thus, believe that there will be more native frameworks and libraries that provide markup language (e.g., HTML) to construct native views. </li>
      <li>While React Native is really great at creating views and apps with Javascript, it won’t be reliable enough to be able to build high quality mobile applications.</li>
      <li>Those tools will soon expand to facilitate other aspects in the app creation. This includes networking, navigation, and user interactions.</li>
      <li>As a result, there will be a platform that allows anyone without technical knowledge to create native apps.</li>
      <li>I am sure Apple must have some kind of internal markup system that can make creating apps a breeze. Such system would also allow the UI — or the whole app — to change dynamically over the internet.</li>
    </ul>

    <h3>Technical details</h3>

    <ul>
      <li>Implemented in Swift.</li>
    </ul>
  </div>
);
