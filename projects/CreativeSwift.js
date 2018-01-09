export default () => (
  <div>
    <h2>CreativeSwift</h2>

    <p>Creative Coding in Swift.</p>
    
    <p>Preview:</p>
    
    <figure><img src="https://s3-ap-southeast-1.amazonaws.com/aunnnn.com/work/assets/creativeswift-demo.gif"/></figure>
    
    <p>UIKit is supported:</p>
    
    <figure><img src="https://s3-ap-southeast-1.amazonaws.com/aunnnn.com/work/assets/creativeswift-demouikit.gif"/></figure>
    
    <p><a href="https://github.com/aunnnn/CreativeSwift">Github repo</a></p>
    
    <h3>Problem</h3>
    
    <p>I love Swift, but there are too few creative coding libraries in this ecosystem. So, I made this.</p>
    
    <h3>Technical Details</h3>
    
    <ul>
      <li>Of course, implemented in Swift.</li>
      <li>Under the hood, the library simply uses CADisplayLink to call the draw function 60 fps (or anything else, you can set this value).</li>
      <li>Unlike other creative coding libraries, it provides concise API to construct UIKit elements such as buttons and labels.</li>
    </ul>    
  </div>
);
