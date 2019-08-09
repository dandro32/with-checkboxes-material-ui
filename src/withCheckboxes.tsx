import React from 'react';
import { Table } from '@types/material-ui'
import { inspectTableComponent } from './utils';

interface ConfigType {
  handleCheckedRows: function,
}

type Props {
  TableComponent: Table,
  config: ConfigType
}


const withCheckboxes = (TableComponent: Table, config: ConfigType) => {
  return class extends React.Component<Props> {
    componentDidMount() {
      const { TableComponent } = this.props;
      try {
        inspectTableComponent(TableComponent);
      } catch (e) {
        console.log(e);
      }
    }

    render() {
      return <TableComponent />;
    }
  }
}

export default withCheckboxes;