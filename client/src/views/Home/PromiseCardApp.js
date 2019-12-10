import React from 'react';
import { connect } from 'react-redux';
import useForm from 'react-hook-form';
import { Input } from '../../components/Input';

function PromiseCardApp(props) {
  const { handleSubmit, errors, register } = useForm();

  return (
    <>
      <h2>This is what I want to see</h2>
      <form>
        {props.cardItems.map((items, index) => (
          <Input />
        ))}
        <input type="submit" className="btn" value="Create Promise Card" />
      </form>
    </>
  );
}

const mapStateToProps = ({ card }) => ({
  isLoading: card.isLoading,
  cardItems: card.promiseCardItems,
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PromiseCardApp);
