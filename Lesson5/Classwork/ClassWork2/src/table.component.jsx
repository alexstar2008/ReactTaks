import React from 'react';

export default class Table extends React.Component{
    render(){
        return(<table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>NoName</td><td>22</td></tr>
                </tbody>        
               </table>);
    }
}
