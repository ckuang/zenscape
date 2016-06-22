/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only. Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var startup = function() {

 var time = new Date()
 var hour = time.getHours()
 var minutes = time.getMinutes()
 if (minutes < 10) {
   minutes = "0" + minutes
 }

 var currentTime = hour + ":" + minutes
 $("#time").html(currentTime)
}

$(startup())


var Todo = React.createClass({
  render: function() {
    return (
      <div className="todo">

      </div>
    );
  }
});

var TodoBox = React.createClass({
  getInitialState: function() {
    return {text: []};
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    //use window.localStorage to store todos
  },
  render: function() {
    debugger
    return (
      <div className="todobox">
        <h3>Todos</h3>


        <form className="todoform" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="New Todo"
            value={this.state.text}
            onChange={this.handleTextChange}
          />
          <input type="submit" value="Post" />
        </form>
      </div>
    );
  }
});

var TodoList = React.createClass({
  getInitialState: function() {
    return {data: {}}
  },
  componentDidMount: function() {
    //window.localStorage
    //pass down props to todo!!! [hint]
  },
  render: function() {
    return (
      <div className="todolist">

      </div>
    );
  }
});



ReactDOM.render(
  <TodoBox  />,
  document.getElementsByClassName('todo')[0]
);
