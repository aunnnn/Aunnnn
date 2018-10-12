export default () => (
  <div>
    <h2>Diamond Dash Bot</h2>

    <p>A bot that plays the Diamond Dash game. The rule is to click on areas with three or more adjacent blocks as much as possible:</p>

    <figure><img src="https://78.media.tumblr.com/0ca0d621eec65fc00760f0216688d41d/tumblr_oi5wwrCJxz1vl9qmgo1_r2_400.gif"/></figure>

    <p>This is my earliest (also proudest!) side project. I was hooked how we can build something that performs things at level we can’t ever reach.</p>

    <h3>Technical details</h3>

    <ul>
      <li>Implemented in Java.</li>
      <li>On start, a user moves a fixed size window to match the game screen on the web. Then the program takes control of the mouse (moving and clicking) for 1 minute after starting the game. It reads all pixels in the window and makes a data structure to reflect the board at each moment.</li>
      <li>It scans the top left block, and zigzagging down to the last block.</li>
      <li>For each block, it checks its 4 neighbors (top, down, left, right) whether any of it has the same color. If yes, mark the starting block as ‘checked’ and repeat the process with that next block. When this reach the end, it returns and accumulates values of all neighbors, recursively, back to the origin block. If the last value, which is the total count of adjacent blocks, is three or more, it will be clicked.</li>
    </ul>
  </div>
)