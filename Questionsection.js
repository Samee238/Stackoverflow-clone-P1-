import React, { useEffect, useState } from 'react';
import axios from 'axios';

const QuestionsSection = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow');
        setQuestions(response.data.items);
      } catch (error) {
        setError("Error fetching questions");
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  if (loading) return <p>Loading questions...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section id="questions">
      <h2>Latest Questions</h2>
      <ul>
        {questions.map(question => (
          <li key={question.question_id}>
            <a href={question.link} target="_blank" rel="noopener noreferrer">{question.title}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default QuestionsSection;