"use client";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import PhotoIcon from "@mui/icons-material/Photo";
import EventIcon from "@mui/icons-material/Event";
import ArticleIcon from "@mui/icons-material/Article";
import PostCard from "./PostCard";
import { posts } from "../utils/dummyData";

export default function Feed() {
  return (
    <Box>
      {/* Start a post */}
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar src="https://i.pravatar.cc/150?img=12" />
            <Box
              sx={{
                flex: 1,
                px: 2,
                py: 1,
                borderRadius: 20,
                bgcolor: "action.hover",
              }}
            >
              <InputBase
                placeholder="Start a post"
                sx={{ flex: 1, width: "100%" }}
              />
            </Box>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              mt: 2,
            }}
          >
            <Box
              sx={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
              }}
            >
              <PhotoIcon fontSize="small" sx={{ color: "primary.main" }} />
              <Typography
                variant="body2"
                color="text.secondary"
                fontWeight={600}
                sx={{ whiteSpace: "nowrap" }}
              >
                Media
              </Typography>
            </Box>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
              }}
            >
              <EventIcon fontSize="small" sx={{ color: "warning.main" }} />
              <Typography
                variant="body2"
                color="text.secondary"
                fontWeight={600}
                sx={{ whiteSpace: "nowrap" }}
              >
                Event
              </Typography>
            </Box>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
              }}
            >
              <ArticleIcon fontSize="small" sx={{ color: "error.main" }} />
              <Typography
                variant="body2"
                color="text.secondary"
                fontWeight={600}
                sx={{ whiteSpace: "nowrap" }}
              >
                Write article
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      <Divider sx={{ mb: 2 }}>
        <Typography variant="caption" color="text.secondary">
          Sort by:{" "}
          <Typography
            component="span"
            sx={{ fontWeight: "bold", color: "black" }}
          >
            Top
          </Typography>
        </Typography>
      </Divider>

      {/* Posts */}
      <Stack spacing={2}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </Stack>
    </Box>
  );
}
