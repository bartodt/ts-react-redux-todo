import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Todo, fetchTodos } from '../actions'
import { StoreState } from '../reducers'

interface Props {
  todos: Todo[];
  fetchTodos(): any
}

class _App extends Component<Props> {


  onButtonClick = (): void => {
    this.props.fetchTodos()
  }

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return <div key={todo.id}>
        {todo.title}
      </div>
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return {
    todos
  }
}

export const App = connect(mapStateToProps, { fetchTodos })(_App)