import React from 'react';
import { Container } from 'reactstrap';

const Information = () => (
  <Container className="mt-3 mb-5">
    <h1>Code Test Information</h1>
    <h3>Frontend Software Engineer Challenge</h3>
    <h5>
      The Challenge
    </h5>
    <div>
      <p>Given a JSON file of pull requests comments in a fake GitHub repository, generate a visualization that provides valuable insight about the team and its developers. The purpose of the challenge is demonstrate your coding ability and gain an understanding of your design and problem solving skills. Feel free to take as little or as much time as you need for this challenge, we are looking to understand how you design and code with React.</p>
      <p>The fake data to visualize is stored in `prComments.json`. Each pull request comment includes when it was written, who it was written by and on which pull request. `commentTopic` is the overall theme of the comment content, while `commentType` is the intention of the comment.</p>
      <p>**If you have an existing React project that shows off your skills, you are more than welcome to share this with us and instead focus on designing and descibing how you would implement this challenge (no need to code it!)**</p>
    </div>
    <h5>
      Requirements
    </h5>
    <p>Please include all of the following when building your app.</p>
    <div>
      <p>-   Use React to build client app</p>
      <p>-   Answer questions below</p>
    </div>
    <h5>
      Bonus (if you want to flex / have some extra fun!)
    </h5>
    <div>
      <p>-   Create wireframes of your visualization (i.e. using figma)</p>
      <p>-   Add filters to your visualization</p>
      <p>-   Make the web app responsive</p>
      <p>-   Make the web app hosted and publically accessible</p>
      <p>-   Use Redux for state management</p>
    </div>
    <h5>
      Questions
    </h5>
    <p>
      Please answer the following questions (no need to write an essay!
    </p>
    <div>
      <p>-   What were some of the challenges you faced while completing this challenge? What did you learn?</p>
      <p><b>There were not many challenges to this coding test. It would help to learn what information is most important for the end user. I learned that this application can potentially be used to tie a variety of tools together.</b></p>
      <p>-   What other visualization/insight would you like to provide given all of the data available on GitHub/Slack/Jira?</p>
      <p><b>Pulling the comments data directly from the GitHub API. JIRA tickets can also be tied to track GitHub commits and merges.</b></p>
      <p>-   How long did it take you to complete this challenge?</p>
      <p><b>Approximately a day.</b></p>
      <p>-   If you had more time, what would you like to add?</p>
      <p><b>Pagination for the comments list and additional sorting/filtering for colummns.</b></p>
    </div>
  </Container>
);

export default Information;
