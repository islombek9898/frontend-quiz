// custom hooks
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
function MenuLink() {
  const {
    data: quizzes,
    isPending,
    error,
  } = useFetch(
    "https://json-api.uz/api/project/islombek-frontend-quiz/quizzes"
  );
  return (
    <div>
      {isPending && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      <div className="menu-list">
        {quizzes &&
          quizzes.data.map((item) => {
            return (
              <Link
                to={`/quiz/${item.title}`}
                key={item.title}
                className="menu-item header-logo"
              >
                <figure style={{ backgroundColor: item.color }}>
                  <img src={item.icon} alt={item.title} />
                </figure>
                <span>{item.title}</span>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default MenuLink;
