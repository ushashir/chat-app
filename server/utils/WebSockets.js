class WebSockets {
  // users array
  users = [];

  // connection method
  connection(client) {
    client.on("disconnect", () => {
      this.users = this.users.filter((user) => user.socketId !== client.id);
    });                   // event fired when the chat room is disconnected
    client.on("identity", (userId) => {
      this.users.push({
        socketId: client.id,
        userId: userId,
      });                  // add identity of user mapped to the socket id
    });
    client.on("subscribe", (room, otherUserId = "") => {
      this.subscribeOtherUser(room, otherUserId);
      client.join(room);
    });                    // subscribe person to chat & other user as well
    client.on("unsubscribe", (room) => {
      client.leave(room);
    });
  }                        // mute a chat room

  // subscribing members to chat
  subscribeOtherUser(room, otherUserId) {
    const userSockets = this.users.filter(
      (user) => user.userId === otherUserId
    );
    userSockets.map((userInfo) => {
      const socketConn = global.io.sockets.connected(userInfo.socketId);
      if (socketConn) {
        socketConn.join(room);
      }
    });
  }
}

export default new WebSockets();
