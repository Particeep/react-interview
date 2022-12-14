import { Card, Col, Row, Text } from "@nextui-org/react";
import React, { useState } from "react";
import DeleteButton from "./DeleteButton";
import LikeDislike from "./LikeDislike";
const styles = {
  card: { w: "100%" },
  header: {
    position: "absolute",
    background: "#33333355",
    zIndex: 1,
  },
  footer: {
    position: "absolute",
    bgBlur: "#ffffff",
    borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
    zIndex: 1,
    transition: "all 0.123s ease-out",
  },
};

function MovieCard({ movie, onLike, onDislike, onDelete }) {
  const [showFooter, setShowFooter] = useState(false);
  const footerIsVisible = (showFooter) => {
    return showFooter ? "0" : "-85px";
  };
  return (
    <Card
      cover
      css={styles.card}
      onMouseEnter={() => {
        setShowFooter(true);
      }}
      onMouseLeave={() => {
        setShowFooter(false);
      }}
    >
      <Card.Header css={styles.header}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
            {movie.category}
          </Text>
          <Text h3 color="white" css={{ textShadow: "1px 1px 1px white" }}>
            {movie.title}
          </Text>
        </Col>
      </Card.Header>
      <Card.Body>
        <Card.Image showSkeleton maxDelay={5000} src={movie.poster_url} height={400} width="100%" alt={"Image for " + movie.title} onError={({ currentTarget }) => (currentTarget.src = "/default_image.png")} />
      </Card.Body>
      <Card.Footer blur css={{ ...styles.footer, bottom: footerIsVisible(showFooter) }}>
        <Row>
          <Col>

           <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
            <LikeDislike movie={movie} onLike={onLike} onDislike={onDislike} />
          </Text>
          </Col>
          <Col>
            <Row justify="flex-end" align="center">
              <DeleteButton onClick={() => onDelete(movie.id)} />
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}

export default MovieCard;
