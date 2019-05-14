import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';


const products = [{ id: 1, name: 'teste', price: 10 }, { id: 2, name: 'teste', price: 10 }, { id: 3, name: 'teste', price: 10 },
{ id: 4, name: 'teste', price: 10 }, { id: 5, name: 'teste', price: 10 }, { id: 6, name: 'teste', price: 10 },
{ id: 7, name: 'teste', price: 10 }, { id: 8, name: 'teste', price: 10 }, { id: 9, name: 'teste', price: 10 },
{ id: 10, name: 'teste', price: 10 },];

const columns = [{
    dataField: 'id',
    text: 'Product ID'
}, {
    dataField: 'name',
    text: 'Product Name'
}, {
    dataField: 'price',
    text: 'Product Price'
}];

// const selectRow = {
//   mode: 'checkbox',
//   clickToSelect: true
// };

const expandRow = {
    renderer: row => (
        <div>
            <p>{`This Expand row is belong to rowKey ${row.id}`}</p>
            <p>You can render anything here, also you can add additional data on every row object</p>
            <p>expandRow.renderer callback will pass the origin row object to you</p>
        </div>
    ),
    showExpandColumn: true,
    expandByColumnOnly: true
};


class ReactBootstrapTable2 extends React.Component {

    render() {
        return (
            <BootstrapTable
                keyField='id'
                data={products}
                columns={columns}
                expandRow={expandRow}
                // selectRow={selectRow} 
                bootstrap4={true} />
        );
    }

}

export default (ReactBootstrapTable2);