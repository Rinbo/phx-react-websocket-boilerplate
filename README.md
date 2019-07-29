# Phoenix-React Websocket Boilerplate

Boilerplate code for connecting to a Phoenix backend using websockets, using a custom hook for joining channels and making it available anywhere with React Context. It assumes that you have a channel running on the server called `game:*`, and a `handle_in` function that triggers on the event `message` and broadcasts back with the event `broadcast` (customize in the reducer of this code). 

## Give it a spin

1. Start the Phoenix Server (by defalut the react app assumes it running on `localhost:4000`)
2. Start the react app `npm start`
3. Open up two browser windows and navigate to `localhost:3000`
4. Enter the same channel name in both windows and different player names
5. Broadcast a message from one players window and see it update instantly in the other and vice vesa.


