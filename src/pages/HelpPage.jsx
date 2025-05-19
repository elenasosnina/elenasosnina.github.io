import React, { useState } from "react";
import "./HelpPage.css";

const HelpPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const questions = [
    {
      label: "Как слушать музыку?",
      description:
        "Чтобы слушать музыку, просто нажмите кнопку воспроизведения на вашем устройстве. Вы можете выбрать трек из вашей библиотеки или потокового сервиса. Убедитесь, что ваше устройство подключено к интернету, если вы используете онлайн-сервис.",
    },
  ];

  const steps = [
    { component: HelpPageContent },
    { component: TechSupport },
    { component: FAQ },
    { component: AnswersQuestions },
  ];

  let CurrentComponent;

  if (currentStep === 3 && selectedQuestion) {
    CurrentComponent = steps[currentStep].component;
  } else {
    CurrentComponent = steps[currentStep].component;
  }

  return (
    <div className="help-page">
      <CurrentComponent
        setCurrentStep={setCurrentStep}
        questions={questions}
        selectedQuestion={selectedQuestion}
        setSelectedQuestion={setSelectedQuestion}
      />
    </div>
  );
};

const HelpPageContent = ({ setCurrentStep }) => {
  return (
    <div className="help-page-content">
      <h1>Помощь</h1>
      <div className="help-content-list">
        <ul className="list-group list-group-flush">
          <li
            className="list-group-item"
            onClick={() => {
              setCurrentStep(2);
            }}
            style={{ cursor: "pointer" }}
          >
            Часто задаваемые вопросы
          </li>
          <li
            className="list-group-item"
            onClick={() => {
              setCurrentStep(1);
            }}
            style={{ cursor: "pointer" }}
          >
            Техническая поддержка
          </li>
        </ul>
      </div>
    </div>
  );
};

const TechSupport = ({ setCurrentStep }) => {
  const [text, setText] = useState("");
  const clearText = () => {
    setText("");
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleSubmit = () => {
    alert("Ваше сообщение отправлено!");
    clearText();
  };
  return (
    <div className="help-page-content">
      <p
        onClick={() => {
          setCurrentStep(0);
        }}
        style={{ cursor: "pointer" }}
      >
        Помощь
      </p>
      <h1>Техническая поддержка</h1>
      <p className="explain-p">
        Заметили неисправность? Сообщите нам при помощи инструмента технической
        поддержки. Вы можете сделать нас лучше.
      </p>
      <div className="help-message">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          onChange={handleChange}
          value={text}
        ></textarea>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="help-page-btn" onClick={clearText}>
            Отменить
          </button>
          <button className="help-page-btn" onClick={handleSubmit}>
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
};

const FAQ = ({ setCurrentStep, questions, setSelectedQuestion }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredQuestions = questions.filter((question) =>
    question.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="help-page-content">
      <p
        onClick={() => {
          setCurrentStep(0);
        }}
        style={{ cursor: "pointer" }}
      >
        Помощь
      </p>
      <h1>Часто задаваемые вопросы</h1>
      <div className="help-page-form">
        <input
          type="search"
          className="form-control"
          placeholder="Найти..."
          onChange={handleSearch}
        />
      </div>

      <div className="FAQ-content-list">
        <ul className="list-group list-group-flush">
          {filteredQuestions.map((question) => (
            <li
              className="list-group-item"
              key={question.label}
              onClick={() => {
                setSelectedQuestion(question);
                setCurrentStep(3);
              }}
              style={{ cursor: "pointer" }}
            >
              {question.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const AnswersQuestions = ({ setCurrentStep, selectedQuestion }) => {
  return (
    <div className="help-page-content">
      <p
        onClick={() => {
          setCurrentStep(2);
        }}
        style={{ cursor: "pointer" }}
      >
        Часто задаваемые вопросы
      </p>
      <h1>{selectedQuestion.label}</h1>

      <div className="full-answer-questions">
        {selectedQuestion.description}
      </div>
    </div>
  );
};

export default HelpPage;
