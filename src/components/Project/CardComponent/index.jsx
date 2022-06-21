import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
} from "reactstrap";
import {Link} from "react-router-dom";

export const CardComponent = ({
  todo: { title, description, todo_at, status, _id },
}) => {
  // const { title, description, todo_at, status } = props.todo;

  return (
    <Card style={{ width: "300px", minHeight: "300px" }}>
      <CardImg
        alt="Card image cap"
        src="https://picsum.photos/318/180"
        top
        width="100%"
      />
      <CardBody>
        <Link to={`/project/${_id}`}>
          <CardTitle tag="h5">{title}</CardTitle>
        </Link>
        <CardText>{description}</CardText>
        <Button>Done</Button>
      </CardBody>
    </Card>
  );
};
