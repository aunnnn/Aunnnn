export default () => (
  <div>
    <h2>Swifty Localization</h2>

    <p><a href="https://github.com/aunnnn/SwiftyLocalization">Github</a></p>

    <p>Automate iOS localization starting from Google sheets, export them into CSV files, and generate Localizable.strings and Swift structs.</p>

    <p>It is tedious to do localization on iOS. You have to add keys to the localization file, and update them manually after a while. Then to use them you need to hard code the correct keys into the <code>NSLocalizedString</code>.</p>

    <p>Another problem is that you need to sync the localization file with your Android team. Imagine adding a new screen in an existing app. Mobile engineers then also receive a set of new texts in different languages for that screen, supposedly in some pdf, Excel, etc. files. Now each developer have to convert them into format for one’s own mobile platform, iOS or Android, copy and paste texts manually, come up with their own localization keys. It’s unsurprising if anything will go wrong in this process.</p>

    <p>We propose an automated process that makes lives easier. Just use Google sheets as a single source of truth for localization, including the keys, and export them to CSV files using Google Script. You can comment, highlight the text, leave some untranslated cells blank.</p>

    <figure><img src="https://raw.githubusercontent.com/aunnnn/SwiftyLocalization/master/Screen%20Shot%202559-10-13%20at%201.56.55%20AM.png"/></figure>

    <p>Then from those CSVs, a Python script on your local laptop will convert them to <code>Localizable.strings</code>, and then into Swift structs (<a href="https://github.com/aunnnn/SwiftyLocalization/blob/master/SampleOutput/struct/Localizables.swift">example</a>) respectively, ready for use! The script can be easily modified for Android (XML).</p>

    <p>Now you can’t go wrong with localization keys anymore, and, you got autocompletion!</p>

    <p>Note that you can also use R.swift to generate structs.</p>
  </div> 
);
