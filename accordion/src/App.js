import './App.css';
import questions from './data';
import Question from './Question';

function App() {
  return (
    <div className='app'>
      <section>
        <h3 className='app__title'>Questions and answers about login</h3>
        <article className='app__questions'>
          {questions.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </article>
      </section>
    </div>
  );
}

export default App;
