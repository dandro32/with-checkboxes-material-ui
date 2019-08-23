import * as React from "react"
import { Table } from '@material-ui/core';
import { inspectTableComponent } from '../utils';

describe('utils tests', () => {
  it('should if inspectTableComponent check if table has at least one column in tablehead', () => {
    expect(inspectTableComponent(<Table></Table>)).toBe(false);
  })

})