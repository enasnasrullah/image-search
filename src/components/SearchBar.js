import React, { Component } from "react";

class SearchBar extends Component {
  state = { trim: "" };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.trim);
  };
  render() {
    return (
      <>
        <form onSubmit={this.onFormSubmit}>
          <div className="form-group d-flex justify-content-center align-items-center flex-column mt-5 w-75  p-5 mx-auto border ">
            <label>Image Search:</label>
            <input
              value={this.state.trim}
              onChange={(e) =>
                this.setState({ trim: e.target.value.toLocaleLowerCase() })
              }
              className="form-control w-75 m-auto"
              type="text"
            />
          </div>
        </form>
      </>
    );
  }
}
export default SearchBar;
