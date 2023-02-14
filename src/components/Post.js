import React from "react";
import {
  Badge,
  Box,
  Card,
  CardActions,
  CardContent,
  Chip,
  styled,
  Tooltip,
  tooltipClasses,
  Typography,
} from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";

// Tooltip custom tag for tags
const TagsTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} placement={"top-start"} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#fff",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));
const Post = ({ data }) => {
  return (
    // render card details
    <Card
      sx={{
        maxWidth: 345,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.body}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", alignItems: "center" }}>
        {/* heart icon for reaction with count */}
        <Badge badgeContent={data.reactions} color="primary">
          <FavoriteBorderOutlinedIcon sx={{ color: "gray" }} />
        </Badge>
        {/* shown tooltip on hover of tag Icon */}
        <TagsTooltip
          title={
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
              {data.tags.map((tag, i) => (
                // contains tag name
                <Chip key={i} label={tag} variant="outlined" />
              ))}
            </Box>
          }
        >
          {/* tag Icon with tags count */}
          <Badge badgeContent={data.tags.length} color="primary">
            <LocalOfferOutlinedIcon sx={{ color: "gray" }} />
          </Badge>
        </TagsTooltip>
      </CardActions>
    </Card>
  );
};

export default Post;
