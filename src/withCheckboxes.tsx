// import React from 'react';
// import { inspectTableComponent } from './utils';
// import { Tab } from 'material-ui';


// interface ConfigType {
//   handleCheckedRows: Function,
// }

// interface Props {
//   TableComponent: Tab,
//   config: ConfigType
// }


// const withCheckboxes = <T extends ConfigType>(TableComponent: React.ComponentType<T>, config: ConfigType) => {
//   console.log(config)
//   return class extends React.Component<Tab<T, ThingsProps>> {
//     componentDidMount() {
//       const { TableComponent } = this.props;
//       try {
//         inspectTableComponent(TableComponent);
//       } catch (e) {
//         console.log(e);
//       }
//     }

//     render() {
//       return <TableComponent />;
//     }
//   }
// }

// export default withCheckboxes;