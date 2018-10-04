export default () => (
  <div>
    <h2>Hover Explorer</h2>

    <p>Browse a file tree through hovering:</p>

    <figure><img src="https://68.media.tumblr.com/2347fa7005dbe64d0b463745039b355e/tumblr_oi1bqmjqMo1vl9qmgo1_r2_1280.gif" title="Hover!"/></figure>

    <h3>Problem</h3>

    <p>“What if we could browse all files and folders without a click?”</p>

    <p>A typical file explorer GUI, like Finder on Mac, requires us to click or tap to browse files and folders. Hover Explorer replace them with hovering. This way, users can move the mouse through icons of files and folders, and proceed until they reach the destination file/folder and click it to open. The final, single click is needed.</p>

    <h3>Lessons</h3>

    <ul>
      <li>I discontinued this project because Mac has Spotlight, which let you search anything using natural language. I believe this is the most efficient way to do search files on a laptop, as far as I know. You just type a part of the file directly and the system handles the rest.</li>
      <li>Switching between keyboard and mouse is too slow.</li>
    </ul>

    <h3>Future</h3>

    <p>It's interesting to question things that are included by default, things we use every day like a file explorer. However, the future of search and other desktop controls will certainly gear towards natural language, either with texts or speech.</p>

    <h3>Technical details</h3>

    <ul>
      <li>Implemented in Java</li>
      <li>A node expands when the cursor is hovering on the node, and collapse when the cursor is outside:</li>
    </ul>

    <figure><img src="https://s3-ap-southeast-1.amazonaws.com/aunnnn.com/work/assets/hover_area.png"/></figure>
  </div>
);
