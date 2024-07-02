## ScriptBox - A web based IDE to create and run react.js, next.js and node.js projects

In this, terminal , code editor and a file editor is integrated in the playground which gets bridged to a docker container that spins up whenever a user gets connected all the code or commands that user types gets synced and executed on that Docker container and returns the output back to the ScriptBox,
websockets are used for bridging. fs-module is used for reading and writing the code to the files from scriptbox code editor to the docker container.

An example is provided in the vedio below, how I am running and editing a react project on ScriptBox.

[Screencast from 2024-07-02 16-38-07.webm](https://github.com/Vidittamrakar21/scriptbox_dockerimg/assets/114985411/437d67bc-f0cc-4b9e-a323-78d5eae9c4ea)

 I implemented a real time collaboration feature on the IDE in which , two users can code effectively in real time on the same code base. There is also a split screen feature in ScriptBox, where users can work on different files in real time collaboration and each can see one another's code on which they are working on.
 
[Screencast from 2024-07-01 15-28-32.webm](https://github.com/Vidittamrakar21/scriptbox_dockerimg/assets/114985411/7e0e6160-e497-472d-ba42-ce37cae0c4c4)

A chat system is integrated in the code editor so that users can chat and discuss during real-time collaboration

#### Made with ❤️ by <a href="https://www.linkedin.com/in/vidit-tamrakar-877a58249/">Vidit Tamrakar</a>
