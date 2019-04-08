export default () => (
  <div>
    <h2>Platonos</h2>

    <p>Real-time messaging platform where all chats are public. This is a work in progress.</p>

    <p><em>Home:</em></p>

    <figure><img src="https://s3-ap-southeast-1.amazonaws.com/aunnnn.com/work/assets/platonos-preview.png"/></figure>

    <p><em>Chat:</em></p>

    <figure><img src="https://s3-ap-southeast-1.amazonaws.com/aunnnn.com/work/assets/platonos-preview-2.png"/></figure>

    <p><a href="https://platonos.aunnnn.com">platonos.aunnnn.com</a></p>
    <p><em>Note: Too lazy to pay for the previous domain (platonos.com)</em></p>

    <h3>Why?</h3>

    <p>The motivation for this website is to encourage deep conversations between people on the internet.</p>

    <p>We do this by focusing on two aspects of the platform. First, all users are anonymous, as this will strip all social constraints that prevent them from sharing honest thoughts. Second, automatically randomizes another user and invite him/her to chat. This reduces the total number of steps to have a chat on the platform to one (creating a topic).</p>

    <p>Why do this? There is the term on the internet called <em>lurkers</em>, which are members of an online community who observes, but not participate. The ratio of lurkers seems to be <a href="https://en.wikipedia.org/wiki/1%25_rule_(Internet_culture)">huge</a>. There is nothing wrong with this. They may just want to consume information. Or, they might think that they have to learn about the community first, before being able to provide productive contributions. </p>

    <p>While these are all good reasons, I believe that most of the time, they are caused by fear. Fear comes from having options to do otherwise, <em>to escape</em>. The best way to resolve fear is to limit the number of options people can take. Let a system decides instead. Users don’t have to think much because it’s already in the process.</p>

    <h4>How it works</h4>

    <ol>
      <li>An author creates a topic.</li>
      <li>A random match is invited.</li>
      <li>The match either accepts or rejects the invitation. If accept, the talk starts immediately. If reject, another user is invited.</li>
      <li>Talk.</li>
      <li>The talk ends if any participant ends it.</li>
    </ol>

    <p>Read more at <a href="https://platonos.aunnnn.com/about">About page</a>.</p>

    <p>The fun bit is that any users can click on any chatroom to watch the talk in action since all are public. It’s like you can watch other persons’ real-time messaging!</p>

    <h3>Technical Details</h3>

    <ul>
      <li>Use <a href="https://github.com/zeit/next.js">Next.js</a> to build the frontend with React.</li>
      <li>Use <a href="https://github.com/apollographql/apollo-client">Apollo</a> as a GraphQL client.</li>
      <li>Use <a href="https://github.com/graphcool">Graphcool</a> for GraphQL-powered backend.</li>
      <li>The random algorithm is very simple at this stage. First It filters people who are not active last 3 days out. Then they are sorted by last invited date, and we pick who hasn’t been invited for the longest time.</li>
    </ul>
  </div>
);
