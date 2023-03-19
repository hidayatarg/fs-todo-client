export default function Input(props) {
    return (
        <input
            className='todo-input'
            type="text"
            placeholder="Add a new todo"
            onChange={props.onChange}
            value={props.value}
        />
    );
}
