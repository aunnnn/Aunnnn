export default () => (
  <div>
    <h2>A Corner-based Saliency Model</h2>

    <p>A bottom-up computational visual attention model with this simple hypothesis: “If our eye movements usually rest on the corners, the transition in colors, why not regard them as areas with higher visual saliency.”</p>

    <p><a href="https://github.com/aunnnn/CORSaliency">Github repo (Paper included)</a></p>

    <h3>Problem</h3>

    <p>The field of computational visual attention tries to find algorithms that predict where we look. The general model takes an image as input and returns a grayscale map that indicates how much each pixel will be paid attention to.</p>

    <h3>Overview</h3>

    <p>There are two types of visual attention model: bottom-up and top-down.</p>

    <p><strong>Bottom-up</strong> models deal with low-level features such as luminosity, colors and orientations. Just imagine a single red dot on a white paper. Your eyes are attracted to that area immediately. The dot “pops-out”. You can’t help but look at it. It seems like our eyes and brains are wired this way. Another example is a paper filled with vertical bars pattern, but one of the bars is horizontal. Your eyes are attracted to the horizontal one.</p>

    <p><strong>Top-down</strong> models deal with high-level features, those that comes from individuals and different from person to person, like internal goals. They are much more complex than the bottom-up models. The example is when a paper is filled with dots of various colors, but you are told to count the blue ones. In this case, your brain is “primed” to be ready to detect a single color, which is blue.</p>

    <p>The unified model would be able to address both low-level and high-level features. However, it is still too hard to find such algorithm today. There are too little foundation on this topic (psychology, biology, etc.) that we can base the model on. Most papers will come up with various experiments hoping to crack the secret sauce behind the mechanism. </p>

    <h3>My contribution</h3>

    <p>I propose a bottom-up model called corner-based saliency model, or CORS. It bases on the fact that corner information often attracts our eyes. </p>

    <p>Try looking at a line. Did you spend the same amount of time along each segment of the line? Of course not. You would quickly look at the starting and ending points of a line. The intermediate section is not that important to you. I called these areas corners. In case of a rectangle, they are its four corners. Or, you can try looking around where you are right now, you would notice that your eyes usually rest on the area with abrupt change in colors or intensity.</p>

    <p>So, CORS detects corners in an image and simply considers them as the area with higher amount of visual attention. <a href="http://saliency.mit.edu/results_mit300.html">It turned out to be competitive with other models.</a></p>

    <h3>Lessons</h3>

    <ul>
      <li>Unlike software engineering that we can estimate the progress as we work on the software, research is unpredictable, especially if the purpose is to find something new.</li>
      <li>It is easy to deceive our own progress by reviewing more and more past works. In my case, I spent more than <strong>90 percent</strong> of the time reading others’ works, and was intending to continue, until I realized the deadline was a couple of weeks away. I realized I need to stop and think about my own model.</li>
      <li>Most of the time, when you think of a great idea, you will quickly find that it doesn’t work in such and such case. However, there are endless cases to cover in this field as our brain is super complex.</li>
      <li>Sometimes, you don’t know whether it means such idea is wrong, or it just needs some more processing.</li>
      <li>The established evaluation metrics used in the field might be flawed. We need to learn how they work first. In this field, there are various tricks to optimize the performance of a visual attention model. For example, a saliency map with a big white blob at the center usually gives high score in most stimuli.</li>
    </ul>

    <h3>Technical details</h3>

    <ul>
      <li>Early experiments are done in MATLAB.</li>
      <li>Late experiments and the final model is implemented in Python.</li>
    </ul>
  </div>
);
