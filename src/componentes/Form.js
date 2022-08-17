const Form = () => {
  return (
    <section className="form__container">
      <form action="" method="get" className="form">
        <div className="form__input--wrapper">
          <div className="form__input--name">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" required="" />
          </div>
          <div className="form__input--title">
            <label for="name">Title</label>
            <input type="text" name="name" id="name" required="" />
          </div>
          <div className="form__textbox">
            <label for="story">Question</label>
            <textarea
              id="story"
              name="story"
              placeholder="&nbsp; 질문을 작성하세요"
              required=""
            ></textarea>
          </div>
        </div>
        <div className="form__submit">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </section>
  );
};

export default Form;
