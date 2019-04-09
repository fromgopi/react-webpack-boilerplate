import React, {Component} from 'react';

const names = [{fname: 'Gopi', lname:'krishna'}, {fname: 'Vamsi', lname: 'Krishna'}, {fname: 'Ross', lname: 'Alex'}];


class Table extends Component {

    render() {
        let items = this.props.data;
        return (
            <div className="container">
                <div className="row">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <td>First Name</td>
                            <td>Last Name</td>
                        </tr>
                        </thead>
                        <tbody>
                        {items.map((item, id) => {
                            return(
                                <tr key={id}>
                                    <td>{item.firstName}</td>
                                    <td >{item.lastName}</td>
                                </tr>

                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}


export default Table;