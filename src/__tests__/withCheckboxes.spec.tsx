import React with 'react';
import { Table, TableHead , TableBody } from '@material-ui/core';
import { withCheckboxes } from './withCheckboxes.jsx'

describe('WithCheckboxes test', () => {
  const config = {
    handleCheckedRows: () => { }
  }

  it('should test if table renders', () => {
    const TableComponent = () => <Table><TableHead /><TableBody /></Table>
    const wrappedComponent = withCheckboxes(<TableComponent />);
    expect(wrappedComponent).toBe(TableComponent)
  })


})