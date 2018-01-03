export default () => (
  <div>
    <h2>Hover Explorer</h2>

    <p>Browse a file tree through hovering:</p>

    <figure><img src="https://68.media.tumblr.com/2347fa7005dbe64d0b463745039b355e/tumblr_oi1bqmjqMo1vl9qmgo1_r2_1280.gif" title="Hover!"/></figure>

    <h3>Problem</h3>

    <p>“What if we could browse all files and folders without a click?”</p>

    <p>Built-in file explorers, like Finder on Mac, require us to click or tap a key to browse files and folders. Hover Explorer aims to replace clicks and taps with hovering. So, users can move his mouse through nodes of files and folders, and they will expand until you reach the target file and click it to open. A single click is needed.</p>

    <h3>Lessons</h3>

    <ul>
      <li>I discontinued this project because Mac has Spotlight, the feature that let you search anything using natural language. I believe this is the best way to do file search so far on a laptop. You type a part of the file or folder directly from your memory and the system handles the rest.</li>
      <li>Switching between keyboard and mouse is too slow.</li>
    </ul>

    <h3>Future</h3>

    <p>It is fun to question those that are included by default in the laptop we use everyday, like a file explorer. However, the future of file search and other desktop controls will be geared toward natural language processing with texts or speech.</p>

    <h3>Technical details</h3>

    <ul>
      <li>Implemented in Java</li>
      <li>A node expands when the cursor is hovering on the node, and collapse when the cursor is outside:</li>
    </ul>

    <figure><img src="https://s3-ap-southeast-1.amazonaws.com/aunnnn.com/work/assets/hover_area.png"/></figure>
  </div>
);
