import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchGreeting } from '../redux/greeting/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const { greeting, isLoading, error } = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error occurred while fetching data</p>}

      <h1>{greeting}</h1>
      <button type="button" onClick={() => dispatch(fetchGreeting())}>
        Get New Greeting
      </button>
    </>
  );
};

export default Greeting;
