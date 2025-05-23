import express, { Application } from "express";
import cors from "cors";
import http from "http";
import { Server, Socket } from "socket.io";

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = http.createServer(app);

let chatMessages: Array<{ message: string }> = [];

interface BlackHoleFeed {
  title: string;
  content: string;
  imagePaths: string[];
  commentCount: number;
  likeCount: number;
  createdAt: string;
  authorName?: string;
  groupIdx: number;
  postIdx: number;
  authorIdx?: number;
}

let blackHoleFeeds: BlackHoleFeed[] = [];

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket: Socket) => {
  console.log("user connected");
  socket.on("joinRoom", (data: { groupIdx: number }) => {
    const roomName = `group_${data.groupIdx}`;
    socket.join(roomName);
    console.log(`User joined group: ${roomName}`);
    
    const groupFeeds = blackHoleFeeds.filter(feed => feed.groupIdx === data.groupIdx);
    socket.emit("postList", groupFeeds);
  });

  socket.on("refreshRoom", (data: { groupIdx: number }) => {
    console.log("Refresh room received: ", data);
    const roomName = `group_${data.groupIdx}`;
    const groupFeeds = blackHoleFeeds.filter(feed => feed.groupIdx === data.groupIdx);
    socket.emit("postList", groupFeeds);
  });
  
  socket.on("newPost", (data: Partial<BlackHoleFeed>) => {
    console.log("New post received: ", data);
    const newFeed: BlackHoleFeed = {
      title: data.title ?? '',
      content: data.content ?? '',
      imagePaths: data.imagePaths ?? [],
      commentCount: 0,
      likeCount: 0,
      createdAt: new Date().toISOString(),
      authorName: data.authorName,
      groupIdx: data.groupIdx ?? 0,
      postIdx: blackHoleFeeds.length + 1,
      authorIdx: undefined,
    };

    blackHoleFeeds.unshift(newFeed);
    
    const postCount = blackHoleFeeds.filter(feed => feed.groupIdx === newFeed.groupIdx).length;
    
    // 🔔 Send new post count to all in the room
    io.emit("newPostCount", {
      groupIdx: newFeed.groupIdx,
      count: postCount,
    });
    const roomName = `group_${newFeed.groupIdx}`;
    socket.to(roomName).emit("newPost", newFeed);
    socket.emit("newPostConfirm", newFeed);
  });

  socket.on("leaveRoom", (data: { groupIdx: number }) => {
    const roomName = `group_${data.groupIdx}`;
    socket.leave(roomName);
    console.log(`User left group: ${roomName}`);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(5001, () => console.log("Server running on port 5001 / 192.168.20.76:5001"));