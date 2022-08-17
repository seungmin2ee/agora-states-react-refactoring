const Discussion = ({ discussion }) => {
  return (
    <li className="discussion__container">
      <div className="discussion__avatar--wrapper">
        <img
          className="discussion__avatar--image"
          src={discussion.avatarUrl}
          alt={`avatar of ${discussion.author}`}
        />
      </div>
      <div className="discussion__content">
        <h2 className="discussion__title">
          <a href={discussion.url}>
            {discussion.title}
          </a>
        </h2>
        <div className="discussion__information">
          {`${discussion.author} / ${new Date(discussion.createdAt).toLocaleString()}`}
        </div>
      </div>
      {discussion.answer === null ? (
        <div className="discussion__answered"></div>
      ) : (
        <div className="discussion__answered completed"></div>
      )}
    </li>
  );
};

export default Discussion;
