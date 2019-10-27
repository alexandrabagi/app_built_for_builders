import React from 'react';

export const AboutScreen = () => (
  <div className="content-area">
    <p>
      This is a simple Instagram-style app where you browse and apply various filters to images. It serves as a demonstrator on how you can build a simple multi-page app in React, and how you can manage and maintain state across and within components. 
    </p>
    <p>
      A lot of online tutorials in React focus on building small, trivial proof-of-concepts that do a very good job of explaining the fundamentals of React. However, the question of "How can I prototype a basic mobile app, with state and navigation" often goes unanswered. In an attempt to answer the question of "How do I structure an app with multiple screens?" and "Where do I place my files?", I created this example as a tool for those wishing to learn React as a means of quickly implementing designs.  
    </p>
    <p>
      The app features a simple navigation that allows users to jump between its various screens. Among other things, this app showcases how you can use the React Router to implement tabbed navigation.
    </p>
    <p>
      This demonstrator app is designed for beginners wishing to learn React, or more specifically, how to create basic, interactive prototypes using the framework. It is a supplement to the materials taught in the course <em>Technical Interaction Design</em> at the IT University of Copenhagen.
    </p>
  </div>
);