export default () => (
  <div>
    <h2>A Corner-based Saliency Model</h2>

    <p>A bottom-up computational visual attention model with this simple hypothesis: “If our eye movements usually rest on the corners, the transition in colors, why not regard them as areas with higher visual saliency.”</p>

    <p>This is the sample result:</p>

    <figure><img src="https://s3-ap-southeast-1.amazonaws.com/aunnnn.com/work/assets/cors-sample-result.png"/></figure>

    <p><a href="https://github.com/aunnnn/CORSaliency">Github repo</a></p>

    <p><a href="https://github.com/aunnnn/CORSaliency/raw/master/07748907.pdf">Paper</a>, <a href="https://github.com/aunnnn/CORSaliency/raw/master/snr%20proj%20final%20report.pdf">Full thesis</a>, <a href="https://www.youtube.com/watch?v=MSMlsaBjJ5s">Presentation video</a>, <a href="">Slides</a></p>

    <h3>General Problem</h3>

    <p>The field of <strong>computational visual attention</strong> tries to find algorithms that predict where we look. The general model takes an image as input and returns a grayscale map that indicates how much people will pay attention to corresponding pixels. This field is very multidisciplinary, as there are many proposed approaches from various fields including information theory, general computer science, biology, psychology, and more.</p>

    <h3>Overview</h3>

    <p>There are two types of visual attention model: bottom-up and top-down.</p>

    <p><strong>Bottom-up</strong> models deal with low-level features such as luminosity, colors, and orientations. Just imagine a single red dot on a white paper. Your eyes are attracted to that area immediately. The dot “pops-out”. You can’t help but look at it. It seems like our eyes and brains are wired this way. Another example is a paper filled with vertical bars pattern, but one of the bars is horizontal. Your eyes are attracted to the horizontal one.</p>

    <p><strong>Top-down</strong> models deal with high-level features, those that come from individuals and different from person to person, like internal goals. They are much more complicated than the bottom-up models. The example is when a paper is filled with dots of various colors, but you are told to count the blue ones. In this case, your brain is “primed” to be ready to detect a single color, which is blue.</p>

    <p>The unified model would be able to address both low-level and high-level features. However, it is still too hard to find such algorithm today. There is a little foundation on this topic (psychology, biology, etc.) that we can base the model on. Most papers will come up with various experiments hoping to crack the secret sauce behind the mechanism. </p>

    <h3>My contribution</h3>

    <p>I propose a <em>bottom-up</em> model called corner-based saliency model, or CORS. It bases on the fact that corner information often attracts our eyes. </p>

    <p>Try looking at a line. Did you spend the same amount of time along each segment of the line? No. You would quickly look at the starting and ending points of a line. The intermediate section is not that important to you. I called these areas corners. In case of a rectangle, they are its four corners. Or, you can try looking around where you are right now, you would notice that your eyes usually rest on the area with the abrupt change in colors or intensity.</p>

    <p>So, CORS detects corners in an image and simply regards them as the area with the higher amount of visual attention. According to MIT Saliency Benchmark, this simple idea turned out to be <a href="">competitive</a>.</p>

    <h3>What I learned</h3>

    <ul>
      <li>Unlike software engineering that we can estimate the progress as we work on the software, research is unpredictable, especially if the purpose is to find something new.</li>
      <li>It is easy to deceive my progress by reviewing more and more past works. I spent more than <strong>90 percent</strong> of the time reading others’ works, and was intending to continue until the deadline was a couple of weeks away! It was then that I realized I need to stop and think about my own model.</li>
      <li>Most of the time, when you think of a great idea, you will quickly find that it doesn’t work in the such and such case. There are endless cases to cover in this field as our brain is super complex. </li>
      <li>However, a number of approaches nowadays uses deep learning, as this will let us focus on higher-level problems, instead of fine-tuning all the details.</li>
      <li>Sometimes, you don’t know whether an idea is wrong, or it just needs some more polishing.</li>
      <li>The evaluation metrics used in the field might be flawed. We need to learn how they work first. In this area, there are various tricks to optimize the performance of a visual attention model. For example, a saliency map with a big white blob at the center usually gives a high score in most stimuli.</li>
      <li>This project took me a full year, so this is easily my proudest achievement so far!</li>
    </ul>
  </div>
);
